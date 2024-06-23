import { Container, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Facebook, Twitter, Whatsapp,  Github, } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <>
            <Container
                maxW='container.2xl'
                bg='var(--clr-primary-10)'
                color="var(--clr-primary-1)"
                textAlign='center'
                p={5}
            >
                <Flex gap={2} justifyContent='center'
                    alignItems='center'
                >
                    <Text>
                        &copy; {new Date().getFullYear()} Diena Corps Uganda. All rights reserved.

                    </Text>
                    <Text>
                        <Facebook  fontSize={15}/>
                    </Text>
                    <Text>
                        <Twitter fontSize={15} />
                    </Text>
                    <Text>
                        <Github fontSize={15}/>
                   </Text>
                    <Text>
                        <Whatsapp fontSize={15} />
                    </Text>
                </Flex>
               
            </Container>
        </>
    )
}