import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
      </Routes>
    </Router>
  )
}

export default App
