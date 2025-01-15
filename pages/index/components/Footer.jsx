import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box my={4} pos="relative" bottom="0" py={4} color="blackAlpha" textAlign="center">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text fontSize={["12px", "16px"]}>Renzo Events &copy; 2023-2025</Text>
        <Text fontSize={["8", "10"]} as="a" href="https://webboosterstudio.com">
          Created by Web Booster Studio
        </Text>
      </Flex>
    </Box>
  );
}
