import React from "react";
import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateTask from "./pages/CreateTask";
import PomodoTimer from "./pages/PomodoTimer";
import Tasks from "./pages/Tasks";
import Sol from "./pages/Sol";
import Analytics from "./pages/Analytics";
import SignUp from "./components/SignUp";
import AuthDetails from "./firebase/Auth";

const App = () => {
  return (
    <AuthDetails>
      <Router>
      <HamburgerMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/createtask" component={CreateTask} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/timer" component={PomodoTimer} />
          <Route path="/sol" component={Sol} />         
        </Switch>
      <Route exact path="/signup" component={SignUp} />
      </Router>
    </AuthDetails>
    
  );
};

export default App;
