import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCalendar from './Pages/ChooseCalendar/ChooseCalendar';
import SettingCalendar from './Pages/SettingCalendar/SettingCalendar';
import 'react-calendar/dist/Calendar.css';
import EventEdit from './Pages/CalendarEdit/Components/EventModal';
import EventInfo from './Pages/CalendarEdit/Components/EventInfo';
import Activity from './Components/Activity';
import Draft from './Pages/CalendarEdit/Components/YearCalendar';
import { Font } from './Styles/Font'
import { Reset } from './Styles/Reset';
import Variables from './Styles/Variables';
import ExportPopUP from './Components/ExportPopUp';
import ClendarEdit from './Pages/CalendarEdit/CalendarEdit'
import DuplicatePopUp from './Pages/ChooseCalendar/Components/DuplicatePopUp';
import CalendarWarp from './Pages/CalendarEdit/CalendarWarp';
import LoadingModal from './Pages/Loading/LoadingModal';


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
          <Route path="/activity" element={<Activity />} />
          <Route path="/export_popup" element={<ExportPopUP/>} />
          <Route path="/yearview" element={<Draft />}/>
          <Route path="/activity" element={<Activity />} />
          <Route path="/duplicate-popup" element={<DuplicatePopUp/>} />
          <Route path="/calendar-edit/:id/:view/:month/:year" element={<CalendarWarp/>} />
          <Route path="/loading" element={<LoadingModal/>} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
