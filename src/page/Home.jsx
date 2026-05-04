// legacy styles removed; using Tailwind utilities only
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Proyects from "../components/Proyects";
import Skils from "../components/Skils";
import programer1 from "./../assets/img/programer1.png";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Header />

      <Box as="section" id="home" pt={20} pb={8}>
        <Container maxW="6xl">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
            <GridItem order={{ base: 2, md: 1 }}>
              <Box textAlign={{ base: 'center', md: 'left' }}>
                <Text fontSize="sm" color="teal.300" textTransform="uppercase" letterSpacing="widest">Software Engineer</Text>
                <Heading as="h1" size="2xl" mt={2} color="white">Hola, soy Maicol<br/>Jaquez</Heading>
                <Text fontSize="lg" color="whiteAlpha.900" maxW="xl" mt={4}>Construyo experiencias web modernas enfocadas en rendimiento, accesibilidad y diseño bonito — React, Chakra UI y buenas prácticas.</Text>

                <Box mt={6} display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} gap={4}>
                  <Button as="a" href="#contact" colorScheme="teal">Contáctame</Button>
                  <Button as="a" href="/docs/Curriculum.pdf" download variant="ghost" color="whiteAlpha.800">Descargar CV</Button>
                </Box>
              </Box>
            </GridItem>

            <GridItem order={{ base: 1, md: 2 }}>
              <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
                <Box position="relative" w={{ base: '240px', md: '288px' }} h={{ base: '240px', md: '288px' }} borderRadius="3xl" bgGradient="linear(to-br, teal.200, transparent)" display="flex" alignItems="center" justifyContent="center" boxShadow="lg">
                  <Image src={programer1} alt="avatar" boxSize={{ base: '220px', md: '256px' }} borderRadius="full" objectFit="cover" borderWidth={2} borderColor="whiteAlpha.100" />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>


      <About />
      <Skils />
      <Proyects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;