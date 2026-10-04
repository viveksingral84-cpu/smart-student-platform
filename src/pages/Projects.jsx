import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import "./Projects.css";

function Projects() {
  const { user } = useAuth();

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [status, setStatus] = useState("planning");
  const [progress, setProgress] = useState(0);
  const [priority, setPriority] = useState("medium");

  const [projectFilter, setProjectFilter] = useState("all");
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  /* =========================================================
     LOAD PROJECTS
     ========================================================= */

  useEffect(() => {
    const loadProjects = async () => {
      if (!user) {
        setLoadingProjects(false);
        return;
      }

      try {
        const projectsRef = collection(
          db,
          "students",
          user.uid,
          "projects"
        );

        const snapshot = await getDocs(projectsRef);

        const loadedProjects = snapshot.docs.map((projectDoc) => ({
          id: projectDoc.id,
          ...projectDoc.data(),
        }));

        setProjects(loadedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoadingProjects(false);
      }
    };

    loadProjects();
  }, [user]);

  /* =========================================================
     RESET FORM
     ========================================================= */

  const resetForm = () => {
    setProjectName("");
    setDescription("");
    setProjectType("");
    setStatus("planning");
    setProgress(0);
    setPriority("medium");
    setEditingProjectId(null);
  };

  /* =========================================================
     OPEN CREATE FORM
     ========================================================= */

  const handleOpenCreateForm = () => {
    setSelectedProject(null);
    resetForm();
    setShowCreateForm(true);
  };

  /* =========================================================
     CREATE PROJECT
     ========================================================= */

  const handleCreateProject = async () => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    if (!projectName.trim()) {
      alert("Please enter a project name.");
      return;
    }

    const progressValue = Number(progress);

    if (
      Number.isNaN(progressValue) ||
      progressValue < 0 ||
      progressValue > 100
    ) {
      alert("Progress must be between 0 and 100.");
      return;
    }

    try {
      const projectsRef = collection(
        db,
        "students",
        user.uid,
        "projects"
      );

      const projectData = {
        name: projectName.trim(),
        description: description.trim(),
        type: projectType,
        status: status,
        progress: progressValue,
        priority: priority,
        createdAt: serverTimestamp(),
      };

      const projectDoc = await addDoc(projectsRef, projectData);

      const newProject = {
        id: projectDoc.id,
        ...projectData,
      };

      setProjects((previousProjects) => [
        ...previousProjects,
        newProject,
      ]);

      resetForm();
      setShowCreateForm(false);

      alert("Project created successfully!");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Unable to create project. Please try again.");
    }
  };

  /* =========================================================
     EDIT PROJECT
     ========================================================= */

  const handleEditProject = (project) => {
    setSelectedProject(null);

    setEditingProjectId(project.id);
    setProjectName(project.name || "");
    setDescription(project.description || "");
    setProjectType(project.type || "");
    setStatus(project.status || "planning");
    setProgress(project.progress ?? 0);
    setPriority(project.priority || "medium");

    setShowCreateForm(true);
  };

  /* =========================================================
     UPDATE PROJECT
     ========================================================= */

  const handleUpdateProject = async () => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    if (!projectName.trim()) {
      alert("Please enter a project name.");
      return;
    }

    if (!editingProjectId) {
      return;
    }

    const progressValue = Number(progress);

    if (
      Number.isNaN(progressValue) ||
      progressValue < 0 ||
      progressValue > 100
    ) {
      alert("Progress must be between 0 and 100.");
      return;
    }

    try {
      const projectRef = doc(
        db,
        "students",
        user.uid,
        "projects",
        editingProjectId
      );

      await updateDoc(projectRef, {
        name: projectName.trim(),
        description: description.trim(),
        type: projectType,
        status: status,
        progress: progressValue,
        priority: priority,
      });

      setProjects((previousProjects) =>
        previousProjects.map((project) =>
          project.id === editingProjectId
            ? {
                ...project,
                name: projectName.trim(),
                description: description.trim(),
                type: projectType,
                status: status,
                progress: progressValue,
                priority: priority,
              }
            : project
        )
      );

      resetForm();
      setShowCreateForm(false);

      alert("Project updated successfully!");
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Unable to update project. Please try again.");
    }
  };

  /* =========================================================
     CANCEL FORM
     ========================================================= */

  const handleCancelForm = () => {
    resetForm();
    setShowCreateForm(false);
  };

  /* =========================================================
     DELETE PROJECT
     ========================================================= */

  const handleDeleteProject = async (projectId, projectName) => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${projectName}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      const projectRef = doc(
        db,
        "students",
        user.uid,
        "projects",
        projectId
      );

      await deleteDoc(projectRef);

      setProjects((previousProjects) =>
        previousProjects.filter(
          (project) => project.id !== projectId
        )
      );

      setSelectedProject(null);

      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Unable to delete project. Please try again.");
    }
  };

  /* =========================================================
     OPEN PROJECT DETAILS
     ========================================================= */

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  /* =========================================================
     FORMAT DATE
     ========================================================= */

  const formatCreatedDate = (createdAt) => {
    if (!createdAt) {
      return "Not available";
    }

    if (createdAt.toDate) {
      return createdAt.toDate().toLocaleDateString();
    }

    return "Not available";
  };

  /* =========================================================
     FILTER PROJECTS
     ========================================================= */

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === "all") {
      return true;
    }

    return project.status === projectFilter;
  });

  return (
    <div className="projects-page">

      {/* PAGE HEADER */}

      <div className="projects-header">
        <div>
          <p className="projects-label">MY WORKSPACE</p>

          <h1>Projects</h1>

          <p className="projects-subtitle">
            Create, manage, and track your academic and personal projects.
          </p>
        </div>

        <button
          type="button"
          className="create-project-btn"
          onClick={handleOpenCreateForm}
        >
          + Create Project
        </button>
      </div>

      {/* PROJECT STATS */}

      <div className="project-stats">

        <div className="project-stat-card">
          <div className="stat-icon">📁</div>

          <div>
            <span>Total Projects</span>
            <strong>{projects.length}</strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="stat-icon">🚀</div>

          <div>
            <span>Active Projects</span>

            <strong>
              {
                projects.filter(
                  (project) => project.status === "active"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="stat-icon">✅</div>

          <div>
            <span>Completed</span>

            <strong>
              {
                projects.filter(
                  (project) => project.status === "completed"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="stat-icon">👥</div>

          <div>
            <span>Team Projects</span>

            <strong>
              {
                projects.filter(
                  (project) => project.type === "team"
                ).length
              }
            </strong>
          </div>
        </div>

      </div>

      {/* PROJECT DETAILS */}

      {selectedProject && (
        <div className="project-details">

          <div className="project-details-header">

            <div>
              <p className="projects-label">
                PROJECT DETAILS
              </p>

              <h2>{selectedProject.name}</h2>
            </div>

            <button
  type="button"
  className="project-details-close"
  onClick={() => setSelectedProject(null)}
>
  ← Back to Projects
</button>

          </div>

          <div className="project-details-content">

            <div className="project-detail-item">
              <span>Description</span>

              <p>
                {selectedProject.description ||
                  "No description added."}
              </p>
            </div>

            <div className="project-detail-grid">

              <div className="project-detail-item">
                <span>Project Type</span>

                <strong>
                  {selectedProject.type ||
                    "Not specified"}
                </strong>
              </div>

              <div className="project-detail-item">
                <span>Status</span>

                <strong
                  className={`project-status ${
                    selectedProject.status
                  }`}
                >
                  {selectedProject.status}
                </strong>
              </div>

              <div className="project-detail-item">
                <span>Priority</span>

                <strong
                  className={`project-priority ${
                    selectedProject.priority || "medium"
                  }`}
                >
                  {(selectedProject.priority || "medium")
                    .charAt(0)
                    .toUpperCase() +
                    (selectedProject.priority || "medium").slice(1)}
                </strong>
              </div>

              <div className="project-detail-item">
                <span>Created Date</span>

                <strong>
                  {formatCreatedDate(
                    selectedProject.createdAt
                  )}
                </strong>
              </div>

            </div>

            {/* PROJECT PROGRESS */}

            <div className="project-detail-item project-progress-detail">

              <div className="progress-heading">

                <span>Project Progress</span>

                <strong>
                  {selectedProject.progress ?? 0}%
                </strong>

              </div>

              <div className="project-progress-bar">

                <div
                  className="project-progress-fill"
                  style={{
                    width: `${selectedProject.progress ?? 0}%`,
                  }}
                ></div>

              </div>

            </div>

            <div className="project-details-actions">

              <button
                type="button"
                className="edit-project-btn"
                onClick={() =>
                  handleEditProject(selectedProject)
                }
              >
                Edit Project
              </button>

              <button
                type="button"
                className="delete-project-btn"
                onClick={() =>
                  handleDeleteProject(
                    selectedProject.id,
                    selectedProject.name
                  )
                }
              >
                Delete Project
              </button>

            </div>

          </div>

        </div>
      )}

      {/* PROJECT SECTION */}

      {!selectedProject && (
        <div className="projects-section">

          <div className="section-heading">

            <div>
              <h2>Your Projects</h2>

              <p>
                Keep all your projects organized in one place.
              </p>
            </div>

            <select
              className="project-filter"
              value={projectFilter}
              onChange={(e) =>
                setProjectFilter(e.target.value)
              }
            >
              <option value="all">All Projects</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="planning">Planning</option>
            </select>

          </div>

          {/* LOADING */}

          {loadingProjects ? (
            <div className="projects-empty">

              <div className="empty-icon">
                ⏳
              </div>

              <h3>Loading projects...</h3>

              <p>
                Please wait while we load your projects.
              </p>

            </div>
          ) : filteredProjects.length === 0 ? (

            <div className="projects-empty">

              <div className="empty-icon">
                📂
              </div>

              <h3>
                {projects.length === 0
                  ? "No projects yet"
                  : "No projects found"}
              </h3>

              <p>
                {projects.length === 0
                  ? "You haven't created any projects yet. Start your first project and track your progress here."
                  : "There are no projects matching the selected filter."}
              </p>

              {projects.length === 0 && (
                <button
                  type="button"
                  className="empty-create-btn"
                  onClick={handleOpenCreateForm}
                >
                  + Create Your First Project
                </button>
              )}

            </div>

          ) : (

            <div className="project-list">

              {filteredProjects.map((project) => (

                <div
                  className="project-card"
                  key={project.id}
                  onClick={() =>
                    handleOpenProject(project)
                  }
                >

                  <div className="project-card-top">

                    <div>
                      <h3>{project.name}</h3>

                      <p>
                        {project.description ||
                          "No description added."}
                      </p>
                    </div>

                    <span
                      className={`project-status ${
                        project.status
                      }`}
                    >
                      {project.status}
                    </span>

                  </div>

                  {/* PROJECT PROGRESS */}

                  <div className="project-card-progress">

                    <div className="progress-heading">

                      <span>Progress</span>

                      <strong>
                        {project.progress ?? 0}%
                      </strong>

                    </div>

                    <div className="project-progress-bar">

                      <div
                        className="project-progress-fill"
                        style={{
                          width: `${
                            project.progress ?? 0
                          }%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  <div className="project-card-bottom">

                    <span>
                      Type:{" "}
                      {project.type ||
                        "Not specified"}
                    </span>

                    <span
                      className={`project-priority ${
                        project.priority || "medium"
                      }`}
                    >
                      Priority:{" "}
                      {(project.priority || "medium")
                        .charAt(0)
                        .toUpperCase() +
                        (project.priority || "medium").slice(1)}
                    </span>

                    <div
                      className="project-card-actions"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >

                      <button
                        type="button"
                        className="edit-project-btn"
                        onClick={() =>
                          handleEditProject(project)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="delete-project-btn"
                        onClick={() =>
                          handleDeleteProject(
                            project.id,
                            project.name
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>
      )}

      {/* CREATE / EDIT FORM */}

      {showCreateForm && (

        <div className="create-project-form">

          <h2>
            {editingProjectId
              ? "Edit Project"
              : "Create New Project"}
          </h2>

          <p>
            {editingProjectId
              ? "Update your project details below."
              : "Enter the basic details of your project."}
          </p>

          {/* PROJECT NAME */}

          <div className="form-group">

            <label>Project Name</label>

            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) =>
                setProjectName(e.target.value)
              }
            />

          </div>

          {/* DESCRIPTION */}

          <div className="form-group">

            <label>Description</label>

            <textarea
              placeholder="Enter project description"
              rows="4"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            ></textarea>

          </div>

          {/* PROJECT TYPE */}

          <div className="form-group">

            <label>Project Type</label>

            <select
              value={projectType}
              onChange={(e) =>
                setProjectType(e.target.value)
              }
            >
              <option value="">
                Select project type
              </option>

              <option value="academic">
                Academic
              </option>

              <option value="personal">
                Personal
              </option>

              <option value="team">
                Team Project
              </option>
            </select>

          </div>

          {/* STATUS */}

          <div className="form-group">

            <label>Status</label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="planning">
                Planning
              </option>

              <option value="active">
                Active
              </option>

              <option value="completed">
                Completed
              </option>
            </select>

          </div>

          {/* PROGRESS */}

          <div className="form-group">

            <label>Project Progress (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              placeholder="Enter progress from 0 to 100"
              value={progress}
              onChange={(e) =>
                setProgress(e.target.value)
              }
            />

          </div>

          {/* PRIORITY */}

          <div className="form-group">

            <label>Project Priority</label>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >
              <option value="high">
                High
              </option>

              <option value="medium">
                Medium
              </option>

              <option value="low">
                Low
              </option>
            </select>

          </div>

          {/* FORM BUTTONS */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-project-btn"
              onClick={handleCancelForm}
            >
              Cancel
            </button>

            <button
              type="button"
              className="save-project-btn"
              onClick={
                editingProjectId
                  ? handleUpdateProject
                  : handleCreateProject
              }
            >
              {editingProjectId
                ? "Update Project"
                : "Create Project"}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Projects;