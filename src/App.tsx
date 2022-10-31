import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';
import SettingCalendar from './Pages/SettingCalendar/SettingCalendar';
import DraftYear from './Pages/DraftYear/DraftYear';
import 'react-calendar/dist/Calendar.css';
import EventEdit from './Components/Events';
import EventInfo from './Components/EventsInfo';
import Activity from './Components/Activity';
import DayPopUp from './Components/DayPopUp';
import Draft from './Components/Draft';
import Font from './Styles/Font'
import Variables from './Styles/Variables';


function App() {
  return (
    <div>
      <Font />
      <Variables />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChooseCalendar />} />
          <Route path="/setting" element={<SettingCalendar />} />
          <Route path="/DraftYear" element={<Draft />}/>
          <Route path="Event" element={<EventEdit />} />
          <Route path="Info" element={<EventInfo />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="Popup" element={<DayPopUp/>} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
