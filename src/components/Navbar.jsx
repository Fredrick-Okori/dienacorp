import React from 'react';
import {
    Box, Flex, Text,
    HStack, Link
} from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Box
            position="fixed"
            top={{ base: 0, lg: 15 }}
            left="50%"
            transform="translateX(-50%)"
            zIndex={100}
            bg="var(--clr-primary-3)"
            color="var(--clr-primary-10)"
            width={{ base: "100%", md: "80%", lg: "70%" }}
            maxW="1200px"
            boxShadow="md"
            rounded={{ base: 0, md: 100 }}
            px={4}
        >
            <Flex
                justifyContent="space-between"
                alignItems="center"
                p={4}
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
