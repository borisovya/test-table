import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import {ChartUnit} from "./components/Chart/ChartUnit";

function App() {
    return (
        <div className="App">
            <Header/>
            <Spreadsheet/>
           <ChartUnit />
        </div>
    );
}

export default App;
