import React from 'react';
import './book.css'


function Book() {
  return (
      <div>
        <img src={'https://res.cloudinary.com/ddbg71bua/image/upload/v1675232100/bookimg_vf9sgj.jpg'} alt="no image  " height="50%" width="50%" className="float-images" />
        <p className="book">Book Appointment!</p>
        <p className="book1"> * Enjoy the convenience of our state-of-the-art appointment<br /> scheduler designed to meet your needs.</p>
        <p className="book2"> * Receive remainders in the form of text or email.</p>
         <button className="button-1">Register Now</button>
        <h1 className="saii">MediCare</h1>
      </div>
  );
}

export default Book;