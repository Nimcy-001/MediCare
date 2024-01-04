import React from 'react'
import ContactUs from './pages/contactus'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctor_d from './jojo/docDetails6'
import Patient_d from './jojo/patientDetails5'
import Welcome from './jojo/welcome1';
import Login from './jojo/login2'
import Signup from './jojo/signup3'
import Selector from './jojo/selector4'
import Home from './pages/home';
import Navbar from './components/Navbar';
import Feedback from './pages/feedBack';
import Speciality from './sai/speciality';
import Book from './sai/book';
import Register from './sai/register';
import Video from './sai/video';
import Paymenthome from './sai/paymenthome';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Router>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/selector' element={<Selector/>} />
      <Route path='/patientd' element={<Patient_d/>} />
      <Route path='/doctord' element={<Doctor_d/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/feedback' element={<Feedback/>} />
      <Route path='/speciality' element={<Speciality/>} />
      <Route path='/book' element={<Book/>} />
        <Route path='/register' element={<Register/>} /> 
      <Route path='/video' element={<Video/>} />
      <Route path='/paymenthome' element={<Paymenthome/>} />

      </Routes>
      </Router>
      
    </>
  )
}

export default App

