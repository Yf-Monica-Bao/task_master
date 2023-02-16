import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const AddTaskForm = (props) => {
  const [newDescription, setDescription] = useState("");
  const [newDueDate, setDueDate] = useState(new Date());
  const [newname, setName] = useState("");
  const [newStatus, setStatus] = useState("not started yet");
  const [newTimeToComplete, setTimeToComplete] = useState("");

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const onTimeToCompleteChange = (event) => {
    setTimeToComplete(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addTaskCallBack({
      description: newDescription,
      due_date: newDueDate,
      name: newname,
      status: newStatus,
      time_to_complete: newTimeToComplete,
    });
    setDescription("");
    setDueDate(new Date());
    setName("");
    setStatus("not started yet");
    setTimeToComplete("");
  };

  return (
    <form>
      <label>Task Name</label>
      <input
        type="string"
        onChange={onNameChange}
        placeholder="name"
        value={newname}
      />
      <label>Due_date</label>
      <input
        type="date"
        onChange={onDueDateChange}
        placeholder="due_date"
        value={newDueDate}
      />
      <label>Task description</label>
      <input
        type="string"
        onChange={onDescriptionChange}
        placeholder="description"
        value={newDescription}
      />

      {/* <label>Status</label>
      <input
        name="string"
        onChange={onStatusChange}
        placeholder="status"
        value={newStatus}
      /> */}

      <label>Estimate Time to Complete</label>
      <input
        type="string"
        onChange={onTimeToCompleteChange}
        placeholder="Estimate Time to Complete"
        value={newTimeToComplete}
      />
      <label>Progress Satus</label>
      <Form.Select
        aria-label="Progress Status"
        onChange={onStatusChange}
        value={newStatus}
      >
        <option value="not started yet">not started yet</option>
        <option value="completed">completed</option>
        <option value="in progress">in progress</option>
        <option value="blocked">blocked</option>
      </Form.Select>

      <button onClick={onFormSubmit}>Add Task</button>
    </form>
  );
};

export default AddTaskForm;
