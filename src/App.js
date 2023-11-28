import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import YemekFiltreleyici from './component/YemekFiltreleyici';
import AppNavbar from "./component/AppNavbar";
import Soup from "./component/Soup";
import Salad from './component/Salad';
import Food from './component/Food';

function App() {
    return (
        <div className="main">
            <AppNavbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/yemek" element={<YemekFiltreleyici/>}/>
                    <Route path="/food" element={<Food/>}/>
                    <Route path="/soup" element={<Soup/>}/>
                    <Route path="/salad" element={<Salad/>}/>


                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
