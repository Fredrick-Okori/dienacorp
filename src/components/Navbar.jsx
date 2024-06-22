import React from 'react';
import {
    Box, Flex, Text,
    HStack, Link
} from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Box
            display="flex"
            
            position="fixed"
            zIndex={100}
            bg="var(--clr-primary-3)"
            color='var(--clr-primary-10)'
            width="100%"
          maxW={1200}
            top={{base:0, lg: 15}}
            boxShadow="md"
            rounded={{ base: 0, lg: 100 }}
        >
            <Flex
                width={{ base: '100%', md: '80%', lg: '70%' }}
                justifyContent="space-between"
              
                alignItems="center"
                p={7}
            >
                <Box display="flex" alignItems="center">
                    <img src="./img/white.png" alt="Logo" style={{ height: '40px' }} />
                </Box>

                <HStack spacing={5} alignItems="center">
                    <Link href="/home" fontWeight="medium">Home</Link>
                    <Link href="/about" fontWeight="medium">About</Link>
                    <Link href="/services" fontWeight="medium">Services</Link>
                    <Link href="/contact" fontWeight="medium">Contact</Link>
                </HStack>

                <Flex>
                    <Text>Social media</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default NavBar;
