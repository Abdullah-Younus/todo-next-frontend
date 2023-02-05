"use client"
import React, { useState } from 'react'
import { Box, CardBody, Card, Text, Stack, Heading, Button, Input } from '@chakra-ui/react';

type Porps = {
    todos: any[];
    updateData: (newData: any[]) => void;
}

export default function PostData({ todos, updateData }: Porps) {

    function handleDelete(newData: any[], index: number) {
        newData = [...todos];
        newData.splice(index, 1);
        updateData(newData)
    }

    return (
        <>
            {todos?.map((eachItem: any, index: number) => (
                <Card key={index} maxW={{ base: "65%", md: "35%", lg: "35%" }} m="0 auto" mt="12px" mb="12px" my="12px">
                    <CardBody >
                        <Text>{eachItem}</Text>
                        <Button as="button" colorScheme='teal' variant='outline' size="sm" float={'right'} onClick={(event: React.MouseEvent<HTMLElement>) => {
                            handleDelete(index)
                        }}>Delete</Button>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}
