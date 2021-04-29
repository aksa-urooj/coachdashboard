import "./css/home.css";
//import "./css/myclients.css";
import {
  FaEnvelopeOpenText,
  FaEnvelope,
  FaCheckCircle,
  FaUserFriends,
  FaArrowRight,
  FaTimesCircle,
  FaUser,
  FaEdit,
} from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-xs-12 col-12 mt-1 maincontent">
        <div className="p-3 col-12 headingbox">
          <h3>Dashboard</h3>
        </div>

        <div className="row p-4">
          <div className="card card-outer col-xl-2.5  col-lg-3 col-md-10 col-12 mb-4">
            <div className="col-12">
              <span className="card-invite col-12 ">
                <FaEnvelopeOpenText className="faicon faenvelopeopen" />
                <h2 className="invite">Invite People</h2>
              </span>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-danger mt-4 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#inviteModal"
            >
              Invite Now
            </button>
            <div
              class="modal fade"
              id="inviteModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      New Invitation
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="fullname" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullname"
                          aria-describedby="nameHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="course" class="form-label">
                          Course
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="course"
                          aria-describedby="courseHelp"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" card card-outer col-xl-2 col-lg-3 col-md-10 col-12 mb-4">
            <FaUserFriends className="faicon fausers" />

            <div className="card-inner col-12 mt-4 ">
              <p className="text-primary-p ">Total Clients</p>
              <h2 className="font-bold number text-title badge rounded-pill bg-dark mb-4 ">
                9
              </h2>
            </div>
          </div>

          <div className="card card-outer col-xl-2 col-lg-3 col-md-10 col-12 mb-4">
            <FaCheckCircle className="faicon facheck" />
            <div className="card-inner col-sm-12 mt-4 ">
              <p className="text-primary-p ">Accepted Invitations</p>
              <h2 className="font-bold number text-title mb-4 badge rounded-pill bg-success ">
                9
              </h2>
            </div>
          </div>
          <div className="card card-outer col-xl-2  col-lg-3 col-md-10 col-12 mb-4">
            <FaEnvelope className="faicon faenvelope" />
            <div className="card-inner col-sm-12 mt-4 ">
              <p className="text-primary-p ">Remaining Invitations</p>
              <h2 className="font-bold number text-title badge  mb-4 rounded-pill bg-warning">
                4
              </h2>
            </div>
          </div>
        </div>
        {
          //Recent Discoveries
        }
        <div className="main-card p-3">
          <div className="card-header cardheader-1 ">
            <h2>
              <span className="heading ">
                Recent Discoveries
                <button>
                  See All &nbsp;
                  <FaArrowRight className="showallfa" />
                </button>
              </span>
            </h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-striped" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>

                    <th>Discovery</th>
                    <th colspan="3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aqsa Urooj</td>
                    <td>aqsaurooj@gmail.com</td>
                    <td className="text-uppercase text-style">Right Way</td>
                    <td>2021-04-21</td>
                  </tr>

                  <tr>
                    <td>Nimra Urooj</td>
                    <td>nimraurooj@gmail.com</td>
                    <td className="text-uppercase text-style">Contribute</td>
                    <td>2021-04-20</td>
                  </tr>
                  <tr>
                    <td>Nooreen Zahoor</td>
                    <td>nooreen@gmail.com</td>
                    <td className="text-uppercase text-style">Right Way</td>
                    <td>2021-04-19</td>
                  </tr>
                  <tr>
                    <td>Adnan Bhat</td>
                    <td>adnanbhat@gmail.com</td>
                    <td className="text-uppercase text-style">Mastery</td>
                    <td>2021-04-16</td>
                  </tr>
                  <tr>
                    <td>Tufail Mir</td>
                    <td>tufailmir@gmail.com</td>
                    <td className="text-uppercase text-style">Clarify</td>
                    <td>2021-04-06</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {
          //Invitations
        }
        <div className="main-card col-12 p-3">
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
          <div className="card-body">
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
                    <td>Amina Altaf</td>
                    <td>amina@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-26</td>
                  </tr>
                  <tr>
                    <td>Sumiran Kaur</td>
                    <td>sumirankaur@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-26</td>
                  </tr>
                  <tr>
                    <td>Mehroush Altaf</td>
                    <td>mehroush@gmail.com</td>
                    <td>What</td>
                    <td>2021-04-26</td>
                  </tr>
                  <tr>
                    <td>Farhat Wani </td>
                    <td>farhatwani@gmail.com</td>
                    <td>Why</td>
                    <td>2021-04-23</td>
                  </tr>
                  <tr>
                    <td>Bisma Fayaz</td>
                    <td>bismafayaz@gmail.com</td>
                    <td>How</td>
                    <td>2021-04-22</td>
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
export default Home;
