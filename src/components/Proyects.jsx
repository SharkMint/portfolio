// migrated to Chakra UI
import React from "react";
import cafeteria from "../assets/img/RestaurantCafe.png";
import libros from "../assets/img/Libreria.png";
import netflix from "../assets/img/netflix-clone.png";
import tienda from "../assets/img/TiendaVirtual.png";
import { Box, Container, SimpleGrid, Image, Heading, Text, Button, Link } from "@chakra-ui/react";

const ProjectCard = ({ img, title, repo }) => (
  <Box position="relative" w="full" h="44" borderRadius="xl" overflow="hidden" bg="whiteAlpha.50" role="group">
    <Image src={img} alt={title} objectFit="cover" w="full" h="full" transition="transform 0.3s" _groupHover={{ transform: 'scale(1.05)' }} />

    {/* Overlay: becomes visible on group hover or when focus is inside (keyboard accessibility) */}
    <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)" opacity={0} _groupHover={{ opacity: 1 }} _focusWithin={{ opacity: 1 }} transition="opacity 0.3s" display="flex" alignItems="end" pointerEvents="none">
      <Box p={4} w="full" display="flex" alignItems="center" justifyContent="space-between" pointerEvents="auto">
        <Box>
          <Heading as="h3" size="sm" color="white">{title}</Heading>
          <Text fontSize="sm" color="whiteAlpha.800">Project demo & source</Text>
        </Box>
        <Link href={repo} isExternal>
          <Button colorScheme="teal">Ver repo</Button>
        </Link>
      </Box>
    </Box>
  </Box>
);

const Proyects = () => {
  return (
    <Box as="section" id="proyect" py={16} bg="#071022">
      <Container maxW="6xl">
        <Heading as="h2" size="xl" color="white" textAlign="center" mb={8}>Proyectos</Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
          <ProjectCard img={cafeteria} title="El Gustico" repo="https://github.com/SharkMint/RestaurantCafe" />
          <ProjectCard img={tienda} title="Tienda Virtual" repo="https://github.com/SharkMint/TiendaOnline" />
          <ProjectCard img={netflix} title="Netflix Clone" repo="https://github.com/SharkMint/netflix-clone" />
          <ProjectCard img={libros} title="Library" repo="https://github.com/SharkMint/TiendaDeLibros" />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Proyects;