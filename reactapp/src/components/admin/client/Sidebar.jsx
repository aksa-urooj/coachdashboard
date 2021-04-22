import {
  FaHome,
  FaUser,
  FaList,
  FaSignOutAlt,
  FaShopify,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-xs-12 col-12 overflow-auto sticky-top sidepanel">
        <nav
          className="navbar navbar-expand-md navbar-light  flex-sm-row flex-md-column 
        flex-lg-column flex-xl-column "
        >
          <a className="navbar-brand" href="#">
            <img src="/images/whylogo.png" width="100px" height="50px"></img>
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidenavbar"
            aria-controls="sidenavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-last" id="sidenavbar">
            <ul className="navbar-nav mt-2 mb-2 mb-lg-0 flex-column sidenavlist">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/dashboard/home"
                >
                  <FaHome className="reacticon" />
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/myaccount">
                  <FaUser className="reacticon" />
                  My Account
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/dashboard/myorders">
                  <FaList className="reacticon" />
                  My Orders{" "}
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaShopify className="reacticon" />
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaSignOutAlt className="reacticon" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
