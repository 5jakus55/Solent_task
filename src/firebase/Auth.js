
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { auth } from "./base";
import Login from "../components/Login.js"
import SignUp from "../components/SignUp.js"

const AuthDetails = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
      <div>
        {authUser ? (
          <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
          {children}
        </>
        ) : (
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route path="*" component={Login} />
          </Switch>
        </Router>
        )}
      </div>
    );
};

export default AuthDetails;