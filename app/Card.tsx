"use client"
import React, { useState, useRef } from 'react';
import { Box, CardBody, Card, Text, Stack, Heading, Button, Input } from '@chakra-ui/react';
import PostCard from './PostData';
function Cards() {

  const [todos, setTodos]: string[] | any[] = useState([]);
  const [message, setMessage] = useState("");


  function hanldSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setTodos([...todos, message]);
    console.log('Todos ==>', todos);
  }

  function updateData(newData: any[]) {
    setTodos(newData)
  }

  return (
    <Box maxW="100%" height='100vh' bg="lightblue">
      <br />
      <Card maxW={{ base: "65%", md: "35%", lg: "35%" }} m="0 auto">
        <CardBody>
          <form action='#' onClick={hanldSubmit}>
            <Heading as='h4' size='md' fontFamily='mono' textAlign='center' mt="10px">TodoApp</Heading>
            <Input type='text' placeholder='Message' marginBottom="10px" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type='submit' as={'button'} float='right'>Add</Button>
          </form>
        </CardBody>
      </Card>
      <PostCard todos={todos} updateData={updateData} />
    </Box>
  )
}

export default Cards;