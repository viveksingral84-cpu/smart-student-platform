import { useEffect, useState } from "react";

import {
  collection,
  doc,
  getDocs,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { useAuth } from "../context/AuthContext";

import { db } from "../firebase";

import "./Friends.css";

function Friends() {
  const { user } = useAuth();

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loadingStudents, setLoadingStudents] = useState(true);
  const [error, setError] = useState("");

  const [sendingRequest, setSendingRequest] = useState(null);
  const [sentRequests, setSentRequests] = useState([]);

  const [friendRequests, setFriendRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(true);

  const [activeTab, setActiveTab] = useState("friends");

  // =====================================================
  // LOAD STUDENTS
  // =====================================================

  useEffect(() => {
    const loadStudents = async () => {
      if (!user) {
        setLoadingStudents(false);
        return;
      }

      try {
        setLoadingStudents(true);
        setError("");

        const studentsRef = collection(db, "students");

        const snapshot = await getDocs(studentsRef);

        const studentList = snapshot.docs
          .map((studentDoc) => ({
            id: studentDoc.id,
            ...studentDoc.data(),
          }))
          .filter((student) => student.id !== user.uid);

        setStudents(studentList);
      } catch (err) {
        console.error("Error loading students:", err);

        setError("Unable to load students. Please try again.");
      } finally {
        setLoadingStudents(false);
      }
    };

    loadStudents();
  }, [user]);

  // =====================================================
  // LOAD FRIEND REQUESTS
  // =====================================================

  useEffect(() => {
    const loadFriendRequests = async () => {
      if (!user) {
        setLoadingRequests(false);
        return;
      }

      try {
        setLoadingRequests(true);

        const requestsRef = collection(
          db,
          "students",
          user.uid,
          "friendRequests"
        );

        const snapshot = await getDocs(requestsRef);

        const requestList = snapshot.docs
          .map((requestDoc) => ({
            id: requestDoc.id,
            ...requestDoc.data(),
          }))
          .filter(
            (request) => request.status === "pending"
          );

        setFriendRequests(requestList);
      } catch (err) {
        console.error(
          "Error loading friend requests:",
          err
        );

        setError(
          "Unable to load friend requests. Please try again."
        );
      } finally {
        setLoadingRequests(false);
      }
    };

    loadFriendRequests();
  }, [user]);

  // =====================================================
  // STUDENT HELPERS
  // =====================================================

  const getStudentName = (student) => {
    return (
      student.name ||
      student.fullName ||
      student.displayName ||
      student.firstName ||
      student.email ||
      "Student"
    );
  };

  const getStudentInitial = (student) => {
    const name = getStudentName(student);

    return name.charAt(0).toUpperCase();
  };

  const getSkillsText = (student) => {
    if (Array.isArray(student.skills)) {
      return student.skills.join(", ");
    }

    if (typeof student.skills === "string") {
      return student.skills;
    }

    return "";
  };

  // =====================================================
  // SEND FRIEND REQUEST
  // =====================================================

  const handleAddFriend = async (student) => {
    if (!user) {
      return;
    }

    if (student.id === user.uid) {
      return;
    }

    try {
      setSendingRequest(student.id);
      setError("");

      const requestRef = doc(
        db,
        "students",
        student.id,
        "friendRequests",
        user.uid
      );

      await setDoc(requestRef, {
        senderId: user.uid,

        senderName:
          user.displayName ||
          user.email ||
          "Student",

        senderEmail: user.email || "",

        receiverId: student.id,

        receiverName: getStudentName(student),

        status: "pending",

        createdAt: serverTimestamp(),
      });

      setSentRequests((previous) => [
        ...previous,
        student.id,
      ]);
    } catch (err) {
      console.error(
        "Error sending friend request:",
        err
      );

      setError(
        "Unable to send friend request. Please try again."
      );
    } finally {
      setSendingRequest(null);
    }
  };

  // =====================================================
  // SEARCH
  // =====================================================

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    const name = getStudentName(student).toLowerCase();

    const email = (
      student.email || ""
    ).toLowerCase();

    const department = (
      student.department ||
      student.branch ||
      student.course ||
      ""
    ).toLowerCase();

    const skills = getSkillsText(student).toLowerCase();

    return (
      name.includes(search) ||
      email.includes(search) ||
      department.includes(search) ||
      skills.includes(search)
    );
  });

  return (
    <div className="friends-page">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="friends-header">

        <div>

          <span className="friends-label">
            SOCIAL & COLLABORATION
          </span>

          <h1>Friends & Groups</h1>

          <p>
            Connect with classmates, discover students,
            join groups, and collaborate on projects.
          </p>

        </div>

        <button
          type="button"
          className="create-group-btn"
        >
          + Create Group
        </button>

      </div>

      {/* =================================================
          NAVIGATION TABS
      ================================================= */}

      <div className="friends-tabs">

        <button
          type="button"
          className={`friends-tab ${
            activeTab === "friends" ? "active" : ""
          }`}
          onClick={() => setActiveTab("friends")}
        >
          👥 Friends
        </button>

        <button
          type="button"
          className={`friends-tab ${
            activeTab === "requests" ? "active" : ""
          }`}
          onClick={() => setActiveTab("requests")}
        >
          🔔 Requests

          <span className="tab-count">
            {friendRequests.length}
          </span>

        </button>

        <button
          type="button"
          className={`friends-tab ${
            activeTab === "groups" ? "active" : ""
          }`}
          onClick={() => setActiveTab("groups")}
        >
          👨‍👩‍👧‍👦 Groups
        </button>

        <button
          type="button"
          className={`friends-tab ${
            activeTab === "discover" ? "active" : ""
          }`}
          onClick={() => setActiveTab("discover")}
        >
          🔍 Discover
        </button>

      </div>

      {/* =================================================
          REQUESTS TAB
      ================================================= */}

      {activeTab === "requests" && (

        <section className="friends-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                CONNECTION REQUESTS
              </span>

              <h2>
                Friend Requests
              </h2>

            </div>

            <span className="friends-count">
              {friendRequests.length} Pending
            </span>

          </div>

          {loadingRequests && (

            <div className="friends-empty">

              <div className="friends-empty-icon">
                🔄
              </div>

              <h3>
                Loading requests...
              </h3>

              <p>
                We're checking your friend requests.
              </p>

            </div>

          )}

          {!loadingRequests &&
            friendRequests.length === 0 && (

              <div className="friends-empty">

                <div className="friends-empty-icon">
                  🔔
                </div>

                <h3>
                  No friend requests
                </h3>

                <p>
                  When another student sends you a
                  friend request, it will appear here.
                </p>

              </div>

            )}

          {!loadingRequests &&
            friendRequests.length > 0 && (

              <div className="student-discovery-grid">

                {friendRequests.map((request) => (

                  <div
                    className="student-discovery-card"
                    key={request.id}
                  >

                    <div className="student-card-header">

                      <div className="student-avatar">
                        {(request.senderName ||
                          "S"
                        )
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div className="student-card-info">

                        <h3>
                          {request.senderName ||
                            "Student"}
                        </h3>

                        <p>
                          {request.senderEmail ||
                            "Student"}
                        </p>

                      </div>

                    </div>

                    <div className="student-card-actions">

                      <button
                        type="button"
                        className="add-friend-btn"
                      >
                        ✓ Accept
                      </button>

                      <button
                        type="button"
                        className="delete-project-btn"
                      >
                        ✕ Reject
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

        </section>

      )}

      {/* =================================================
          FRIENDS / DISCOVER AREA
      ================================================= */}

      {(activeTab === "friends" ||
        activeTab === "discover") && (

        <>

          {/* Search */}

          <div className="friends-search-section">

            <div className="friends-search-box">

              <span>🔍</span>

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search students by name, department or skill..."
              />

            </div>

          </div>

          {/* Discover Students */}

          <section className="friends-section">

            <div className="section-heading">

              <div>

                <span className="section-label">
                  STUDENT NETWORK
                </span>

                <h2>
                  {searchTerm
                    ? "Search Results"
                    : "Discover Students"}
                </h2>

              </div>

              <span className="friends-count">
                {filteredStudents.length} Students
              </span>

            </div>

            {/* Loading */}

            {loadingStudents && (

              <div className="friends-empty">

                <div className="friends-empty-icon">
                  🔄
                </div>

                <h3>
                  Loading students...
                </h3>

                <p>
                  We're finding students from your platform.
                </p>

              </div>

            )}

            {/* Error */}

            {!loadingStudents && error && (

              <div className="friends-empty">

                <div className="friends-empty-icon">
                  ⚠️
                </div>

                <h3>
                  Something went wrong
                </h3>

                <p>
                  {error}
                </p>

              </div>

            )}

            {/* No Students */}

            {!loadingStudents &&
              !error &&
              filteredStudents.length === 0 && (

                <div className="friends-empty">

                  <div className="friends-empty-icon">
                    👥
                  </div>

                  <h3>
                    {searchTerm
                      ? "No students found"
                      : "No other students yet"}
                  </h3>

                  <p>
                    {searchTerm
                      ? "Try searching with a different name, department or skill."
                      : "Once other students create accounts, they will appear here."}
                  </p>

                </div>

              )}

            {/* Student Cards */}

            {!loadingStudents &&
              !error &&
              filteredStudents.length > 0 && (

                <div className="student-discovery-grid">

                  {filteredStudents.map((student) => {

                    const studentName =
                      getStudentName(student);

                    const skills =
                      getSkillsText(student);

                    const requestSent =
                      sentRequests.includes(
                        student.id
                      );

                    const isSending =
                      sendingRequest === student.id;

                    return (

                      <div
                        className="student-discovery-card"
                        key={student.id}
                      >

                        {/* Student Header */}

                        <div className="student-card-header">

                          <div className="student-avatar">
                            {getStudentInitial(student)}
                          </div>

                          <div className="student-card-info">

                            <h3>
                              {studentName}
                            </h3>

                            <p>
                              {student.department ||
                                student.branch ||
                                student.course ||
                                "Student"}
                            </p>

                          </div>

                        </div>

                        {/* Student Details */}

                        <div className="student-card-details">

                          {student.year && (
                            <span>
                              🎓 {student.year}
                            </span>
                          )}

                          {student.email && (
                            <span>
                              ✉️ {student.email}
                            </span>
                          )}

                        </div>

                        {/* Skills */}

                        {skills && (

                          <div className="student-card-skills">

                            <strong>
                              Skills
                            </strong>

                            <p>
                              {skills}
                            </p>

                          </div>

                        )}

                        {/* Action */}

                        <div className="student-card-actions">

                          <button
                            type="button"
                            className="add-friend-btn"
                            onClick={() =>
                              handleAddFriend(student)
                            }
                            disabled={
                              isSending ||
                              requestSent
                            }
                          >
                            {isSending
                              ? "Sending..."
                              : requestSent
                              ? "✓ Request Sent"
                              : "+ Add Friend"}
                          </button>

                        </div>

                      </div>

                    );
                  })}

                </div>

              )}

          </section>

        </>

      )}

      {/* =================================================
          GROUPS TAB
      ================================================= */}

      {activeTab === "groups" && (

        <section className="friends-section">

          <div className="friends-empty">

            <div className="friends-empty-icon">
              👨‍👩‍👧‍👦
            </div>

            <h3>
              Groups are coming next
            </h3>

            <p>
              You'll be able to create and join
              student groups here.
            </p>

          </div>

        </section>

      )}

      {/* =================================================
          QUICK FEATURES
      ================================================= */}

      <section className="social-features">

        <div className="social-feature-card">

          <div className="social-feature-icon">
            🔍
          </div>

          <div>

            <h3>
              Discover Students
            </h3>

            <p>
              Find students based on department,
              skills, interests and projects.
            </p>

          </div>

        </div>

        <div className="social-feature-card">

          <div className="social-feature-icon">
            👨‍👩‍👧‍👦
          </div>

          <div>

            <h3>
              Student Groups
            </h3>

            <p>
              Join academic, technical and
              project-based student communities.
            </p>

          </div>

        </div>

        <div className="social-feature-card">

          <div className="social-feature-icon">
            💬
          </div>

          <div>

            <h3>
              Private Chat
            </h3>

            <p>
              Chat privately with your friends and
              collaborate in real time.
            </p>

          </div>

        </div>

        <div className="social-feature-card">

          <div className="social-feature-icon">
            📞
          </div>

          <div>

            <h3>
              Voice & Video Calls
            </h3>

            <p>
              Connect with friends through voice and
              video calls.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Friends;