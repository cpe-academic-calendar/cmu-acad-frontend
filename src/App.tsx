import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';
import { createGlobalStyle } from 'styled-components';

const GobalStyle = createGlobalStyle`
  font-family: 'Roboto', sans-serif;
`;


function App() {
  return (
    <div>
      <GobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChooseCalendar />} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
