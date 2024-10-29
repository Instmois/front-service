import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';
import Register from './api/Register.jsx';
import Login from './api/Login.jsx';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
