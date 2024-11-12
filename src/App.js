import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Upload from './Component/Upload';
import AboutUs from './Component/AboutUs';
import Nav from './Component/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/about" element={<AboutUs/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
