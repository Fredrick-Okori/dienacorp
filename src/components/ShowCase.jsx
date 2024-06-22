import { Box, Button, Grid, GridItem, Container, Text, VStack } from "@chakra-ui/react";

const Card = ({ image, title, description }) => (
    
    <Box
        mt={15}
        position="relative"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        bg={`url(${image})`}

        bgSize="cover"
        bgPosition="center"
        height="100%"
    >
        <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="var(--clr-primary-1)" // Adjust opacity here
        />
        <VStack
            position="relative"
            top="0"
            left="0"
            width="100%"
            height="100%"
            p={4}
            align="start"
            spacing={2}
            justify="center"
            color="white"
        >
            <Text fontWeight="bold" fontSize="xl">
                {title}
            </Text>
            <Text>
                {description}
            </Text>
            <Button colorScheme="whiteAlpha" variant="outline">Shop now</Button>
        </VStack>
    </Box>
);

const ShowCase = () => (
    <Container maxW="container.xl">
    <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
        <GridItem>
            <Card
                image="./img/hero.jpg"
                title="All dressed"
                description="Dress that feels a little fancy for when pajamas aren’t cutting it"
            />
        </GridItem>
        <GridItem>
            <Grid templateRows="1fr 1fr" gap={4}>
                <GridItem>
                    <Card
                        image="./img/hero.jpg"
                        title="Topped off"
                        description="Find the perfect top for any occasion"
                    />
                </GridItem>
                <GridItem>
                    <Card
                        image="./img/hero.jpg"
                        title="Go chic"
                        description="Style that stands out"
                    />
                </GridItem>
            </Grid>
        </GridItem>
        </Grid>
    </Container>
);

export default ShowCase;
