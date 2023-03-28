import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingCalendar from './Pages/SettingCalendar/SettingCalendar';
import 'react-calendar/dist/Calendar.css';
import EventEdit from './Pages/CalendarEdit/Components/EventModal';
import Draft from './Pages/CalendarEdit/Components/YearCalendar';
import { Font } from './Styles/Font'
import { Reset } from './Styles/Reset';
import Variables from './Styles/Variables';
import ExportPopUP from './Components/ExportPopUp';
import ClendarEdit from './Pages/CalendarEdit/CalendarEdit'
import DuplicatePopUp from './Pages/ChooseCalendar/Components/DuplicatePopUp';
import LoadingModal from './Pages/Loading/LoadingModal';
import Admin from './Pages/Admin/Admin';
import RecentlyDeleted from './Pages/RecentlyDeleted/RecentlyDeleted';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Redirect from './Pages/Redirects/Redirect';
import SecondRedirect from './Pages/Redirects/SecondRedirect';
import ToLogin from './Pages/Redirects/ToLogin';
import CalendarWarp from './Pages/CalendarEdit/CalendarWarp';
import ChooseWarp from './Pages/ChooseCalendar/ChooseWarp';

function App() {
  
  return (
    <div>
      <Reset />
      <Font />
      <Variables />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ToLogin />} />
          <Route path='/redirect' element={<Redirect />} />
          <Route path="/token=:token" element={<SecondRedirect />} />
          <Route path="/choose_calendar" element={<ChooseWarp />} />
          <Route path="/setting" element={<SettingCalendar />} />
          <Route path="/draft_year" element={<Draft />}/>
          <Route path="/event" element={<EventEdit />} />
          <Route path="/export_popup" element={<ExportPopUP/>} />
          <Route path="/yearview" element={<Draft />}/>
          <Route path="/duplicate-popup" element={<DuplicatePopUp/>} />
          <Route path="/calendar-edit/:id/:view" element={<CalendarWarp/>} />
          <Route path="/loading" element={<LoadingModal/>} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/recently-deleted' element={<RecentlyDeleted />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
