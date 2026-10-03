import "../App.css";

import { Link } from "react-router-dom";

function Career() {
  return (
    <div className="career-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="career-sidebar">

        <div className="sidebar-logo">
          <div className="logo-circle">🎓</div>
          <span>Student Platform</span>
        </div>

        <div className="sidebar-menu">

          <Link to="/" className="sidebar-link">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/academics" className="sidebar-link">
            <span>📚</span>
            Academics
          </Link>

          <Link
            to="/career"
            className="sidebar-link active"
          >
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

          <button
            type="button"
            className="sidebar-logout"
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="career-main">

        {/* TOP BAR */}

        <header className="career-topbar">

          <div>
            <p>CAREER DEVELOPMENT</p>

            <h1>
              Build Your Career 🎯
            </h1>
          </div>

          <div className="career-top-icon">
            🎯
          </div>

        </header>


        {/* ================= HERO ================= */}

        <section className="career-hero">

          <div>

            <span>
              YOUR CAREER JOURNEY
            </span>

            <h2>
              Plan your career with confidence
            </h2>

            <p>
              Choose your career goal, understand the
              required skills, identify your skill gaps
              and build a personalized career path.
            </p>

          </div>

          <div className="career-hero-icon">
            🚀
          </div>

        </section>


        {/* ================= CAREER GOAL ================= */}

        <section className="career-section">

          <div className="career-section-heading">

            <div>
              <span>YOUR GOAL</span>
              <h2>Your Career Goal</h2>
            </div>

            <p>
              Your selected career path
            </p>

          </div>


          <div className="career-goal-card">

            <div className="career-goal-icon">
              💻
            </div>

            <div className="career-goal-content">

              <span>SELECTED CAREER</span>

              <h3>
                Python Developer
              </h3>

              <p>
                Build software applications using Python,
                databases, APIs and problem-solving skills.
              </p>

              <div className="career-goal-tags">

                <span>Python</span>
                <span>SQL</span>
                <span>APIs</span>
                <span>Git</span>

              </div>

            </div>

            <div className="career-goal-progress">

              <strong>60%</strong>

              <span>Career Progress</span>

              <div className="career-progress-bar">
                <div
                  style={{ width: "60%" }}
                ></div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CAREER OPTIONS ================= */}

        <section className="career-section">

          <div className="career-section-heading">

            <div>
              <span>EXPLORE</span>
              <h2>Career Options</h2>
            </div>

            <p>
              Explore different career paths
            </p>

          </div>


          <div className="career-options-grid">

            {/* Python */}

            <div className="career-option-card">

              <div className="career-option-icon">
                🐍
              </div>

              <h3>
                Python Developer
              </h3>

              <p>
                Python, OOP, SQL, Git, APIs and
                problem-solving.
              </p>

              <span className="career-option-status">
                Selected
              </span>

            </div>


            {/* Frontend */}

            <div className="career-option-card">

              <div className="career-option-icon">
                🌐
              </div>

              <h3>
                Frontend Developer
              </h3>

              <p>
                HTML, CSS, JavaScript, React and
                UI development.
              </p>

              <span>
                Explore
              </span>

            </div>


            {/* Data Analyst */}

            <div className="career-option-card">

              <div className="career-option-icon">
                📊
              </div>

              <h3>
                Data Analyst
              </h3>

              <p>
                Python, SQL, Excel, statistics and
                data visualization.
              </p>

              <span>
                Explore
              </span>

            </div>


            {/* Backend */}

            <div className="career-option-card">

              <div className="career-option-icon">
                ⚙️
              </div>

              <h3>
                Backend Developer
              </h3>

              <p>
                APIs, databases, server-side programming
                and Git.
              </p>

              <span>
                Explore
              </span>

            </div>

          </div>

        </section>


        {/* ================= REQUIRED SKILLS ================= */}

        <section className="career-section">

          <div className="career-section-heading">

            <div>
              <span>SKILL REQUIREMENTS</span>
              <h2>Skills Required</h2>
            </div>

            <p>
              Skills needed for Python Developer
            </p>

          </div>


          <div className="career-skills-card">

            {/* Python */}

            <div className="career-skill-row">

              <div className="career-skill-info">

                <strong>
                  Python
                </strong>

                <span>
                  Required: 80%
                </span>

              </div>

              <div className="career-skill-bar">

                <div
                  style={{ width: "80%" }}
                ></div>

              </div>

              <strong>
                80%
              </strong>

            </div>


            {/* OOP */}

            <div className="career-skill-row">

              <div className="career-skill-info">

                <strong>
                  Object-Oriented Programming
                </strong>

                <span>
                  Required: 80%
                </span>

              </div>

              <div className="career-skill-bar">

                <div
                  style={{ width: "80%" }}
                ></div>

              </div>

              <strong>
                80%
              </strong>

            </div>


            {/* SQL */}

            <div className="career-skill-row">

              <div className="career-skill-info">

                <strong>
                  SQL
                </strong>

                <span>
                  Required: 70%
                </span>

              </div>

              <div className="career-skill-bar">

                <div
                  style={{ width: "70%" }}
                ></div>

              </div>

              <strong>
                70%
              </strong>

            </div>


            {/* Git */}

            <div className="career-skill-row">

              <div className="career-skill-info">

                <strong>
                  Git
                </strong>

                <span>
                  Required: 70%
                </span>

              </div>

              <div className="career-skill-bar">

                <div
                  style={{ width: "70%" }}
                ></div>

              </div>

              <strong>
                70%
              </strong>

            </div>


            {/* APIs */}

            <div className="career-skill-row">

              <div className="career-skill-info">

                <strong>
                  APIs
                </strong>

                <span>
                  Required: 70%
                </span>

              </div>

              <div className="career-skill-bar">

                <div
                  style={{ width: "70%" }}
                ></div>

              </div>

              <strong>
                70%
              </strong>

            </div>

          </div>

        </section>


        {/* ================= CAREER PROCESS ================= */}

        <section className="career-section">

          <div className="career-section-heading">

            <div>
              <span>YOUR JOURNEY</span>
              <h2>Career Development Process</h2>
            </div>

            <p>
              Follow these steps to build your career
            </p>

          </div>


          <div className="career-process">

            {/* Step 1 */}

            <div className="career-process-step active">

              <div className="career-process-number">
                1
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  🎯
                </div>

                <div>

                  <h3>
                    Select Career Goal
                  </h3>

                  <p>
                    Choose the career you want to
                    prepare for.
                  </p>

                </div>

                <span className="career-process-status active">
                  Current Step
                </span>

              </div>

            </div>


            {/* Step 2 */}

            <div className="career-process-step">

              <div className="career-process-number">
                2
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  🧠
                </div>

                <div>

                  <h3>
                    Identify Required Skills
                  </h3>

                  <p>
                    Understand the technical and practical
                    skills needed for your career.
                  </p>

                </div>

                <span className="career-process-status">
                  Upcoming
                </span>

              </div>

            </div>


            {/* Step 3 */}

            <div className="career-process-step">

              <div className="career-process-number">
                3
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  📊
                </div>

                <div>

                  <h3>
                    Find Your Skill Gap
                  </h3>

                  <p>
                    Compare your current skills with
                    the required career skills.
                  </p>

                </div>

                <span className="career-process-status">
                  Upcoming
                </span>

              </div>

            </div>


            {/* Step 4 */}

            <div className="career-process-step">

              <div className="career-process-number">
                4
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  📚
                </div>

                <div>

                  <h3>
                    Follow Learning Roadmap
                  </h3>

                  <p>
                    Learn missing skills using recommended
                    resources and practical tasks.
                  </p>

                </div>

                <span className="career-process-status">
                  Upcoming
                </span>

              </div>

            </div>


            {/* Step 5 */}

            <div className="career-process-step">

              <div className="career-process-number">
                5
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  🚀
                </div>

                <div>

                  <h3>
                    Build Projects
                  </h3>

                  <p>
                    Apply your knowledge by creating
                    real-world projects.
                  </p>

                </div>

                <span className="career-process-status">
                  Upcoming
                </span>

              </div>

            </div>


            {/* Step 6 */}

            <div className="career-process-step">

              <div className="career-process-number">
                6
              </div>

              <div className="career-process-content">

                <div className="career-process-icon">
                  🏆
                </div>

                <div>

                  <h3>
                    Build Your Portfolio
                  </h3>

                  <p>
                    Add projects, certifications and
                    achievements to your portfolio.
                  </p>

                </div>

                <span className="career-process-status">
                  Upcoming
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= NEXT STEP ================= */}

        <section className="career-next">

          <div>

            <span>
              NEXT STEP
            </span>

            <h2>
              Analyze Your Skills 🧠
            </h2>

            <p>
              Check your current skills, identify skill
              gaps and take a skill assessment.
            </p>

          </div>

          <Link
            to="/skills"
            className="career-next-button"
          >
            Open Skill Analysis →
          </Link>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="career-footer">
          🎓 Smart Student Platform
          {" • "}
          Build your skills. Shape your career.
        </footer>

      </main>

    </div>
  );
}

export default Career;