import { React, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const history = useHistory();

  const signIn = () => {
    let alertMessage = document.getElementById("validationErrorMsg");
    alertMessage.style.display = "none";
    if (password.length === 0 || email.length === 0) {
      setValidationMessage("Please fill all the required fields");
      alertMessage.className = "alert-info";
      alertMessage.style.display = "block";
    } else {
      Axios.post(
        "http://localhost:3001/user/signin",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
        .then((response) => {
          if (response.data.invalidMessage) {
            setValidationMessage(response.data.invalidMessage);
            alertMessage.className = "alert-danger";
            alertMessage.style.display = "block";
          } else if (response.data.loginSuccess) {
            history.push({ pathname: "/dashboard/home" });
          } else if (response.data.verifyMessage) {
            setValidationMessage(response.data.verifyMessage);
            alertMessage.className = "alert-info";
            alertMessage.style.display = "block";
          }
        })
        .catch((error) => console.log(error));
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
        <div className="row outerrow">
          <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto outblock">
            <div className="mb-5 mt-5">
              <img
                id="imgsrc"
                src="/images/whylogo.png"
                className="rounded mx-auto d-block logo"
                alt="why"
              />
            </div>
            <div className="heading mt-5">
              <h2 className="text-center mainheading">Sign in</h2>
            </div>
            <form
              className="form-container"
              id="signinForm"
              onSubmit={(e) => e.preventDefault()}
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
                    autoComplete="off"
                    placeholder="Enter your password"
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

              <div className="row">
                <div className="col">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label
                      className="form-check-label dimtext"
                      for="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <NavLink exact to="/app/forgotpassword">
                    Forgot Password?
                  </NavLink>
                </div>
              </div>
              <div className="alert text-center" id="validationErrorMsg">
                {validationMessage}
              </div>

              <input
                type="submit"
                value="Sign in"
                className="btn btn-primary loginbtn"
                onClick={signIn}
              />

              <br />
              <br />
              <div className="endblock">
                <span className="dimtext">
                  Don't have an account?{" "}
                  <NavLink exact to="/app/signup">
                    Sign up
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

export default Login;
