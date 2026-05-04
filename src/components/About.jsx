// styles removed: migrated to Chakra UI
import React from "react";
import curriculo from "./../docs/Curriculum.pdf";
import fotomia from "./../assets/img/Fotomia.jpg";
import github from "./../assets/img/github.png";
import instagram from "./../assets/img/instagram.png";
import linkedin from "./../assets/img/linkedin.png";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      py={16}
      bgGradient="linear(to-tr, #020617, #061827)"
    >
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          alignItems="start"
        >
          <GridItem>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Image
                src={fotomia}
                alt="foto"
                boxSize="144px"
                objectFit="cover"
                borderRadius="full"
                borderWidth={2}
                borderColor="teal.400"
              />
              <Heading as="h2" size="lg" color="white" mt={4}>
                Maicol Jaquez
              </Heading>
              <Text color="teal.300" mt={1}>
                Software Developer
              </Text>

              <HStack spacing={4} mt={6}>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/maicol-jaquez-ramirez-926917190/"
                  isExternal
                >
                  <Image src={linkedin} alt="linkedin" boxSize="24px" />
                </Link>
                <Link
                  aria-label="Github"
                  href="https://github.com/SharkMint"
                  isExternal
                >
                  <Image src={github} alt="github" boxSize="24px" />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://www.instagram.com/maicoljaquez_ramirez/"
                  isExternal
                >
                  <Image src={instagram} alt="instagram" boxSize="24px" />
                </Link>
              </HStack>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Box
              bg="whiteAlpha.50"
              p={6}
              borderRadius="xl"
              borderWidth={1}
              borderColor="whiteAlpha.100"
            >
              <Heading as="h3" size="md" color="white" mb={3}>
                Sobre mí
              </Heading>
              <Text color="whiteAlpha.900" lineHeight="tall">
                Soy desarrollador de software desde República Dominicana. Me
                apasiona crear productos web con atención al detalle,
                rendimiento y experiencia de usuario. Disfruto aprender
                tecnologías nuevas y aplicar buenas prácticas de ingeniería para
                entregar soluciones mantenibles.
              </Text>

              <Text color="whiteAlpha.900" lineHeight="tall" mt={4}>
                Trabajo tanto en frontend como en backend: React, Next.js y
                Chakra UI para interfaces; .NET, Node y bases de datos para la
                parte de servicios. Me encanta resolver problemas y colaborar en
                equipos multidisciplinares.
              </Text>

              <Box mt={6}>
                <Button as="a" href={curriculo} download colorScheme="teal">
                  Descargar CV
                </Button>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
