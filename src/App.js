import "./App.css";
import { React, useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, } from "firebase/firestore";
import { async } from "@firebase/util";
import AddTaskForm from "./addTaskForm";
import TasksTable from "./components/tasksTable";
import { Table } from "react-bootstrap";
import UpdateTaskForm from "./updateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  // const [currentTask, setCurrentTask] = useState({
  //     description: "",
  //     due_date: "",
  //     name: "",
  //     status: "",
  //     time_to_complete: "",
  // }); 

  const user1TasksCollectionRef = collection(
    db,
    "users/6cVRBwcwJzOUOBIcVDOQ/tasks"
  );
  const usersCollectionRef = collection(db, "users");

  const getAllTasksUser1 = () => {
    getDocs(user1TasksCollectionRef).then((tasks) => {
      setTasks(tasks.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getAllTasksUser1();
  }, []);

  useEffect(() => {
    getDocs(usersCollectionRef).then((users) => {
      setUsers(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const addTask = async (newTask) => {
    await addDoc(user1TasksCollectionRef, {
      description: newTask.description,
      due_date: new Date(newTask.due_date),
      name: newTask.name,
      status: newTask.status,
      time_to_complete: newTask.time_to_complete,
    });
    getAllTasksUser1();
  };

  const deleteTask = async(toDeleteTask) => {
    console.log(toDeleteTask.id)
    const docref = doc(db, `users/6cVRBwcwJzOUOBIcVDOQ/tasks/${toDeleteTask}`)
    await deleteDoc(docref)
    getAllTasksUser1();
  };

  //const id = "9zCGaSnElsdiFzTa72zo";
  const updateTask = async (taskId,newTask) => {
    const taskDoc = doc(db, `users/6cVRBwcwJzOUOBIcVDOQ/tasks/${taskId}`)
    await updateDoc(taskDoc, {
      description: newTask.description,
      due_date: new Date(newTask.due_date),
      name: newTask.name,
      status: newTask.status,
      time_to_complete: newTask.time_to_complete,
    });
    getAllTasksUser1();
  };

  return (
    <div className="App">
      <h1>My tasks:</h1>
      <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Time To Complete</th>
              <th>Status</th>
            </tr>
          </thead>
          <TasksTable allTasks={tasks} deleteCallBack = {deleteTask} />
        </Table>
        <AddTaskForm addTaskCallBack={addTask}></AddTaskForm>
        <div>
        <UpdateTaskForm updateTaskCallBack={updateTask}></UpdateTaskForm>
        </div>
      </main>
      {/* {users.map((user) => {
        return <section key={user.id}>{JSON.stringify(user)}</section>;
      })} */}
    </div>
  );
}

export default App;
