import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';

const App = () => {
  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1976d2', padding: '16px' }}>
        <div>
          <a href="/" style={{ marginRight: '16px', color: '#fff' }}>Sleek</a>
          <a href="/" style={{ marginRight: '16px', color: '#fff' }}>Retro</a>
          <a href="/" style={{ backgroundColor: '#dc004e', color: 'white', padding: '8px 16px' }}>Playful</a>
        </div>
        <img src="https://via.placeholder.com/40" alt="profile" style={{ borderRadius: '50%' }} />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
      </Routes>
    </>
  );
};

export default App;
