import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';
import SettingCalendar from './Pages/SettingCalendar/SettingCalendar';
import { createGlobalStyle } from 'styled-components';
import DraftYear from './Pages/DraftYear/DraftYear';
import 'react-calendar/dist/Calendar.css';
import EventEdit from './Components/Events';
import EventInfo from './Components/EventsInfo';

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
          <Route path="/setting" element={<SettingCalendar />} />
          <Route path="/DraftYear" element={<DraftYear />}/>
          <Route path="Event" element={<EventEdit />} />
          <Route path="Info" element={<EventInfo />} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
