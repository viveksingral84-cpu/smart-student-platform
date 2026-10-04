import "../App.css";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Icon({ name, size = 20 }) {
  const icons = {
    dashboard: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),

    academics: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 8.5L12 4l9 4.5L12 13 3 8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M6 10.5V16c3.5 2.7 8.5 2.7 12 0v-5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M21 9v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),

    career: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 7.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 12v2h4v-2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),

    skills: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l2.1 5.4L20 10l-5.9 1.6L12 17l-2.1-5.4L4 10l5.9-1.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),

    roadmap: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 5h4v4H5V5Zm10 10h4v4h-4v-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 7h4a2 2 0 0 1 2 2v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 15l3 3 3-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    projects: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7h6l2 2h8v10H4V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),

    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3.5 19c.6-3.1 2.4-4.7 5.5-4.7s4.9 1.6 5.5 4.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 6.5a3 3 0 0 1 0 5.8M17 14.5c2.2.4 3.4 1.8 3.8 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),

    bell: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 21h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),

    target: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),

    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    database: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),

    api: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 4v16M17 4v16M4 7h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),

    git: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l9 9-9 9-9-9 9-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="8" r="1.4" fill="currentColor" />
        <circle cx="8.5" cy="11.5" r="1.4" fill="currentColor" />
        <circle cx="15.5" cy="15" r="1.4" fill="currentColor" />
        <path
          d="M12 9.5v3M9.7 11.5h4.4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),

    chart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V5M4 19h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 15l3-4 3 2 5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5.5A3 3 0 0 0 6 8.4 3.3 3.3 0 0 0 4 11.5 3.2 3.2 0 0 0 7 14.6 3 3 0 0 0 9 18a3 3 0 0 0 3-3V8.5a3 3 0 0 0-3-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M15 5.5A3 3 0 0 1 18 8.4a3.3 3.3 0 0 1 2 3.1 3.2 3.2 0 0 1-3 3.1 3 3 0 0 1-2 3.4 3 3 0 0 1-3-3V8.5a3 3 0 0 1 3-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 9h2M13 9h2M9 13h2M13 13h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),

    book: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),

    rocket: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M14 4c3.5-.7 5.7.5 6 1 .5 2.3-.3 5.8-3.5 9l-4 4-5-5 4-4C14.7 5.8 18.2 5 20 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 15.5L5 19M5 19l-.5-3.5M5 19l3.5.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),

    portfolio: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8 6V4h8v2M3 11h18M10 11v2h4v-2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),

    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="m5 12 4 4L19 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    arrow: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}

