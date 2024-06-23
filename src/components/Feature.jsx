
import React from 'react'


import { Heading, Container, Image } from '@chakra-ui/react'
import ShowCase from './ShowCase'
export default function Feature() {
    return (
        <>
            <Container
                maxW="container.2xl"
                // bg="var(--clr-primary-1)"
                color="var(--clr-primary-10)"
                textAlign="center"
                bg="var(--clr-primary-1)"
                h={500}
            p={-10}
            >
              
               
            </Container>       
            <Container maxW="container.2xl" p={-10}>
                
                <Image src="./img/bg.jpg" alt="features" />
            </Container>
        </>
    )
}