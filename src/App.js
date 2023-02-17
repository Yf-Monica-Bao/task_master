import "./App.css";
import { React, useState, useEffect } from "react";
import { db } from "./firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import { async } from "@firebase/util";
import AddTaskForm from "./addTaskForm";
import TasksTable from "./components/tasksTable";
import { Table } from "react-bootstrap";

import Form from "react-bootstrap/Form";


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

  const [sortBy, setSortBy] = useState("due date");

  const onSortByChange = (event) => {
    setSortBy(event.target.value);
    if (event.target.value === "due date") {
      sortByDueDate();
    } else if (event.target.value === "name") {
      sortByName();
    } else if (event.target.value === "time to complete") {
      sortByTimeToComplete();
    } else {
      sortByStatus();
    }
  };

  const sortByDueDate = () => {
    const allTasks = [...tasks];
    allTasks.sort((a, b) => a.due_date - b.due_date);
    setTasks(allTasks);
  };

  const sortByName = () => {
    const allTasks = [...tasks];
    allTasks.sort((a, b) => a.name.localeCompare(b.name));
    setTasks(allTasks);
  };

  const sortByTimeToComplete = () => {
    const allTasks = [...tasks];
    allTasks.sort((a, b) => a.time_to_complete - b.time_to_complete);
    setTasks(allTasks);
  };

  const sortByStatus = () => {
    const allTasks = [...tasks];
    allTasks.sort((a, b) => a.status.localeCompare(b.status));
    setTasks(allTasks);
  };

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

  const deleteTask = async (toDeleteTask) => {
    console.log(toDeleteTask.id);
    const docref = doc(db, `users/6cVRBwcwJzOUOBIcVDOQ/tasks/${toDeleteTask}`);
    await deleteDoc(docref);
    getAllTasksUser1();
  };

  //const id = "9zCGaSnElsdiFzTa72zo";
  const updateTask = async (taskId, newTask) => {
    console.log(taskId);
    const taskDoc = doc(db, `users/6cVRBwcwJzOUOBIcVDOQ/tasks/${taskId}`)
    const newFields = {
      description: newTask.description,
      due_date: new Date(newTask.due_date),
      name: newTask.name,
      status: newTask.status,
      time_to_complete: newTask.time_to_complete,}
    await updateDoc(taskDoc, newFields);
    getAllTasksUser1();
  };

  return (
    <div className="App">
      <h1>My tasks:</h1>
      <main>
        {/* <button onClick={sortByDueDate}>sort by due date</button> */}
        <label>Sort By:</label>
        <Form.Select
          aria-label="Sort By"
          onChange={onSortByChange}
          value={sortBy}
        >
          <option value="due date" selected>
            due date
          </option>
          <option value="name">name</option>
          {/* <option value="time to complete">time to complete</option> */}
          <option value="status">status</option>
        </Form.Select>

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
          <TasksTable allTasks={tasks} deleteCallBack={deleteTask} />
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
