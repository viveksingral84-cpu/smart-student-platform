import "../App.css";

import { Link } from "react-router-dom";

function Academics() {
  return (
    <div className="academics-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="academics-sidebar">

        <div className="sidebar-logo">
          <div className="logo-circle">🎓</div>
          <span>Student Platform</span>
        </div>

        <div className="sidebar-menu">

          <Link to="/" className="sidebar-link">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link
            to="/academics"
            className="sidebar-link active"
          >
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

          <button
            type="button"
            className="sidebar-logout"
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="academics-main">

        {/* TOP BAR */}

        <header className="academics-topbar">

          <div>
            <p>ACADEMIC MANAGEMENT</p>

            <h1>
              Academic Progress 📚
            </h1>
          </div>

          <div className="academics-top-icon">
            📚
          </div>

        </header>


        {/* INTRO CARD */}

        <section className="academics-hero">

          <div>

            <span>
              YOUR ACADEMIC JOURNEY
            </span>

            <h2>
              Track your academic performance
            </h2>

            <p>
              Monitor attendance, marks, assignments,
              examinations and subject performance
              from one place.
            </p>

          </div>

          <div className="academics-hero-icon">
            🎓
          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="academics-section">

          <div className="academics-section-heading">

            <div>
              <span>OVERVIEW</span>
              <h2>Academic Overview</h2>
            </div>

            <p>
              Your current academic statistics
            </p>

          </div>


          <div className="academic-stats-grid">

            {/* Attendance */}

            <div className="academic-stat-card">

              <div className="academic-stat-icon purple">
                📊
              </div>

              <div>
                <span>Attendance</span>
                <strong>85%</strong>
                <small>Good progress</small>
              </div>

              <div className="academic-progress">
                <div
                  className="academic-progress-fill purple"
                  style={{ width: "85%" }}
                ></div>
              </div>

            </div>


            {/* Marks */}

            <div className="academic-stat-card">

              <div className="academic-stat-icon blue">
                📝
              </div>

              <div>
                <span>Average Marks</span>
                <strong>78%</strong>
                <small>Academic performance</small>
              </div>

              <div className="academic-progress">
                <div
                  className="academic-progress-fill blue"
                  style={{ width: "78%" }}
                ></div>
              </div>

            </div>


            {/* Assignments */}

            <div className="academic-stat-card">

              <div className="academic-stat-icon green">
                📋
              </div>

              <div>
                <span>Assignments</span>
                <strong>8 / 10</strong>
                <small>Completed</small>
              </div>

              <div className="academic-progress">
                <div
                  className="academic-progress-fill green"
                  style={{ width: "80%" }}
                ></div>
              </div>

            </div>


            {/* Exams */}

            <div className="academic-stat-card">

              <div className="academic-stat-icon orange">
                📅
              </div>

              <div>
                <span>Upcoming Exams</span>
                <strong>2</strong>
                <small>Examinations scheduled</small>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SUBJECT PERFORMANCE ================= */}

        <section className="academics-section">

          <div className="academics-section-heading">

            <div>
              <span>SUBJECTS</span>
              <h2>Subject Performance</h2>
            </div>

            <p>
              Current performance in your subjects
            </p>

          </div>


          <div className="subject-list">

            {/* DBMS */}

            <div className="subject-row">

              <div className="subject-info">

                <div className="subject-icon">
                  🗄️
                </div>

                <div>
                  <strong>
                    Database Management System
                  </strong>

                  <span>
                    DBMS
                  </span>
                </div>

              </div>

              <div className="subject-result">

                <strong>82%</strong>

                <div className="subject-progress">
                  <div
                    style={{ width: "82%" }}
                  ></div>
                </div>

              </div>

            </div>


            {/* AI */}

            <div className="subject-row">

              <div className="subject-info">

                <div className="subject-icon">
                  🤖
                </div>

                <div>
                  <strong>
                    Artificial Intelligence
                  </strong>

                  <span>
                    AI
                  </span>
                </div>

              </div>

              <div className="subject-result">

                <strong>76%</strong>

                <div className="subject-progress">
                  <div
                    style={{ width: "76%" }}
                  ></div>
                </div>

              </div>

            </div>


            {/* CNS */}

            <div className="subject-row">

              <div className="subject-info">

                <div className="subject-icon">
                  🔐
                </div>

                <div>
                  <strong>
                    Computer Networks & Security
                  </strong>

                  <span>
                    CNS
                  </span>
                </div>

              </div>

              <div className="subject-result">

                <strong>79%</strong>

                <div className="subject-progress">
                  <div
                    style={{ width: "79%" }}
                  ></div>
                </div>

              </div>

            </div>


            {/* TOC */}

            <div className="subject-row">

              <div className="subject-info">

                <div className="subject-icon">
                  ⚙️
                </div>

                <div>
                  <strong>
                    Theory of Computation
                  </strong>

                  <span>
                    TOC
                  </span>
                </div>

              </div>

              <div className="subject-result">

                <strong>74%</strong>

                <div className="subject-progress">
                  <div
                    style={{ width: "74%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ACADEMIC SUMMARY ================= */}

        <section className="academics-section">

          <div className="academics-section-heading">

            <div>
              <span>SUMMARY</span>
              <h2>Academic Summary</h2>
            </div>

          </div>


          <div className="academic-summary-grid">

            <div className="summary-card">
              <span>📊</span>
              <strong>85%</strong>
              <h3>Attendance</h3>
              <p>Overall attendance</p>
            </div>

            <div className="summary-card">
              <span>📝</span>
              <strong>78%</strong>
              <h3>Marks</h3>
              <p>Average performance</p>
            </div>

            <div className="summary-card">
              <span>📋</span>
              <strong>80%</strong>
              <h3>Assignments</h3>
              <p>Completion rate</p>
            </div>

            <div className="summary-card">
              <span>📅</span>
              <strong>2</strong>
              <h3>Exams</h3>
              <p>Upcoming examinations</p>
            </div>

          </div>

        </section>


        {/* ================= FUTURE FEATURES ================= */}

        <section className="academics-section">

          <div className="academics-section-heading">

            <div>
              <span>UPCOMING</span>
              <h2>Academic Features</h2>
            </div>

            <p>
              Features that will be connected to Firebase
            </p>

          </div>


          <div className="future-feature-grid">

            <div className="future-feature-card">

              <div>📅</div>

              <h3>
                Exam Schedule
              </h3>

              <p>
                View upcoming exams and examination dates.
              </p>

            </div>


            <div className="future-feature-card">

              <div>📋</div>

              <h3>
                Assignment Tracker
              </h3>

              <p>
                Track assignment deadlines and completion.
              </p>

            </div>


            <div className="future-feature-card">

              <div>🧪</div>

              <h3>
                Practicals
              </h3>

              <p>
                Manage practical work and submissions.
              </p>

            </div>


            <div className="future-feature-card">

              <div>🚀</div>

              <h3>
                Academic Projects
              </h3>

              <p>
                Track academic projects and submissions.
              </p>

            </div>

          </div>

        </section>


        {/* ================= NAVIGATION ================= */}

        <section className="academics-navigation">

          <div>

            <h2>
              Continue Your Journey
            </h2>

            <p>
              After checking your academic progress,
              continue working on your career and skills.
            </p>

          </div>

          <div className="academics-navigation-buttons">

            <Link
              to="/"
              className="academic-button secondary"
            >
              ← Dashboard
            </Link>

            <Link
              to="/career"
              className="academic-button primary"
            >
              Career →
            </Link>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="academics-footer">
          🎓 Smart Student Platform
          {" • "}
          Build your skills. Shape your career.
        </footer>

      </main>

    </div>
  );
}

export default Academics;