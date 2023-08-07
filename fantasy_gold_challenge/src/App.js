import './App.css';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUp';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
                        
// Add routes to the App component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Add the Navbar component */}
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;