import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photos/:id" element={<PhotoPage />} />
    </Routes>
  )
}

export default App