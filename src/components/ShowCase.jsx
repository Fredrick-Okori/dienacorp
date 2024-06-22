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
            bg="rgba(355, 200, 209, 0.8)" // Using rgba for opacity
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
            color="var(--clr-primary-1)"
        >
            <Text fontWeight="bold" fontSize="2xl">
                {title}
            </Text>
            <Text>
                {description}
            </Text>
            <Button colorScheme="whiteAlpha" variant="outline">Get Started</Button>
        </VStack>
    </Box>
);

const ShowCase = () => (
    <Container maxW="container.xl">
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
            <GridItem>
                <Card
                    image="./img/code.jpg"
                    title="We build it together"
                    description="Build something that looks fancy for you and your users."
                />
            </GridItem>
            <GridItem>
                <Grid templateRows="1fr 1fr" gap={4}>
                    <GridItem>
                        <Card
                            image="./img/code.jpg"
                            title="Software Solutions"
                            description="It's a perfect time to go digital"
                        />
                    </GridItem>
                    <GridItem>
                        <Card
                            image="./img/code.jpg"
                            title="Brands on the Go"
                            description="Make the turn with us"
                        />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Container>
);

export default ShowCase;
