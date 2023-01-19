import {
    doc,
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    orderBy,
    query,
  } from "firebase/firestore";
  import { getFirestore } from "firebase/firestore";
  
  function useNewTask() {
    const db = getFirestore();
    const ref = collection(db, "Tasks");
    const createTask = (tasks) => addDoc(ref, tasks);
    const getTask = () => getDocs(ref);
  
    return {
      createTask,
      getTask
    };
  }
  export default useNewTask;