
import React from 'react'


import { Heading, Container, Text, Flex, Box, Image } from '@chakra-ui/react'
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

                <Heading variant='h4' p={14} fontWeight="normal" > Technologies and frameworks we embrace</Heading>
                <Flex dir='column' alignItems='center' justifyContent="space-evenly" >

                    <Flex dir='row' alignItems='center' gap={10} justifyContent="center" >
                        <Box>
                            <Text>
                                React
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                Mongodb
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                Mongodb
                            </Text>
                        </Box>
                        <Box>
                            <Image src="./img/white.png" alt='technology image' width={500} />
                        </Box>
                    </Flex>

                </Flex>
            </Container>

            <Container maxW="container.2xl" p={-10}>

                <Image src="./img/bg.jpg" alt="features" />
            </Container>
        </>
    )
}