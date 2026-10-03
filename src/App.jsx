import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Academics from "./pages/Academics";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import CareerRoadmap from "./pages/CareerRoadmap";
import Login from "./pages/Login";

import { useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  console.log("APP JSX IS RUNNING");

  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Academic Progress */}
        <Route
          path="/academics"
          element={
            <ProtectedRoute>
              <Academics />
            </ProtectedRoute>
          }
        />

        {/* Career Development */}
        <Route
          path="/career"
          element={
            <ProtectedRoute>
              <Career />
            </ProtectedRoute>
          }
        />

        {/* Skills Development */}
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />

        {/* Personalized Career Roadmap */}
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <CareerRoadmap />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;