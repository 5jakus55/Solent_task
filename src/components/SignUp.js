import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { auth }  from "../firebase/base";
import SLogo from "../assets/Sc.png";
import MenuBar from "../assets/Menu.svg";
import CreateTask from "../assets/Createtaskbutton.svg";
import SearchImage from "../assets/Searchamico.svg";
import "@fontsource/montserrat";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={signUp}>
        <label>
          Email
          <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);