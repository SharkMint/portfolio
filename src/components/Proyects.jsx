import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Link,
  //HStack,
  //Tag,
  //TagLabel,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import oficinaVirtual from "../assets/img/oficinavirtual.png";
import portalAutorizaciones from "../assets/img/portalautorizaciones.png";

const projects = [
  {
    img: oficinaVirtual,
    title: "Oficina Virtual",
    description: "Sistema de gestión interna para ARS Renacer con módulos de empleados, turnos y documentos.",
    //tag: ["React", ".NET", "SQL"],
    demo: "https://ov.arsrenacer.com/",
  },
  {
    img: portalAutorizaciones,
    title: "Portal de Autorizaciones",
    description: "Portal para gestión y seguimiento de autorizaciones médicas en tiempo real.",
    //tag: ["React", ".NET", "SQL"],
    demo: "https://autorizaciones.arsrenacer.com/",
  },
];

const ProjectCard = ({ img, title, description, tags, demo }) => (
  <Box
    bg="whiteAlpha.50"
    borderWidth={1}
    borderColor="whiteAlpha.100"
    borderRadius="xl"
    overflow="hidden"
    role="group"
    transition="transform 0.2s, border-color 0.2s"
    _hover={{ transform: "translateY(-4px)", borderColor: "teal.500" }}
    display="flex"
    flexDirection="column"
  >
    <Box h="44" overflow="hidden" flexShrink={0}>
      <Image
        src={img}
        alt={title}
        objectFit="cover"
        w="full"
        h="full"
        transition="transform 0.3s"
        _groupHover={{ transform: "scale(1.05)" }}
      />
    </Box>

    <VStack align="start" p={5} spacing={3} flex={1}>
      <Heading as="h3" size="sm" color="white">
        {title}
      </Heading>

      <Text fontSize="sm" color="whiteAlpha.700" lineHeight="tall" flex={1}>
        {description}
      </Text>

      {/*
        <HStack spacing={2} flexWrap="wrap">
        {tags.map((tag) => (
          <Tag key={tag} size="sm" variant="subtle" colorScheme="teal" borderRadius="full">
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </HStack>
      */}

      {demo !== "#" && (
        <Link href={demo} isExternal w="full" mt={1}>
          <Button
            size="sm"
            colorScheme="teal"
            variant="ghost"
            rightIcon={<ExternalLinkIcon />}
            w="full"
            borderWidth={1}
            borderColor="teal.500"
            _hover={{ bg: "teal.500", color: "white" }}
          >
            Ver sitio
          </Button>
        </Link>
      )}
    </VStack>
  </Box>
);

const Proyects = () => {
  return (
    <Box as="section" id="proyect" py={16} bgGradient="linear(to-tr, #020617, #061827)">
      <Container maxW="6xl">
        <VStack mb={10} spacing={2}>
          <Heading as="h2" size="xl" color="white" textAlign="center">
            Proyectos
          </Heading>
          <Box w={12} h={1} bg="teal.400" borderRadius="full" />
          <Text color="whiteAlpha.600" fontSize="sm" textAlign="center" pt={1}>
            Algunos de los proyectos que he desarrollado
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 2 }} gap={6}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Proyects;
