import React from "react";
import styled from "styled-components";
import SLogo from "../assets/Sc.png";
import SearchImage from "../assets/Searchamico.svg";
import "@fontsource/montserrat";

const Home = () => {
  
  const CreatetaskbuttonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Homepage>
      <Sc src={SLogo} />
      <Title>Welcome back!</Title>
      <Text1>
        Manage your tasks in easy way!
        <br />
        <Paragraph>
          You can view your Uni tasks, create your own tasks, and use our
          PomodoTask timer to concentrate on specific task with break <br />
          in-between. All in one App!
        </Paragraph>
      </Text1>
      <ScarletFlexColumn />
      <ViewTasks>View Tasks </ViewTasks>
      <Text3>
        You have currently <Text4>15</Text4>
        <Text5> tasks to do!</Text5>
      </Text3>
      <Text6>New Tasks :</Text6>
      <Searchamico src={SearchImage} />
      <Paragraph1>
        You don’t have any new tasks <br />
        at the moment{" "}
      </Paragraph1>
      <a href="/createtask"> 
      <Createtaskbutton
      />
      </a>
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
width: 85.4px;
height: 30.14px;
  position: relative;
`;
const Title = styled.div`
  width: 346px;
  height: 29px;
  left: 21px;
  top: 94px;
  position: absolute;
  font-size: 24px;
  font-weight: 600;
`;
const Text1 = styled.div`
  width: 349px;
  height: 115px;
  left: 21px;
  top: 157px;
  position: absolute;
  font-size: 20px;
  font-weight: 600;
`;
const Paragraph = styled.div`
  display: contents;
  font-size: 15px;
  font-weight: 600;
`;
const ScarletFlexColumn = styled.div`
  width: 261px;
  height: 55.1px;
  left: 21px;
  top: 303px;
  position: absolute;
  gap: 12.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 19.9px 63px 19px 19.5px;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #d80818;
  background-color: rgba(216, 8, 24, 0.04);
  overflow: hidden;
`;
const ViewTasks = styled.div`
  width: 110px;
  height: 24px;
  left: 41.5px;
  top: 324px;
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  white-space: pre-wrap;
`;
const Text3 = styled.div`
  width: 261px;
  height: 19px;
  left: 41.5px;
  top: 360px;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  white-space: pre-wrap;
`;
const Text4 = styled.div`
  display: contents;
  color: #d80818;
  font-size: 16px;
  font-weight: 600;
`;
const Text5 = styled.div`
  display: contents;
  font-size: 16px;
  font-weight: 600;
  white-space: pre-wrap;
`;
const Text6 = styled.div`
  width: 346px;
  height: 27px;
  left: 21px;
  top: 432px;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
`;
const Searchamico = styled.img`
  width: 166px;
  height: 139px;
  left: 111px;
  top: 569px;
  position: absolute;
`;
const Paragraph1 = styled.div`
  width: 232px;
  height: 38px;
  left: 77.8px;
  top: 498px;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  white-space: pre-wrap;
`;
const Createtaskbutton = styled.button`
  width: 60px;
  height: 60px;
  position: relative;
  align-self: flex-end;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/mdPl7OuvsiRL6D8cLRf4.svg");
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`


export default Home;