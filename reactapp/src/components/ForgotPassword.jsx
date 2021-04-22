import { React, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const resetPassword = () => {
    let alertMessage = document.getElementById("validationErrorMsg");
    alertMessage.style.display = "none";
    if (email.length === 0) {
      setValidationMessage("Please enter a valid email");
      alertMessage.style.display = "block";
      alertMessage.className = "alert-danger";
    } else {
      Axios.post("http://localhost:3001/user/forgotPassword", {
        email: email,
      })
        .then((response) => {
          if (response.data.successmessage) {
            setValidationMessage(response.data.successmessage);
            alertMessage.style.display = "block";
            alertMessage.className = "alert-success";
          } else if (response.data.signupmessage) {
            setValidationMessage(response.data.signupmessage);
            alertMessage.style.display = "block";
            alertMessage.className = "alert-info";
          } else {
            setValidationMessage(
              "OOPS...Something went wrong...Please try again"
            );
            alertMessage.style.display = "block";
            alertMessage.className = "alert-danger";
          }
        })
        .catch((error) => {
          setValidationMessage("Reset password failed...Please try again");
          alertMessage.style.display = "block";
          alertMessage.className = "alert-danger";
        });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto outblock">
            <div className="mb-5 mt-5">
              <img
                id="imgsrc"
                src="/images/whylogo.png"
                className="rounded mx-auto d-block logo"
                alt="why"
              />
            </div>
            <div className="heading">
              <h2 className="text-center mainheading">Password reset </h2>
              <h6 className="text-center dimtext">
                Enter your email to get a password reset link
              </h6>
            </div>
            <form
              className="form-container"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@address.com"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="alert" id="validationErrorMsg">
                {validationMessage}
              </div>
              <button
                onClick={resetPassword}
                className="btn btn-primary loginbtn"
              >
                Reset Password
              </button>

              <br />
              <br />
              <div className="endblock">
                <span className="dimtext">
                  Remember your password ?{" "}
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

export default ForgotPassword;
