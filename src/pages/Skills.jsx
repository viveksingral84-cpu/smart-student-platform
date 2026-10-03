import '../App.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const careerData = {
  'Python Developer': {
    description:
      'Build software applications using Python, databases, APIs and problem-solving skills.',
    skills: [
      { name: 'Python', required: 80, current: 65 },
      { name: 'OOP', required: 80, current: 60 },
      { name: 'SQL', required: 70, current: 55 },
      { name: 'Git', required: 70, current: 45 },
      { name: 'APIs', required: 70, current: 35 }
    ]
  },

  'Frontend Developer': {
    description:
      'Create modern and interactive websites using frontend technologies.',
    skills: [
      { name: 'HTML', required: 80, current: 75 },
      { name: 'CSS', required: 80, current: 60 },
      { name: 'JavaScript', required: 85, current: 55 },
      { name: 'React', required: 75, current: 40 },
      { name: 'Git', required: 70, current: 45 }
    ]
  },

  'Data Analyst': {
    description:
      'Analyze data and generate useful insights using programming and data tools.',
    skills: [
      { name: 'Python', required: 75, current: 60 },
      { name: 'SQL', required: 85, current: 55 },
      { name: 'Excel', required: 75, current: 70 },
      { name: 'Statistics', required: 80, current: 50 },
      { name: 'Data Visualization', required: 75, current: 40 }
    ]
  },

  'Backend Developer': {
    description:
      'Build server-side applications, APIs and database systems.',
    skills: [
      { name: 'Programming', required: 80, current: 65 },
      { name: 'SQL', required: 80, current: 55 },
      { name: 'APIs', required: 85, current: 40 },
      { name: 'Git', required: 70, current: 45 },
      { name: 'Database', required: 80, current: 50 }
    ]
  }
}