function Career() {
  const { user } = useAuth();

  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Student";

  const careerOptions = [
    {
      icon: "code",
      title: "Python Developer",
      description:
        "Python, OOP, SQL, Git, APIs and problem-solving.",
      tag: "Selected",
      active: true,
    },
    {
      icon: "code",
      title: "Frontend Developer",
      description:
        "HTML, CSS, JavaScript, React and UI development.",
      tag: "Explore",
    },
    {
      icon: "chart",
      title: "Data Analyst",
      description:
        "Python, SQL, Excel, statistics and data visualization.",
      tag: "Explore",
    },
    {
      icon: "database",
      title: "Backend Developer",
      description:
        "APIs, databases, server-side programming and Git.",
      tag: "Explore",
    },
  ];

  const skills = [
    {
      icon: "code",
      name: "Python",
      level: 80,
      color: "purple",
    },
    {
      icon: "brain",
      name: "Object-Oriented Programming",
      level: 80,
      color: "blue",
    },
    {
      icon: "database",
      name: "SQL",
      level: 70,
      color: "green",
    },
    {
      icon: "git",
      name: "Git",
      level: 70,
      color: "orange",
    },
    {
      icon: "api",
      name: "APIs",
      level: 70,
      color: "pink",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: "target",
      title: "Select Career Goal",
      description:
        "Choose the career you want to prepare for.",
      status: "Current Step",
      active: true,
    },
    {
      number: "02",
      icon: "brain",
      title: "Identify Required Skills",
      description:
        "Understand the technical and practical skills needed for your career.",
      status: "Upcoming",
    },
    {
      number: "03",
      icon: "chart",
      title: "Find Your Skill Gap",
      description:
        "Compare your current skills with the required career skills.",
      status: "Upcoming",
    },
    {
      number: "04",
      icon: "book",
      title: "Follow Learning Roadmap",
      description:
        "Learn missing skills using recommended resources and practical tasks.",
      status: "Upcoming",
    },
    {
      number: "05",
      icon: "rocket",
      title: "Build Projects",
      description:
        "Apply your knowledge by creating real-world projects.",
      status: "Upcoming",
    },
    {
      number: "06",
      icon: "portfolio",
      title: "Build Your Portfolio",
      description:
        "Add projects, certifications and achievements to your portfolio.",
      status: "Upcoming",
    },
  ];

  return (
    <div className="career-modern-page">

      {/* SIDEBAR */}
      <aside className="career-modern-sidebar">

        <div className="career-brand">
          <div className="career-brand-logo">
            SS
          </div>

          <div>
            <strong>Smart Student</strong>
            <span>Academic Platform</span>
          </div>
        </div>

        <div className="career-nav-label">
          MAIN MENU
        </div>

        <nav className="career-modern-nav">

          <Link to="/">
            <span>
              <Icon name="dashboard" />
            </span>
            Dashboard
          </Link>

          <Link to="/academics">
            <span>
              <Icon name="academics" />
            </span>
            Academics
          </Link>

          <Link to="/career" className="active">
            <span>
              <Icon name="career" />
            </span>
            Career
          </Link>

          <Link to="/skills">
            <span>
              <Icon name="skills" />
            </span>
            Skills Assessment
          </Link>

          <Link to="/roadmap">
            <span>
              <Icon name="roadmap" />
            </span>
            Career Roadmap
          </Link>

          <button type="button">
            <span>
              <Icon name="projects" />
            </span>
            Projects
            <small>SOON</small>
          </button>

          <button type="button" onClick={() => window.location.href = "/friends"}>
            <span>
              <Icon name="users" />
            </span>
            Friends & Groups
            <small>SOON</small>
          </button>

          <button type="button">
            <span>
              <Icon name="bell" />
            </span>
            Notifications
            <small>SOON</small>
          </button>

        </nav>

        <div className="career-sidebar-bottom">

          <div className="career-sidebar-user">

            <div className="career-user-avatar">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{displayName}</strong>
              <span>Student Account</span>
            </div>

          </div>

        </div>

      </aside>

      {/* MAIN */}
      <main className="career-modern-main">

        {/* TOP HEADER */}
        <header className="career-modern-header">

          <div>
            <span className="career-header-label">
              CAREER DEVELOPMENT
            </span>

            <h1>
              Build Your Career
            </h1>

            <p>
              Plan your future and develop the skills you need.
            </p>
          </div>

          <div className="career-header-avatar">
            {displayName.charAt(0).toUpperCase()}
          </div>

        </header>

        {/* HERO */}
        <section className="career-modern-hero">

          <div className="career-hero-content">

            <span>
              YOUR CAREER JOURNEY
            </span>

            <h2>
              Turn your goals into a
              <strong> career plan.</strong>
            </h2>

            <p>
              Choose your career goal, understand the skills
              required, identify your skill gaps and follow a
              personalized learning path.
            </p>

            <div className="career-hero-actions">

              <Link
                to="/skills"
                className="career-primary-button"
              >
                Analyze My Skills
                <Icon name="arrow" size={18} />
              </Link>

              <Link
                to="/roadmap"
                className="career-secondary-button"
              >
                View Roadmap
              </Link>

            </div>

          </div>

          <div className="career-hero-visual">

            <div className="career-orbit orbit-one"></div>
            <div className="career-orbit orbit-two"></div>

            <div className="career-target-icon">
              <Icon name="target" size={48} />
            </div>

            <div className="career-floating-card card-one">
              <Icon name="check" size={15} />
              Goal Selected
            </div>

            <div className="career-floating-card card-two">
              60% Progress
            </div>

          </div>

        </section>

        {/* CAREER GOAL */}
        <section className="career-modern-section">

          <div className="career-section-title">

            <div>
              <span>YOUR GOAL</span>
              <h2>Current Career Goal</h2>
            </div>

            <p>
              Your selected career direction
            </p>

          </div>

          <div className="career-goal-modern">

            <div className="career-goal-main">

              <div className="career-goal-icon-modern">
                <Icon name="code" size={30} />
              </div>

              <div>

                <span>SELECTED CAREER</span>

                <h3>
                  Python Developer
                </h3>

                <p>
                  Build software applications using Python,
                  databases, APIs and problem-solving skills.
                </p>

                <div className="career-tags">

                  <span>Python</span>
                  <span>SQL</span>
                  <span>APIs</span>
                  <span>Git</span>

                </div>

              </div>

            </div>

            <div className="career-goal-progress-modern">

              <div className="career-progress-heading">
                <span>CAREER PROGRESS</span>
                <strong>60%</strong>
              </div>

              <div className="career-modern-progress-bar">
                <span style={{ width: "60%" }}></span>
              </div>

              <small>
                You're making good progress toward your goal.
              </small>

            </div>

          </div>

        </section>

        {/* CAREER OPTIONS */}
        <section className="career-modern-section">

          <div className="career-section-title">

            <div>
              <span>EXPLORE</span>
              <h2>Career Options</h2>
            </div>

            <p>
              Explore different career paths
            </p>

          </div>

          <div className="career-options-modern">

            {careerOptions.map((career) => (
              <div
                className={`career-option-modern ${
                  career.active ? "selected" : ""
                }`}
                key={career.title}
              >

                <div className="career-option-top">

                  <div className="career-option-icon-modern">
                    <Icon
                      name={career.icon}
                      size={23}
                    />
                  </div>

                  {career.active && (
                    <span className="career-selected-badge">
                      Selected
                    </span>
                  )}

                </div>

                <h3>
                  {career.title}
                </h3>

                <p>
                  {career.description}
                </p>

                <span className="career-explore-link">
                  {career.tag}
                  <Icon name="arrow" size={15} />
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* REQUIRED SKILLS */}
        <section className="career-modern-section">

          <div className="career-section-title">

            <div>
              <span>SKILL REQUIREMENTS</span>
              <h2>Skills Required</h2>
            </div>

            <p>
              Skills needed for Python Developer
            </p>

          </div>

          <div className="career-skills-modern">

            <div className="career-skills-summary">

              <div className="career-skills-summary-ring">
                <strong>74%</strong>
                <span>Readiness</span>
              </div>

              <div>

                <h3>
                  Career Skill Readiness
                </h3>

                <p>
                  Your current preparation is moving in
                  the right direction. Continue improving
                  the skills below.
                </p>

              </div>

            </div>

            <div className="career-skills-list">

              {skills.map((skill) => (
                <div
                  className="career-skill-modern"
                  key={skill.name}
                >

                  <div className="career-skill-name">

                    <div className={`skill-icon ${skill.color}`}>
                      <Icon
                        name={skill.icon}
                        size={18}
                      />
                    </div>

                    <div>
                      <strong>
                        {skill.name}
                      </strong>

                      <span>
                        Required level: {skill.level}%
                      </span>
                    </div>

                  </div>

                  <div className="career-skill-progress">

                    <div className="career-skill-track">
                      <span
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></span>
                    </div>

                    <strong>
                      {skill.level}%
                    </strong>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}
        <section className="career-modern-section">

          <div className="career-section-title">

            <div>
              <span>YOUR JOURNEY</span>
              <h2>Career Development Process</h2>
            </div>

            <p>
              Follow these steps to build your career
            </p>

          </div>

          <div className="career-process-modern">

            {processSteps.map((step) => (
              <div
                className={`career-process-modern-item ${
                  step.active ? "active" : ""
                }`}
                key={step.number}
              >

                <div className="career-step-number">
                  {step.number}
                </div>

                <div className="career-step-icon">
                  <Icon
                    name={step.icon}
                    size={21}
                  />
                </div>

                <div className="career-step-content">

                  <div className="career-step-title-row">

                    <h3>
                      {step.title}
                    </h3>

                    <span
                      className={
                        step.active
                          ? "current"
                          : ""
                      }
                    >
                      {step.status}
                    </span>

                  </div>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* NEXT STEP */}
        <section className="career-next-modern">

          <div className="career-next-icon">
            <Icon name="skills" size={27} />
          </div>

          <div className="career-next-content">

            <span>NEXT STEP</span>

            <h2>
              Analyze your current skills
            </h2>

            <p>
              Identify your strengths, discover skill gaps
              and understand what you need to learn next.
            </p>

          </div>

          <Link
            to="/skills"
            className="career-next-button-modern"
          >
            Open Skill Analysis
            <Icon name="arrow" size={18} />
          </Link>

        </section>

        {/* FOOTER */}
        <footer className="career-modern-footer">

          <div>
            <strong>Smart Student Platform</strong>
            <span>
              Build your skills. Shape your career.
            </span>
          </div>

          <span>
            Career Development
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Career;