// Header migrated to Chakra UI
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ to, children }) => (
    <ScrollLink to={to} spy={true} smooth={true} offset={-80}>
      <Text color="white" _hover={{ color: 'teal.300' }} cursor="pointer">
        {children}
      </Text>
    </ScrollLink>
  );

  return (
    <Box as="header" position="sticky" top={0} zIndex={50} bgGradient="linear(to-r, rgba(2,6,23,0.6), rgba(7,16,38,0.5), rgba(2,6,23,0.6))" borderBottomWidth={1} borderColor="whiteAlpha.100" backdropFilter="blur(6px)">
      <Flex align="center" maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} h={16} justify="space-between">
        <HStack spacing={4} align="center">
          <Image src={require("../assets/img/logo.png")} alt="logo" boxSize="40px" objectFit="cover" borderRadius="md" />
          <Box>
            <Text color="white" fontWeight="semibold">Maicol Jaquez</Text>
            <Text color="whiteAlpha.600" fontSize="xs">Software Developer</Text>
          </Box>
        </HStack>

        <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }} align="center">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skils">Skills</NavLink>
          <NavLink to="proyect">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <Link href="/docs/Curriculum.pdf" ml={4} bg="teal.500" px={3} py={2} rounded="md" color="white" _hover={{ opacity: 0.9 }}>Resume</Link>
        </HStack>

        <IconButton display={{ base: 'inline-flex', md: 'none' }} aria-label="Open menu" icon={<HamburgerIcon />} onClick={onOpen} variant="ghost" color="white" />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(7,16,38,0.95)">
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center" justify="space-between">
              <HStack spacing={4}>
                <Image src={require("../assets/img/logo.png")} alt="logo" boxSize="36px" borderRadius="md" />
                <Box>
                  <Text color="white" fontWeight="semibold">Maicol Jaquez</Text>
                  <Text color="whiteAlpha.600" fontSize="xs">Software Developer</Text>
                </Box>
              </HStack>
              <IconButton aria-label="Close menu" icon={<CloseIcon />} onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" mt={4}>
              <ScrollLink to="home" spy={true} smooth={true} onClick={onClose}><Text color="white">Home</Text></ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} onClick={onClose}><Text color="white">About</Text></ScrollLink>
              <ScrollLink to="skils" spy={true} smooth={true} onClick={onClose}><Text color="white">Skills</Text></ScrollLink>
              <ScrollLink to="proyect" spy={true} smooth={true} onClick={onClose}><Text color="white">Projects</Text></ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} onClick={onClose}><Text color="white">Contact</Text></ScrollLink>
              <Link href="/docs/Curriculum.pdf" color="white">Resume</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;