import "../App.css";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),

    academics: (
      <>
        <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z" />
        <path d="M6 12.5V17c3 2 9 2 12 0v-4.5" />
        <path d="M21 10.5V16" />
      </>
    ),

    career: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v2" />
        <path d="M20.5 12h-2" />
      </>
    ),

    skills: (
      <>
        <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),

    roadmap: (
      <>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18c5 0 2-8 10-12" />
      </>
    ),

    projects: (
      <>
        <path d="M4 7h16v13H4z" />
        <path d="M8 7V4h8v3" />
        <path d="M4 12h16" />
        <path d="M10 12v2h4v-2" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8" />
        <path d="M17 14c2.3.3 3.5 2 4 4.5" />
      </>
    ),

    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8h18c0-1-3-1-3-8" />
        <path d="M10 21h4" />
      </>
    ),

    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),

    brain: (
      <>
        <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3" />
        <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3" />
        <path d="M9 4v16" />
        <path d="M15 4v16" />
        <path d="M9 9h2" />
        <path d="M13 15h2" />
      </>
    ),

    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),

    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    logout: (
      <>
        <path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5" />
        <path d="M14 8l4 4-4 4" />
        <path d="M18 12H9" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

/* =========================================================
   CAREER DATA
   ========================================================= */

const careerData = {
  "Python Developer": {
    description:
      "Build strong Python, backend and software development skills.",
    icon: "code",
    skills: [
      { name: "Python", current: 80, required: 65, icon: "code" },
      {
        name: "Object-Oriented Programming",
        current: 80,
        required: 60,
        icon: "brain",
      },
      { name: "SQL", current: 70, required: 55, icon: "database" },
      { name: "Git", current: 70, required: 45, icon: "code" },
      { name: "APIs", current: 70, required: 35, icon: "code" },
    ],
  },

  "Frontend Developer": {
    description:
      "Develop modern websites and interactive user interfaces.",
    icon: "code",
    skills: [
      { name: "HTML", current: 80, required: 75, icon: "code" },
      { name: "CSS", current: 80, required: 60, icon: "code" },
      { name: "JavaScript", current: 85, required: 55, icon: "code" },
      { name: "React", current: 75, required: 40, icon: "code" },
      { name: "Git", current: 70, required: 45, icon: "code" },
    ],
  },

  "Data Analyst": {
    description:
      "Turn data into useful insights using analytics and visualization.",
    icon: "chart",
    skills: [
      { name: "Python", current: 75, required: 60, icon: "code" },
      { name: "SQL", current: 85, required: 55, icon: "database" },
      { name: "Excel", current: 75, required: 70, icon: "chart" },
      { name: "Statistics", current: 80, required: 50, icon: "chart" },
      {
        name: "Data Visualization",
        current: 75,
        required: 40,
        icon: "chart",
      },
    ],
  },

  "Backend Developer": {
    description:
      "Build reliable APIs, databases and server-side applications.",
    icon: "database",
    skills: [
      { name: "Programming", current: 80, required: 65, icon: "code" },
      { name: "SQL", current: 80, required: 55, icon: "database" },
      { name: "APIs", current: 85, required: 40, icon: "code" },
      { name: "Git", current: 70, required: 45, icon: "code" },
      { name: "Database", current: 80, required: 50, icon: "database" },
    ],
  },
};

/* =========================================================
   ASSESSMENT QUESTIONS
   ========================================================= */

const questionBank = {
  "Python Developer": [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "define"],
      answer: 1,
    },
    {
      question: "Which data type stores key-value pairs in Python?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      answer: 2,
    },
    {
      question: "Which symbol is used for a single-line comment in Python?",
      options: ["//", "#", "/*", "--"],
      answer: 1,
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["class", "object", "struct", "new"],
      answer: 0,
    },
    {
      question: "Which method adds an item to the end of a Python list?",
      options: ["add()", "insert()", "append()", "push()"],
      answer: 2,
    },
    {
      question: "Which library is commonly used for working with HTTP requests?",
      options: ["requests", "math", "random", "os"],
      answer: 0,
    },
    {
      question: "What does SQL mainly help developers work with?",
      options: [
        "Images",
        "Databases",
        "Operating systems",
        "Computer hardware",
      ],
      answer: 1,
    },
    {
      question: "What is Git mainly used for?",
      options: [
        "Video editing",
        "Version control",
        "Database design",
        "Image processing",
      ],
      answer: 1,
    },
  ],

  "Frontend Developer": [
    {
      question: "What does HTML mainly define?",
      options: [
        "Page structure",
        "Database tables",
        "Server logic",
        "Operating system",
      ],
      answer: 0,
    },
    {
      question: "Which technology is mainly used to style web pages?",
      options: ["HTML", "CSS", "SQL", "Python"],
      answer: 1,
    },
    {
      question: "Which language adds behavior and interactivity to web pages?",
      options: ["CSS", "SQL", "JavaScript", "XML"],
      answer: 2,
    },
    {
      question: "React is mainly used for building what?",
      options: [
        "User interfaces",
        "Operating systems",
        "Databases",
        "Computer networks",
      ],
      answer: 0,
    },
    {
      question: "Which HTML element is commonly used for a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: 1,
    },
    {
      question: "Which CSS property changes text color?",
      options: ["font", "background", "color", "text"],
      answer: 2,
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Digital Object Management",
        "Document Order Model",
      ],
      answer: 0,
    },
    {
      question: "Which tool is commonly used for version control?",
      options: ["Git", "Excel", "Figma", "Chrome"],
      answer: 0,
    },
  ],

  "Data Analyst": [
    {
      question: "Which language is widely used for data analysis?",
      options: ["Python", "HTML", "CSS", "XML"],
      answer: 0,
    },
    {
      question: "Which SQL command is used to retrieve data?",
      options: ["GET", "SELECT", "FETCHDATA", "READ"],
      answer: 1,
    },
    {
      question: "Which tool is commonly used for spreadsheet analysis?",
      options: ["Excel", "Photoshop", "Git", "Docker"],
      answer: 0,
    },
    {
      question: "What does mean represent in statistics?",
      options: [
        "Middle value",
        "Average value",
        "Largest value",
        "Smallest value",
      ],
      answer: 1,
    },
    {
      question: "Which chart is useful for showing trends over time?",
      options: ["Line chart", "Pie chart", "Icon", "Table only"],
      answer: 0,
    },
    {
      question: "What is data visualization?",
      options: [
        "Deleting data",
        "Representing data visually",
        "Encrypting data",
        "Copying data",
      ],
      answer: 1,
    },
    {
      question: "Which SQL clause filters rows?",
      options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
      answer: 1,
    },
    {
      question: "What is an outlier?",
      options: [
        "A repeated value",
        "A missing column",
        "An unusually different value",
        "A table name",
      ],
      answer: 2,
    },
  ],

  "Backend Developer": [
    {
      question: "What is an API mainly used for?",
      options: [
        "Communication between software systems",
        "Editing images",
        "Creating hardware",
        "Formatting disks",
      ],
      answer: 0,
    },
    {
      question: "Which technology is commonly used for databases?",
      options: ["SQL", "CSS", "HTML", "Figma"],
      answer: 0,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Process",
        "Hyper Tool Transfer Program",
        "Host Transfer Text Protocol",
      ],
      answer: 0,
    },
    {
      question: "Which status code normally represents a successful HTTP request?",
      options: ["404", "500", "200", "301"],
      answer: 2,
    },
    {
      question: "What is a server responsible for?",
      options: [
        "Providing services or resources",
        "Only displaying images",
        "Only editing text",
        "Only playing videos",
      ],
      answer: 0,
    },
    {
      question: "Which tool is commonly used for version control?",
      options: ["Git", "Excel", "Photoshop", "PowerPoint"],
      answer: 0,
    },
    {
      question: "What is a database used for?",
      options: [
        "Storing and managing data",
        "Drawing graphics",
        "Playing audio",
        "Creating animations only",
      ],
      answer: 0,
    },
    {
      question: "Which HTTP method is commonly used to retrieve data?",
      options: ["GET", "DELETE", "PATCH", "POST"],
      answer: 0,
    },
  ],
};

