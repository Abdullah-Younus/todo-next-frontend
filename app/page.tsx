"use client"
import { ChakraProvider } from '@chakra-ui/react';
import TodoCard from './Card';



export default function Home() {

  return (
    <ChakraProvider>
      <TodoCard />
    </ChakraProvider>
  )
}
