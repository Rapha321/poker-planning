import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Board from './components/Board';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/board/:currentSession" element={<Board />} />
        </Routes>
      </BrowserRouter>
      

  );
}

export default App;
