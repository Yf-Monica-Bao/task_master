import React from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Table from "react-bootstrap/Table";

const oneTask = ({
  id,
  name,
  description,
  dueDate,
  timeToComplete,
  status,
  deleteTaskCallBack,
}) => {
  const deleteCallBack = () => {
    deleteTaskCallBack(id);
  };
  const displayUpdateCallBack = () => {
    document.getElementById("updateName").value = name;
    document.getElementById("updateDes").value = description;
    document.getElementById("updateDate").value = new Date(dueDate)
      .toISOString()
      .substring(0, 10);
    document.getElementById("updateTime").value = timeToComplete;
    document.getElementById("updateStatus").value = status;
    document.getElementById("taskId").value = id;
    document.getElementById("updateForm").showModal();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{dueDate}</td>
      <td>{timeToComplete}</td>
      <td>{status}</td>
      <td>
        <button onClick={displayUpdateCallBack}>Update</button>
      </td>
      <td>
        <button onClick={deleteCallBack}>Delete</button>
      </td>
    </tr>
  );
};

export default oneTask;
