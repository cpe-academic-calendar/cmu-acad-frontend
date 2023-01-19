import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';
import SettingCalendar from './Pages/SettingCalendar/SettingCalendar';
import 'react-calendar/dist/Calendar.css';
import EventEdit from './Components/Events';
import EventInfo from './Components/EventsInfo';
import Activity from './Components/Activity';
import DayPopUp from './Components/DayPopUp';
import Draft from './Components/Draft';
import { Font } from './Styles/Font'
import { Reset } from './Styles/Reset';
import Variables from './Styles/Variables';
import Modal from './Components/UI/Modal';


function App() {
  return (
    <div>
      <Reset />
      <Font />
      <Variables />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChooseCalendar />} />
          <Route path="/setting" element={<SettingCalendar />} />
          <Route path="/draft_year" element={<Draft />}/>
          <Route path="/event" element={<EventEdit />} />
          <Route path="/info" element={<EventInfo />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/day_popup" element={<DayPopUp/>} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/yearview" element={<Draft />}/>
          <Route path="/event" element={<EventEdit />} />
          <Route path="/info" element={<EventInfo />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/popup" element={<DayPopUp/>} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
