import React from 'react'
import './ContactUs.css'
import Navbar from '../components/Navbar';
function ContactUs() {
  return (
    <div>
        <Navbar />
      <div className="container-1">
        <form>
          <h1>Contact Us For Queries</h1>
          <input type="text" id="firstName" placeholder="First Name" required />
          <input type="text" id="lastName" placeholder="Last Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="number" id="mobile" placeholder="Mobile" required />
          <h4>Type your Query Here</h4>
          <textarea required defaultValue={""} />
          <input type="submit" defaultValue="Send" id="button" />
        </form>
      </div>
    </div>
  );
}


export default ContactUs
