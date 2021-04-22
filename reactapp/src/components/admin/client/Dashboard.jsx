import "./css/dashboard.css";
import Home from './Home';
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import Myaccount from "./Myaccount";
import Myorders from "./Myorders";

const Dashboard = () => {
  return (
    <>
      <Switch>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Route exact path="/dashboard/home" component={Home}></Route>
            <Route path="/dashboard/myaccount" component={Myaccount}></Route>
            <Route path="/dashboard/myorders" component={Myorders}></Route>
          </div>
        </div>
      </Switch> 
    </>
  );
};
export default Dashboard;
