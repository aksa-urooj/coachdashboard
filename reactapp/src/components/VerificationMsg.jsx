import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/verifypage.css";

const VerificationMsg = () => {
  const { verifyresult } = useParams();

  if (verifyresult === "success") {
    return (
      <>
        <div className="row">
          <div className="text-center col-xl-4 col-lg-5 col-md-5 col-sm-10 col-10 mx-auto mt-4 borderbox">
            <div className="col mb-3">
              <img
                id="imgsrc"
                src={process.env.PUBLIC_URL + "/images/whylogo.png"}
                className="rounded mx-auto d-block logo"
                alt="why"
              />
            </div>
            <h1 className="successmessage">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <br />
              Email verification Successful
            </h1>
            <h5 >
              Your email address is successfully verified. Please sign in to
              access your account.
            </h5>
            <NavLink exact to="/app/signin" className="btn btn-lg btn-success">
              Sign in
            </NavLink>
          </div>
        </div>
      </>
    );
  } else if (verifyresult == "failure") {
    return (
      <>
        <div className="row">
          <div className="text-center col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto mt-5 borderbox">
            <div className="col mb-3">
              <img
                id="imgsrc"
                src={process.env.PUBLIC_URL + "/images/whylogo.png"}
                className="rounded mx-auto d-block logo"
                alt="why"
              />
            </div>
            <h2 className="failureheading">
              <br />
              Email verification failed!
            </h2>
            <h5>There was some problem verifying your account.</h5>
          </div>
        </div>
      </>
    );
  }
};
export default VerificationMsg;
