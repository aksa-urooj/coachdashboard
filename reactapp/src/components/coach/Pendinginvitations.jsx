import { FaArrowRight, FaTimesCircle } from "react-icons/fa";
import "./css/myclients.css";
const Pendinginvitations = () => {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-xs-12 col-12 mt-1 maincontent">
        <div className="main-card p-3 col-12">
          <div className="card-header cardheader-2">
            <h2>
              <span className="heading ">
                Recent Invitations
                <button>
                  See All &nbsp;
                  <FaArrowRight className="showallfa" />
                </button>
              </span>
            </h2>
          </div>
          <div className="card-body col-12 col-sm-12 col-xs-12">
            <div className="table-responsive">
              <table class="table table-striped table-hover" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th colspan="3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aqsa Urooj</td>
                    <td>aqsaurooj@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-29</td>
                    <td>
                      <button className="  btn btn-outline-primary btn-sm resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>

                    <td>
                      <button
                        title="Cancel invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nimra Urooj</td>
                    <td>nimraurooj@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-29</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nooreen Zahoor</td>
                    <td>nooreen@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-27</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Adnan Bhat</td>
                    <td>adnanbhat@gmail.com</td>
                    <td>What</td>
                    <td>2021-04-27</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Tufail Mir</td>
                    <td>tufailmir@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-27</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Amina Altaf</td>
                    <td>amina@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-26</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sumiran Kaur</td>
                    <td>sumirankaur@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-26</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mehroush Altaf</td>
                    <td>mehroush@gmail.com</td>
                    <td>What</td>
                    <td>2021-04-26</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm   resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Farhat Wani </td>
                    <td>farhatwani@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-23</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bisma Fayaz</td>
                    <td>bismafayaz@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-22</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm  resendbutton">
                        Resend &nbsp;
                        <FaArrowRight className="resendfa" />
                      </button>
                    </td>
                    <td>
                      <button
                        title="Cancel Invitation"
                        className="cancelbutton"
                      >
                        <FaTimesCircle className="cancelfa" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pendinginvitations;
