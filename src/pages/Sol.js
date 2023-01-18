import React from 'react';
import styled from "styled-components";
import SLogo from "../assets/Sc.png";
import "@fontsource/montserrat";

function Sol() {
  return (
    <Homepage>
      <Sc src={SLogo} />
      <Title>Please click on the button below to visit<br/><br/>
             Solent Online Learning

      </Title>
      <div>
      <a href="https://learn.solent.ac.uk"> 
      <SignupButton>SOL</SignupButton>
      </a>
      </div>
    </Homepage>
  );
};

const Homepage = styled.div`
  width: 348px;
  height: 782px;
  position: relative;
  gap: 57.6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 34.5px 21px 28px 21px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  body {
    font-family: "Montserrat";
  }
`;

const Sc = styled.img`
width: 225.4px;
height: 120.14px;
position: absolute;
top: 150px;
left:70px;
`;

const Title = styled.div`
  width: 346px;
  height: 29px;
  left: 18px;
  top: 350px;
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const SignupButton = styled.button`
box-sizing: border-box;
position: absolute;
width: 121.16px;
height: 48px;
left: 134.42px;
top: 600px;

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
`


export default Sol;