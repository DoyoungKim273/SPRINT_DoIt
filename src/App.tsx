import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './mainpage/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
