import { useState } from "react";


const AddTaskForm = (props) => {
    const [newDescription, setDescription] = useState("");
    const [newDueDate, setDueDate] = useState(new Date()); 
    const [newname, setName] = useState(""); 
    const [newStatus, setStatus] = useState(""); 
    const [newTimeToComplete, setTimeToComplete] = useState("")


    const onDescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const onDueDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const onTimeToCompleteChange = (event) => {
        setTimeToComplete(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault(); 
        props.addTaskCallBack({
            description: newDescription,
            due_date: newDueDate, 
            name: newname,
            status: newStatus,
            time_to_complete: newTimeToComplete
        });
    }

    return (
            <form>
                <label>Task Name</label>
                <input
                    type = "string"
                    onChange = {onNameChange}
                    placeholder = "name" 
                />
                <label>Due_date</label>
                <input
                    type = "date"
                    onChange = {onDueDateChange}
                    placeholder = "due_date" 
                />
                <label>Task description</label>
                <input 
                    type = "string"
                    onChange = {onDescriptionChange}
                    placeholder = "description" 
                />
                <label>Status</label>
                <input
                    name = "string"
                    onChange = {onStatusChange}
                    placeholder = "status" 
                />
                <input
                    type = "string"
                    onChange = {onTimeToCompleteChange}
                    placeholder = "time to complete" 
                />
                <button onClick={onFormSubmit}>Add Task</button>
            </form>

); 
}; 

export default AddTaskForm; 