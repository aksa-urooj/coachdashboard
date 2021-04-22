import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/admin/client/Dashboard";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard/home" component={Dashboard}></Route>
        <Route path="/dashboard/myaccount" component={Dashboard}></Route>
        <Route path="/dashboard/myorders" component={Dashboard}></Route>
        <Redirect to="/dashboard/home" />
      </Switch>
    </>
  );
};

export default App;
