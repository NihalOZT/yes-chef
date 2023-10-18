import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import YemekFiltreleyici from './component/YemekFiltreleyici';

function App() {
  return (
    <div className="main">

                <BrowserRouter>
                    <Routes>
                        <Route path="/yemek" element={<YemekFiltreleyici />} />
                    </Routes>
                </BrowserRouter>


            </div>
  );
}

export default App;
