import React from 'react';
import {
    Box,
    VStack,
    Text,
    Button,
    Stack,
    Heading,
} from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box
            height="100vh"
            backgroundImage="url('../img/hero.png')"
            display="grid"
           margin='auto'
          zIndex={-100}    
        >
            <Box position="relative" zIndex={-100}  bg="blackAlpha.500"  />
            <VStack
                display="grid"
                margin="auto"
                spacing={6}
                textAlign="center"
                color='var(--clr-primary-1)'
                justifyContent="center"
                
               
            >
                <Heading fontSize={"8xl"}
                    color='var(--clr-primary-4)'
                >Digitizing your ideas..</Heading>
                <Text fontSize="xl" maxW="600px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Stack direction="row" spacing={4}>
                    <Button color="#c13d60" size="lg">Get Started for Free</Button>
                    <Button color="#c13d60" size="lg">Talk to Sales</Button>
                </Stack>
            </VStack>
        </Box>
    );
};

export default HeroSection;
