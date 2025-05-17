import { Box, Flex, Text } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <>
      {/* Navbar */}
      <Flex
        bg="gray.900"
        color="white"
        px={6}
        py={4}
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Black Code Editor
        </Text>
      </Flex>

      {/* Main Content */}
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
    </>
  );
}

export default App;
