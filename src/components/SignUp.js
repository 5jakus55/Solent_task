import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth }  from "../firebase/base";
import styled from "styled-components";
import SLogo from "../assets/Sc.png";
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
    <SignUpPage>   
      <form onSubmit={signUp}>
      <Sc>
        <img src={SLogo} />
      </Sc>
      <Paragraph>
          Welcome to SolenTask App<br />
          Create an Account
      </Paragraph>
      <Text1>Student Email</Text1>
      <EmailInput type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}/> 
      <Text3>Password</Text3>
      <PasswordInput type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>

      <SignupButton type="submit">Sign Up</SignupButton>
      
      <Text8>Already have an account? Log In</Text8>
      </form>
    </SignUpPage>
  );
};

const SignUpPage = styled.div`
  height: 653px;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 139px 23.2px 52px 23.2px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  body {
    font-family: "Montserrat";
  }
`;

const Sc = styled.div`
position: absolute;
width: 222.83px;
height: 78.65px;
left: 45px;
top: 120px;
`;

const Paragraph = styled.div`
position: absolute;
width: 300px;
height: 68px;
left: 45px;
top: 320px;

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
text-align: center;

color: #000000;
`;

const Text1 = styled.div`
position: absolute;
width: 100px;
height: 14px;
left: 25.78px;
top: 425.72px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 12px;

color: #000000;
`;

const EmailInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 343.55px;
height: 40px;
left: 23.23px;
top: 446px;
padding-left: 10px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 4px;
`;


const Text3 = styled.div`
position: absolute;
width: 100px;
height: 12px;
left: 25.78px;
top: 514px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 12px;

color: #000000;
`;

const PasswordInput = styled.input`
box-sizing: border-box;

position: absolute;
width: 343.55px;
height: 40px;
left: 23.23px;
top: 534px;
padding-left: 10px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 4px;
`;

const SignupButton = styled.button`
box-sizing: border-box;
position: absolute;
width: 121.16px;
height: 48px;
left: 134.42px;
top: 640px;

color: #D80818;
background: #FFFFFF;
/* red */
font-style: normal;
font-weight: 600;
font-size: 18px;
border: 2px solid #D80818;
border-radius: 8px;
cursor: pointer;
&:hover {
  background: #D80818;
  color: #fff;
}
`;

const Text8 = styled.div`
position: absolute;
width: 250px;
height: 19px;
left: 70px;
top: 744px;

font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;

/* red */

color: #00000;
`;

export default SignUp;