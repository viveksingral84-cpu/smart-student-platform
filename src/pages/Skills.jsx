import "../App.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const careerData = {
  "Python Developer": {
    description:
      "Build software applications using Python, databases, APIs and problem-solving skills.",
    skills: [
      { name: "Python", required: 80, current: 65 },
      { name: "OOP", required: 80, current: 60 },
      { name: "SQL", required: 70, current: 55 },
      { name: "Git", required: 70, current: 45 },
      { name: "APIs", required: 70, current: 35 },
    ],
  },

  "Frontend Developer": {
    description:
      "Create modern and interactive websites using frontend technologies.",
    skills: [
      { name: "HTML", required: 80, current: 75 },
      { name: "CSS", required: 80, current: 60 },
      { name: "JavaScript", required: 85, current: 55 },
      { name: "React", required: 75, current: 40 },
      { name: "Git", required: 70, current: 45 },
    ],
  },

  "Data Analyst": {
    description:
      "Analyze data and generate useful insights using programming and data tools.",
    skills: [
      { name: "Python", required: 75, current: 60 },
      { name: "SQL", required: 85, current: 55 },
      { name: "Excel", required: 75, current: 70 },
      { name: "Statistics", required: 80, current: 50 },
      { name: "Data Visualization", required: 75, current: 40 },
    ],
  },

  "Backend Developer": {
    description:
      "Build server-side applications, APIs and database systems.",
    skills: [
      { name: "Programming", required: 80, current: 65 },
      { name: "SQL", required: 80, current: 55 },
      { name: "APIs", required: 85, current: 40 },
      { name: "Git", required: 70, current: 45 },
      { name: "Database", required: 80, current: 50 },
    ],
  },
};

