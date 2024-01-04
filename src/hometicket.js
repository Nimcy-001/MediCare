import React from 'react';
import hometicket from'hometicket.css';
function hometicket() {
    return (
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark-secondary">
              <div className="container">
                <a className="navbar-brand" href="#">Concert</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">Home
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">Order Tickets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <section className="background grid grid-center" id="showcase-background-1">
              <div className="container text-white">
                <h1 className="display-2 mb-3">Tickets On Sale Now!</h1>
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <p>Get ready for the most anticipated Jazz Concert of the year. See your favorite local artists come together like never before. 
                    </p>
                  </div>
                </div>
                <a className="pr-5 pl-5 pt-2 pb-2 text-white btn text-uppercase font-weight-bold btn-gradient" href="#">Order Now</a>
              </div>
            </section>
            <section className="pb-5 pt-5 bg-dark-secondary">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 text-white">
                    <h2 className="text-uppercase display-4">Upcoming Events</h2>
                    <hr className="hr-red" />
                    <p className="mt-5 font-weight-100 letter-spacing-4px">Make sure you stay up to date with the latest concert news. Get the best discount alerts when you sign up today.</p>
                    <form action="#" method="POST">
                      <div className="form-group position-relative">
                        <input className="form-outline-gray" name="email" id="email" type="email" required />
                        <label className="label-absolute" htmlFor="email">Email</label>
                      </div>
                      <input className="mb-4 pr-5 pl-5 pt-2 pb-2 btn text-uppercase font-weight-bold text-red btn-outline-red" type="submit" name="send" id="send" defaultValue="Send" />
                    </form>
                  </div>
                  <div className="col-12 col-lg-6">
                    <aside className="card box-shadow bg-dark-primary text-white">
                      <div className="card-header p-0">
                        <img className="cover" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/Concert/master/images/singer.jpg" alt="Singer" />
                      </div>
                      <div className="card-body">
                        <h3>Jonathan Smith</h3>
                        <p>April 13<sup>th</sup> 2018 <br /> <span className="font-weight-100">Join us for a combination of the most talented artists in the industry. This concert will be a musical adventure, one like
                            you have never been in before.</span></p>
                        <a className="text-red text-uppercase font-weight-bold" href="#">More Info</a>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </section>
            <section className="background pb-5 pt-5 text-white text-center" id="showcase-background-2">
              <div className="container">
                <h2 className="text-uppercase display-4">Latest Artists</h2>
                <hr className="hr-red" />
                <p>Find out more about the latest talent in the industry. Look through their eyes as you see what inspires them to create music. As they go thorugh their musical quest  to storm the charts see how each of them deal with roadblocks and the personal struggles they need to overcome.</p>
                <div className="card-deck mt-5 mb-3 text-center">
                  <div className="card mb-4 box-shadow border-0 h-500px">
                    <img className="position-absolute cover" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/Concert/master/images/member2.jpg" alt="Steven Lee" />
                    <h4 className="text-red position-bottom position-absolute position-center text-uppercase font-weight-bold">Steven Lee</h4>
                  </div>
                  <div className="card mb-4 box-shadow border-0  h-500px">
                    <img className="position-absolute cover" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/Concert/master/images/member1.jpg" alt="Wesley Francis" />
                    <h4 className="text-red position-bottom position-absolute position-center text-uppercase font-weight-bold">Wesley Francis</h4>
                  </div>
                  <div className="card mb-4 box-shadow border-0  h-500px">
                    <img className="position-absolute cover" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/Concert/master/images/member3.jpg" alt="Jake Lively" />
                    <h4 className="text-red position-bottom position-absolute position-center text-uppercase font-weight-bold">Jake Lively</h4>
                  </div>
                </div>
              </div></section>
            <section className="pb-5 pt-5 text-white text-center">
              <h2 className="text-uppercase display-4">Latest Updates</h2>
              <hr className="hr-red" />
              <br />
              <h3 className="mt-5 fab fa-twitter" />
              <p className="font-weight-100 letter-spacing-4px"><i className="fas fa-quote-left" /> I am looking foward to attending the Jonathan Smith's Concert!!! <i className="fas fa-quote-right" /></p>
              <a className="text-red" href="#">@aconcertfan</a>
            </section>
            <section className="pb-5 pt-5 bg-dark-secondary text-white text-center">
              <h2 className="text-uppercase display-4">Contact Us</h2>
              <hr className="hr-red" />
              <form className="text-left container mt-5" action="#" method="POST">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group position-relative">
                      <input className="form-outline-gray" name="firstname" id="firstname" type="text" required />
                      <label className="label-absolute" htmlFor="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group position-relative">
                      <input className="form-outline-gray" name="lastname" id="lastname" type="text" required />
                      <label className="label-absolute" htmlFor="lastname">Last Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group position-relative">
                      <input className="form-outline-gray" name="email" id="email" type="email" required />
                      <label className="label-absolute" htmlFor="email">Email</label>
                    </div>
                    <div className="form-group position-relative">
                      <input className="form-outline-gray" name="subject" id="subject" type="subject" required />
                      <label className="label-absolute" htmlFor="subject">Subject</label>
                    </div>
                    <div className="form-group position-relative">
                      <input className="form-outline-gray" name="message" id="message" type="message" required />
                      <label className="label-absolute" htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>
                <input className="pr-5 pl-5 pt-2 pb-2 btn text-uppercase font-weight-bold text-red btn-outline-red" type="submit" name="send" id="send" defaultValue="Send" />
              </form>
            </section>
          </main>
          <footer className="text-white pt-3 pb-3">
            <div className="container d-flex align-items-center justify-content-between">
              <small>Concert 2018. All rights reserved.</small>
              <ul className="list-unstyled d-flex p-0 m-0">
                <li className="p-3">
                  <a className="text-white text-decoration-none" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="p-3">
                  <a className="text-white text-decoration-none" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="p-3">
                  <a className="text-white text-decoration-none" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      );
}

export default hometicket
