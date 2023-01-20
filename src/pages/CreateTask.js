import React from 'react';
import TaskForm from '../components/TaskForm';
import useNewTask from '../firebase/useTasks'
import styled from "styled-components";
import SLogo from "../assets/Sc.png";
import "@fontsource/montserrat";

function CreateTask() {
  const {createTask}=useNewTask()

  const handleSubmit = async (checkin) => {
    const ckin = {
      ...checkin,
    };

    try {
      await createTask(ckin);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateTaskpage>
      <Sc src={SLogo} />
      <H2>Create a new task:</H2>
        <TaskForm onSubmit={handleSubmit}/>
    </CreateTaskpage>
  );
}

const CreateTaskpage = styled.div`
  width: 400px;
  height: 782px;
  position: relative;
  gap: 57.6px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  body {
    font-family: "Montserrat";
  }
`;

const Sc = styled.img`
  width: 95.4px;
  height: 40.14px;
  position: relative;
  margin-top:25px;
  margin-left:15px;
`;

const H2 = styled.h2`
  position:absolute;
  margin-top:35px;
  margin-left:20px;
`;

export default CreateTask;