const questionBank = {
  "Python Developer": [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "define"],
      answer: "def",
    },
    {
      question: "Which data type stores True or False in Python?",
      options: ["String", "Boolean", "Integer", "List"],
      answer: "Boolean",
    },
    {
      question: "Which symbol is used for a comment in Python?",
      options: ["//", "#", "/*", "--"],
      answer: "#",
    },
    {
      question: "Which method adds an item to the end of a Python list?",
      options: ["add()", "insert()", "append()", "push()"],
      answer: "append()",
    },
    {
      question: "Which language is commonly used with Python for database queries?",
      options: ["SQL", "HTML", "CSS", "XML"],
      answer: "SQL",
    },
    {
      question: "What does OOP stand for?",
      options: [
        "Object-Oriented Programming",
        "Object Operating Program",
        "Online Object Programming",
        "Open Object Process",
      ],
      answer: "Object-Oriented Programming",
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["object", "class", "struct", "new"],
      answer: "class",
    },
    {
      question: "Which command is commonly used to install Python packages?",
      options: ["npm", "pip", "git", "install"],
      answer: "pip",
    },
    {
      question: "What is Git mainly used for?",
      options: [
        "Image editing",
        "Version control",
        "Database design",
        "Video editing",
      ],
      answer: "Version control",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Application Process Internet",
        "Advanced Programming Input",
        "Application Program Internet",
      ],
      answer: "Application Programming Interface",
    },
    {
      question: "Which structure stores key-value pairs in Python?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      answer: "Dictionary",
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "//", "%%"],
      answer: "**",
    },
  ],

  "Frontend Developer": [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "Home Text Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is mainly used to style web pages?",
      options: ["HTML", "CSS", "SQL", "Python"],
      answer: "CSS",
    },
    {
      question: "Which language adds logic and interactivity to web pages?",
      options: ["CSS", "HTML", "JavaScript", "SQL"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Style Syntax",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which library is commonly used to build React applications?",
      options: ["React", "Laravel", "Django", "Spring"],
      answer: "React",
    },
    {
      question: "Which HTML tag is used to create a link?",
      options: ["<p>", "<a>", "<link>", "<href>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property changes text color?",
      options: ["font", "text-color", "color", "background"],
      answer: "color",
    },
    {
      question: "Which JavaScript keyword declares a constant?",
      options: ["var", "let", "const", "constant"],
      answer: "const",
    },
    {
      question: "What is Git mainly used for?",
      options: [
        "Version control",
        "Image editing",
        "Database management",
        "Video editing",
      ],
      answer: "Version control",
    },
    {
      question: "What does UI stand for?",
      options: [
        "User Interface",
        "Universal Internet",
        "User Information",
        "Unified Input",
      ],
      answer: "User Interface",
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<head>", "<h1>", "<heading>"],
      answer: "<h1>",
    },
    {
      question: "Which React feature is used to manage component state?",
      options: ["useState", "useStyle", "usePage", "useHTML"],
      answer: "useState",
    },
  ],

  "Data Analyst": [
    {
      question: "Which language is commonly used for data analysis?",
      options: ["Python", "HTML", "CSS", "XML"],
      answer: "Python",
    },
    {
      question: "Which language is used to query relational databases?",
      options: ["SQL", "CSS", "HTML", "JSON"],
      answer: "SQL",
    },
    {
      question: "Which Python library is commonly used for data manipulation?",
      options: ["Pandas", "React", "Express", "Flutter"],
      answer: "Pandas",
    },
    {
      question: "What is the average of a set of numbers called?",
      options: ["Median", "Mean", "Mode", "Range"],
      answer: "Mean",
    },
    {
      question: "Which tool is commonly used for spreadsheets?",
      options: ["Excel", "React", "Git", "Node"],
      answer: "Excel",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "System Query Logic",
        "Structured Question List",
      ],
      answer: "Structured Query Language",
    },
    {
      question: "Which chart is commonly used to compare categories?",
      options: ["Bar chart", "Paragraph", "Text box", "Code block"],
      answer: "Bar chart",
    },
    {
      question: "What is a database?",
      options: [
        "A collection of organized data",
        "A programming language",
        "A web browser",
        "An operating system",
      ],
      answer: "A collection of organized data",
    },
    {
      question: "Which value represents the middle of ordered data?",
      options: ["Mean", "Median", "Mode", "Sum"],
      answer: "Median",
    },
    {
      question: "Which Python library is commonly used for visualization?",
      options: ["Matplotlib", "React", "Firebase", "Express"],
      answer: "Matplotlib",
    },
    {
      question: "What is data visualization?",
      options: [
        "Representing data using visual forms",
        "Deleting data",
        "Encrypting data",
        "Writing code",
      ],
      answer: "Representing data using visual forms",
    },
    {
      question: "What is a dataset?",
      options: [
        "A collection of related data",
        "A programming language",
        "A database server",
        "A computer network",
      ],
      answer: "A collection of related data",
    },
  ],

  "Backend Developer": [
    {
      question: "What is the main role of a backend?",
      options: [
        "Handle server-side logic and data",
        "Design logos",
        "Edit images",
        "Create presentations",
      ],
      answer: "Handle server-side logic and data",
    },
    {
      question: "Which language is commonly used for backend development?",
      options: ["Python", "HTML", "CSS", "Figma"],
      answer: "Python",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Application Process Input",
        "Advanced Program Internet",
        "Application Program Index",
      ],
      answer: "Application Programming Interface",
    },
    {
      question: "Which technology is commonly used to store structured data?",
      options: ["Database", "CSS", "HTML", "Browser"],
      answer: "Database",
    },
    {
      question: "Which language is used to query relational databases?",
      options: ["SQL", "CSS", "HTML", "XML"],
      answer: "SQL",
    },
    {
      question: "What is Git used for?",
      options: [
        "Version control",
        "Image editing",
        "Database storage",
        "Web hosting only",
      ],
      answer: "Version control",
    },
    {
      question: "What does HTTP define?",
      options: [
        "Communication rules for web requests",
        "A database",
        "A programming language",
        "A design tool",
      ],
      answer: "Communication rules for web requests",
    },
    {
      question: "What does JSON commonly represent?",
      options: [
        "Structured data",
        "Image files only",
        "Audio files only",
        "Operating systems",
      ],
      answer: "Structured data",
    },
    {
      question: "What is authentication?",
      options: [
        "Checking a user's identity",
        "Deleting a database",
        "Designing a webpage",
        "Writing CSS",
      ],
      answer: "Checking a user's identity",
    },
    {
      question: "What is a server?",
      options: [
        "A system that provides services or resources",
        "A CSS file",
        "A programming variable",
        "An image",
      ],
      answer: "A system that provides services or resources",
    },
    {
      question: "Which database type stores data in tables?",
      options: [
        "Relational database",
        "Image database",
        "Video database",
        "Text editor",
      ],
      answer: "Relational database",
    },
    {
      question: "What is an endpoint in an API?",
      options: [
        "A specific URL or route used to access a service",
        "A CSS property",
        "A database column only",
        "A computer monitor",
      ],
      answer: "A specific URL or route used to access a service",
    },
  ],
};

