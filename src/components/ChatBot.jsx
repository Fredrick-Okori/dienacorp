import React from "react";
import { Box, IconButton } from "@chakra-ui/react";

import { Discord } from "react-bootstrap-icons";

const ChatBot = () => {
    return (
        <Box position="fixed" bottom="4" right="4">
            <IconButton
                icon={<Discord />}
                isRound
                size="lg"
                color="var(--clr-primary-1)"
                aria-label="Add"
            />
        </Box>
    );
};

export default ChatBot;
