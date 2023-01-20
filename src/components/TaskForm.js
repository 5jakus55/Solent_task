import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import * as yup from "yup";
import "@fontsource/montserrat";


const StyledLabel = styled.label`
  text-align: left;
  margin-top: 5%;
  font-size: 14px;
`;

const StyledForm = styled.form`
  display: grid;
  justify-content: left;
  text-align: left;
  margin-top:100px;
  margin-left:22px;
`;
const StyledCheckinP = styled.input`
  box-sizing: border-box;
  display: absolute;
  width: 343.55px;
  height: 40px; 
  border: 1px solid #000000;
  border-radius: 4px;
  margin-top: 5%;
  font-size:16px;
`;



const TaskForm = (props) => {
  const { onSubmit } = props;


  const checkinFormSchema = yup
    .object({
      title: yup.string().required("required"),
      priority: yup.string().required("required"),
      description: yup.string().required("required"),
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
  
        
       
       <StyledCheckinP
            type="string"
            name="title"
            {...register("title")}
            />           

    
      <StyledLabel>Enter the priority level etc. Low, Medium, High</StyledLabel>
      

       <StyledCheckinP
            type="string"
            name="priority"
            {...register("priority")}
          />{" "}

      <StyledLabel>Enter the Description</StyledLabel>
 
      <StyledCheckinP
            type="string"
            name="description"
            {...register("description")}
          />{" "}


      <StyledLabel>Enter the Link</StyledLabel>

      <StyledCheckinP
            type="string"
            name="link"
            {...register("link")}
          />{" "}


 
      <Button text="Create Task"></Button>
    </StyledForm>
  );
};

export default TaskForm;
