import React from 'react'
import styled from 'styled-components';
function Register() {
    <Section id='register'>
    return (
      <div>
        <div className="container-x">
          <div className="title-x">Registration</div>
          <form action="#">
            <div className="user_details-x">
              <div className="input_box-x">
                <span className="details-x">Full Name</span>
                <input type="text" placeholder="name" required />
              </div>
              <div className="input_box-x">
                <span className="details-x">Username</span>
                <input type="text" placeholder="Eg:nithya03" required />
              </div>
              <div className="input_box-x">
                <span className="details-x">Email</span>
                <input type="email" placeholder="email ID" required />
              </div>
              <div className="input_box-x">
                <span className="details-x">Phone Number</span>
                <input type="number" placeholder={1234567890} required />
              </div>
              <div className="input_box-x">
                <span className="details-x">Password</span>
                <input type="password" placeholder="********" required />
              </div>
              <div className="input_box-x">
                <span className="details-x">Confirm Password</span>
                <input type="password" placeholder="********" required />
              </div>
            </div>
            <div className="gender_details-x">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender_title-x">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span>Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span>Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span>Others</span>
                </label>
              </div>
            </div>
            <div className="button-x">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    );
    </Section>
  }
  export default Register;
const Section=styled.section`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-blue: #71b7e6;
  --main-purple: #9b59b6;
  --main-grey: #ccc;
  --sub-grey: #d9d9d9;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center; /*center vertically */
  align-items: center; /* center horizontally */
  background: linear-gradient(135deg, var(--main-blue), var(--main-purple));
  padding: 10px;
}
/* container-x and form */
.container-x {
  max-width: 800px;
  width: 200%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
}
.container-x .title-x {
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  top: 8px;
  left:3%;
}

.container-x .title-x::before {
  content: "";
  position: absolute;
  height: 3.5px;
  width: 30px;
  background: linear-gradient(135deg, var(--main-blue), var(--main-purple));
  left: 0;
  bottom: 0;
}

.container-x form .user_details-x {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
/* inside the form user details */
form .user_details-x .input_box-x {
  width: calc(100% / 2 - 20px);
  margin-bottom: 15px;
}

.user_details-x .input_box-x .details-x {
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}
.user_details-x .input_box-x input {
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--main-grey);
  padding-left: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user_details-x .input_box-x input:focus,
.user_details-x .input_box-x input:valid {
  border-color: var(--main-purple);
}

/* inside the form gender details */

form .gender_details-x .gender_title-x {
  font-size: 20px;
  font-weight: 500;
}

form .gender_details-x .category {
  display: flex;
  width: 80%;
  margin: 15px 0;
  justify-content: space-between;
}

.gender_details-x .category label {
  display: flex;
  align-items: center;
}

.gender_details-x .category .dot {
  height: 18px;
  width: 18px;
  background: var(--sub-grey);
  border-radius: 50%;
  margin: 10px;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked ~ .category .one,
#dot-2:checked ~ .category .two,
#dot-3:checked ~ .category .three {
  border-color: var(--sub-grey);
  background: var(--main-purple);
}

form input[type="radio"] {
  display: none;
}

/* submit button-x */
form .button-x {
  height: 45px;
  margin: 45px 0;
}

form .button-x input {
  height: 100%;
  width: 100%;
  outline: none;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  background: linear-gradient(135deg, var(--main-blue), var(--main-purple));
  transition: all 0.3s ease;
}

form .button-x input:hover {
  background: linear-gradient(-135deg, var(--main-blue), var(--main-purple));
}

@media only screen and (max-width: 584px) {
  .container-x {
    max-width: 100%;
  }

  form .user_details-x .input_box-x {
    margin-bottom: 15px;
    width: 100%;
  }

  form .gender_details-x .category {
    width: 100%;
  }

  .container-x form .user_details-x {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user_details-x::-webkit-scrollbar {
   width:0;}
}
`