const questionBank = {
  'Python Developer': [
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['function', 'def', 'fun', 'define'],
      answer: 'def'
    },
    {
      question: 'Which data type stores True or False in Python?',
      options: ['String', 'Boolean', 'Integer', 'List'],
      answer: 'Boolean'
    },
    {
      question: 'Which symbol is used for a comment in Python?',
      options: ['//', '#', '/*', '--'],
      answer: '#'
    },
    {
      question: 'Which method adds an item to the end of a Python list?',
      options: ['add()', 'insert()', 'append()', 'push()'],
      answer: 'append()'
    },
    {
      question: 'Which language is commonly used with Python for database queries?',
      options: ['SQL', 'HTML', 'CSS', 'XML'],
      answer: 'SQL'
    },
    {
      question: 'What does OOP stand for?',
      options: [
        'Object-Oriented Programming',
        'Object Operating Program',
        'Online Object Programming',
        'Open Object Process'
      ],
      answer: 'Object-Oriented Programming'
    },
    {
      question: 'Which keyword is used to create a class in Python?',
      options: ['object', 'class', 'struct', 'new'],
      answer: 'class'
    },
    {
      question: 'Which command is commonly used to install Python packages?',
      options: ['npm', 'pip', 'git', 'install'],
      answer: 'pip'
    },
    {
      question: 'What is Git mainly used for?',
      options: [
        'Image editing',
        'Version control',
        'Database design',
        'Video editing'
      ],
      answer: 'Version control'
    },
    {
      question: 'What does API stand for?',
      options: [
        'Application Programming Interface',
        'Application Process Internet',
        'Advanced Programming Input',
        'Application Program Internet'
      ],
      answer: 'Application Programming Interface'
    },
    {
      question: 'Which structure stores key-value pairs in Python?',
      options: ['List', 'Tuple', 'Dictionary', 'Set'],
      answer: 'Dictionary'
    },
    {
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', '//', '%%'],
      answer: '**'
    }
  ],

  'Frontend Developer': [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Text Machine Language',
        'Hyper Tool Multi Language',
        'Home Text Markup Language'
      ],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Which language is mainly used to style web pages?',
      options: ['HTML', 'CSS', 'SQL', 'Python'],
      answer: 'CSS'
    },
    {
      question: 'Which language adds logic and interactivity to web pages?',
      options: ['CSS', 'HTML', 'JavaScript', 'SQL'],
      answer: 'JavaScript'
    },
    {
      question: 'What does CSS stand for?',
      options: [
        'Cascading Style Sheets',
        'Computer Style System',
        'Creative Style Syntax',
        'Colorful Style Sheets'
      ],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'Which library is commonly used to build React applications?',
      options: ['React', 'Laravel', 'Django', 'Spring'],
      answer: 'React'
    },
    {
      question: 'Which HTML tag is used to create a link?',
      options: ['<p>', '<a>', '<link>', '<href>'],
      answer: '<a>'
    },
    {
      question: 'Which CSS property changes text color?',
      options: ['font', 'text-color', 'color', 'background'],
      answer: 'color'
    },
    {
      question: 'Which JavaScript keyword declares a constant?',
      options: ['var', 'let', 'const', 'constant'],
      answer: 'const'
    },
    {
      question: 'What is Git mainly used for?',
      options: [
        'Version control',
        'Image editing',
        'Database management',
        'Video editing'
      ],
      answer: 'Version control'
    },
    {
      question: 'What does UI stand for?',
      options: [
        'User Interface',
        'Universal Internet',
        'User Information',
        'Unified Input'
      ],
      answer: 'User Interface'
    },
    {
      question: 'Which HTML tag is used for the largest heading?',
      options: ['<h6>', '<head>', '<h1>', '<heading>'],
      answer: '<h1>'
    },
    {
      question: 'Which React feature is used to manage component state?',
      options: ['useState', 'useStyle', 'usePage', 'useHTML'],
      answer: 'useState'
    }
  ],

  'Data Analyst': [
    {
      question: 'Which language is commonly used for data analysis?',
      options: ['Python', 'HTML', 'CSS', 'XML'],
      answer: 'Python'
    },
    {
      question: 'Which language is used to query relational databases?',
      options: ['SQL', 'CSS', 'HTML', 'JSON'],
      answer: 'SQL'
    },
    {
      question: 'Which Python library is commonly used for data manipulation?',
      options: ['Pandas', 'React', 'Express', 'Flutter'],
      answer: 'Pandas'
    },
    {
      question: 'What is the average of a set of numbers called?',
      options: ['Median', 'Mean', 'Mode', 'Range'],
      answer: 'Mean'
    },
    {
      question: 'Which tool is commonly used for spreadsheets?',
      options: ['Excel', 'React', 'Git', 'Node'],
      answer: 'Excel'
    },
    {
      question: 'What does SQL stand for?',
      options: [
        'Structured Query Language',
        'Simple Question Language',
        'System Query Logic',
        'Structured Question List'
      ],
      answer: 'Structured Query Language'
    },
    {
      question: 'Which chart is commonly used to compare categories?',
      options: ['Bar chart', 'Paragraph', 'Text box', 'Code block'],
      answer: 'Bar chart'
    },
    {
      question: 'What is a database?',
      options: [
        'A collection of organized data',
        'A programming language',
        'A web browser',
        'An operating system'
      ],
      answer: 'A collection of organized data'
    },
    {
      question: 'Which value represents the middle of ordered data?',
      options: ['Mean', 'Median', 'Mode', 'Sum'],
      answer: 'Median'
    },
    {
      question: 'Which Python library is commonly used for visualization?',
      options: ['Matplotlib', 'React', 'Firebase', 'Express'],
      answer: 'Matplotlib'
    },
    {
      question: 'What is data visualization?',
      options: [
        'Representing data using visual forms',
        'Deleting data',
        'Encrypting data',
        'Writing code'
      ],
      answer: 'Representing data using visual forms'
    },
    {
      question: 'What is a dataset?',
      options: [
        'A collection of related data',
        'A programming language',
        'A database server',
        'A computer network'
      ],
      answer: 'A collection of related data'
    }
  ],

  'Backend Developer': [
    {
      question: 'What is the main role of a backend?',
      options: [
        'Handle server-side logic and data',
        'Design logos',
        'Edit images',
        'Create presentations'
      ],
      answer: 'Handle server-side logic and data'
    },
    {
      question: 'Which language is commonly used for backend development?',
      options: ['Python', 'HTML', 'CSS', 'Figma'],
      answer: 'Python'
    },
    {
      question: 'What does API stand for?',
      options: [
        'Application Programming Interface',
        'Application Process Input',
        'Advanced Program Internet',
        'Application Program Index'
      ],
      answer: 'Application Programming Interface'
    },
    {
      question: 'Which technology is commonly used to store structured data?',
      options: ['Database', 'CSS', 'HTML', 'Browser'],
      answer: 'Database'
    },
    {
      question: 'Which language is used to query relational databases?',
      options: ['SQL', 'CSS', 'HTML', 'XML'],
      answer: 'SQL'
    },
    {
      question: 'What is Git used for?',
      options: [
        'Version control',
        'Image editing',
        'Database storage',
        'Web hosting only'
      ],
      answer: 'Version control'
    },
    {
      question: 'What does HTTP define?',
      options: [
        'Communication rules for web requests',
        'A database',
        'A programming language',
        'A design tool'
      ],
      answer: 'Communication rules for web requests'
    },
    {
      question: 'What does JSON commonly represent?',
      options: [
        'Structured data',
        'Image files only',
        'Audio files only',
        'Operating systems'
      ],
      answer: 'Structured data'
    },
    {
      question: 'What is authentication?',
      options: [
        "Checking a user's identity",
        'Deleting a database',
        'Designing a webpage',
        'Writing CSS'
      ],
      answer: "Checking a user's identity"
    },
    {
      question: 'What is a server?',
      options: [
        'A system that provides services or resources',
        'A CSS file',
        'A programming variable',
        'An image'
      ],
      answer: 'A system that provides services or resources'
    },
    {
      question: 'Which database type stores data in tables?',
      options: [
        'Relational database',
        'Image database',
        'Video database',
        'Text editor'
      ],
      answer: 'Relational database'
    },
    {
      question: 'What is an endpoint in an API?',
      options: [
        'A specific URL or route used to access a service',
        'A CSS property',
        'A database column only',
        'A computer monitor'
      ],
      answer: 'A specific URL or route used to access a service'
    }
  ]
}

