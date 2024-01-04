import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <div className="wrapper">
        <nav>
          <div className="content">
            <div className="logo"><a href="#">MEDICARE</a></div>
            <ul className="links">
              <li><a href="/home">Home</a></li>
              <li>
                <a href="#" className="desktop-link">Speciality</a>
                {/* <input type="checkbox" id="show-features" /> */}
                {/* <label htmlFor="show-features">Speciality</label> */}
                <ul>
                <li><a href='/speciality'>General Medicine</a></li>
                  <li><a href="/speciality">Pediatric Care</a></li>
                  <li><a href="/speciality">Gynaecology</a></li>
                  <li><a href="/speciality">Dental</a></li>
                </ul>
                </li>
                <li><a className="desktop-link" href='/contact'>Contact Us</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar
