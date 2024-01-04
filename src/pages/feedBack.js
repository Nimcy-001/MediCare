import React from 'react'
import './FeedBack.css'
import Navbar from '../components/Navbar';
function Feedback() {
  return (
    <div>
      <Navbar/>
      <div className="container0">
        <form>
          <h1>Feedback</h1>
          <input type="text" id="firstName" placeholder="First Name" required />
          <input type="text" id="lastName" placeholder="Last Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="number" id="mobile" placeholder="Mobile" required />
          <h4>Type your Feedback Here</h4>
          <textarea required defaultValue={""} />
          <input type="submit" defaultValue="Send" id="button" />
        </form>
      </div>
    </div>
  );
  }

export default Feedback;
