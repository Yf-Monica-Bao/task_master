import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import OneTask from "./oneTask";

const tasksTable = ({ allTasks, deleteCallBack }) => {
  const taskEntries = allTasks.map((task) => {
    console.log(task);
    // return (
    //   <ol key={task.id}>
    //     <li>id: {task.id}</li>
    //     <li>description: {task.description}</li>
    //     <li>due date: {task.due_date.toDate().toDateString()}</li>
    //     <li>estimated time to complete: {task.time_to_complete}</li>
    //   </ol>
    // );
    //const dueDate = task.due_date.toDate();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    options.timeZone = "UTC";

    return (
      <OneTask
        key={task.id}
        id={task.id}
        name={task.name}
        description={task.description}
        dueDate={task.due_date.toDate().toLocaleString("en-GB", options)}
        //dueDate={dueDate.getUTCFullYear() + "-" + dueDate.getUTCMonth() + "-" + dueDate.getUTCDay()}
        timeToComplete={task.time_to_complete}
        status={task.status}
        deleteTaskCallBack={deleteCallBack}
      />
    );
  });
  return <tbody>{taskEntries}</tbody>;
};

export default tasksTable;
