import React, {useState} from "react"; 
import {Axios, db} from '../firebase/firebaseConfig'; 

const AddTaskForm = (props) => {
    const [formFields, setFormFields] = useState({
        "description": "", 
        "due_date": new Date(), 
        "name": "", 
        "status": "", 
        "time_to_complete": ""
    })


    const onDescriptionChange = (event) => {
        setFormFields({
            ...formFields,
            description: event.target.description,
        })
    };

    const onDueDateChange = (event) => {
        setFormFields({
            ...formFields,
            due_date: event.target.due_date,
        })
    }

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.name,
        })
    }

    const onStatusChange = (event) => {
        setFormFields({
            ...formFields,
            status: event.target.status,
        })
    }

    const onTimeToCompleteChange = (event) => {
        setFormFields({
            ...formFields,
            time_to_complete: event.target.time_to_complete,
        })
    }

    const onFormSubmit(event) => {
        event.preventDefault(); 
        props.addTaskCallBack({
            description: formFields.description,
            due_date: formFields.due_date, 
            name: formFields.name,
            status: formFields.status,
            time_to_complete: formFields.time_to_complete 
        });
        //Reset form fields after one is being submitted
        setFormFields({description:"", due_date: new Date(), name: "", status: "", time_to_complete: ""})
    }

    return (
        <form onSubmit={onFormSubmit}>
            <button>New Task</button>
            <div>
                <input>
                    name = "description"
                    value = {formFields.description}
                    onChange = {onDescriptionChange}
                    placeholder = "description" 
                </input>
                <input>
                    name = "due_date"
                    value = {formFields.due_date}
                    onChange = {onDueDateChange}
                    placeholder = "due_date" 
                </input>
                <input>
                    name = "name"
                    value = {formFields.name}
                    onChange = {onNameChange}
                    placeholder = "name" 
                </input>
                <input>
                    name = "status"
                    value = {formFields.status}
                    onChange = {onStatusChange}
                    placeholder = "status" 
                </input>
                <input>
                    name = "time_to_complete"
                    value = {formFields.time_to_complete}
                    onChange = {onTimeToCompleteChange}
                    placeholder = "time to complete" 
                </input>
            </div>
        </form>
); 
}; 

export default AddTaskForm; 