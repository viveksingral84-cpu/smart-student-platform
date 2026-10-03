import "../App.css";

import { Link, useLocation } from "react-router-dom";

function CareerRoadmap() {
  const location = useLocation();

  const roadmapData = location.state;

  const selectedCareer =
    roadmapData?.selectedCareer || "Python Developer";

  const skills =
    roadmapData?.skills || [
      { name: "Python", required: 80, current: 65 },
      { name: "OOP", required: 80, current: 60 },
      { name: "SQL", required: 70, current: 55 },
      { name: "Git", required: 70, current: 45 },
      { name: "APIs", required: 70, current: 35 },
    ];

  const assessmentPercentage =
    roadmapData?.assessmentPercentage || 0;

  const skillGaps = skills
    .map((skill) => ({
      ...skill,
      gap: Math.max(0, skill.required - skill.current),
    }))
    .filter((skill) => skill.gap > 0)
    .sort((a, b) => b.gap - a.gap);

  const totalRequired = skills.reduce(
    (total, skill) => total + skill.required,
    0
  );

  const totalCurrent = skills.reduce(
    (total, skill) => total + skill.current,
    0
  );

  const overallProgress = Math.min(
    100,
    Math.round((totalCurrent / totalRequired) * 100)
  );

  const roadmapSteps = [
    {
      number: 1,
      title: "Understand the Fundamentals",
      icon: "📚",
      description: `Learn the basic concepts required for ${selectedCareer}. Build a strong foundation before moving to advanced topics.`,
      status: "Current Step",
    },
    {
      number: 2,
      title: "Close Your Skill Gaps",
      icon: "🎯",
      description:
        "Focus on the skills where your current level is below the required career level.",
      status: "Upcoming",
    },
    {
      number: 3,
      title: "Complete Practical Tasks",
      icon: "🛠️",
      description:
        "Apply what you learn by completing practical exercises and real-world tasks.",
      status: "Upcoming",
    },
    {
      number: 4,
      title: "Build Real Projects",
      icon: "🚀",
      description:
        "Create projects that demonstrate your technical knowledge and problem-solving ability.",
      status: "Upcoming",
    },
    {
      number: 5,
      title: "Retake Skill Assessment",
      icon: "📝",
      description:
        "Take another assessment after learning to measure your improvement.",
      status: "Upcoming",
    },
    {
      number: 6,
      title: "Build Your Portfolio",
      icon: "🏆",
      description:
        "Add your projects, certifications and achievements to your professional portfolio.",
      status: "Upcoming",
    },
  ];

  return (
    <div className="roadmap-page">
      {/* ================= SIDEBAR ================= */}

      <aside className="student-sidebar">
        <div className="sidebar-logo">
          <div className="logo-circle">🎓</div>

          <div>
            <strong>Smart Student</strong>
            <span>Student Platform</span>
          </div>
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-menu-title">MAIN MENU</div>

          <Link to="/" className="sidebar-link">
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

          <Link
            to="/roadmap"
            className="sidebar-link active"
          >
            <span>🛣️</span>
            Career Roadmap
          </Link>

          <div className="sidebar-menu-title workspace-title">
            WORKSPACE
          </div>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>🚀</span>
            Projects
            <small>Coming soon</small>
          </button>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>👥</span>
            Friends & Groups
            <small>Coming soon</small>
          </button>

          <button
            type="button"
            className="sidebar-link sidebar-disabled"
          >
            <span>🔔</span>
            Notifications
            <small>Coming soon</small>
          </button>
        </div>

        <div className="sidebar-spacer"></div>

        <div className="sidebar-bottom">
          <div className="student-mini-profile">
            <div className="student-avatar">🧑‍🎓</div>

            <div className="student-mini-info">
              <strong>Student</strong>
              <span>Career Development</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ROADMAP ================= */}

      <main className="roadmap-main">
        {/* TOP BAR */}

        <header className="roadmap-topbar">
          <div>
            <span className="roadmap-small-title">
              CAREER DEVELOPMENT
            </span>

            <h1>Personalized Career Roadmap</h1>

            <p>
              Follow your step-by-step journey toward your
              career goal.
            </p>
          </div>

          <div className="roadmap-top-icon">🛣️</div>
        </header>

        {/* ================= CAREER HERO ================= */}

        <section className="roadmap-career-hero">
          <div className="roadmap-career-icon">🎯</div>

          <div className="roadmap-career-info">
            <span>YOUR CAREER GOAL</span>

            <h2>{selectedCareer}</h2>

            <p>
              Your roadmap is designed to help you develop
              the skills, knowledge and practical experience
              required for this career.
            </p>
          </div>

          <div className="roadmap-career-progress">
            <strong>{overallProgress}%</strong>

            <span>Skill Readiness</span>
          </div>
        </section>

        {/* ================= PROGRESS ================= */}

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <div>
              <span>PROGRESS OVERVIEW</span>

              <h2>Your Career Progress</h2>
            </div>

            <div className="roadmap-progress-number">
              {overallProgress}%
            </div>
          </div>

          <div className="roadmap-large-progress">
            <div
              className="roadmap-large-progress-fill"
              style={{
                width: `${overallProgress}%`,
              }}
            >
              {overallProgress}%
            </div>
          </div>

          <div className="roadmap-progress-details">
            <span>Current skill readiness</span>

            <strong>{overallProgress}%</strong>
          </div>

          {assessmentPercentage > 0 && (
            <div className="roadmap-assessment">
              📝 Latest assessment score:
              <strong>{assessmentPercentage}%</strong>
            </div>
          )}
        </section>

        {/* ================= SKILL GAPS ================= */}

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <div>
              <span>SKILL ANALYSIS</span>

              <h2>Priority Skill Gaps</h2>
            </div>

            <span className="roadmap-heading-icon">
              🎯
            </span>
          </div>

          <p className="roadmap-section-description">
            These skills are arranged according to the size
            of the gap between your current level and the
            required career level.
          </p>

          {skillGaps.length === 0 ? (
            <div className="roadmap-success-box">
              <div>🎉</div>

              <div>
                <h3>Required Skill Levels Reached</h3>

                <p>
                  Your current skill levels meet the
                  configured requirements for this career.
                </p>
              </div>
            </div>
          ) : (
            <div className="roadmap-modern-skill-grid">
              {skillGaps.map((skill, index) => (
                <div
                  className="roadmap-modern-skill-card"
                  key={skill.name}
                >
                  <div className="roadmap-skill-top">
                    <div className="roadmap-skill-number">
                      {index + 1}
                    </div>

                    <div>
                      <h3>{skill.name}</h3>

                      <span>
                        Skill Gap: {skill.gap}%
                      </span>
                    </div>
                  </div>

                  <div className="roadmap-skill-progress">
                    <div
                      className="roadmap-skill-progress-fill"
                      style={{
                        width: `${skill.current}%`,
                      }}
                    ></div>
                  </div>

                  <div className="roadmap-skill-values">
                    <span>
                      Current
                      <strong>{skill.current}%</strong>
                    </span>

                    <span>
                      Required
                      <strong>{skill.required}%</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= LEARNING PATH ================= */}

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <div>
              <span>YOUR JOURNEY</span>

              <h2>Learning Path</h2>
            </div>

            <span className="roadmap-heading-icon">
              🚀
            </span>
          </div>

          <p className="roadmap-section-description">
            Complete these stages step by step to move toward
            your selected career.
          </p>

          <div className="modern-roadmap">
            {roadmapSteps.map((step) => (
              <div
                className={
                  step.status === "Current Step"
                    ? "modern-roadmap-step current"
                    : "modern-roadmap-step"
                }
                key={step.number}
              >
                <div className="modern-roadmap-line">
                  <div className="modern-roadmap-number">
                    {step.number}
                  </div>
                </div>

                <div className="modern-roadmap-content">
                  <div className="modern-roadmap-title">
                    <span className="modern-roadmap-icon">
                      {step.icon}
                    </span>

                    <div>
                      <h3>{step.title}</h3>

                      <span
                        className={
                          step.status === "Current Step"
                            ? "modern-roadmap-status current"
                            : "modern-roadmap-status"
                        }
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>

                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= NEXT ACTION ================= */}

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <div>
              <span>RECOMMENDED</span>

              <h2>Recommended Next Action</h2>
            </div>

            <span className="roadmap-heading-icon">
              ⚡
            </span>
          </div>

          {skillGaps.length > 0 ? (
            <div className="roadmap-next-action">
              <div className="roadmap-next-icon">🎯</div>

              <div className="roadmap-next-content">
                <span>PRIORITY SKILL</span>

                <h3>
                  Improve {skillGaps[0].name}
                </h3>

                <p>
                  This skill currently has the largest
                  identified gap in your career profile.
                </p>

                <div className="roadmap-action-stats">
                  <div>
                    <span>Current</span>

                    <strong>
                      {skillGaps[0].current}%
                    </strong>
                  </div>

                  <div>
                    <span>Required</span>

                    <strong>
                      {skillGaps[0].required}%
                    </strong>
                  </div>

                  <div>
                    <span>Gap</span>

                    <strong>
                      {skillGaps[0].gap}%
                    </strong>
                  </div>
                </div>

                <Link
                  to="/skills"
                  className="roadmap-action-button"
                >
                  📚 Improve Skills →
                </Link>
              </div>
            </div>
          ) : (
            <div className="roadmap-success-box">
              <div>🎉</div>

              <div>
                <h3>Good Progress!</h3>

                <p>
                  Continue with practical tasks, projects
                  and portfolio development.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ================= FUTURE FEATURES ================= */}

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <div>
              <span>COMING SOON</span>

              <h2>Future Roadmap Features</h2>
            </div>

            <span className="roadmap-heading-icon">
              🚀
            </span>
          </div>

          <div className="roadmap-feature-grid">
            <div className="roadmap-feature-card">
              <div>📚</div>

              <h3>Learning Resources</h3>

              <p>
                Courses, tutorials and documentation
                recommended for your skill gaps.
              </p>
            </div>

            <div className="roadmap-feature-card">
              <div>🛠️</div>

              <h3>Practical Tasks</h3>

              <p>
                Real-world exercises to apply what you
                learn.
              </p>
            </div>

            <div className="roadmap-feature-card">
              <div>🚀</div>

              <h3>Projects</h3>

              <p>
                Build projects and add them to your
                portfolio.
              </p>
            </div>

            <div className="roadmap-feature-card">
              <div>🤖</div>

              <h3>AI Recommendations</h3>

              <p>
                AI-powered learning recommendations based
                on your progress.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM NAVIGATION ================= */}

        <section className="roadmap-navigation">
          <Link
            to="/skills"
            className="roadmap-nav-button secondary"
          >
            ← Skills
          </Link>

          <Link
            to="/"
            className="roadmap-nav-button primary"
          >
            Dashboard →
          </Link>
        </section>

        {/* FOOTER */}

        <footer className="dashboard-footer">
          <span>🎓 Smart Student Platform</span>

          <span>
            Build your skills. Shape your career.
          </span>
        </footer>
      </main>
    </div>
  );
}

export default CareerRoadmap;