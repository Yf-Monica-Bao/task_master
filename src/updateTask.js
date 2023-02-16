import { useState } from "react";
//import {db, updateDoc, doc} from '../firebase/firebaseConfig'; 

const updateTaskForm = (props) => {
    const [newDescription, setDescription] = "TestUpdateTask";
    const [newDueDate, setDueDate] = "02/15/2022"; 
    const [newname, setName] = "NameTestUpdateTask"; 
    const [newStatus, setStatus] = "StatusTestUpdateTask"; 
    const [newTimeToComplete, setTimeToComplete] = "TimeTest";


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
        props.updateTaskCallBack({
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
                    value = {newname}
                />
                <label>Due_date</label>
                <input
                    type = "date"
                    onChange = {onDueDateChange}
                    placeholder = "due_date" 
                    value = {newDueDate}
                />
                <label>Task description</label>
                <input 
                    type = "string"
                    onChange = {onDescriptionChange}
                    placeholder = "description" 
                    value = {newDescription}
                />
                <label>Status</label>
                <input
                    name = "string"
                    onChange = {onStatusChange}
                    placeholder = "status" 
                    value = {newStatus}
                />
                <label>Estimate Time to Complete</label>
                <input
                    type = "string"
                    onChange = {onTimeToCompleteChange}
                    placeholder = "Estimate Time to Complete" 
                    value = {newTimeToComplete}
                />
                <button onClick={onFormSubmit}>Update Task</button>
            </form>

); 
}; 

export default updateTaskForm; 








// const updateTask = async (id, new_description, new_due_date, new_name, new_status, new_time_to_complete) => {
//     const taskDoc = doc(db, "task", id)
//     const newFields = {}
//     if (new_description != null){
//         newFields.put("description",new_description);
//     }
//     if (new_due_date != null){
//         newFields.put("due_date",new_due_date);
//     }
//     if (new_name != null){
//         newFields.put("name",new_name);
//     }
//     if (new_status != null){
//         newFields.put("status",new_status);
//     }
//     if (new_time_to_complete != null){
//         newFields.put("time_to_complete",new_time_to_complete);
//     }

//     await updateDoc(taskDoc, newFields);

// }

// export default updateTask;