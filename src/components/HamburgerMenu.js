import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#d80818",
  primaryLight: "#fff",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: absolute;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  left: 333px;
  top: 90px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: absolute;
  right: 1133px;
  top: 90px;
  background-image: radial-gradient(
    ${COLORS.primaryLight},
    ${COLORS.primaryLight}
  );
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 21.5px;
  height: 2px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 21.5px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 600px;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "60%")};
  display: ${(props) => (props.clicked ? "block" : "none")};
  transition: width 5s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  color: ${COLORS.primaryDark};
  padding: 0.8rem 0.4rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    background-color: ${COLORS.primaryLight};
    transform: translateX(-1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/profile">
              Profile
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/createtask">
              Create Task
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/tasks">
              Tasks
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/analytics">
              Analytics
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/timer">
              PomodoTimer
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/sol">
              SOL
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;