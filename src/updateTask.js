import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

//call get task by id api to get the task info for props.
const UpdateTaskForm = (props) => {
  const [newDescription, setDescription] = useState("");
  const [newDueDate, setDueDate] = useState();
  const [newname, setName] = useState("");
  const [newStatus, setStatus] = useState("");
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
    const updateName = document.getElementById("updateName").value;
    const updateDes = document.getElementById("updateDes").value;
    const updateDate = document.getElementById("updateDate").value;
    const updateTime = document.getElementById("updateTime").value;
    const updateStatus = document.getElementById("updateStatus").value;
    const taskId = document.getElementById("taskId").value;
    const task = {
      description: updateDes,
      due_date: updateDate,
      name: updateName,
      status: updateStatus,
      time_to_complete: updateTime,
    };
    event.preventDefault();
    props.updateTaskCallBack(taskId, task);
    document.getElementById("updateForm").close();
  };

  const onCloseForm = () => {
    document.getElementById("updateForm").close();
  };

  return (
    <dialog id="updateForm" style={{ padding: 0, borderRadius: 10 }}>
      <Box rounded="lg" m="4" p="4">
        <form method="dialog">
          <input id="taskId" type="hidden" />
          <Stack>
            <Flex align="center">
              <Text whiteSpace="nowrap" w="60">
                Task Name
              </Text>
              <Input
                id="updateName"
                onChange={onNameChange}
                placeholder="name"
              />
            </Flex>

            <Flex align="center">
              <Text whiteSpace="nowrap" w="60">
                Due date
              </Text>
              <Input
                id="updateDate"
                type="date"
                onChange={onDueDateChange}
                placeholder="due_date"
              />
            </Flex>

            <Flex align="center">
              <Text whiteSpace="nowrap" w="60">
                Task description
              </Text>
              <Input
                id="updateDes"
                onChange={onDescriptionChange}
                placeholder="description"
              />
            </Flex>

            <Flex align="center">
              <Text whiteSpace="nowrap" w="60">
                Progress Status
              </Text>
              <Select
                w="100%"
                id="updateStatus"
                aria-label="Progress Status"
                onChange={onStatusChange}
                value={newStatus}
              >
                <option value="not started yet">not started yet</option>
                <option value="completed">completed</option>
                <option value="in progress">in progress</option>
                <option value="blocked">blocked</option>
              </Select>
            </Flex>

            <Flex align="center">
              <Text whiteSpace="nowrap" w="60">
                Time to Complete
              </Text>
              <Input
                id="updateTime"
                onChange={onTimeToCompleteChange}
                placeholder="Estimate Time to Complete"
              />
            </Flex>

            <Flex gap={4} p={4}>
              <Button
                value="cancel"
                variant="outline"
                onClick={onCloseForm}
                colorScheme="blackAlpha"
              >
                Cancel
              </Button>
              <Button onClick={onFormSubmit} colorScheme="twitter">
                Update Task
              </Button>
            </Flex>
          </Stack>
        </form>
      </Box>
    </dialog>
  );
};

export default UpdateTaskForm;
