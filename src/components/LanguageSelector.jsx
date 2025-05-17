import {
    Box,
    Button,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const LanguageSelector = ({ language, onSelect }) => {
    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Language:
            </Text>

            <Menu isLazy>
                <MenuButton as={Button}>{language}</MenuButton>

                <MenuList bg="#110c1b">
                    {languages.map(([lang, version]) => (
                        <MenuItem
                            key={lang}
                            color={lang === language ? "blue.400" : "white"}
                            bg={lang === language ? "gray.900" : "transparent"}
                            _hover={{
                                color: "blue.400",
                                bg: "gray.900",
                            }}
                            onClick={() => onSelect(lang)}
                        >
                            {lang} ({version})
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
