import React from 'react';
import TaskForm from '../components/TaskForm';
import useNewTask from '../firebase/useTasks'

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
    <div>
      <h1>Create task</h1>
      <div>
        <TaskForm onSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default CreateTask;