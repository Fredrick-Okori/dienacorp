import React from 'react';
import {
    Box, Flex, Text,
    Input, InputGroup, InputLeftElement,
    HStack, useBreakpointValue, Link
} from '@chakra-ui/react';


const NavBar = () => {


    return (

        <Box bg="var(--clr-primary-4)" color='var(--clr-primary-10)'   px={10}  mt={{base: 0, lg: 20}} boxShadow="md" position='fixed' rounded={100}>
            <Flex  p={7} alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" mr={10}>
                    <img src="../src/img/White.png" alt="Logo" style={{ height: '40px' }} />
                    <Box ml={3} fontWeight="bold" fontSize="lg"><img src="../src/img/White.png" alt="Logo" style={{ height: '40px' }} /></Box>
                </Box>

              
                    <>
                        <HStack spacing={8} alignItems="center">
                            <Link href="/home" fontWeight="medium">Home</Link>
                            <Link href="/about" fontWeight="medium">About</Link>
                            <Link href="/services" fontWeight="medium">Services</Link>
                            <Link href="/contact" fontWeight="medium">Contact</Link>
                        </HStack>

                    </>
            
                <Flex>
                    <Text>Social media</Text>
                </Flex>

            </Flex>

            
        </Box>

    );
};

export default NavBar;
