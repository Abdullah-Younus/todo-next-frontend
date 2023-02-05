"use client"
import React, { useState, useRef } from 'react'
import { Box, CardBody, Card, Text, Stack, Heading, Button, Input } from '@chakra-ui/react';
import { truncate } from 'fs/promises';

type Porps = {
    todos: any[];
    updateData: (newData: any[]) => void;
}

export default function PostData({ todos, updateData }: Porps) {
    // const [inputValue, setInputValue]: any = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');

    function handleDelete(newData: any[], index: number) {
        newData = [...todos];
        newData.splice(index, 1);
        updateData(newData)
    }
    function handleEdit(index: number) {

    }

    function handleUpdate(index: number) {
        setEditIndex(index);
        setInputValue(todos[index]);
        if (editIndex !== null) {
            const newData = [...todos];
            newData[editIndex] = inputValue;
            updateData(newData);
            setEditIndex(null);
        }
    }

    return (
        <>
            {todos!.map((eachItem: any, index: number) => (
                <Card key={index} maxW={{ base: "65%", md: "35%", lg: "35%" }} m="0 auto" mt="12px" mb="12px" my="12px">
                    <CardBody >
                        {editIndex === index ? (
                            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        ) : (
                            <Text>{eachItem}</Text>
                        )}
                        <Button as="button" colorScheme='teal' variant='outline' size="sm" float={'right'} onClick={() => handleUpdate(index)}>
                            Update
                            {/* {editIndex === index ? 'Update' : 'Edit'} */}
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}
