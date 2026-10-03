import '../App.css'
import { Link } from 'react-router-dom'

function Academics() {
  return (
    <div className="app">

      {/* ================= NAVIGATION BAR ================= */}

      <nav className="navbar">

        <div className="logo">
          Smart Student
        </div>

        <div className="nav-links">

          <Link to="/">
            Dashboard
          </Link>

          <Link to="/academics">
            Academics
          </Link>

          <Link to="/career">
            Career
          </Link>

          <Link to="/skills">
            Skills
          </Link>

          <Link to="/roadmap">
            Roadmap
          </Link>

          <span>
            Projects
          </span>

          <span>
            Profile
          </span>

        </div>

      </nav>


      {/* ================= PAGE HEADER ================= */}

      <div className="dashboard-header">

        <h1>
          📚 Academic Progress
        </h1>

        <p>
          Track your attendance, marks, assignments,
          examinations and academic performance.
        </p>

      </div>


      {/* ================= ACADEMIC MODULES ================= */}

      <div className="dashboard-cards">

        {/* Attendance */}

        <div className="dashboard-card">

          <h2>
            📊 Attendance
          </h2>

          <p>
            Monitor your subject-wise attendance and
            overall attendance percentage.
          </p>

          <div className="academic-stat">
            <strong>85%</strong>
            <span>Overall Attendance</span>
          </div>

        </div>


        {/* Marks */}

        <div className="dashboard-card">

          <h2>
            📝 Marks
          </h2>

          <p>
            Track your internal marks, semester marks
            and overall academic performance.
          </p>

          <div className="academic-stat">
            <strong>78%</strong>
            <span>Average Marks</span>
          </div>

        </div>


        {/* Assignments */}

        <div className="dashboard-card">

          <h2>
            📋 Assignments
          </h2>

          <p>
            Keep track of completed, pending and upcoming
            assignments.
          </p>

          <div className="academic-stat">
            <strong>8 / 10</strong>
            <span>Assignments Completed</span>
          </div>

        </div>


        {/* Exams */}

        <div className="dashboard-card">

          <h2>
            📅 Exams
          </h2>

          <p>
            View upcoming examinations and track your
            examination performance.
          </p>

          <div className="academic-stat">
            <strong>2</strong>
            <span>Upcoming Exams</span>
          </div>

        </div>

      </div>


      {/* ================= SUBJECT PERFORMANCE ================= */}

      <div className="dashboard-card">

        <h2>
          📖 Subject Performance
        </h2>

        <p>
          Your current performance in different subjects.
        </p>

        <div className="subject-list">

          <div className="subject-row">

            <div>
              <strong>Database Management System</strong>
              <span>DBMS</span>
            </div>

            <strong>82%</strong>

          </div>


          <div className="subject-row">

            <div>
              <strong>Artificial Intelligence</strong>
              <span>AI</span>
            </div>

            <strong>76%</strong>

          </div>


          <div className="subject-row">

            <div>
              <strong>Computer Networks & Security</strong>
              <span>CNS</span>
            </div>

            <strong>79%</strong>

          </div>


          <div className="subject-row">

            <div>
              <strong>Theory of Computation</strong>
              <span>TOC</span>
            </div>

            <strong>74%</strong>

          </div>

        </div>

      </div>


      {/* ================= ACADEMIC SUMMARY ================= */}

      <div className="dashboard-card">

        <h2>
          📊 Academic Summary
        </h2>

        <div className="progress-cards">

          <div className="progress-card">

            <span>
              📊
            </span>

            <h3>
              Attendance
            </h3>

            <strong>
              85%
            </strong>

            <p>
              Overall attendance
            </p>

          </div>


          <div className="progress-card">

            <span>
              📝
            </span>

            <h3>
              Marks
            </h3>

            <strong>
              78%
            </strong>

            <p>
              Average performance
            </p>

          </div>


          <div className="progress-card">

            <span>
              📋
            </span>

            <h3>
              Assignments
            </h3>

            <strong>
              80%
            </strong>

            <p>
              Completion rate
            </p>

          </div>


          <div className="progress-card">

            <span>
              📅
            </span>

            <h3>
              Exams
            </h3>

            <strong>
              2
            </strong>

            <p>
              Upcoming exams
            </p>

          </div>

        </div>

      </div>


      {/* ================= FUTURE ACADEMIC FEATURES ================= */}

      <div className="dashboard-card">

        <h2>
          🔮 Academic Features
        </h2>

        <p>
          These features will be connected to Firebase
          when we build the real academic management system.
        </p>

        <div className="future-feature-grid">

          <div className="future-feature">

            <span>
              📅
            </span>

            <strong>
              Exam Schedule
            </strong>

            <p>
              View upcoming exams and examination dates.
            </p>

          </div>


          <div className="future-feature">

            <span>
              📋
            </span>

            <strong>
              Assignment Tracker
            </strong>

            <p>
              Track assignment deadlines and completion.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🧪
            </span>

            <strong>
              Practicals
            </strong>

            <p>
              Manage practical work and practical submissions.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🚀
            </span>

            <strong>
              Academic Projects
            </strong>

            <p>
              Track academic projects and submissions.
            </p>

          </div>

        </div>

      </div>


      {/* ================= BACK TO DASHBOARD ================= */}

      <div className="dashboard-card">

        <h2>
          🏠 Continue Your Journey
        </h2>

        <p>
          After checking your academic progress,
          continue working on your career and skills.
        </p>

        <div className="dashboard-button-row">

          <Link
            to="/"
            className="assessment-button"
          >
            ← Dashboard
          </Link>

          <Link
            to="/career"
            className="assessment-button"
          >
            Career →
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Academics