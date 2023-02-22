import React from "react";
import OneTask from "./oneTask";

const tasksTable = ({ allTasks, deleteCallBack }) => {
  const taskEntries = allTasks.map((task) => {
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
        timeToComplete={task.time_to_complete}
        status={task.status}
        deleteTaskCallBack={deleteCallBack}
      />
    );
  });
  return <tbody>{taskEntries}</tbody>;
};

export default tasksTable;
