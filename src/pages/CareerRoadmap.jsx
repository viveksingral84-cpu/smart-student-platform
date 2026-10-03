import '../App.css'
import { Link, useLocation } from 'react-router-dom'

function CareerRoadmap() {
  const location = useLocation()

  const roadmapData = location.state

  const selectedCareer =
    roadmapData?.selectedCareer || 'Python Developer'

  const skills =
    roadmapData?.skills ||
    [
      { name: 'Python', required: 80, current: 65 },
      { name: 'OOP', required: 80, current: 60 },
      { name: 'SQL', required: 70, current: 55 },
      { name: 'Git', required: 70, current: 45 },
      { name: 'APIs', required: 70, current: 35 }
    ]

  const assessmentPercentage =
    roadmapData?.assessmentPercentage || 0

  const skillGaps = skills
    .map(skill => ({
      ...skill,
      gap: Math.max(0, skill.required - skill.current)
    }))
    .filter(skill => skill.gap > 0)
    .sort((a, b) => b.gap - a.gap)

  const totalRequired = skills.reduce(
    (total, skill) => total + skill.required,
    0
  )

  const totalCurrent = skills.reduce(
    (total, skill) => total + skill.current,
    0
  )

  const overallProgress = Math.min(
    100,
    Math.round((totalCurrent / totalRequired) * 100)
  )

  const roadmapSteps = [
    {
      number: 1,
      title: 'Understand the Fundamentals',
      icon: '📚',
      description:
        `Learn the basic concepts required for ${selectedCareer}. Build a strong foundation before moving to advanced topics.`,
      status: 'Current Step'
    },
    {
      number: 2,
      title: 'Close Your Skill Gaps',
      icon: '🎯',
      description:
        'Focus on the skills where your current level is below the required career level.',
      status: 'Upcoming'
    },
    {
      number: 3,
      title: 'Complete Practical Tasks',
      icon: '🛠️',
      description:
        'Apply what you learn by completing practical exercises and real-world tasks.',
      status: 'Upcoming'
    },
    {
      number: 4,
      title: 'Build Real Projects',
      icon: '🚀',
      description:
        'Create projects that demonstrate your technical knowledge and problem-solving ability.',
      status: 'Upcoming'
    },
    {
      number: 5,
      title: 'Retake Skill Assessment',
      icon: '📝',
      description:
        'Take another assessment after learning to measure your improvement.',
      status: 'Upcoming'
    },
    {
      number: 6,
      title: 'Build Your Portfolio',
      icon: '🏆',
      description:
        'Add your projects, certifications and achievements to your professional portfolio.',
      status: 'Upcoming'
    }
  ]

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


      {/* ================= HEADER ================= */}

      <div className="dashboard-header">

        <h1>
          🛣️ Personalized Career Roadmap
        </h1>

        <p>
          Follow a step-by-step learning path based on
          your career goal and current skill profile.
        </p>

      </div>


      {/* ================= CAREER GOAL ================= */}

      <div className="dashboard-card">

        <h2>
          🎯 Career Goal
        </h2>

        <div className="career-goal-box">

          <div className="career-goal-icon">
            🎯
          </div>

          <div>

            <h3>
              {selectedCareer}
            </h3>

            <p>
              Your roadmap is designed to help you develop
              the skills, knowledge and practical experience
              required for this career.
            </p>

          </div>

        </div>

      </div>


      {/* ================= OVERALL PROGRESS ================= */}

      <div className="dashboard-card">

        <h2>
          📊 Career Progress
        </h2>

        <p>
          Your current skill readiness based on the configured
          career requirements.
        </p>

        <div className="roadmap-progress">

          <div
            className="roadmap-progress-bar"
            style={{
              width: `${overallProgress}%`
            }}
          >
            {overallProgress}%
          </div>

        </div>

        <p>
          Current skill readiness:{' '}
          <strong>
            {overallProgress}%
          </strong>
        </p>

        {assessmentPercentage > 0 && (

          <div className="assessment-roadmap-result">

            📝 Latest assessment score:{' '}

            <strong>
              {assessmentPercentage}%
            </strong>

          </div>

        )}

      </div>


      {/* ================= SKILL GAPS ================= */}

      <div className="dashboard-card">

        <h2>
          🎯 Priority Skill Gaps
        </h2>

        <p>
          These skills are arranged according to the size
          of the gap between your current level and the
          required level.
        </p>

        {skillGaps.length === 0 ? (

          <div className="success-box">

            <h3>
              🎉 Required Skill Levels Reached
            </h3>

            <p>
              Your current skill levels meet the configured
              requirements for this career.
            </p>

          </div>

        ) : (

          <div className="roadmap-skill-list">

            {skillGaps.map((skill, index) => (

              <div
                className="roadmap-skill-card"
                key={skill.name}
              >

                <div className="skill-item-header">

                  <strong>
                    {index + 1}. {skill.name}
                  </strong>

                  <span>
                    Gap: {skill.gap}%
                  </span>

                </div>

                <div className="skill-bar">

                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.current}%`
                    }}
                  >
                    {skill.current}%
                  </div>

                </div>

                <div className="skill-comparison">

                  <span>
                    Current: {skill.current}%
                  </span>

                  <span>
                    Required: {skill.required}%
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* ================= LEARNING PATH ================= */}

      <div className="dashboard-card">

        <h2>
          🚀 Your Learning Path
        </h2>

        <p>
          Complete these stages step by step to move toward
          your selected career.
        </p>

        <div className="roadmap-list">

          {roadmapSteps.map(step => (

            <div
              className={
                step.status === 'Current Step'
                  ? 'roadmap-step roadmap-current'
                  : 'roadmap-step'
              }
              key={step.number}
            >

              <div className="roadmap-number">
                {step.number}
              </div>

              <div className="roadmap-content">

                <div className="roadmap-title">

                  <span className="roadmap-icon">
                    {step.icon}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                </div>

                <p>
                  {step.description}
                </p>

                <span
                  className={
                    step.status === 'Current Step'
                      ? 'roadmap-status current'
                      : 'roadmap-status'
                  }
                >
                  {step.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= RECOMMENDED ACTION ================= */}

      <div className="dashboard-card">

        <h2>
          ▶️ Recommended Next Action
        </h2>

        {skillGaps.length > 0 ? (

          <>

            <div className="recommended-skill">

              <div className="recommended-icon">
                🎯
              </div>

              <div>

                <h3>
                  Improve {skillGaps[0].name}
                </h3>

                <p>
                  This skill currently has the largest
                  identified gap in your career profile.
                </p>

              </div>

            </div>


            <div className="next-step-box">

              <div className="roadmap-stat-row">

                <span>
                  Current Level
                </span>

                <strong>
                  {skillGaps[0].current}%
                </strong>

              </div>


              <div className="roadmap-stat-row">

                <span>
                  Required Level
                </span>

                <strong>
                  {skillGaps[0].required}%
                </strong>

              </div>


              <div className="roadmap-stat-row">

                <span>
                  Skill Gap
                </span>

                <strong>
                  {skillGaps[0].gap}%
                </strong>

              </div>

            </div>


            <Link
              to="/skills"
              className="assessment-button"
            >
              📚 Improve Skills
            </Link>

          </>

        ) : (

          <div className="success-box">

            <h3>
              🎉 Good Progress
            </h3>

            <p>
              Continue with practical tasks, projects and
              portfolio development.
            </p>

          </div>

        )}

      </div>


      {/* ================= FUTURE FEATURES ================= */}

      <div className="dashboard-card">

        <h2>
          🔮 Upcoming Roadmap Features
        </h2>

        <p>
          These features will be connected to the backend
          as we continue developing the platform.
        </p>

        <div className="future-feature-grid">

          <div className="future-feature">

            <span>
              📚
            </span>

            <strong>
              Learning Resources
            </strong>

            <p>
              Courses, tutorials and documentation
              recommended for your skill gaps.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🛠️
            </span>

            <strong>
              Practical Tasks
            </strong>

            <p>
              Real-world exercises to apply what you learn.
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
              Build projects and add them to your portfolio.
            </p>

          </div>


          <div className="future-feature">

            <span>
              🤖
            </span>

            <strong>
              AI Recommendations
            </strong>

            <p>
              AI-powered learning recommendations based
              on your progress.
            </p>

          </div>

        </div>

      </div>


      {/* ================= NAVIGATION BUTTONS ================= */}

      <div className="dashboard-card">

        <h2>
          🔄 Continue Development
        </h2>

        <p>
          Review your skills or return to the main dashboard.
        </p>

        <div className="dashboard-button-row">

          <Link
            to="/skills"
            className="assessment-button"
          >
            ← Skills
          </Link>

          <Link
            to="/"
            className="assessment-button"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </div>
  )
}

export default CareerRoadmap