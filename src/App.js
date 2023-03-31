import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path="/content1" element={<h1>Content1</h1>} />
            <Route path="/content2" element={<h1>Content2</h1>} />
            <Route path="/content3" element={<h1>Content3</h1>} />
            <Route path="/content4" element={<h1>Content4</h1>} />
            <Route path="/content5" element={<h1>Content5</h1>} />
            <Route path="/content6" element={<h1>Content6</h1>} />
            <Route path="/content7" element={<h1>Content7</h1>} />
            <Route path="/content8" element={<h1>Content8</h1>} />
            <Route path="/content9" element={<h1>Content9</h1>} />
            <Route path="/content10" element={<h1>Content10</h1>} />
            <Route path="/content11" element={<h1>Content11</h1>} />
            <Route path="/content12" element={<h1>Content12</h1>} />
            <Route path="/content13" element={<h1>Content13</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
