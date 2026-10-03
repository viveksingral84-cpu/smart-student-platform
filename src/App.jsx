import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Academics from './pages/Academics'
import Career from './pages/Career'
import Skills from './pages/Skills'
import CareerRoadmap from './pages/CareerRoadmap'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* Academic Progress */}
        <Route
          path="/academics"
          element={<Academics />}
        />

        {/* Career Development */}
        <Route
          path="/career"
          element={<Career />}
        />

        {/* Skills Development */}
        <Route
          path="/skills"
          element={<Skills />}
        />

        {/* Personalized Career Roadmap */}
        <Route
          path="/roadmap"
          element={<CareerRoadmap />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App