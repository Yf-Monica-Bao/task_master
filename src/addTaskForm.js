import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Select,
  IconButton,
  Stack,
  Text,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const AddTaskForm = (props) => {
  const [newDescription, setDescription] = useState("");
  const [newDueDate, setDueDate] = useState(new Date());
  const [newname, setName] = useState("");
  const [newStatus, setStatus] = useState("not started yet");
  const [newTimeToComplete, setTimeToComplete] = useState("");
  const [toggleForm, setToggleForm] = useState(false);

  const onToggleForm = (event) => {
    event.preventDefault();
    setToggleForm(!toggleForm);
  };

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
    <form onSubmit={onFormSubmit}>
      <IconButton
        onClick={onToggleForm}
        colorScheme="twitter"
        m="4"
        size="lg"
        borderRadius="50%"
        boxShadow="xl"
        icon={<AddIcon />}
      />
      {toggleForm && (
        <Stack w={500}>
          <Flex align="center">
            <Text whiteSpace="nowrap" w="60">
              Task Name
            </Text>
            <Input onChange={onNameChange} placeholder="name" value={newname} />
          </Flex>

          <Flex align="center">
            <Text whiteSpace="nowrap" w="60">
              Due date
            </Text>
            <Input
              type="date"
              onChange={onDueDateChange}
              placeholder="due_date"
              value={newDueDate}
            />
          </Flex>

          <Flex align="center">
            <Text whiteSpace="nowrap" w="60">
              Task description
            </Text>
            <Input
              onChange={onDescriptionChange}
              placeholder="description"
              value={newDescription}
            />
          </Flex>

          <Flex align="center">
            <Text whiteSpace="nowrap" w="60">
              Progress Status
            </Text>
            <Select
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
              onChange={onTimeToCompleteChange}
              placeholder="Estimate Time to Complete"
              value={newTimeToComplete}
            />
          </Flex>

          <Box>
            <Button type="submit" colorScheme="twitter" w={24} m={4}>
              Add
            </Button>
          </Box>
        </Stack>
      )}
    </form>
  );
};

export default AddTaskForm;
