import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Team from './components/sections/Team'
import NotFound from './components/NotFound'
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'
import AfterDark from './components/sections/AfterDark'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Report from './components/Report'
import Year2026 from './Year2026'
import DetailedReport from './DetailedReport'

export const CURRENT_YEAR = '2025'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={`/${CURRENT_YEAR}`} />} />
        <Route path="/schedule" element={<Navigate to={`/${CURRENT_YEAR}/schedule`} replace />} />
        <Route path="/team" element={<Navigate to={`/${CURRENT_YEAR}/team`} replace />} />
        <Route path="/afterdark" element={<Navigate to={`/${CURRENT_YEAR}/afterdark`} replace />} />
        <Route path="/report" element={<Navigate to={`/${CURRENT_YEAR}/report`} replace />} />
        <Route path="/detailed-report" element={<Navigate to={`/${CURRENT_YEAR}/detailed-report`} replace />} />

        <Route path="/2025" element={<Home />} />
        <Route path="/2025/schedule" element={<Schedule />} />
        <Route path="/2025/team" element={<Team />} />
        <Route path="/2025/afterdark" element={<AfterDark />} />
        <Route path="/2025/report" element={<Report />} />
        <Route path="/2025/detailed-report" element={<DetailedReport />} />

        <Route path="/2026" element={<Year2026 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <SpeedInsights />
    </Router>
  )
}

export default App
