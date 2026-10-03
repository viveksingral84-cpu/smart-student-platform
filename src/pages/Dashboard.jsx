import "../App.css";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="student-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="student-sidebar">

        <div className="sidebar-logo">
          <div className="logo-circle">🎓</div>

          <span>Student Platform</span>
        </div>

        <div className="sidebar-menu">

          <Link to="/" className="sidebar-link active">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/academics" className="sidebar-link">
            <span>📚</span>
            Academics
          </Link>

          <Link to="/career" className="sidebar-link">
            <span>🎯</span>
            Career
          </Link>

          <Link to="/skills" className="sidebar-link">
            <span>💻</span>
            Skills
          </Link>

          <Link to="/roadmap" className="sidebar-link">
            <span>🛣️</span>
            Career Roadmap
          </Link>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>🚀</span>
            Projects
          </button>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>👥</span>
            Friends & Groups
          </button>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>🔔</span>
            Notifications
          </button>

        </div>

        <div className="sidebar-spacer"></div>

        <div className="sidebar-bottom">

          <div className="student-mini-profile">

            <div className="student-avatar">
              {user?.email?.charAt(0).toUpperCase() || "S"}
            </div>

            <div className="student-mini-info">
              <strong>Student</strong>

              <span>
                {user?.email || "Student Account"}
              </span>
            </div>

          </div>

          <button
            type="button"
            className="sidebar-logout"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-main">

        {/* TOP BAR */}

        <header className="dashboard-topbar">

          <div className="topbar-left">

            <div>
              <h1>Welcome back! 👋</h1>

              <p>
                Student Dashboard
              </p>
            </div>

          </div>

          <div className="topbar-right">

            <button className="notification-button">
              🔔
            </button>

            <div className="profile-button">
              {user?.email?.charAt(0).toUpperCase() || "S"}
            </div>

          </div>

        </header>


        {/* ================= WELCOME ================= */}

        <section className="welcome-card">

          <div>

            <h2>
              Build your skills.
              <br />
              Shape your career.
            </h2>

            <p>
              Manage your academics, develop valuable skills,
              explore career opportunities and follow your
              personalized roadmap.
            </p>

          </div>

          <Link
            to="/roadmap"
            className="welcome-button"
          >
            View My Roadmap →
          </Link>

        </section>


        {/* ================= QUICK ACTIONS ================= */}

        <section className="quick-actions">

          <div className="action-item">
            <span>📚</span>

            <div>
              <h4>Academics</h4>
              <p>Track your academic progress</p>
            </div>
          </div>


          <div className="action-item">
            <span>🎯</span>

            <div>
              <h4>Career</h4>
              <p>Explore your career goals</p>
            </div>
          </div>


          <div className="action-item">
            <span>💻</span>

            <div>
              <h4>Skills</h4>
              <p>Improve your technical skills</p>
            </div>
          </div>


          <div className="action-item">
            <span>🛣️</span>

            <div>
              <h4>Roadmap</h4>
              <p>Follow your career journey</p>
            </div>
          </div>

        </section>


        {/* ================= DASHBOARD GRID ================= */}

        <div className="dashboard-grid">

          {/* LEFT SIDE */}

          <div>

            <section className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <span>LEARNING</span>
                  <h2>Your Progress</h2>
                </div>

                <span className="panel-link">
                  View Details
                </span>

              </div>


              <div className="module-grid">

                {/* Academics */}

                <Link
                  to="/academics"
                  className="module-card"
                >

                  <div className="module-icon academics-icon">
                    📚
                  </div>

                  <h4>Academics</h4>

                  <p>
                    Track attendance, marks and examinations.
                  </p>

                  <div className="progress-row">

                    <div className="progress-label">
                      <span>Progress</span>
                      <span>85%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill purple-fill"
                        style={{ width: "85%" }}
                      ></div>
                    </div>

                  </div>

                </Link>


                {/* Career */}

                <Link
                  to="/career"
                  className="module-card"
                >

                  <div className="module-icon career-icon">
                    🎯
                  </div>

                  <h4>Career Development</h4>

                  <p>
                    Explore career goals and opportunities.
                  </p>

                  <div className="progress-row">

                    <div className="progress-label">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill orange-fill"
                        style={{ width: "45%" }}
                      ></div>
                    </div>

                  </div>

                </Link>


                {/* Skills */}

                <Link
                  to="/skills"
                  className="module-card"
                >

                  <div className="module-icon skills-icon">
                    💻
                  </div>

                  <h4>Skills Development</h4>

                  <p>
                    Improve your technical and soft skills.
                  </p>

                  <div className="progress-row">

                    <div className="progress-label">
                      <span>Progress</span>
                      <span>62%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill green-fill"
                        style={{ width: "62%" }}
                      ></div>
                    </div>

                  </div>

                </Link>


                {/* Roadmap */}

                <Link
                  to="/roadmap"
                  className="module-card"
                >

                  <div className="module-icon roadmap-icon">
                    🛣️
                  </div>

                  <h4>Career Roadmap</h4>

                  <p>
                    Follow your personalized career journey.
                  </p>

                  <div className="progress-row">

                    <div className="progress-label">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill blue-fill"
                        style={{ width: "60%" }}
                      ></div>
                    </div>

                  </div>

                </Link>

              </div>

            </section>

          </div>


          {/* RIGHT SIDE */}

          <div className="right-panel">

            {/* Career Progress */}

            <section className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <span>CAREER</span>
                  <h2>Career Progress</h2>
                </div>

              </div>

              <div className="career-progress-box">

                <div className="progress-circle">

                  <div className="progress-circle-inner">
                    <strong>60%</strong>
                    <span>Complete</span>
                  </div>

                </div>

                <div className="career-progress-info">

                  <h4>Career Roadmap</h4>

                  <p>
                    Keep completing your roadmap
                    steps to reach your career goal.
                  </p>

                </div>

              </div>

            </section>


            {/* Recent Activity */}

            <section className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <span>ACTIVITY</span>
                  <h2>Recent Activity</h2>
                </div>

              </div>


              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-icon">
                    📚
                  </div>

                  <div>
                    <h4>Academics reviewed</h4>
                    <p>Today</p>
                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    💻
                  </div>

                  <div>
                    <h4>Skills progress updated</h4>
                    <p>Yesterday</p>
                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    🛣️
                  </div>

                  <div>
                    <h4>Roadmap opened</h4>
                    <p>Recently</p>
                  </div>

                </div>

              </div>

            </section>


            {/* Coming Soon */}

            <section className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <span>COMING SOON</span>
                  <h2>Platform Features</h2>
                </div>

              </div>


              <div className="coming-soon-grid">

                <div className="coming-soon-card">
                  <span>🤖</span>
                  <strong>AI Assistant</strong>
                  <p>Smart learning help</p>
                </div>

                <div className="coming-soon-card">
                  <span>🚀</span>
                  <strong>Projects</strong>
                  <p>Build your portfolio</p>
                </div>

                <div className="coming-soon-card">
                  <span>👥</span>
                  <strong>Community</strong>
                  <p>Connect with students</p>
                </div>

              </div>

            </section>

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <footer
          style={{
            textAlign: "center",
            padding: "25px 0 5px",
            color: "#9298a7",
            fontSize: "10px",
          }}
        >
          🎓 Smart Student Platform
          {" • "}
          Build your skills. Shape your career.
        </footer>

      </main>

    </div>
  );
}

export default Dashboard;