import React, { useEffect } from 'react';
import {
    Box,
    VStack,
    Text,
    Button,
    Stack,
    Heading,
} from '@chakra-ui/react';

import Aos from 'aos';

import "aos/dist/aos.css"

import ShowCase from './ShowCase';

const HeroSection = () => {
    useEffect(() => { 
        Aos.init();
        Aos.refresh();
    }, [])

    return (
        <Box
            height="100vh"
            backgroundImage="url('../img/hero.png')"
            
        
            backgroundPosition="center"
            backgroundAttachment="fixed"
            // display="grid"
          
            width="100%"
            zIndex={-100}   
          
            
            display="grid"
            margin='auto'
          
        >
           
            <VStack
                data-aos="zoom-in-up" data-aos-duration="2000"
               
                mt={20}
                pt={20}
                
                spacing={6}
                textAlign="center"
                color='var(--clr-primary-1)'
                justifyContent="center"
                
               
            >
                <Heading fontSize={{base: "5xl", lg: '8xl'}}
                    color='var(--clr-primary-4)'
                    
                >Digitizing your ideas..</Heading>
                <Text fontSize="xl" maxW="600px">
                    Putting everything together will make your  idea even look fancier and more interesting. 
                Get integrated systems that will make your idea greater
                   
                </Text>
                <Stack direction="row" spacing={4}>
                    {/* <Button color="#c13d60" size="lg">Contact us</Button>
                    <Button color="#c13d60" size="lg">Call us today</Button> */}
                </Stack>
            </VStack>
            <ShowCase />
           
        </Box>
    );
};

export default HeroSection;
