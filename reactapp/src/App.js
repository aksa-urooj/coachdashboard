import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/coach/Dashboard";
import VerificationMsg from "./components/VerificationMsg";
import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/app/signin" component={SignIn}></Route>
        <Route path="/app/signup" component={SignUp}></Route>
        <Route path="/app/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/coachdashboard/home" component={Dashboard}></Route>
        <Route path="/coachdashboard/myaccount" component={Dashboard}></Route>

        <Route path="/coachdashboard/myinventory" component={Dashboard}></Route>
        <Route path="/coachdashboard/myclients" component={Dashboard}></Route>
        <Route
          path="/coachdashboard/pendinginvitations"
          component={Dashboard}
        ></Route>
        <Route
          path="/accountverificationpage/:verifyresult"
          component={VerificationMsg}
        ></Route>
        <Redirect to="/coachdashboard/home"></Redirect>
      </Switch>
    </>
  );
};

export default App;