function Skills() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [selectedCareer, setSelectedCareer] =
    useState("Python Developer");

  const [assessmentStarted, setAssessmentStarted] =
    useState(false);

  const [assessmentCompleted, setAssessmentCompleted] =
    useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [score, setScore] = useState(0);

  const [answeredQuestions, setAnsweredQuestions] =
    useState([]);

  const currentCareer = careerData[selectedCareer];
  const questions = questionBank[selectedCareer];

  const skillGaps = currentCareer.skills
    .map((skill) => ({
      ...skill,
      gap: Math.max(0, skill.required - skill.current),
    }))
    .filter((skill) => skill.gap > 0)
    .sort((a, b) => b.gap - a.gap);

  const totalCurrent = currentCareer.skills.reduce(
    (total, skill) => total + skill.current,
    0
  );

  const totalRequired = currentCareer.skills.reduce(
    (total, skill) => total + skill.required,
    0
  );

  const overallProgress = Math.round(
    (totalCurrent / totalRequired) * 100
  );

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const skillLevel =
    percentage >= 80
      ? "Advanced"
      : percentage >= 60
      ? "Intermediate"
      : "Beginner";

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  function handleCareerChange(event) {
    setSelectedCareer(event.target.value);
    setAssessmentStarted(false);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setAnsweredQuestions([]);
  }

  function startAssessment() {
    setAssessmentStarted(true);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setAnsweredQuestions([]);
  }

  function handleAnswerSelect(answer) {
    setSelectedAnswer(answer);
  }

  function handleNextQuestion() {
    if (!selectedAnswer) {
      alert("Please select an answer before continuing.");
      return;
    }

    const current = questions[currentQuestion];

    const isCorrect =
      selectedAnswer === current.answer;

    const newAnsweredQuestions = [
      ...answeredQuestions,
      {
        question: current.question,
        selectedAnswer,
        correctAnswer: current.answer,
        isCorrect,
      },
    ];

    setAnsweredQuestions(newAnsweredQuestions);

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        (previousQuestion) => previousQuestion + 1
      );
    } else {
      setAssessmentCompleted(true);
      setAssessmentStarted(false);
    }
  }

  function retakeAssessment() {
    setAssessmentStarted(true);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setAnsweredQuestions([]);
  }

  function openRoadmap() {
    navigate("/roadmap", {
      state: {
        selectedCareer,
        skills: currentCareer.skills,
        assessmentScore: score,
        assessmentPercentage: percentage,
        answeredQuestions,
      },
    });
  }

  return (
    <div className="skills-page">
      {/* SIDEBAR */}

      <aside className="skills-sidebar">
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

          <Link to="/career" className="sidebar-link">
            <span>🎯</span>
            Career
          </Link>

          <Link
            to="/skills"
            className="sidebar-link active"
          >
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
          <div className="student-mini-profile">
            <div className="student-avatar">
              {user?.email?.charAt(0).toUpperCase() || "S"}
            </div>

            <div className="student-mini-info">
              <strong>Student</strong>
              <span>
                {user?.email || "Student Account"}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-logout"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main className="skills-main">
        <header className="skills-topbar">
          <div>
            <span className="skills-small-title">
              SKILLS DEVELOPMENT
            </span>

            <h1>
              Skills & Skill Gap Analysis
            </h1>

            <p>
              Improve your skills and prepare for your
              target career.
            </p>
          </div>

          <div className="skills-top-actions">
            <button
              type="button"
              className="skills-notification"
            >
              🔔
            </button>

            <div className="skills-profile">
              {user?.email?.charAt(0).toUpperCase() || "S"}
            </div>
          </div>
        </header>

        {/* HERO */}

        <section className="skills-hero">
          <div className="skills-hero-icon">
            💻
          </div>

          <div className="skills-hero-content">
            <span>SKILLS DEVELOPMENT</span>

            <h2>
              Build the skills your career needs.
            </h2>

            <p>
              Check your current abilities, identify skill
              gaps and test your knowledge through
              career-focused assessments.
            </p>
          </div>

          <div className="skills-hero-progress">
            <strong>{overallProgress}%</strong>
            <span>Career Readiness</span>

            <div className="skills-hero-progress-bar">
              <div
                style={{
                  width: `${overallProgress}%`,
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* CAREER SELECTION */}

        <section className="skills-section">
          <div className="skills-section-heading">
            <div>
              <span className="skills-section-label">
                CAREER TARGET
              </span>

              <h2>Choose Your Career</h2>

              <p>
                Your required skills and assessment
                questions change according to your
                selected career.
              </p>
            </div>
          </div>

          <div className="skills-career-selection">
            <div className="skills-career-select-box">
              <label>Target Career</label>

              <select
                value={selectedCareer}
                onChange={handleCareerChange}
              >
                {Object.keys(careerData).map(
                  (career) => (
                    <option
                      value={career}
                      key={career}
                    >
                      {career}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="skills-career-info">
              <div className="skills-career-icon">
                🎯
              </div>

              <div>
                <span>SELECTED CAREER</span>

                <h3>{selectedCareer}</h3>

                <p>
                  {currentCareer.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIRED SKILLS */}

        <section className="skills-section">
          <div className="skills-section-heading">
            <div>
              <span className="skills-section-label">
                CAREER REQUIREMENTS
              </span>

              <h2>Required Skills</h2>

              <p>
                These are the skill levels recommended
                for your selected career.
              </p>
            </div>

            <div className="skills-section-count">
              {currentCareer.skills.length} Skills
            </div>
          </div>

          <div className="skills-modern-grid">
            {currentCareer.skills.map((skill, index) => (
              <div
                className="skills-modern-card"
                key={skill.name}
              >
                <div className="skills-card-top">
                  <div className="skills-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span>
                    Required {skill.required}%
                  </span>
                </div>

                <h3>{skill.name}</h3>

                <div className="skills-bar">
                  <div
                    className="skills-bar-fill required"
                    style={{
                      width: `${skill.required}%`,
                    }}
                  ></div>
                </div>

                <div className="skills-card-value">
                  <span>Target level</span>
                  <strong>{skill.required}%</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENT SKILLS */}

        <section className="skills-section">
          <div className="skills-section-heading">
            <div>
              <span className="skills-section-label">
                YOUR CURRENT LEVEL
              </span>

              <h2>Your Current Skills</h2>

              <p>
                These are sample skill levels for now.
                Later they can be connected to your profile
                and assessment performance.
              </p>
            </div>
          </div>

          <div className="skills-modern-grid">
            {currentCareer.skills.map((skill, index) => (
              <div
                className="skills-modern-card current"
                key={skill.name}
              >
                <div className="skills-card-top">
                  <div className="skills-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span>
                    Current {skill.current}%
                  </span>
                </div>

                <h3>{skill.name}</h3>

                <div className="skills-bar">
                  <div
                    className="skills-bar-fill current"
                    style={{
                      width: `${skill.current}%`,
                    }}
                  ></div>
                </div>

                <div className="skills-card-value">
                  <span>Your level</span>
                  <strong>{skill.current}%</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GAP ANALYSIS */}

        <section className="skills-section">
          <div className="skills-section-heading">
            <div>
              <span className="skills-section-label">
                ANALYSIS
              </span>

              <h2>Skill Gap Analysis</h2>

              <p>
                See the difference between your current
                level and the level required for your
                career.
              </p>
            </div>
          </div>

          <div className="skills-analysis-grid">
            <div className="skills-analysis-card readiness">
              <div className="skills-analysis-icon">
                📈
              </div>

              <span>OVERALL READINESS</span>

              <strong>{overallProgress}%</strong>

              <p>
                Current career readiness
              </p>
            </div>

            <div className="skills-analysis-card gaps">
              <div className="skills-analysis-icon">
                🎯
              </div>

              <span>SKILLS WITH GAPS</span>

              <strong>{skillGaps.length}</strong>

              <p>
                Skills needing improvement
              </p>
            </div>

            <div className="skills-analysis-card target">
              <div className="skills-analysis-icon">
                🚀
              </div>

              <span>TARGET CAREER</span>

              <strong>
                {selectedCareer.split(" ")[0]}
              </strong>

              <p>
                Your selected career path
              </p>
            </div>
          </div>

          <div className="skills-gap-list">
            {skillGaps.map((skill, index) => (
              <div
                className="skills-gap-item"
                key={skill.name}
              >
                <div className="skills-gap-number">
                  {index + 1}
                </div>

                <div className="skills-gap-content">
                  <div>
                    <h3>{skill.name}</h3>

                    <p>
                      Current: {skill.current}%{" "}
                      <span>→</span>{" "}
                      Required: {skill.required}%
                    </p>
                  </div>

                  <strong>
                    Gap {skill.gap}%
                  </strong>
                </div>

                <div className="skills-gap-bar">
                  <div
                    style={{
                      width: `${skill.gap}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ASSESSMENT INTRO */}

        {!assessmentStarted &&
          !assessmentCompleted && (
            <section className="skills-assessment-card">
              <div className="skills-assessment-icon">
                📝
              </div>

              <div className="skills-assessment-content">
                <span>KNOWLEDGE CHECK</span>

                <h2>Skill Assessment</h2>

                <p>
                  Test your knowledge with 12
                  career-focused multiple-choice
                  questions.
                </p>

                <div className="skills-assessment-info">
                  <div>
                    <strong>12</strong>
                    <span>Questions</span>
                  </div>

                  <div>
                    <strong>MCQ</strong>
                    <span>Question Type</span>
                  </div>

                  <div>
                    <strong>60%</strong>
                    <span>Passing Score</span>
                  </div>
                </div>
              </div>

              <button
                className="skills-primary-button"
                onClick={startAssessment}
              >
                ▶ Start Assessment
              </button>
            </section>
          )}

        {/* QUESTIONS */}

        {assessmentStarted && (
          <section className="skills-question-card">
            <div className="skills-question-header">
              <div>
                <span>
                  QUESTION {currentQuestion + 1} OF{" "}
                  {questions.length}
                </span>

                <h2>
                  {selectedCareer} Assessment
                </h2>
              </div>

              <strong>
                {Math.round(
                  ((currentQuestion + 1) /
                    questions.length) *
                    100
                )}
                %
              </strong>
            </div>

            <div className="skills-question-progress">
              <div
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <div className="skills-question-box">
              <h3>
                {currentQuestion + 1}.{" "}
                {questions[currentQuestion].question}
              </h3>

              <div className="skills-answer-options">
                {questions[
                  currentQuestion
                ].options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={
                      selectedAnswer === option
                        ? "skills-answer-option selected"
                        : "skills-answer-option"
                    }
                    onClick={() =>
                      handleAnswerSelect(option)
                    }
                  >
                    <span>
                      {selectedAnswer === option
                        ? "✓"
                        : "○"}
                    </span>

                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="skills-primary-button"
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Submit Assessment"
                : "Next Question →"}
            </button>
          </section>
        )}

        {/* RESULT */}

        {assessmentCompleted && (
          <section className="skills-result-card">
            <div className="skills-result-header">
              <div className="skills-result-icon">
                🎉
              </div>

              <div>
                <span>ASSESSMENT COMPLETE</span>

                <h2>Your Assessment Result</h2>

                <p>
                  Here is your current performance for{" "}
                  {selectedCareer}.
                </p>
              </div>
            </div>

            <div className="skills-result-grid">
              <div className="skills-score-box">
                <span>Your Score</span>

                <strong>
                  {score}/{questions.length}
                </strong>

                <b>{percentage}%</b>
              </div>

              <div className="skills-result-detail">
                <span>Skill Level</span>

                <strong>{skillLevel}</strong>

                <p>
                  Based on your assessment score.
                </p>
              </div>

              <div className="skills-result-detail">
                <span>Status</span>

                <strong>
                  {percentage >= 60
                    ? "Passed"
                    : "Needs Improvement"}
                </strong>

                <p>
                  {percentage >= 60
                    ? "You reached the passing score."
                    : "Continue improving your skills."}
                </p>
              </div>
            </div>

            <div className="skills-performance">
              <h3>📊 Skill Performance</h3>

              {currentCareer.skills.map((skill) => (
                <div
                  className="skills-performance-item"
                  key={skill.name}
                >
                  <div>
                    <strong>{skill.name}</strong>

                    <span>
                      Current {skill.current}% • Required{" "}
                      {skill.required}%
                    </span>
                  </div>

                  <strong>
                    Gap{" "}
                    {Math.max(
                      0,
                      skill.required - skill.current
                    )}
                    %
                  </strong>
                </div>
              ))}
            </div>

            <div className="skills-result-buttons">
              <button
                className="skills-secondary-button"
                onClick={retakeAssessment}
              >
                🔄 Retake Assessment
              </button>

              <button
                className="skills-primary-button"
                onClick={openRoadmap}
              >
                🛣️ View Career Roadmap
              </button>
            </div>
          </section>
        )}

        {/* RECOMMENDATIONS */}

        {!assessmentStarted &&
          skillGaps.length > 0 && (
            <section className="skills-section">
              <div className="skills-section-heading">
                <div>
                  <span className="skills-section-label">
                    NEXT STEPS
                  </span>

                  <h2>
                    Recommended Improvement Areas
                  </h2>

                  <p>
                    Focus on these skills to reduce your
                    career skill gaps.
                  </p>
                </div>
              </div>

              <div className="skills-recommendation-list">
                {skillGaps
                  .slice(0, 3)
                  .map((skill, index) => (
                    <div
                      className="skills-recommendation"
                      key={skill.name}
                    >
                      <div className="skills-recommendation-number">
                        {index + 1}
                      </div>

                      <div>
                        <h3>
                          Improve {skill.name}
                        </h3>

                        <p>
                          Current level:{" "}
                          {skill.current}% • Required
                          level: {skill.required}%
                        </p>
                      </div>

                      <span>
                        +{skill.gap}% needed
                      </span>
                    </div>
                  ))}
              </div>
            </section>
          )}

        {/* ROADMAP */}

        <section className="skills-roadmap-banner">
          <div className="skills-roadmap-icon">
            🛣️
          </div>

          <div>
            <span>CONTINUE YOUR JOURNEY</span>

            <h2>
              Ready to follow your career roadmap?
            </h2>

            <p>
              Use your skill analysis and assessment
              results to continue working toward your
              career goal.
            </p>
          </div>

          <Link
            to="/roadmap"
            className="skills-primary-button"
          >
            Open Career Roadmap →
          </Link>
        </section>

        <footer className="skills-footer">
          🎓 Smart Student Platform • Build your skills.
          Shape your career.
        </footer>
      </main>
    </div>
  );
}

export default Skills;