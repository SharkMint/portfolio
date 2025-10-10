// styles removed: migrated to Chakra UI
import React from "react";
import aspnetmvc from "./../assets/img/aspnetmvc.png";
import firebase from "./../assets/img/firebase.png";
import iconbootstrap from "./../assets/img/bootstrap.png";
import iconcss from "./../assets/img/css_3.png";
import icongithub from "./../assets/img/github.png";
import iconhtml from "./../assets/img/html-5.png";
import iconjavascript from "./../assets/img/javascript.png";
import iconreact from "./../assets/img/react.png";
import iconredux from "./../assets/img/redux.png";
import icontypescript from "./../assets/img/typescript.png";
import laravel from "./../assets/img/laravel.png";
import mysql from "./../assets/img/mysql.png";
import net from "./../assets/img/net.png";
import nextjs from "./../assets/img/nextjs.png";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";

const Skils = () => {
  const groups = [
    { title: 'Backend', items: [{img: aspnetmvc, label: 'ASP.NET MVC'}, {img: net, label: '.NET'}, {img: laravel, label: 'Laravel'}, {img: nextjs, label: 'Next JS'}, {img: firebase, label: 'Firebase'}, {img: mysql, label: 'Mysql'}] },
  { title: 'Frontend', items: [{img: iconhtml, label: 'HTML 5'}, {img: iconcss, label: 'CSS 3'}, {img: iconjavascript, label: 'Javascript'}, {img: icontypescript, label: 'Typescript'}, {img: iconbootstrap, label: 'Bootstrap'}, {img: icongithub, label: 'Github'}, {img: iconreact, label: 'React.JS'}] },
  { title: 'Tools & Others', items: [{img: iconredux, label: 'Redux'}, {img: icongithub, label: 'GitHub'}, {img: iconbootstrap, label: 'Bootstrap'}, {img: iconreact, label: 'React'}] }
  ];

  return (
    <Box as="section" id="skils" py={16} bgGradient="linear(to-tr, #021024, #061827)">
      <Container maxW="6xl">
        <Heading as="h2" size="xl" color="white" textAlign="center" mb={8}>Habilidades</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {groups.map((g, idx) => (
            <Box key={idx} bg="whiteAlpha.50" p={6} borderRadius="xl">
              <Heading as="h3" size="md" color="white" mb={4}>{g.title}</Heading>
              <SimpleGrid columns={2} gap={4}>
                {g.items.map((s, i) => (
                  <HStack key={i} spacing={3} bg="whiteAlpha.50" p={3} borderRadius="md" align="center">
                    <Image src={s.img} alt={s.label} boxSize="32px" />
                    <Text color="white">{s.label}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Skils;