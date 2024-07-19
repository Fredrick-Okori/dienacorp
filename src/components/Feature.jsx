
import React, { useEffect } from 'react'


import { Heading, Container, Text, Flex, Box, Image } from '@chakra-ui/react'
import ShowCase from './ShowCase'

import Aos from 'aos';
import "aos/dist/aos.css"
import { Whatsapp } from 'react-bootstrap-icons';


export default function Feature() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])


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
                <Box data-aos="zoom-in-up" data-aos-duration="2000">



                    <Heading variant='h4' p={14} fontWeight="normal" > Technologies and frameworks we embrace</Heading>
                    <Flex dir="column" alignItems='center' justifyContent="space-evenly" >

                        <Flex dir='row' alignItems='center' gap={10} justifyContent="center" >
                            <Flex dir='row' alignItems='center' gap={5} justifyContent='center' border='1px solid white' p={5} rounded={5}>
                                <Box>
                                    <Image src="./img/react.svg" alt='react-logo' width={50} />
                                </Box>
                                <Box>
                                    <Text>React</Text>
                                    
                                </Box>
                               
                            </Flex>
                            <Flex dir='row' alignItems='center' gap={5} justifyContent='center' border='1px solid white' p={5} rounded={5}>
                                <Box>
                                    <Image src="./img/react.svg" alt='react-logo' width={50} />
                                </Box>
                                <Box>
                                    <Text>React</Text>

                                </Box>

                            </Flex>
                            <Flex dir='row' alignItems='center' gap={5} justifyContent='center' border='1px solid white' p={5} rounded={5}>
                                <Box>
                                    <Image src="./img/react.svg" alt='react-logo' width={50} />
                                </Box>
                                <Box>
                                    <Text>React</Text>

                                </Box>

                            </Flex>
                            <Flex>
                                <Image src="./img/white.png" alt='technology image' width={500} />
                            </Flex>
                        </Flex>

                    </Flex>
                </Box>
            </Container>

            <Container maxW="container.2xl" p={-10}>

                <Image src="./img/bg.jpg" alt="features" />
            </Container>
        </>
    )
}