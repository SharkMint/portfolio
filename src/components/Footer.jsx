// Footer migrated to Chakra UI
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" w="full" bgGradient="linear(to-t, rgba(3,6,24,1), transparent)" py={10}>
      <Flex maxW="6xl" mx="auto" px={4} direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={6}>
        <Box>
          <Text fontWeight="semibold" fontSize="lg" color="white">Maicol Jaquez</Text>
          <Text fontSize="sm" color="whiteAlpha.600">Software Developer — © {new Date().getFullYear()}</Text>
        </Box>

        <HStack spacing={6}>
          <ScrollLink to="home" spy={true} smooth={true} offset={-80}>
            <Text color="whiteAlpha.800" _hover={{ color: "teal.300" }} cursor="pointer">Home</Text>
          </ScrollLink>
          <ScrollLink to="proyect" spy={true} smooth={true} offset={-80}>
            <Text color="whiteAlpha.800" _hover={{ color: "teal.300" }} cursor="pointer">Projects</Text>
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-80}>
            <Text color="whiteAlpha.800" _hover={{ color: "teal.300" }} cursor="pointer">Contact</Text>
          </ScrollLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;