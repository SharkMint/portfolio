// styles removed: using Tailwind utilities only
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {

	const showToastMessage = () => {
		toast.success('Message Success!', {
			position: toast.POSITION.TOP_RIGHT,
			toastId: 'contact-success'
		});
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_xskjw5k', 'template_g0x0adf', e.target, 'pyfweufZCl3VbftlI')
			.then((result) => {
				toast.success('Mensaje enviado correctamente', { position: toast.POSITION.TOP_RIGHT, toastId: 'contact-success' });
				console.log(result.text);
			}, (error) => {
				toast.error('Error al enviar el mensaje', { position: toast.POSITION.TOP_RIGHT, toastId: 'contact-error' });
				console.log(error.text);
			});

		e.target.reset();
	};

	return (
		<section id="contact" className="min-h-screen flex items-center justify-center py-12">
			<div className="w-full max-w-2xl">
				<h1 className="text-3xl text-white text-center mb-6">Contactame</h1>
						<form ref={form} onSubmit={sendEmail} className="bg-white/5 p-6 rounded-lg border border-white/20">
							<label className="block mb-2 text-sm text-white">Nombre</label>
							<input className="input-base mb-4" type="text" id="user_name" name="user_name" placeholder="Name" required />

							<label className="block mb-2 text-sm text-white">Email</label>
							<input className="input-base mb-4" type="email" id="user_email" name="user_email" placeholder="Email" required />

							<label className="block mb-2 text-sm text-white">Mensaje</label>
							<textarea className="input-base mb-4 h-36 resize-none" id="message" name="message" placeholder="Message" required />

							<div className="text-center">
								<button type="submit" className="btn-primary" onClick={showToastMessage}>Enviar</button>
							</div>
						</form>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				draggable
				toastClassName={(context) => `toast-default ${context?.type === 'success' ? 'toast-success' : context?.type === 'error' ? 'toast-error' : ''}`}
				bodyClassName={() => 'text-sm'}
				className={() => 'toast-container-base'}
			/>
		</section>
	)
}

export default Contact