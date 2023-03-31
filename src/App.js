import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        {/* Content */}
      </div>
    </Router>
  );
}

export default App;
