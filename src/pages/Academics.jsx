import "../App.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

function Academics() {
  const { user } = useAuth();

  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudent = async () => {
      if (!user) {
        setLoading(false);
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
        setLoading(false);
      }
    };

    loadStudent();
  }, [user]);

  const studentName =
    studentData?.name ||
    user?.displayName ||
    "Student";

  return (
    <div className="academic-modern-page">

      {/* SIDEBAR */}

      <aside className="academic-modern-sidebar">

        <div className="academic-brand">
          <div className="academic-brand-logo">
            S
          </div>

          <div>
            <strong>Smart Student</strong>
            <span>Student Platform</span>
          </div>
        </div>

        <div className="academic-nav-title">
          MAIN MENU
        </div>

        <nav className="academic-nav">

          <Link to="/">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            to="/academics"
            className="active"
          >
            <span>▣</span>
            Academics
          </Link>

          <Link to="/career">
            <span>◈</span>
            Career
          </Link>

          <Link to="/skills">
            <span>◆</span>
            Skills
          </Link>

          <Link to="/roadmap">
            <span>➜</span>
            Career Roadmap
          </Link>

        </nav>

        <div className="academic-nav-title">
          COMMUNITY
        </div>

        <div className="academic-nav">

          <button>
            <span>◇</span>
            Projects
            <small>SOON</small>
          </button>

          <button>
            <span>○</span>
            Community
            <small>SOON</small>
          </button>

        </div>

        <div className="academic-sidebar-bottom">

          <div className="academic-user">

            <div className="academic-user-avatar">
              {studentName.charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>
                {loading ? "Loading..." : studentName}
              </strong>

              <span>
                Student Account
              </span>
            </div>

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <main className="academic-modern-main">

        {/* HEADER */}

        <header className="academic-modern-header">

          <div>
            <span className="academic-header-label">
              ACADEMICS
            </span>

            <h1>
              Academic Performance
            </h1>

            <p>
              Track your academic progress,
              attendance and subject performance.
            </p>
          </div>

          <div className="academic-header-avatar">
            {studentName.charAt(0).toUpperCase()}
          </div>

        </header>

        {/* HERO */}

        <section className="academic-hero-modern">

          <div className="academic-hero-content">

            <span>
              YOUR ACADEMIC JOURNEY
            </span>

            <h2>
              Keep learning.
              <br />
              <strong>Keep improving.</strong>
            </h2>

            <p>
              Stay consistent with your studies
              and keep track of your academic
              performance throughout your journey.
            </p>

          </div>

          <div className="academic-score-card">

            <div className="academic-score-ring">

              <div>
                <strong>85%</strong>
                <span>Overall</span>
              </div>

            </div>

            <span className="score-label">
              ACADEMIC SCORE
            </span>

            <strong className="score-status">
              Excellent Progress
            </strong>

          </div>

        </section>

        {/* STATISTICS */}

        <section className="academic-stat-grid">

          <div className="academic-stat">

            <div className="academic-stat-icon purple">
              %
            </div>

            <div>
              <span>OVERALL SCORE</span>
              <strong>85%</strong>
              <small>+6% this semester</small>
            </div>

          </div>

          <div className="academic-stat">

            <div className="academic-stat-icon blue">
              A
            </div>

            <div>
              <span>CGPA</span>
              <strong>8.5</strong>
              <small>Out of 10.0</small>
            </div>

          </div>

          <div className="academic-stat">

            <div className="academic-stat-icon green">
              ✓
            </div>

            <div>
              <span>ATTENDANCE</span>
              <strong>91%</strong>
              <small>Good attendance</small>
            </div>

          </div>

          <div className="academic-stat">

            <div className="academic-stat-icon orange">
              #
            </div>

            <div>
              <span>SUBJECTS</span>
              <strong>6</strong>
              <small>Active subjects</small>
            </div>

          </div>

        </section>

        {/* MAIN GRID */}

        <div className="academic-content-grid">

          {/* SUBJECTS */}

          <section className="academic-card">

            <div className="academic-card-header">

              <div>
                <span>PERFORMANCE</span>

                <h2>
                  Subject Performance
                </h2>
              </div>

              <button>
                Current Semester
              </button>

            </div>

            <div className="subject-table">

              <div className="subject-table-head">
                <span>SUBJECT</span>
                <span>MARKS</span>
                <span>GRADE</span>
                <span>PROGRESS</span>
              </div>

              <div className="subject-row">

                <div className="subject-name">
                  <div className="subject-icon purple">
                    D
                  </div>

                  <div>
                    <strong>
                      Database Management
                    </strong>

                    <span>
                      DBMS
                    </span>
                  </div>
                </div>

                <strong>92 / 100</strong>

                <span className="grade excellent">
                  A+
                </span>

                <div className="subject-progress">
                  <span>
                    <i style={{ width: "92%" }}></i>
                  </span>
                  <small>92%</small>
                </div>

              </div>

              <div className="subject-row">

                <div className="subject-name">
                  <div className="subject-icon blue">
                    A
                  </div>

                  <div>
                    <strong>
                      Artificial Intelligence
                    </strong>

                    <span>
                      AI & ML
                    </span>
                  </div>
                </div>

                <strong>88 / 100</strong>

                <span className="grade excellent">
                  A
                </span>

                <div className="subject-progress">
                  <span>
                    <i style={{ width: "88%" }}></i>
                  </span>
                  <small>88%</small>
                </div>

              </div>

              <div className="subject-row">

                <div className="subject-name">
                  <div className="subject-icon green">
                    C
                  </div>

                  <div>
                    <strong>
                      Computer Networks
                    </strong>

                    <span>
                      CNS
                    </span>
                  </div>
                </div>

                <strong>84 / 100</strong>

                <span className="grade good">
                  A
                </span>

                <div className="subject-progress">
                  <span>
                    <i style={{ width: "84%" }}></i>
                  </span>
                  <small>84%</small>
                </div>

              </div>

              <div className="subject-row">

                <div className="subject-name">
                  <div className="subject-icon orange">
                    T
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

                <strong>79 / 100</strong>

                <span className="grade good">
                  B+
                </span>

                <div className="subject-progress">
                  <span>
                    <i style={{ width: "79%" }}></i>
                  </span>
                  <small>79%</small>
                </div>

              </div>

              <div className="subject-row">

                <div className="subject-name">
                  <div className="subject-icon pink">
                    O
                  </div>

                  <div>
                    <strong>
                      Operating Systems
                    </strong>

                    <span>
                      OS
                    </span>
                  </div>
                </div>

                <strong>81 / 100</strong>

                <span className="grade good">
                  A
                </span>

                <div className="subject-progress">
                  <span>
                    <i style={{ width: "81%" }}></i>
                  </span>
                  <small>81%</small>
                </div>

              </div>

            </div>

          </section>

          {/* RIGHT SIDE */}

          <div className="academic-right-column">

            {/* ATTENDANCE */}

            <section className="academic-card attendance-card">

              <div className="academic-card-header">

                <div>
                  <span>ATTENDANCE</span>

                  <h2>
                    Attendance
                  </h2>
                </div>

              </div>

              <div className="attendance-circle">

                <div>
                  <strong>91%</strong>
                  <span>Present</span>
                </div>

              </div>

              <div className="attendance-info">

                <div>
                  <span>Present</span>
                  <strong>82 days</strong>
                </div>

                <div>
                  <span>Absent</span>
                  <strong>8 days</strong>
                </div>

              </div>

              <div className="attendance-bar">
                <span></span>
              </div>

              <p>
                Your attendance is above the
                recommended 75% requirement.
              </p>

            </section>

            {/* ACADEMIC SUMMARY */}

            <section className="academic-card">

              <div className="academic-card-header">

                <div>
                  <span>SUMMARY</span>

                  <h2>
                    Academic Insights
                  </h2>
                </div>

              </div>

              <div className="academic-insight">

                <div className="insight-icon green">
                  ↑
                </div>

                <div>
                  <strong>
                    You're improving
                  </strong>

                  <p>
                    Your overall score increased
                    compared with your previous
                    semester.
                  </p>
                </div>

              </div>

              <div className="academic-insight">

                <div className="insight-icon purple">
                  ★
                </div>

                <div>
                  <strong>
                    Strongest subject
                  </strong>

                  <p>
                    Database Management is
                    currently your highest-scoring
                    subject.
                  </p>
                </div>

              </div>

              <div className="academic-insight">

                <div className="insight-icon orange">
                  !
                </div>

                <div>
                  <strong>
                    Room for improvement
                  </strong>

                  <p>
                    Focus more on Theory of
                    Computation to improve your
                    overall score.
                  </p>
                </div>

              </div>

            </section>

          </div>

        </div>

        {/* RECENT ACTIVITY */}

        <section className="academic-card academic-activity-card">

          <div className="academic-card-header">

            <div>
              <span>RECENT ACTIVITY</span>

              <h2>
                Academic Activity
              </h2>
            </div>

          </div>

          <div className="academic-activity-grid">

            <div className="academic-activity-item">

              <div className="activity-date">
                <strong>24</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>
                  Database Management test completed
                </strong>

                <span>
                  Score: 92 / 100
                </span>
              </div>

            </div>

            <div className="academic-activity-item">

              <div className="activity-date">
                <strong>22</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>
                  Artificial Intelligence assignment
                </strong>

                <span>
                  Submitted successfully
                </span>
              </div>

            </div>

            <div className="academic-activity-item">

              <div className="activity-date">
                <strong>20</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>
                  Computer Networks assessment
                </strong>

                <span>
                  Score: 84 / 100
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="academic-footer">

          <strong>
            Smart Student Platform
          </strong>

          <span>
            Build your skills. Shape your career.
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Academics;