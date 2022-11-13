import { BrowserRouter, Route, Switch } from "react-router-dom";
import Entretenimento from "../pages/Entretenimento/Entretenimento";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  // const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/entretenimento" exact component={Entretenimento} />
        <Route path="/profile/:section?" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
