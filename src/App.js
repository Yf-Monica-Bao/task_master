import "./App.css";
import { React, useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import AddTaskForm from "./addTaskForm";
import TasksTable from "./components/tasksTable";
import { Table } from "react-bootstrap";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const user1TasksCollectionRef = collection(
    db,
    "users/6cVRBwcwJzOUOBIcVDOQ/tasks"
  );
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(user1TasksCollectionRef);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  useEffect(() => {
    getDocs(usersCollectionRef).then((users) => {
      setUsers(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const addTask = async(newTask) => {
    await addDoc(user1TasksCollectionRef, {
            description: newTask.description,
            due_date: new Date(newTask.due_date), 
            name: newTask.name,
            status: newTask.status,
            time_to_complete: newTask.time_to_complete 
    })
  }

  return (
    <div className="App">
      {/* {tasks.map((task) => {
        return (
          <section key={task.id}>
            {<AddTaskForm addTaskCallBack={addTask}/>}
            
            {JSON.stringify(task)}
            {/* <h2>id: {task.id}</h2>
            <p>description: {task.description}</p>
            <p>due date: {task.due_date}</p>
            <p>estimated time to complete: {task.time_to_complete}</p> 
          </section>
        );
      })}
      
      })} */}

      {/* <section>
        <tasksTable allTasks={tasks} />
        <div>{JSON.stringify(tasks)}</div>
      </section> */}
      <h1>My tasks:</h1>
      <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Time To Complete</th>
              <th>Satus</th>
            </tr>
          </thead>
          <TasksTable allTasks={tasks} />
        </Table>
      </main>
      {/* {users.map((user) => {
        return <section key={user.id}>{JSON.stringify(user)}</section>;
      })} */}
    </div>
  );
}

export default App;
