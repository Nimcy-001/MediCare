import React from 'react'
import './video.css'

function Video() {
  return (
    <div>
      <div className="first1">
        <p className="video">Video Consultation!</p>
        <p className="video4">Our services allows patients to visit with doctors<br /> online or schedule a visit when it is convenient.</p>
        <p className="video1"> . Helpful for new or follow up visits or to discuss test results. </p>
        <p className="video2"> . Choose visits in the form of video, audio or text.</p>
        <p className="video3">. Schedule an e-visit from anywhere on any device.</p>
        <button className="button-y">
          Register Now</button>
        <img src={'https://res.cloudinary.com/ddbg71bua/image/upload/v1675235792/cloud_qg1wxu.jpg'} alt="" className="float-image" />
        <h1 className="sai">MediCare</h1>
      </div>
    </div>
  );
}

export default Video;