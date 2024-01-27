import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer(){

  return (
    <Box mt={2} pos="relative" bottom="0" py={4} color="blackAlpha" >
        <Flex justifyContent="center">
            <Text fontSize={["12px","16px"]} as="a" href="https://elliotweb.dev">Renzo Events &copy; 2023-2024</Text>
        </Flex>
    </Box>
  );
};

