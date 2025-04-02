import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router";
import Home from "./Main/home";

function App() {
  return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
              <Routes>
                  <Route path="/" element={<Home/>} />
              </Routes>
          </header>
        </div>
      </HashRouter>
  );
}

export default App;
