"use client"
import React from 'react';
import { Box, CardBody, Card, Text, Stack, Heading, Button, Input } from '@chakra-ui/react';
function Cards() {

  function hanldSubmit(e: any) {
    e.preventDefault();
    console.log('Check')
  }

  return (
    <Box width="100%" height='100vh' bg="lightblue">
      <br />
      <form onClick={hanldSubmit}>
        <Card width="35%" m="0 auto">
          <Heading as='h4' size='md' fontFamily='mono' textAlign='center' mt="10px">TodoApp</Heading>
          <CardBody>
            <Input type='text' placeholder='Message' marginBottom="10px" />
            <Button type='submit' float='right'>Add</Button>
          </CardBody>
        </Card>
      </form>
    </Box>
  )
}

export default Cards;