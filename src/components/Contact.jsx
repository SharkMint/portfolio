// migrate to Chakra: use Chakra components and useToast; keep emailjs for sending
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Heading,
	useToast,
} from "@chakra-ui/react";

const Contact = () => {
	const form = useRef();
	const toast = useToast();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_xskjw5k',
				'template_g0x0adf',
				e.target,
				'pyfweufZCl3VbftlI'
			)
			.then(
				(result) => {
					toast({
						title: 'Mensaje enviado',
						description: 'Tu mensaje fue enviado correctamente.',
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top-right',
					});
					console.log(result.text);
				},
				(error) => {
					toast({
						title: 'Error al enviar',
						description: 'Ocurrió un error al enviar tu mensaje. Intenta nuevamente más tarde.',
						status: 'error',
						duration: 7000,
						isClosable: true,
						position: 'top-right',
					});
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<Box as="section" id="contact" minH="100vh" display="flex" alignItems="center" justifyContent="center" py={12}>
			<Box w="full" maxW="2xl">
				<Heading as="h1" size="lg" color="white" textAlign="center" mb={6}>
					Contáctame
				</Heading>

				<Box as="form" ref={form} onSubmit={sendEmail} bg="whiteAlpha.50" p={6} rounded="lg" borderWidth={1} borderColor="whiteAlpha.200">
					<FormControl mb={4}>
						<FormLabel color="white" fontSize="sm">Nombre</FormLabel>
						<Input name="user_name" id="user_name" placeholder="Tu nombre" required bg="whiteAlpha.10" _placeholder={{ color: 'gray.400' }} />
					</FormControl>

					<FormControl mb={4}>
						<FormLabel color="white" fontSize="sm">Email</FormLabel>
						<Input name="user_email" id="user_email" type="email" placeholder="tu@correo.com" required bg="whiteAlpha.10" _placeholder={{ color: 'gray.400' }} />
					</FormControl>

					<FormControl mb={4}>
						<FormLabel color="white" fontSize="sm">Mensaje</FormLabel>
						<Textarea name="message" id="message" placeholder="Escribe tu mensaje" required bg="whiteAlpha.10" minH="160px" resize="none" _placeholder={{ color: 'gray.400' }} />
					</FormControl>

					<Box textAlign="center">
						<Button type="submit" colorScheme="teal">
							Enviar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;