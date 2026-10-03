import '../App.css'
import { Link } from 'react-router-dom'

function Career() {
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
          🎯 Career Development
        </h1>

        <p>
          Choose your career goal, understand the required
          skills and build your personalized career path.
        </p>

      </div>


      {/* ================= CAREER GOAL ================= */}

      <div className="dashboard-card">

        <h2>
          🎯 Your Career Goal
        </h2>

        <p>
          Select a career that you want to prepare for.
          The platform will later compare your current
          skills with the skills required for that career.
        </p>

        <div className="career-goal-box">

          <div className="career-goal-icon">
            💻
          </div>

          <div>

            <h3>
              Python Developer
            </h3>

            <p>
              Build software applications using Python,
              databases, APIs and problem-solving skills.
            </p>

          </div>

        </div>

      </div>


      {/* ================= CAREER OPTIONS ================= */}

      <div className="dashboard-card">

        <h2>
          💼 Explore Career Options
        </h2>

        <p>
          These are examples of careers that can be added
          to the platform.
        </p>

        <div className="future-feature-grid">

          <div className="future-feature">

            <span>
              🐍
            </span>

            <strong>
              Python Developer
            </strong>

            <p>
              Python, OOP, SQL, Git, APIs and problem solving.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🌐
            </span>

            <strong>
              Frontend Developer
            </strong>

            <p>
              HTML, CSS, JavaScript, React and UI development.
            </p>

          </div>


          <div className="future-feature">

            <span>
              📊
            </span>

            <strong>
              Data Analyst
            </strong>

            <p>
              Python, SQL, Excel, statistics and data visualization.
            </p>

          </div>


          <div className="future-feature">

            <span>
              ⚙️
            </span>

            <strong>
              Backend Developer
            </strong>

            <p>
              APIs, databases, server-side programming and Git.
            </p>

          </div>

        </div>

      </div>


      {/* ================= REQUIRED SKILLS ================= */}

      <div className="dashboard-card">

        <h2>
          🧠 Skills Required for Your Career
        </h2>

        <p>
          Based on the selected career, these skills will
          be important for your career preparation.
        </p>

        <div className="roadmap-skill-list">

          <div className="roadmap-skill-card">

            <div className="skill-item-header">

              <strong>
                Python
              </strong>

              <span>
                Required: 80%
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: '80%' }}
              >
                80%
              </div>

            </div>

          </div>


          <div className="roadmap-skill-card">

            <div className="skill-item-header">

              <strong>
                Object-Oriented Programming
              </strong>

              <span>
                Required: 80%
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: '80%' }}
              >
                80%
              </div>

            </div>

          </div>


          <div className="roadmap-skill-card">

            <div className="skill-item-header">

              <strong>
                SQL
              </strong>

              <span>
                Required: 70%
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: '70%' }}
              >
                70%
              </div>

            </div>

          </div>


          <div className="roadmap-skill-card">

            <div className="skill-item-header">

              <strong>
                Git
              </strong>

              <span>
                Required: 70%
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: '70%' }}
              >
                70%
              </div>

            </div>

          </div>


          <div className="roadmap-skill-card">

            <div className="skill-item-header">

              <strong>
                APIs
              </strong>

              <span>
                Required: 70%
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: '70%' }}
              >
                70%
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= CAREER PROCESS ================= */}

      <div className="dashboard-card">

        <h2>
          🛣️ How Your Career Development Works
        </h2>

        <div className="roadmap-list">

          <div className="roadmap-step roadmap-current">

            <div className="roadmap-number">
              1
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  🎯
                </span>

                <h3>
                  Select Career Goal
                </h3>

              </div>

              <p>
                Choose the career you want to prepare for.
              </p>

              <span className="roadmap-status current">
                Current Step
              </span>

            </div>

          </div>


          <div className="roadmap-step">

            <div className="roadmap-number">
              2
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  🧠
                </span>

                <h3>
                  Identify Required Skills
                </h3>

              </div>

              <p>
                Understand the technical and practical skills
                needed for the selected career.
              </p>

              <span className="roadmap-status">
                Upcoming
              </span>

            </div>

          </div>


          <div className="roadmap-step">

            <div className="roadmap-number">
              3
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  📊
                </span>

                <h3>
                  Find Your Skill Gap
                </h3>

              </div>

              <p>
                Compare your current skills with the required
                career skills.
              </p>

              <span className="roadmap-status">
                Upcoming
              </span>

            </div>

          </div>


          <div className="roadmap-step">

            <div className="roadmap-number">
              4
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  📚
                </span>

                <h3>
                  Follow Learning Roadmap
                </h3>

              </div>

              <p>
                Learn the missing skills using recommended
                resources and practical tasks.
              </p>

              <span className="roadmap-status">
                Upcoming
              </span>

            </div>

          </div>


          <div className="roadmap-step">

            <div className="roadmap-number">
              5
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  🚀
                </span>

                <h3>
                  Build Projects
                </h3>

              </div>

              <p>
                Apply your knowledge by creating real-world
                projects.
              </p>

              <span className="roadmap-status">
                Upcoming
              </span>

            </div>

          </div>


          <div className="roadmap-step">

            <div className="roadmap-number">
              6
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title">

                <span className="roadmap-icon">
                  🏆
                </span>

                <h3>
                  Build Your Portfolio
                </h3>

              </div>

              <p>
                Add projects, certifications and achievements
                to your professional portfolio.
              </p>

              <span className="roadmap-status">
                Upcoming
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= NEXT STEP ================= */}

      <div className="dashboard-card">

        <h2>
          🚀 Continue to Skills
        </h2>

        <p>
          The next step is to check your current skills,
          identify skill gaps and take a skill assessment.
        </p>

        <Link
          to="/skills"
          className="assessment-button"
        >
          Open Skill Analysis →
        </Link>

      </div>

    </div>
  )
}

export default Career