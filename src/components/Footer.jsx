import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Flex, HStack, Text, Link, Divider, VStack } from "@chakra-ui/react";

const NavItem = ({ to, children }) => (
  <ScrollLink to={to} spy={true} smooth={true} offset={-80}>
    <Text color="whiteAlpha.700" _hover={{ color: "teal.300" }} cursor="pointer" fontSize="sm" transition="color 0.2s">
      {children}
    </Text>
  </ScrollLink>
);

const Footer = () => {
  return (
    <Box
      as="footer"
      w="full"
      bgGradient="linear(to-r, rgba(2,6,23,0.6), rgba(7,16,38,0.5), rgba(2,6,23,0.6))"
      borderTopWidth={1}
      borderColor="whiteAlpha.100"
      backdropFilter="blur(6px)"
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={8}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <VStack align={{ base: "center", md: "start" }} spacing={1}>
          <Text fontWeight="semibold" color="white">Maicol Jaquez</Text>
          <Text fontSize="xs" color="whiteAlpha.500">Software Developer</Text>
        </VStack>

        <HStack spacing={6} flexWrap="wrap" justify="center">
          <NavItem to="home">Home</NavItem>
          <NavItem to="about">About</NavItem>
          <NavItem to="skils">Skills</NavItem>
          <NavItem to="proyect">Projects</NavItem>
          <NavItem to="contact">Contact</NavItem>
          <Link href="/docs/Curriculum.pdf" fontSize="sm" color="teal.300" _hover={{ color: "teal.200" }}>
            Resume
          </Link>
        </HStack>
      </Flex>

      <Divider borderColor="whiteAlpha.100" />

      <Box textAlign="center" py={4}>
        <Text fontSize="xs" color="whiteAlpha.400">
          © {new Date().getFullYear()} Maicol Jaquez. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
