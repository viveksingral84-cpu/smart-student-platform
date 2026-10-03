import '../App.css'
import { Link } from 'react-router-dom'

function Dashboard() {
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


      {/* ================= DASHBOARD HEADER ================= */}

      <div className="dashboard-header">

        <h1>
          Welcome to Smart Student Platform 👋
        </h1>

        <p>
          Manage your academics, career, skills and projects
          in one place.
        </p>

      </div>


      {/* ================= MAIN MODULES ================= */}

      <div className="dashboard-cards">

        {/* Academics */}

        <div className="dashboard-card">

          <h2>
            📚 Academics
          </h2>

          <p>
            Track your attendance, marks, assignments,
            examinations and academic performance.
          </p>

          <Link
            to="/academics"
            className="dashboard-action"
          >
            Open Academics →
          </Link>

        </div>


        {/* Career */}

        <div className="dashboard-card">

          <h2>
            🎯 Career
          </h2>

          <p>
            Select your career goal and understand the
            skills required for your desired career.
          </p>

          <Link
            to="/career"
            className="dashboard-action"
          >
            Open Career →
          </Link>

        </div>


        {/* Skills */}

        <div className="dashboard-card">

          <h2>
            💻 Skills
          </h2>

          <p>
            Track your current skills, identify skill gaps
            and take skill assessments.
          </p>

          <Link
            to="/skills"
            className="dashboard-action"
          >
            Open Skills →
          </Link>

        </div>


        {/* Roadmap */}

        <div className="dashboard-card">

          <h2>
            🛣️ Career Roadmap
          </h2>

          <p>
            Follow a personalized step-by-step roadmap
            based on your career goal and skill gaps.
          </p>

          <Link
            to="/roadmap"
            className="dashboard-action"
          >
            Open Roadmap →
          </Link>

        </div>

      </div>


      {/* ================= QUICK PROGRESS ================= */}

      <div className="progress-section">

        <h2>
          📊 Quick Progress
        </h2>


        <div className="progress-cards">

          {/* Attendance */}

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
              Current attendance
            </p>

          </div>


          {/* Marks */}

          <div className="progress-card">

            <span>
              📝
            </span>

            <h3>
              Average Marks
            </h3>

            <strong>
              78%
            </strong>

            <p>
              Current academic average
            </p>

          </div>


          {/* Skills */}

          <div className="progress-card">

            <span>
              💻
            </span>

            <h3>
              Skills Progress
            </h3>

            <strong>
              62%
            </strong>

            <p>
              Current skill readiness
            </p>

          </div>


          {/* Career */}

          <div className="progress-card">

            <span>
              🎯
            </span>

            <h3>
              Career Progress
            </h3>

            <strong>
              45%
            </strong>

            <p>
              Roadmap progress
            </p>

          </div>

        </div>

      </div>


      {/* ================= TODAY'S ACTIONS ================= */}

      <div className="dashboard-card">

        <h2>
          🚀 Recommended Actions
        </h2>

        <p>
          Continue improving your academic and career
          development.
        </p>

        <div className="dashboard-action-list">

          <div className="dashboard-action-item">
            📚 Review your academic progress
          </div>

          <div className="dashboard-action-item">
            🎯 Check your career skill gaps
          </div>

          <div className="dashboard-action-item">
            📝 Take a skill assessment
          </div>

          <div className="dashboard-action-item">
            🛣️ Continue your career roadmap
          </div>

        </div>

      </div>


      {/* ================= FUTURE FEATURES ================= */}

      <div className="dashboard-card">

        <h2>
          🔮 Platform Features
        </h2>

        <p>
          More features will be connected as we build
          the complete Smart Student Platform.
        </p>

        <div className="future-feature-grid">

          <div className="future-feature">

            <span>
              🤖
            </span>

            <strong>
              AI Assistant
            </strong>

            <p>
              AI-based career and learning assistance.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🚀
            </span>

            <strong>
              Projects
            </strong>

            <p>
              Manage projects and build your portfolio.
            </p>

          </div>


          <div className="future-feature">

            <span>
              👥
            </span>

            <strong>
              Friends & Groups
            </strong>

            <p>
              Connect and collaborate with other students.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🔔
            </span>

            <strong>
              Notifications
            </strong>

            <p>
              Receive important academic and career updates.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard