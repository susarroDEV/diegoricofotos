import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Page404 } from './pages/Page404'
import { AboutPage } from './pages/AboutPage'
import { PortfolioPage } from './pages/PortfolioPage'

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="*" element={ <Page404 />} />
        <Route path="/" element={ <HomePage />} />
        <Route path="/sobre-mi" element={ <AboutPage/> } />
        <Route path="/trabajos" element={ <PortfolioPage/> } />
      </Routes>
    </Router>
  )
}
