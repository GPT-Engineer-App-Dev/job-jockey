import React, { useState } from 'react';
import { Container, Input, Button, VStack, HStack, Text, List, ListItem, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);
  
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="3xl" mb={6}>Todo App</Text>
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
          <Button onClick={handleAddTask}>Add</Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} p={2} borderWidth={1} borderRadius="md" d="flex" alignItems="center">
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => handleToggleTask(index)}
                flex="1"
              >
                <Text as={task.completed ? "del" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton 
                icon={<FaTrash />} 
                onClick={() => handleDeleteTask(index)} 
                ml={2}
                colorScheme="red" 
                aria-label="Delete Task"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;