import "./App.css";
import { React, useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";
import AddTaskForm from "./addTaskForm";
import TasksTable from "./components/tasksTable";
import { Table } from "react-bootstrap";
import updateTask from "./updateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
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

  const updateid = "9zCGaSnElsdiFzTa72zo";
  const updateTask = async (updateid,newTask) => {
    const taskDoc = doc(db, "tasks", updateid)
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
              <th>Status</th>
            </tr>
          </thead>
          <TasksTable allTasks={tasks} />
        </Table>
        <AddTaskForm addTaskCallBack={addTask}></AddTaskForm>
        <div>
        <updateTaskForm updateTaskCallBack={updateTask}></updateTaskForm>
        </div>
      </main>
      {/* {users.map((user) => {
        return <section key={user.id}>{JSON.stringify(user)}</section>;
      })} */}
    </div>
  );
}

export default App;
