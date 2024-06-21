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
            backgroundImage="url('./src/img/hero.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            display="grid"
           margin='auto'
            zIndex="-1"
            
        >
            <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.300"  />
            <VStack
             
                spacing={6}
                textAlign="center"
                color="white"
                display="grid"
                margin='auto'
               
            >
                <Heading fontSize={"8xl"}>Digitizing your ideas..</Heading>
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
