import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import * as yup from "yup";
const StyledHeading = styled.h4`
  text-align: center;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.purple};
`;


const StyledLabel = styled.label`
  text-align: left;
  margin-top: 5%;
`;

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  text-align: left;
`;
const StyledCheckinP = styled.p`
  display: flex;
  font-size: 13px;
  justify-content: space-around;
  margin-top: 5%;
  input:nth-child(1) {
    background: green;
  }
  input:checked {
    background-color: #a77e2d !important;
    color: #ffffff !important;
  }
`;

const StyledFoodDrinkArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const StyledSelect = styled.select`
  padding-left: 25%;
  text-indent: 40%;
  background: white;
  width: 135px;
  height: 44px;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.75);
`;

const StyledIcon = styled.img`
  margin-right: -10px;
  z-index: 2000;
  display: relative;
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
`;

const StyledCheckinTitle = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    color: ${({ theme, error }) =>
    error ? "red" : theme.colors.darkShade[25]};
    margin-top: 5%;
  }
`;

const TaskForm = (props) => {
  const { onSubmit } = props;


  const checkinFormSchema = yup
    .object({
      title: yup.string().required("you must tell us if you have exercised"),
      priority: yup.string().required("you must tell us if you consumed your veg"),
      description: yup.string().required("you must tell us if you drank 2l of water"),
      link: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(checkinFormSchema),
    defaultValues: { title: "", priority: "", description: "", link: "" },
  });


  const onFormSubmit = (data) => {
    onSubmit({ ...data});
  };

  return (
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
      {/*JSON.stringify("this is the" + diet)*/}
      <StyledLabel>Enter the task Title</StyledLabel>
      <StyledCheckinP>
        <span>
          <input
            type="string"
            name="title"
            {...register("title")}
          />{" "}
        </span>{" "}

      </StyledCheckinP>
      <StyledLabel>Enter the priority level etc. Low, Medium, High</StyledLabel>
      <StyledCheckinP>
       <span>
          <input
            type="string"
            name="priority"
            {...register("priority")}
          />{" "}
        </span>{" "}
      </StyledCheckinP>
      <StyledLabel>Enter the Description</StyledLabel>
      <StyledCheckinP>
      <span>
          <input
            type="string"
            name="description"
            {...register("description")}
          />{" "}
        </span>{" "}
      </StyledCheckinP>

      <StyledLabel>Enter the Link /Optional/</StyledLabel>
      <StyledCheckinP>
      <span>
          <input
            type="string"
            name="link"
            {...register("link")}
          />{" "}
        </span>{" "}
      </StyledCheckinP>

 
      <Button text="Create Task"> </Button>
    </StyledForm>
  );
};

export default TaskForm;
