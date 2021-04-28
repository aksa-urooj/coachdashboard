import "./css/dashboard.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import Myaccount from "./Myaccount";
import Myorders from "./Myorders";
import Myclients from "./Myclients";
import Pendinginvitations from "./Pendinginvitations";
const Dashboard = () => {
  return (
    <>
      <Switch>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Route exact path="/coachdashboard/home" component={Home}></Route>
            <Route
              path="/coachdashboard/myaccount"
              component={Myaccount}
            ></Route>
            <Route
              path="/coachdashboard/myinventory"
              component={Myorders}
            ></Route>
            <Route
              path="/coachdashboard/myclients"
              component={Myclients}
            ></Route>
            <Route
              path="/coachdashboard/Pendinginvitations"
              component={Pendinginvitations}
            ></Route>
          </div>
        </div>
      </Switch>
    </>
  );
};
export default Dashboard;