function Skills() {
  const navigate = useNavigate()

  const [selectedCareer, setSelectedCareer] =
    useState('Python Developer')

  const [assessmentStarted, setAssessmentStarted] =
    useState(false)

  const [assessmentCompleted, setAssessmentCompleted] =
    useState(false)

  const [currentQuestion, setCurrentQuestion] =
    useState(0)

  const [selectedAnswer, setSelectedAnswer] =
    useState('')

  const [score, setScore] =
    useState(0)

  const [answeredQuestions, setAnsweredQuestions] =
    useState([])

  const currentCareer = careerData[selectedCareer]

  const questions = questionBank[selectedCareer]

  const skillGaps = currentCareer.skills
    .map(skill => ({
      ...skill,
      gap: Math.max(0, skill.required - skill.current)
    }))
    .filter(skill => skill.gap > 0)
    .sort((a, b) => b.gap - a.gap)

  const totalCurrent = currentCareer.skills.reduce(
    (total, skill) => total + skill.current,
    0
  )

  const totalRequired = currentCareer.skills.reduce(
    (total, skill) => total + skill.required,
    0
  )

  const overallProgress = Math.round(
    (totalCurrent / totalRequired) * 100
  )

  const percentage = Math.round(
    (score / questions.length) * 100
  )

  const skillLevel =
    percentage >= 80
      ? 'Advanced'
      : percentage >= 60
        ? 'Intermediate'
        : 'Beginner'

  function handleCareerChange(event) {
    setSelectedCareer(event.target.value)
    setAssessmentStarted(false)
    setAssessmentCompleted(false)
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setAnsweredQuestions([])
  }

  function startAssessment() {
    setAssessmentStarted(true)
    setAssessmentCompleted(false)
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setAnsweredQuestions([])
  }

  function handleAnswerSelect(answer) {
    setSelectedAnswer(answer)
  }

  function handleNextQuestion() {
    if (!selectedAnswer) {
      alert('Please select an answer before continuing.')
      return
    }

    const current = questions[currentQuestion]

    const isCorrect =
      selectedAnswer === current.answer

    const newAnsweredQuestions = [
      ...answeredQuestions,
      {
        question: current.question,
        selectedAnswer,
        correctAnswer: current.answer,
        isCorrect
      }
    ]

    setAnsweredQuestions(newAnsweredQuestions)

    if (isCorrect) {
      setScore(previousScore => previousScore + 1)
    }

    setSelectedAnswer('')

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        previousQuestion => previousQuestion + 1
      )
    } else {
      setAssessmentCompleted(true)
      setAssessmentStarted(false)
    }
  }

  function retakeAssessment() {
    setAssessmentStarted(true)
    setAssessmentCompleted(false)
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setAnsweredQuestions([])
  }

  function openRoadmap() {
    navigate('/roadmap', {
      state: {
        selectedCareer,
        skills: currentCareer.skills,
        assessmentScore: score,
        assessmentPercentage: percentage,
        answeredQuestions
      }
    })
  }

  return (
    <div className="app">

      {/* ================= NAVIGATION ================= */}

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
          💻 Skills & Skill Gap Analysis
        </h1>

        <p>
          Check your current skills, identify gaps and
          test your knowledge.
        </p>

      </div>


      {/* ================= CAREER SELECTION ================= */}

      <div className="dashboard-card">

        <h2>
          🎯 Select Your Career
        </h2>

        <p>
          Your skill requirements will change according
          to the selected career.
        </p>

        <select
          className="career-select"
          value={selectedCareer}
          onChange={handleCareerChange}
        >

          {Object.keys(careerData).map(career => (
            <option
              value={career}
              key={career}
            >
              {career}
            </option>
          ))}

        </select>

        <div className="career-goal-box">

          <div className="career-goal-icon">
            🎯
          </div>

          <div>

            <h3>
              {selectedCareer}
            </h3>

            <p>
              {currentCareer.description}
            </p>

          </div>

        </div>

      </div>


      {/* ================= REQUIRED SKILLS ================= */}

      <div className="dashboard-card">

        <h2>
          🧠 Required Skills
        </h2>

        <p>
          These are the configured skill levels required
          for your selected career.
        </p>

        <div className="roadmap-skill-list">

          {currentCareer.skills.map(skill => (

            <div
              className="roadmap-skill-card"
              key={skill.name}
            >

              <div className="skill-item-header">

                <strong>
                  {skill.name}
                </strong>

                <span>
                  Required: {skill.required}%
                </span>

              </div>

              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.required}%`
                  }}
                >
                  {skill.required}%
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= CURRENT SKILLS ================= */}

      <div className="dashboard-card">

        <h2>
          📊 Your Current Skills
        </h2>

        <p>
          These values are sample skill levels for now.
          Later they will come from your profile,
          assessments and practical performance.
        </p>

        <div className="roadmap-skill-list">

          {currentCareer.skills.map(skill => (

            <div
              className="roadmap-skill-card"
              key={skill.name}
            >

              <div className="skill-item-header">

                <strong>
                  {skill.name}
                </strong>

                <span>
                  Current: {skill.current}%
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

            </div>

          ))}

        </div>

      </div>


      {/* ================= SKILL GAP ================= */}

      <div className="dashboard-card">

        <h2>
          🔎 Skill Gap Analysis
        </h2>

        <p>
          A skill gap shows the difference between your
          current level and the level required for your career.
        </p>

        <div className="skill-gap-summary">

          <div className="progress-card">

            <span>
              📈
            </span>

            <h3>
              Overall Readiness
            </h3>

            <strong>
              {overallProgress}%
            </strong>

            <p>
              Current career readiness
            </p>

          </div>


          <div className="progress-card">

            <span>
              🎯
            </span>

            <h3>
              Skills With Gaps
            </h3>

            <strong>
              {skillGaps.length}
            </strong>

            <p>
              Skills needing improvement
            </p>

          </div>

        </div>


        <div className="roadmap-skill-list">

          {skillGaps.map(skill => (

            <div
              className="roadmap-skill-card"
              key={skill.name}
            >

              <div className="skill-item-header">

                <strong>
                  {skill.name}
                </strong>

                <span>
                  Gap: {skill.gap}%
                </span>

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

      </div>


      {/* ================= ASSESSMENT INTRO ================= */}

      {!assessmentStarted &&
        !assessmentCompleted && (

          <div className="dashboard-card">

            <h2>
              📝 Skill Assessment
            </h2>

            <p>
              Test your knowledge with a short assessment
              related to your selected career.
            </p>

            <div className="assessment-info">

              <div className="assessment-info-item">
                <strong>
                  12
                </strong>
                <span>
                  Questions
                </span>
              </div>

              <div className="assessment-info-item">
                <strong>
                  MCQ
                </strong>
                <span>
                  Question Type
                </span>
              </div>

              <div className="assessment-info-item">
                <strong>
                  60%
                </strong>
                <span>
                  Passing Score
                </span>
              </div>

            </div>

            <button
              className="assessment-button"
              onClick={startAssessment}
            >
              ▶️ Start Assessment
            </button>

          </div>

        )}


      {/* ================= ASSESSMENT QUESTIONS ================= */}

      {assessmentStarted && (

        <div className="dashboard-card">

          <div className="assessment-header">

            <div>

              <h2>
                📝 {selectedCareer} Assessment
              </h2>

              <p>
                Question {currentQuestion + 1} of {questions.length}
              </p>

            </div>

            <div className="assessment-progress">

              {Math.round(
                ((currentQuestion + 1) /
                  questions.length) *
                  100
              )}%

            </div>

          </div>


          <div className="assessment-progress-bar">

            <div
              className="assessment-progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`
              }}
            />

          </div>


          <div className="question-box">

            <h3>
              {currentQuestion + 1}.{' '}
              {questions[currentQuestion].question}
            </h3>

            <div className="answer-options">

              {questions[currentQuestion].options.map(
                option => (

                  <button
                    key={option}
                    className={
                      selectedAnswer === option
                        ? 'answer-option selected'
                        : 'answer-option'
                    }
                    onClick={() =>
                      handleAnswerSelect(option)
                    }
                  >
                    {option}
                  </button>

                )
              )}

            </div>

          </div>


          <button
            className="assessment-button"
            onClick={handleNextQuestion}
          >
            {currentQuestion === questions.length - 1
              ? 'Submit Assessment'
              : 'Next Question →'}
          </button>

        </div>

      )}


      {/* ================= RESULT ================= */}

      {assessmentCompleted && (

        <div className="dashboard-card">

          <h2>
            🎉 Assessment Completed
          </h2>

          <div className="assessment-result">

            <div className="result-score">

              <span>
                Your Score
              </span>

              <strong>
                {score}/{questions.length}
              </strong>

              <p>
                {percentage}%
              </p>

            </div>


            <div className="result-details">

              <div className="result-item">

                <span>
                  Skill Level
                </span>

                <strong>
                  {skillLevel}
                </strong>

              </div>


              <div className="result-item">

                <span>
                  Status
                </span>

                <strong>
                  {percentage >= 60
                    ? 'Passed'
                    : 'Needs Improvement'}
                </strong>

              </div>

            </div>

          </div>


          {/* Skill Performance */}

          <h3>
            📊 Assessment Performance
          </h3>

          <div className="roadmap-skill-list">

            {currentCareer.skills.map(skill => (

              <div
                className="roadmap-skill-card"
                key={skill.name}
              >

                <div className="skill-item-header">

                  <strong>
                    {skill.name}
                  </strong>

                  <span>
                    Current: {skill.current}%
                  </span>

                </div>

                <div className="skill-comparison">

                  <span>
                    Required: {skill.required}%
                  </span>

                  <span>
                    Gap: {
                      Math.max(
                        0,
                        skill.required -
                          skill.current
                      )
                    }%
                  </span>

                </div>

              </div>

            ))}

          </div>


          {/* Buttons */}

          <div className="dashboard-button-row">

            <button
              className="assessment-button"
              onClick={retakeAssessment}
            >
              🔄 Retake Assessment
            </button>

            <button
              className="assessment-button"
              onClick={openRoadmap}
            >
              🛣️ View Career Roadmap
            </button>

          </div>

        </div>

      )}


      {/* ================= IMPROVEMENT ================= */}

      {!assessmentStarted &&
        skillGaps.length > 0 && (

          <div className="dashboard-card">

            <h2>
              🎯 Recommended Improvement Areas
            </h2>

            <p>
              Focus on these skills to reduce your
              career skill gaps.
            </p>

            <div className="recommended-list">

              {skillGaps.slice(0, 3).map(
                (skill, index) => (

                  <div
                    className="recommended-skill"
                    key={skill.name}
                  >

                    <div className="recommended-icon">
                      {index + 1}
                    </div>

                    <div>

                      <h3>
                        Improve {skill.name}
                      </h3>

                      <p>
                        Current level: {skill.current}%
                        {' | '}
                        Required level: {skill.required}%
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        )}


      {/* ================= ROADMAP LINK ================= */}

      <div className="dashboard-card">

        <h2>
          🛣️ Continue Your Career Journey
        </h2>

        <p>
          View your personalized roadmap and continue
          working toward your career goal.
        </p>

        <Link
          to="/roadmap"
          className="assessment-button"
        >
          Open Career Roadmap →
        </Link>

      </div>

    </div>
  )
}

export default Skills