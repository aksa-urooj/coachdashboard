import { React, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const createAccount = () => {
    let alertMessage = document.getElementById("validationErrorMsg");
    alertMessage.style.display = "none";

    if (
      firstName.length === 0 &&
      lastName.length === 0 &&
      email.length === 0 &&
      password.length === 0
    ) {
      setValidationMessage("Please fill all the required fields");
      alertMessage.className = "alert-info";
      alertMessage.style.display = "block";
    } else {
      Axios.post("http://localhost:3001/user/signup", {
        firstname: firstName,
        lastname: lastName,
        mobile: mobile,
        email: email,
        password: password,
      })
        .then((response) => {
          if (response.data.successmessage) {
            setValidationMessage(response.data.successmessage);
            alertMessage.className = "alert-success";
            alertMessage.style.display = "block";
          } else {
            setValidationMessage(response.data[0].message);
            alertMessage.className = "alert-danger";
            alertMessage.style.display = "block";
          }
        })
        .catch((error) => {
          setValidationMessage(
            "Form submission failed...There was a problem creating your account...Please try again"
          );
          alertMessage.className = "alert-danger";
          alertMessage.style.display = "block";
        });
    }
  };

  const togglePassword = () => {
    let passwordbox = document.getElementById("exampleInputPassword1");
    if (passwordVisibility === false) {
      passwordbox.setAttribute("type", "text");
      setPasswordVisibility(true);
    } else {
      passwordbox.setAttribute("type", "password");
      setPasswordVisibility(false);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row outblock">
          <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto">
            <div className="mb-3 mt-3">
              <img
                id="imgsrc"
                src="/images/whylogo.png"
                className="rounded mx-auto d-block logo"
                alt="why"
              />
            </div>
            <div className="heading">
              <h2 className="text-center mainheading">Sign up</h2>
            </div>
            <form
              id="signupForm"
              className="form-container"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className="row mb-3  g-3">
                <div className="col ">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    placeholder="First name"
                    aria-label="First name"
                    autocomplete="off"
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="col">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    placeholder="Last name"
                    aria-label="Last name"
                    autocomplete="off"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="typePhone" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  id="typePhone"
                  autocomplete="off"
                  name="phone"
                  className="form-control"
                  placeholder="This field is optional"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  autocomplete="off"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="name@address.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text dimtext">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                    required
                    autocomplete="off"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-default reveal eyebtn"
                    type="button"
                    onClick={togglePassword}
                  >
                    <i className="fa fa-eye password-icon"></i>
                  </button>
                </div>
              </div>

              <div className="alert text-center " id="validationErrorMsg">
                {validationMessage}
              </div>
              <button
                className="btn btn-primary loginbtn"
                onClick={createAccount}
              >
                Sign up
              </button>

              <br />
              <br />

              <div className="endblock">
                <span className="dimtext">
                  Already have an account?{" "}
                  <NavLink exact to="/app/signin">
                    Sign in
                  </NavLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
