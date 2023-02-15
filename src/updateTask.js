import {db, updateDoc, doc} from '../firebase/firebaseConfig'; 

const updateTask = async (id, new_description, new_due_date, new_name, new_status, new_time_to_complete) => {
    const taskDoc = doc(db, "task", id)
    const newFields = {}
    if (new_description != null){
        newFields.put("description",new_description);
    }
    if (new_due_date != null){
        newFields.put("due_date",new_due_date);
    }
    if (new_name != null){
        newFields.put("name",new_name);
    }
    if (new_status != null){
        newFields.put("status",new_status);
    }
    if (new_time_to_complete != null){
        newFields.put("time_to_complete",new_time_to_complete);
    }

    await updateDoc(taskDoc, newFields);

}

export default updateTask;