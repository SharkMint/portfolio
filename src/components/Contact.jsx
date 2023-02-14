import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {

	const showToastMessage = () => {
		toast.success('Message Success!', {
				position: toast.POSITION.TOP_RIGHT
		});
};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_xskjw5k', 'template_g0x0adf', e.target, 'pyfweufZCl3VbftlI')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		e.target.reset();
	};

	return (
		<div className='c' id="contact" style={{height: "100vh"}} >
			<div className='c-content'>
				<h1 className="c-title" >Contactame</h1>
				<form className='c-formulario-left' ref={form} onSubmit={sendEmail}>
					<input className='c-input-name' type="text" id="user_name" name="user_name" placeholder="Name" required />
					<input className='c-input-email' type="email" id="user_email" name="user_email" placeholder="Email" required />
					<textarea className='c-input-message' id="message" name="message" placeholder="Message" required />
					<input className='c-input-send' type="submit" value="enviar" onClick={showToastMessage} />
				</form>
			</div>
			<ToastContainer />
		</div>
	)
}

export default Contact