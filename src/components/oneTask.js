import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";

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
    document.getElementById("updateForm").showModal();
    document.getElementById("updateName").value = name;
    document.getElementById("updateDes").value = description;
    document.getElementById("updateDate").value = new Date(dueDate)
      .toISOString()
      .substring(0, 10);
    document.getElementById("updateTime").value = timeToComplete;
    document.getElementById("updateStatus").value = status;
    document.getElementById("taskId").value = id;
  };

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{description}</Td>
      <Td>{dueDate}</Td>
      <Td>{timeToComplete}</Td>
      <Td>{status}</Td>
      <Td>
        <Button
          colorScheme="blackAlpha"
          variant="outline"
          size="sm"
          onClick={displayUpdateCallBack}
        >
          Update
        </Button>
      </Td>
      <Td>
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={deleteCallBack}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default oneTask;