function Skills() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [selectedCareer, setSelectedCareer] =
    useState("Python Developer");
    
    useEffect(() => {
  const loadStudentCareer = async () => {
    if (!user) return;

    try {
      const studentRef = doc(db, "students", user.uid);
      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists()) {
        const data = studentSnap.data();

        if (data.selectedCareer) {
          setSelectedCareer(data.selectedCareer);
        }
      }
    } catch (error) {
      console.error("Error loading student career:", error);
    }
  };

  loadStudentCareer();
}, [user]);

  const [assessmentStarted, setAssessmentStarted] =
    useState(false);

  const [assessmentCompleted, setAssessmentCompleted] =
    useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [score, setScore] = useState(0);

  const [answeredQuestions, setAnsweredQuestions] =
    useState(0);

  const career = careerData[selectedCareer];

  const questions = questionBank[selectedCareer];

  const readiness = useMemo(() => {
    const totalCurrent = career.skills.reduce(
      (sum, skill) => sum + skill.current,
      0
    );

    const totalRequired = career.skills.reduce(
      (sum, skill) => sum + skill.required,
      0
    );

    return Math.min(
      100,
      Math.round((totalCurrent / totalRequired) * 100)
    );
  }, [career]);

  const skillGaps = useMemo(() => {
    return career.skills
      .map((skill) => ({
        ...skill,
        gap: Math.max(skill.required - skill.current, 0),
      }))
      .filter((skill) => skill.gap > 0)
      .sort((a, b) => b.gap - a.gap);
  }, [career]);

  const assessmentPercentage =
    assessmentCompleted && questions.length > 0
      ? Math.round((score / questions.length) * 100)
      : 0;

  const getSkillLevel = () => {
    if (assessmentPercentage >= 80) return "Advanced";
    if (assessmentPercentage >= 60) return "Intermediate";
    return "Beginner";
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleCareerChange = (event) => {
    setSelectedCareer(event.target.value);

    setAssessmentStarted(false);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions(0);
  };

  const startAssessment = () => {
    setAssessmentStarted(true);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions(0);
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      return;
    }

    const current = questions[currentQuestion];

    const newScore =
      score + (selectedAnswer === current.answer ? 1 : 0);

    setScore(newScore);

    setAnsweredQuestions((prev) => prev + 1);

    if (currentQuestion === questions.length - 1) {
      setAssessmentCompleted(true);
      setAssessmentStarted(false);
      setSelectedAnswer(null);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const retakeAssessment = () => {
    setAssessmentStarted(true);
    setAssessmentCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions(0);
  };

  const openRoadmap = () => {
    navigate("/roadmap", {
      state: {
        career: selectedCareer,
        readiness,
        skillGaps,
      },
    });
  };

  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Student";

  const avatarLetter =
    displayName.charAt(0).toUpperCase();

  return (
    <div className="skills-modern-page">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside className="skills-modern-sidebar">

        <div className="skills-brand">
          <div className="skills-brand-logo">
            <Icon name="skills" size={22} />
          </div>

          <div className="skills-brand-text">
            <strong>Smart Student</strong>
            <span>Learning Platform</span>
          </div>
        </div>

        <div className="skills-nav-label">
          Main Menu
        </div>

        <nav className="skills-modern-nav">

          <Link to="/">
            <button className="skills-modern-nav-link">
              <Icon name="dashboard" />
              <span>Dashboard</span>
            </button>
          </Link>

          <Link to="/academics">
            <button className="skills-modern-nav-link">
              <Icon name="academics" />
              <span>Academics</span>
            </button>
          </Link>

          <Link to="/career">
            <button className="skills-modern-nav-link">
              <Icon name="career" />
              <span>Career</span>
            </button>
          </Link>

          <Link to="/skills">
            <button className="skills-modern-nav-link active">
              <Icon name="skills" />
              <span>Skills</span>
            </button>
          </Link>

          <Link to="/roadmap">
            <button className="skills-modern-nav-link">
              <Icon name="roadmap" />
              <span>Career Roadmap</span>
            </button>
          </Link>

          <button className="skills-modern-nav-link">
            <Icon name="projects" />
            <span>Projects</span>
          </button>

          <button className="skills-modern-nav-link">
            <Icon name="users" />
            <span>Friends & Groups</span>
          </button>

        </nav>

        <div className="skills-sidebar-spacer"></div>

        <div className="skills-sidebar-bottom">

          <div className="skills-sidebar-user">

            <div className="skills-user-avatar">
              {avatarLetter}
            </div>

            <div className="skills-user-details">
              <strong>{displayName}</strong>
              <span>Student</span>
            </div>

          </div>

          <button
            className="skills-logout-button"
            onClick={handleLogout}
          >
            <Icon name="logout" size={17} />
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <main className="skills-modern-main">

        {/* HEADER */}

        <header className="skills-modern-header">

          <div className="skills-header-left">

            <span className="skills-header-label">
              Skills Development
            </span>

            <h1>Skills & Skill Gap Analysis</h1>

            <p>
              Build the skills you need for your target career.
            </p>

          </div>

          <div className="skills-header-right">

            <button className="skills-header-icon">
              <Icon name="bell" size={19} />
            </button>

            <div className="skills-header-avatar">
              {avatarLetter}
            </div>

          </div>

        </header>

        {/* HERO */}

        <section className="skills-modern-hero">

          <div className="skills-hero-content">

            <div className="skills-hero-label">
              <Icon name="target" size={14} />
              Career Skill Development
            </div>

            <h2>
              Build the skills your career needs.
            </h2>

            <p>
              Analyze your current abilities, identify skill
              gaps and test your knowledge through
              career-focused assessments.
            </p>

          </div>

          <div className="skills-hero-progress">

            <div className="skills-hero-progress-ring">
              <strong>{readiness}%</strong>
            </div>

            <span>Career Readiness</span>

          </div>

        </section>

        {/* CAREER SELECTION */}

        <section className="skills-modern-section">

          <div className="skills-section-heading">

            <div>
              <span className="skills-section-label">
                Career Goal
              </span>

              <h2>Select your target career</h2>

              <p>
                Your skill requirements are based on the
                career you select.
              </p>
            </div>

          </div>

          <div className="skills-career-selection-modern">

            <select
              value={selectedCareer}
              onChange={handleCareerChange}
              className="skills-career-select-modern"
            >
              {Object.keys(careerData).map((careerName) => (
                <option
                  key={careerName}
                  value={careerName}
                >
                  {careerName}
                </option>
              ))}
            </select>

          </div>

        </section>

        {/* REQUIRED SKILLS */}

        <section className="skills-modern-section">

          <div className="skills-section-heading">

            <div>
              <span className="skills-section-label">
                Skill Profile
              </span>

              <h2>{selectedCareer} Skills</h2>

              <p>{career.description}</p>
            </div>

          </div>

          <div className="skills-modern-grid">

            {career.skills.map((skill) => (
              <div
                className="skills-modern-card"
                key={skill.name}
              >

                <div className="skills-card-top">

                  <div className="skills-card-top-left">

                    <div className="skills-card-icon">
                      <Icon
                        name={skill.icon}
                        size={20}
                      />
                    </div>

                    <div>
                      <h3>{skill.name}</h3>

                      <span>
                        Required level: {skill.required}%
                      </span>
                    </div>

                  </div>

                  <div className="skills-card-percentage">
                    {skill.current}%
                  </div>

                </div>

                <div className="skills-card-bar">
                  <div
                    className="skills-card-bar-fill"
                    style={{
                      width: `${skill.current}%`,
                    }}
                  />
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* GAP ANALYSIS */}

        <section className="skills-modern-section">

          <div className="skills-section-heading">

            <div>
              <span className="skills-section-label">
                Analysis
              </span>

              <h2>Skill Gap Analysis</h2>

              <p>
                Focus on the areas where you can improve
                the most.
              </p>
            </div>

          </div>

          <div className="skills-analysis-grid-modern">

            <div className="skills-analysis-card-modern">

              <h3>Your biggest skill gaps</h3>

              <p>
                These skills currently need the most
                improvement for your selected career.
              </p>

              <div className="skills-gap-list-modern">

                {skillGaps.length === 0 ? (
                  <div className="skills-gap-item-modern">
                    <div className="skills-gap-item-header">
                      <strong>
                        Excellent progress
                      </strong>

                      <span className="skills-gap-value">
                        No major gaps
                      </span>
                    </div>

                    <p>
                      Your current skill levels meet the
                      required levels.
                    </p>
                  </div>
                ) : (
                  skillGaps.map((skill) => (
                    <div
                      className="skills-gap-item-modern"
                      key={skill.name}
                    >

                      <div className="skills-gap-item-header">

                        <strong>
                          {skill.name}
                        </strong>

                        <span className="skills-gap-value">
                          {skill.gap}% gap
                        </span>

                      </div>

                      <div className="skills-gap-track">

                        <div
                          className="skills-gap-fill"
                          style={{
                            width: `${Math.min(
                              skill.gap * 2,
                              100
                            )}%`,
                          }}
                        />

                      </div>

                    </div>
                  ))
                )}

              </div>

            </div>

            <div className="skills-analysis-card-modern">

              <h3>Readiness overview</h3>

              <p>
                Your current skill profile compared with
                the requirements of your selected career.
              </p>

              <div className="skills-gap-list-modern">

                <div className="skills-gap-item-modern">

                  <div className="skills-gap-item-header">
                    <strong>
                      Overall readiness
                    </strong>

                    <span className="skills-gap-value">
                      {readiness}%
                    </span>
                  </div>

                  <div className="skills-gap-track">

                    <div
                      className="skills-gap-fill"
                      style={{
                        width: `${readiness}%`,
                        background:
                          "linear-gradient(90deg, #4f46e5, #3b82f6)",
                      }}
                    />

                  </div>

                </div>

                <div className="skills-gap-item-modern">

                  <div className="skills-gap-item-header">
                    <strong>
                      Skills evaluated
                    </strong>

                    <span className="skills-gap-value">
                      {career.skills.length}
                    </span>
                  </div>

                  <div className="skills-gap-track">

                    <div
                      className="skills-gap-fill"
                      style={{
                        width: "100%",
                        background:
                          "linear-gradient(90deg, #6366f1, #818cf8)",
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ASSESSMENT INTRO */}

        {!assessmentStarted &&
          !assessmentCompleted && (
            <section className="skills-modern-section">

              <div className="skills-section-heading">

                <div>
                  <span className="skills-section-label">
                    Knowledge Check
                  </span>

                  <h2>Test your skills</h2>

                  <p>
                    Take a short assessment based on your
                    selected career.
                  </p>
                </div>

              </div>

              <div className="skills-assessment-modern">

                <div className="skills-assessment-icon-modern">
                  <Icon name="brain" size={29} />
                </div>

                <div className="skills-assessment-content-modern">

                  <h3>
                    Career-focused skill assessment
                  </h3>

                  <p>
                    Answer {questions.length} questions to
                    understand your current knowledge level
                    and identify areas that need more
                    practice.
                  </p>

                </div>

                <button
                  className="skills-primary-button-modern"
                  onClick={startAssessment}
                >
                  Start Assessment
                </button>

              </div>

            </section>
          )}

        {/* QUESTIONS */}

        {assessmentStarted && (
          <section className="skills-modern-section">

            <div className="skills-section-heading">

              <div>
                <span className="skills-section-label">
                  Assessment
                </span>

                <h2>Test your knowledge</h2>

                <p>
                  Choose the best answer for each question.
                </p>
              </div>

            </div>

            <div className="skills-question-modern">

              <div className="skills-question-header-modern">

                <span className="skills-question-number">
                  Question {currentQuestion + 1}
                </span>

                <span className="skills-question-progress-text">
                  {currentQuestion + 1} /{" "}
                  {questions.length}
                </span>

              </div>

              <h3>
                {questions[currentQuestion].question}
              </h3>

              <div className="skills-answer-options-modern">

                {questions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={option}
                      type="button"
                      className={`skills-answer-option-modern ${
                        selectedAnswer === index
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleAnswer(index)
                      }
                    >

                      <span className="skills-answer-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>{option}</span>

                    </button>
                  )
                )}

              </div>

              <div className="skills-question-footer">

                <button
                  className="skills-primary-button-modern"
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  style={{
                    opacity:
                      selectedAnswer === null
                        ? 0.5
                        : 1,
                    cursor:
                      selectedAnswer === null
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {currentQuestion ===
                  questions.length - 1
                    ? "Finish Assessment"
                    : "Next Question"}

                  <span style={{ marginLeft: 8 }}>
                    →
                  </span>
                </button>

              </div>

            </div>

          </section>
        )}

        {/* RESULT */}

        {assessmentCompleted && (
          <section className="skills-modern-section">

            <div className="skills-section-heading">

              <div>
                <span className="skills-section-label">
                  Assessment Complete
                </span>

                <h2>Your assessment result</h2>

                <p>
                  Here is your current performance for{" "}
                  {selectedCareer}.
                </p>
              </div>

            </div>

            <div className="skills-result-modern">

              <div className="skills-result-top">

                <div className="skills-result-score">
                  <strong>
                    {assessmentPercentage}%
                  </strong>
                </div>

                <div>

                  <h3>
                    {getSkillLevel()} Skill Level
                  </h3>

                  <p>
                    You scored {score} out of{" "}
                    {questions.length} questions correctly.
                    Continue practicing to improve your
                    career readiness.
                  </p>

                </div>

              </div>

              <div className="skills-result-grid-modern">

                <div className="skills-result-stat">
                  <span>Correct Answers</span>
                  <strong>
                    {score}
                  </strong>
                </div>

                <div className="skills-result-stat">
                  <span>Total Questions</span>
                  <strong>
                    {questions.length}
                  </strong>
                </div>

                <div className="skills-result-stat">
                  <span>Skill Level</span>
                  <strong>
                    {getSkillLevel()}
                  </strong>
                </div>

              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "25px",
                  flexWrap: "wrap",
                }}
              >

                <button
                  className="skills-primary-button-modern"
                  onClick={retakeAssessment}
                >
                  Retake Assessment
                </button>

                <button
                  className="skills-roadmap-button"
                  onClick={openRoadmap}
                >
                  View Career Roadmap
                </button>

              </div>

            </div>

          </section>
        )}

        {/* RECOMMENDATIONS */}

        <section className="skills-modern-section">

          <div className="skills-section-heading">

            <div>
              <span className="skills-section-label">
                Next Actions
              </span>

              <h2>Recommended for you</h2>

              <p>
                Follow these actions to strengthen your
                career profile.
              </p>
            </div>

          </div>

          <div className="skills-recommendations-modern">

            {skillGaps.length > 0 && (
              <div className="skills-recommendation-modern">

                <div className="skills-recommendation-number">
                  01
                </div>

                <h4>
                  Improve {skillGaps[0].name}
                </h4>

                <p>
                  Focus your next learning sessions on{" "}
                  {skillGaps[0].name} to reduce your
                  largest skill gap.
                </p>

              </div>
            )}

            <div className="skills-recommendation-modern">

              <div className="skills-recommendation-number">
                02
              </div>

              <h4>Practice regularly</h4>

              <p>
                Spend consistent time learning concepts
                and applying them through practical
                exercises.
              </p>

            </div>

            <div className="skills-recommendation-modern">

              <div className="skills-recommendation-number">
                03
              </div>

              <h4>Build real projects</h4>

              <p>
                Apply your skills in projects that can
                demonstrate your abilities to future
                employers.
              </p>

            </div>

          </div>

        </section>

        {/* ROADMAP CTA */}

        <section className="skills-modern-section">

          <div className="skills-roadmap-modern">

            <div className="skills-roadmap-content">

              <h3>
                Ready to follow your career roadmap?
              </h3>

              <p>
                Turn your skill analysis into a step-by-step
                learning plan.
              </p>

            </div>

            <button
              className="skills-roadmap-button"
              onClick={openRoadmap}
            >
              Open Career Roadmap →
            </button>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="skills-modern-footer">

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

export default Skills;