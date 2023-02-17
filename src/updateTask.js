import { useState } from "react";
import Form from "react-bootstrap/Form";
//import {db, updateDoc, doc} from '../firebase/firebaseConfig'; 

//call get task by id api to get the task info for props.


const UpdateTaskForm = (props) => {
    const [newDescription, setDescription] = useState("");
    const [newDueDate, setDueDate] = useState(); 
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
        props.updateTaskCallBack({
            description: newDescription,
            due_date: newDueDate, 
            name: newname,
            status: newStatus,
            time_to_complete: newTimeToComplete
        });
    }

    return (
            <dialog id="updateForm">
            <form method="dialog">
                <label>Task Name</label>
                <input id ="updateName"
                    type = "string"
                    onChange = {onNameChange}
                    placeholder = "name" 
                    value = {newname}
                />
                <label>Due_date</label>
                <input id = "updateDate"
                    type = "date"
                    onChange = {onDueDateChange}
                    placeholder = "due_date" 
                    value = "2012/03/23"
                />
                <label>Task description</label>
                <input id = "updateDes"
                    type = "string"
                    onChange = {onDescriptionChange}
                    placeholder = "description" 
                    value = {newDescription}
                />
                <label>Status</label>
                <input id = "updateStatus"
                    name = "string"
                    onChange = {onStatusChange}
                    placeholder = "status" 
                    value = {newStatus}
                />
                <label>Estimate Time to Complete</label>
                <input id = "updateTime"
                    type = "string"
                    onChange = {onTimeToCompleteChange}
                    placeholder = "Estimate Time to Complete" 
                    value = {newTimeToComplete}
                />
                <button value="cancel">Cancel</button>
                <button onClick={onFormSubmit}>Update Task</button>
            </form>
            </dialog>

); 
}; 

export default UpdateTaskForm; 








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