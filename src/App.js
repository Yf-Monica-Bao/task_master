import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

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
  },[]);

  return (
    <div className="App">
      {tasks.map((task) => {
        return (
          <section key={task.id}>
            {JSON.stringify(task)}
            {/* <h2>id: {task.id}</h2>
            <p>description: {task.description}</p>
            <p>due date: {task.due_date}</p>
            <p>estimated time to complete: {task.time_to_complete}</p> */}
          </section>
        );
      })}
    </div>
  );
}

export default App;
