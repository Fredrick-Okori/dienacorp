
import React from 'react'


import { Heading, Container, Image } from '@chakra-ui/react'
export default function Feature() {
    return (
        <>
            <Container
                maxW="container.2xl"
                // bg="var(--clr-primary-1)"
                color="var(--clr-primary-10)"
                textAlign="center"
               
            p={10}
            >
                <Image rounded={5} src="./img/hero.jpg" alt="features" />
               
            </Container>       
        </>
    )
}