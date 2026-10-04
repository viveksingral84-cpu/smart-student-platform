import "../App.css";

import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "../context/AuthContext";

import { db } from "../firebase";

/* =========================
   ICONS
========================= */

function Icon({ type, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    home: (
      <svg {...common}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),

    book: (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M4 5.5v16" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </svg>
    ),

    briefcase: (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),

    target: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),

    map: (
      <svg {...common}>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    ),

    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),

    bell: (
      <svg {...common}>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    ),

    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),

    chart: (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h17" />
        <path d="m7 15 4-4 3 2 5-6" />
      </svg>
    ),

    star: (
      <svg {...common}>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z" />
      </svg>
    ),

    logout: (
      <svg {...common}>
        <path d="M10 17l5-5-5-5" />
        <path d="M15 12H3" />
        <path d="M14 3h5v18h-5" />
      </svg>
    ),

    sparkles: (
      <svg {...common}>
        <path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

/* =========================
   PROGRESS RING
========================= */

function ProgressRing({ value, label }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="dashboard-progress-ring">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="9"
          fill="none"
        />

        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />

        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7c5cff" />
            <stop offset="100%" stopColor="#27b8ff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="dashboard-progress-ring-text">
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

/* =========================
   DASHBOARD
========================= */

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState(null);
  const [studentLoading, setStudentLoading] = useState(true);

  useEffect(() => {
    const loadStudentData = async () => {
      if (!user) {
        setStudentLoading(false);
        return;
      }

      try {
        const studentRef = doc(db, "students", user.uid);
        const snapshot = await getDoc(studentRef);

        if (snapshot.exists()) {
          setStudentData(snapshot.data());
        }
      } catch (error) {
        console.error("Error loading student:", error);
      } finally {
        setStudentLoading(false);
      }
    };

    loadStudentData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const studentName =
    studentData?.name || user?.displayName || "Student";

  const studentEmail =
    studentData?.email || user?.email || "Student Account";

  const firstName =
    studentName.split(" ")[0] || "Student";

  return (
    <div className="professional-dashboard">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="professional-sidebar">

        <div className="brand-area">
          <div className="brand-logo">
            S
          </div>

          <div className="brand-text">
            <strong>Smart Student</strong>
            <span>Student Platform</span>
          </div>
        </div>

        <div className="nav-heading">
          MAIN MENU
        </div>

        <nav className="professional-nav">

          <Link
            to="/"
            className="professional-nav-link active"
          >
            <span className="nav-icon">
              <Icon type="home" />
            </span>

            <span>Dashboard</span>
          </Link>

          <Link
            to="/academics"
            className="professional-nav-link"
          >
            <span className="nav-icon">
              <Icon type="book" />
            </span>

            <span>Academics</span>
          </Link>

          <Link
            to="/career"
            className="professional-nav-link"
          >
            <span className="nav-icon">
              <Icon type="briefcase" />
            </span>

            <span>Career</span>
          </Link>

          <Link
            to="/skills"
            className="professional-nav-link"
          >
            <span className="nav-icon">
              <Icon type="target" />
            </span>

            <span>Skills</span>
          </Link>

          <Link
            to="/roadmap"
            className="professional-nav-link"
          >
            <span className="nav-icon">
              <Icon type="map" />
            </span>

            <span>Career Roadmap</span>
          </Link>

        </nav>

        <div className="nav-heading community-heading">
          COMMUNITY
        </div>

        <div className="professional-nav">

          {/* PROJECTS - NOW CLICKABLE */}
          <button
            type="button"
            className="professional-nav-link"
            onClick={() => navigate("/projects")}
          >
            <span className="nav-icon">
              <Icon type="users" />
            </span>

            <span>Projects</span>
          </button>

          {/* FRIENDS & GROUPS - NOW CLICKABLE */}
          <button
            type="button"
            className="professional-nav-link"
            onClick={() => navigate("/friends")}
          >
            <span className="nav-icon">
              <Icon type="users" />
            </span>

            <span>Friends & Groups</span>
          </button>

        </div>

        <div className="sidebar-bottom-area">

          <div className="sidebar-user">

            <div className="sidebar-user-avatar">
              {studentName
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="sidebar-user-details">

              <strong>
                {studentLoading
                  ? "Loading..."
                  : studentName}
              </strong>

              <span>
                {studentEmail}
              </span>

            </div>

          </div>

          <button
            className="sidebar-logout-button"
            onClick={handleLogout}
          >
            <Icon type="logout" size={18} />

            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="professional-main">

        {/* TOP BAR */}

        <header className="professional-topbar">

          <div>

            <span className="topbar-label">
              STUDENT DASHBOARD
            </span>

            <h1>
              Welcome back, {firstName}
            </h1>

            <p>
              Here's an overview of your
              academic and career journey.
            </p>

          </div>

          <div className="topbar-actions">

            <button
              className="dashboard-icon-button"
              title="Notifications"
            >
              <Icon type="bell" size={21} />

              <span className="notification-dot"></span>
            </button>

            <div className="topbar-profile">
              {studentName
                .charAt(0)
                .toUpperCase()}
            </div>

          </div>

        </header>

        {/* =========================
            HERO
        ========================= */}

        <section className="dashboard-main-hero">

          <div className="hero-background-glow"></div>

          <div className="dashboard-hero-content">

            <div className="hero-small-label">

              <Icon type="sparkles" size={15} />

              YOUR PERSONAL GROWTH SPACE

            </div>

            <h2>
              Build your skills.
              <br />
              <span>Shape your future.</span>
            </h2>

            <p>
              Manage your academics, develop
              important skills and follow a
              personalized career path—all in one
              place.
            </p>

            <div className="hero-button-row">

              <Link
                to="/roadmap"
                className="hero-main-button"
              >
                View Career Roadmap

                <Icon type="arrow" size={18} />
              </Link>

              <Link
                to="/skills"
                className="hero-outline-button"
              >
                Explore Skills
              </Link>

            </div>

          </div>

          <div className="hero-progress-area">

            <div className="hero-progress-card">

              <div className="hero-progress-header">

                <span>
                  OVERALL JOURNEY
                </span>

                <Icon
                  type="chart"
                  size={18}
                />

              </div>

              <ProgressRing
                value={60}
                label="Complete"
              />

              <div className="hero-progress-footer">

                <strong>
                  Keep going!
                </strong>

                <span>
                  3 milestones remaining
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            STATISTICS
        ========================= */}

        <section className="dashboard-stats-grid">

          <div className="dashboard-stat-card">

            <div className="stat-icon purple">
              <Icon type="book" size={21} />
            </div>

            <div className="stat-content">

              <span>
                ACADEMIC PROGRESS
              </span>

              <strong>85%</strong>

              <small>
                <b>+12%</b> from last month
              </small>

            </div>

            <div className="stat-mini-chart purple-chart">

              <span style={{ height: "35%" }}></span>
              <span style={{ height: "50%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "78%" }}></span>
              <span style={{ height: "90%" }}></span>

            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="stat-icon blue">
              <Icon type="briefcase" size={21} />
            </div>

            <div className="stat-content">

              <span>
                CAREER READINESS
              </span>

              <strong>60%</strong>

              <small>
                <b>On track</b> for your goal
              </small>

            </div>

            <div className="stat-mini-chart blue-chart">

              <span style={{ height: "30%" }}></span>
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "55%" }}></span>
              <span style={{ height: "50%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "82%" }}></span>

            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="stat-icon green">
              <Icon type="target" size={21} />
            </div>

            <div className="stat-content">

              <span>
                SKILLS DEVELOPMENT
              </span>

              <strong>62%</strong>

              <small>
                <b>+8%</b> skill improvement
              </small>

            </div>

            <div className="stat-mini-chart green-chart">

              <span style={{ height: "38%" }}></span>
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "58%" }}></span>
              <span style={{ height: "50%" }}></span>
              <span style={{ height: "70%" }}></span>
              <span style={{ height: "85%" }}></span>

            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="stat-icon orange">
              <Icon type="map" size={21} />
            </div>

            <div className="stat-content">

              <span>
                ROADMAP
              </span>

              <strong>3 / 6</strong>

              <small>
                <b>3</b> milestones remaining
              </small>

            </div>

            <div className="stat-mini-chart orange-chart">

              <span style={{ height: "30%" }}></span>
              <span style={{ height: "48%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "65%" }}></span>

            </div>

          </div>

        </section>

        {/* =========================
            CONTENT GRID
        ========================= */}

        <div className="dashboard-content-grid">

          <div className="dashboard-left-column">

            {/* LEARNING MODULES */}

            <section className="dashboard-section-card">

              <div className="section-card-header">

                <div>

                  <span className="section-label">
                    LEARNING HUB
                  </span>

                  <h2>
                    Continue Your Journey
                  </h2>

                  <p>
                    Choose an area and keep
                    building your future.
                  </p>

                </div>

                <span className="section-count">
                  4 modules
                </span>

              </div>

              <div className="dashboard-module-grid">

                <Link
                  to="/academics"
                  className="dashboard-module-card academics-card"
                >

                  <div className="module-top">

                    <div className="module-large-icon">
                      <Icon type="book" size={24} />
                    </div>

                    <span className="module-go">
                      <Icon type="arrow" size={17} />
                    </span>

                  </div>

                  <span className="module-category">
                    ACADEMICS
                  </span>

                  <h3>
                    Academic Performance
                  </h3>

                  <p>
                    Track subjects, marks,
                    attendance and your overall
                    academic progress.
                  </p>

                  <div className="module-progress">

                    <div>
                      <span>Progress</span>
                      <strong>85%</strong>
                    </div>

                    <div className="module-progress-bar">

                      <span
                        style={{
                          width: "85%",
                        }}
                      ></span>

                    </div>

                  </div>

                </Link>

                <Link
                  to="/career"
                  className="dashboard-module-card career-card"
                >

                  <div className="module-top">

                    <div className="module-large-icon">
                      <Icon
                        type="briefcase"
                        size={24}
                      />
                    </div>

                    <span className="module-go">
                      <Icon type="arrow" size={17} />
                    </span>

                  </div>

                  <span className="module-category">
                    CAREER
                  </span>

                  <h3>
                    Career Development
                  </h3>

                  <p>
                    Explore career opportunities
                    and understand the direction
                    that suits your goals.
                  </p>

                  <div className="module-progress">

                    <div>
                      <span>Progress</span>
                      <strong>45%</strong>
                    </div>

                    <div className="module-progress-bar">

                      <span
                        style={{
                          width: "45%",
                        }}
                      ></span>

                    </div>

                  </div>

                </Link>

                <Link
                  to="/skills"
                  className="dashboard-module-card skills-card"
                >

                  <div className="module-top">

                    <div className="module-large-icon">
                      <Icon
                        type="target"
                        size={24}
                      />
                    </div>

                    <span className="module-go">
                      <Icon type="arrow" size={17} />
                    </span>

                  </div>

                  <span className="module-category">
                    SKILLS
                  </span>

                  <h3>
                    Skills Development
                  </h3>

                  <p>
                    Discover your strengths,
                    identify skill gaps and improve
                    your abilities.
                  </p>

                  <div className="module-progress">

                    <div>
                      <span>Progress</span>
                      <strong>62%</strong>
                    </div>

                    <div className="module-progress-bar">

                      <span
                        style={{
                          width: "62%",
                        }}
                      ></span>

                    </div>

                  </div>

                </Link>

                <Link
                  to="/roadmap"
                  className="dashboard-module-card roadmap-card"
                >

                  <div className="module-top">

                    <div className="module-large-icon">
                      <Icon
                        type="map"
                        size={24}
                      />
                    </div>

                    <span className="module-go">
                      <Icon type="arrow" size={17} />
                    </span>

                  </div>

                  <span className="module-category">
                    ROADMAP
                  </span>

                  <h3>
                    Career Roadmap
                  </h3>

                  <p>
                    Follow your personalized
                    career journey and complete
                    each milestone.
                  </p>

                  <div className="module-progress">

                    <div>
                      <span>Progress</span>
                      <strong>60%</strong>
                    </div>

                    <div className="module-progress-bar">

                      <span
                        style={{
                          width: "60%",
                        }}
                      ></span>

                    </div>

                  </div>

                </Link>

              </div>

            </section>

            {/* QUICK ACTIONS */}

            <section className="dashboard-section-card">

              <div className="section-card-header compact">

                <div>

                  <span className="section-label">
                    QUICK ACTIONS
                  </span>

                  <h2>
                    What would you like to do?
                  </h2>

                </div>

              </div>

              <div className="dashboard-quick-grid">

                <Link
                  to="/academics"
                  className="quick-action-card"
                >

                  <div className="quick-number">
                    01
                  </div>

                  <div className="quick-icon">
                    <Icon type="book" size={21} />
                  </div>

                  <div>

                    <strong>
                      Review Academics
                    </strong>

                    <span>
                      Check your academic performance
                    </span>

                  </div>

                  <Icon type="arrow" size={19} />

                </Link>

                <Link
                  to="/skills"
                  className="quick-action-card"
                >

                  <div className="quick-number">
                    02
                  </div>

                  <div className="quick-icon">
                    <Icon type="target" size={21} />
                  </div>

                  <div>

                    <strong>
                      Take Skill Assessment
                    </strong>

                    <span>
                      Identify strengths and gaps
                    </span>

                  </div>

                  <Icon type="arrow" size={19} />

                </Link>

                <Link
                  to="/roadmap"
                  className="quick-action-card"
                >

                  <div className="quick-number">
                    03
                  </div>

                  <div className="quick-icon">
                    <Icon type="map" size={21} />
                  </div>

                  <div>

                    <strong>
                      Continue Roadmap
                    </strong>

                    <span>
                      Complete your next milestone
                    </span>

                  </div>

                  <Icon type="arrow" size={19} />

                </Link>

              </div>

            </section>

          </div>

          {/* =========================
              RIGHT COLUMN
          ========================= */}

          <div className="dashboard-right-column">

            {/* CAREER PROGRESS */}

            <section className="dashboard-side-card">

              <div className="side-card-header">

                <div>

                  <span className="section-label">
                    CAREER
                  </span>

                  <h2>
                    Your Progress
                  </h2>

                </div>

                <Link to="/roadmap">
                  <Icon type="arrow" size={18} />
                </Link>

              </div>

              <div className="career-progress-visual">

                <ProgressRing
                  value={60}
                  label="Complete"
                />

              </div>

              <div className="career-goal-box">

                <span>
                  CURRENT GOAL
                </span>

                <strong>
                  Build Career Readiness
                </strong>

                <p>
                  Complete your next milestone
                  to move closer to your career
                  goal.
                </p>

              </div>

              <Link
                to="/roadmap"
                className="side-primary-button"
              >
                Continue Roadmap

                <Icon type="arrow" size={17} />
              </Link>

            </section>

            {/* ACTIVITY */}

            <section className="dashboard-side-card">

              <div className="side-card-header">

                <div>

                  <span className="section-label">
                    ACTIVITY
                  </span>

                  <h2>
                    Recent Activity
                  </h2>

                </div>

              </div>

              <div className="activity-list-modern">

                <div className="modern-activity">

                  <div className="activity-status completed">

                    <Icon
                      type="check"
                      size={16}
                    />

                  </div>

                  <div>

                    <strong>
                      Academics reviewed
                    </strong>

                    <span>
                      Today
                    </span>

                  </div>

                </div>

                <div className="modern-activity">

                  <div className="activity-status completed">

                    <Icon
                      type="check"
                      size={16}
                    />

                  </div>

                  <div>

                    <strong>
                      Skills progress updated
                    </strong>

                    <span>
                      Yesterday
                    </span>

                  </div>

                </div>

                <div className="modern-activity">

                  <div className="activity-status completed">

                    <Icon
                      type="check"
                      size={16}
                    />

                  </div>

                  <div>

                    <strong>
                      Career roadmap opened
                    </strong>

                    <span>
                      Recently
                    </span>

                  </div>

                </div>

              </div>

            </section>

            {/* COMING SOON */}

            <section className="dashboard-side-card future-card">

              <div className="future-card-icon">

                <Icon
                  type="sparkles"
                  size={21}
                />

              </div>

              <span className="section-label">
                COMING SOON
              </span>

              <h2>
                More for your journey
              </h2>

              <p>
                We're building more tools to
                help you learn, connect and
                grow.
              </p>

              <div className="future-tags">

                <span>AI Assistant</span>
                <span>Projects</span>
                <span>Community</span>

              </div>

            </section>

          </div>

        </div>

        {/* FOOTER */}

        <footer className="professional-footer">

          <div>

            <strong>
              Smart Student Platform
            </strong>

            <span>
              Build your skills. Shape your career.
            </span>

          </div>

          <span>
            Academic • Career • Skills • Growth
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;