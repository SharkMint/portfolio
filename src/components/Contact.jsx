// migrate to Chakra: use Chakra components and useToast; keep emailjs for sending
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Textarea,
	Heading,
	useToast,
} from "@chakra-ui/react";

const Contact = () => {
		const form = useRef();
		const toast = useToast();

		const {
			register,
			handleSubmit,
			formState: { errors, isSubmitting },
			reset,
		} = useForm();

		const sendEmail = async (data, e) => {
			// data contains validated fields
			try {
				const result = await emailjs.sendForm('service_xskjw5k', 'template_g0x0adf', form.current, 'pyfweufZCl3VbftlI');

				toast({
					title: 'Mensaje enviado',
					description: 'Tu mensaje fue enviado correctamente.',
					status: 'success',
					duration: 5000,
					isClosable: true,
					position: 'top-right',
				});
				console.log(result.text);
				reset();
			} catch (error) {
				toast({
					title: 'Error al enviar',
					description: 'Ocurrió un error al enviar tu mensaje. Intenta nuevamente más tarde.',
					status: 'error',
					duration: 7000,
					isClosable: true,
					position: 'top-right',
				});
				console.log(error.text || error);
			}
		};

	return (
		<Box as="section" id="contact" minH="100vh" display="flex" alignItems="center" justifyContent="center" py={12}>
			<Box w="full" maxW="2xl">
				<Heading as="h1" size="lg" color="white" textAlign="center" mb={6}>
					Contáctame
				</Heading>

						<Box as="form" ref={form} onSubmit={handleSubmit(sendEmail)} bg="whiteAlpha.50" p={6} rounded="lg" borderWidth={1} borderColor="whiteAlpha.200">
							<FormControl mb={4} isInvalid={!!errors.user_name}>
								<FormLabel color="white" fontSize="sm">Nombre</FormLabel>
								<Input
									{...register('user_name', { required: 'El nombre es obligatorio' })}
									name="user_name"
									id="user_name"
									placeholder="Tu nombre"
									bg="whiteAlpha.10"
									_placeholder={{ color: 'gray.400' }}
								/>
								<FormErrorMessage>{errors.user_name && errors.user_name.message}</FormErrorMessage>
							</FormControl>

							<FormControl mb={4} isInvalid={!!errors.user_email}>
								<FormLabel color="white" fontSize="sm">Email</FormLabel>
								<Input
									{...register('user_email', {
										required: 'El email es obligatorio',
										pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
									})}
									name="user_email"
									id="user_email"
									type="email"
									placeholder="tu@correo.com"
									bg="whiteAlpha.10"
									_placeholder={{ color: 'gray.400' }}
								/>
								<FormErrorMessage>{errors.user_email && errors.user_email.message}</FormErrorMessage>
							</FormControl>

							<FormControl mb={4} isInvalid={!!errors.message}>
								<FormLabel color="white" fontSize="sm">Mensaje</FormLabel>
								<Textarea
									{...register('message', { required: 'El mensaje es obligatorio', minLength: { value: 10, message: 'Escribe al menos 10 caracteres' } })}
									name="message"
									id="message"
									placeholder="Escribe tu mensaje"
									bg="whiteAlpha.10"
									minH="160px"
									resize="none"
									_placeholder={{ color: 'gray.400' }}
								/>
								<FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
							</FormControl>

							<Box textAlign="center">
								<Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
									Enviar
								</Button>
							</Box>
						</Box>
			</Box>
		</Box>
	);
};

export default Contact;