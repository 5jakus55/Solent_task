import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "@fontsource/montserrat";

function Button(props) {

  const {onClick, text} = props;
    
  const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 121.16px;
  height: 38px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  background: #FFFFFF;
  /* green */
  color: #6BAB90;
  border: 2px solid #6BAB90;
  border-radius: 8px;
  cursor:pointer;
  margin-top:60px;
  margin-left:110px;
  &:hover {
    background: #6BAB90;
    color: #fff;
  }
  `;

  return(  
    <StyledButton onClick={onClick}> {text} </StyledButton>
  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;