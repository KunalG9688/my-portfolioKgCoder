import './App.css'
import Header from './layout/Header'
import BannerLayout from './layout/BannerLayout'

import ProjectFull from './pages/ProjectFull'
import Home from './layout/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-full" element={<ProjectFull />} /> {/* The page you're redirecting to */}
      </Routes>
    </Router>
      
      {/* <ProjectFull /> */}
    </div>
  )
}

export default App
