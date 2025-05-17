import { Box, Text, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const toast = useToast();

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);

            setOutput(result.output || "No output received.");
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.error("Execution error:", error);
            toast({
                title: "An error occurred while executing the code.",
                description: error.message || "Unable to run code.",
                status: "error",
                duration: 6000,
                isClosable: true,
            });
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">Output</Text>
            <Button
                variant="outline"
                colorScheme="green"
                onClick={runCode}
                isLoading={isLoading}
            >
                Run Code
            </Button>

            <Box
                height="75vh"
                mt={2}
                p={4}
                border="1px solid"
                borderRadius="md"
                borderColor={isError ? "red.500" : "gray.600"}
                bg="gray.900"
                color={
                    isError ? "red.400" : "green.200"
                }
                whiteSpace="pre-wrap"
                overflowY="auto"
            >
                {output || "Output will be displayed here..."}
            </Box>
        </Box>
    );
};

export default Output;
