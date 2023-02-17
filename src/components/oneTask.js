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
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{dueDate}</td>
      <td>{timeToComplete}</td>
      <td>{status}</td>
      <td><button>Update</button></td>
      <td><button>Delete</button></td>
    </tr>
  );
};

export default oneTask;
