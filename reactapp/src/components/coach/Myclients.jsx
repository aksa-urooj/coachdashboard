import "./css/myclients.css";
import { FaArrowRight, FaUser, FaEdit } from "react-icons/fa";
const Myclients = () => {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-xs-12 col-12 mt-1 maincontent">
        <div className="main-card p-3 col-12">
          <div className="card-header cardheader-1">
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
          <div className="card-body col-12 col-sm-12 col-xs-12">
            <div className="table-responsive">
              <table className="table table-hover table-striped" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>

                    <th colspan="3">Discovery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aqsa Urooj</td>
                    <td>aqsaurooj@gmail.com</td>
                    <td className="text-uppercase text-style">Right Way</td>
                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nimra Urooj</td>
                    <td>nimraurooj@gmail.com</td>
                    <td className="text-uppercase text-style">Contribute</td>
                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nooreen Zahoor</td>
                    <td>nooreen@gmail.com</td>
                    <td className="text-uppercase text-style">Right Way</td>
                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Adnan Bhat</td>
                    <td>adnanbhat@gmail.com</td>
                    <td className="text-uppercase text-style">Mastery</td>

                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Tufail Mir</td>
                    <td>tufailmir@gmail.com</td>
                    <td className="text-uppercase text-style">Clarify</td>
                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Amina Altaf</td>
                    <td>amina@gmail.com</td>
                    <td className="text-uppercase text-style">Trust</td>

                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sumiran Kaur</td>
                    <td>sumirankaur@gmail.com</td>
                    <td className="text-uppercase text-style">Challenge</td>

                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mehroush Altaf</td>
                    <td>mehroush@gmail.com</td>
                    <td className="text-uppercase text-style">Simplify</td>
                    <td>
                      <button className="btn btn-secondary btn-sm editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Farhat Wani </td>
                    <td>farhatwani@gmail.com</td>
                    <td className="text-uppercase text-style">Contribute</td>
                    <td>
                      <button className="btn btn-secondary btn-sm  editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm   viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bisma Fayaz</td>
                    <td>bismafayaz@gmail.com</td>
                    <td className="text-uppercase text-style">Simplify</td>
                    <td>
                      <button className="btn btn-secondary btn-sm  editbutton">
                        Edit Discovery&nbsp;
                        <FaEdit className="editfa" />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm viewbutton">
                        View Profile &nbsp;
                        <FaUser className="viewfa" />
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
export default Myclients;
