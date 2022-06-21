import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseCalendar />} />
      </ Routes>
    </ BrowserRouter>
  );
}

export default App;
