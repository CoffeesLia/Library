import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
