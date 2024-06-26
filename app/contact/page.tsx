'use client'
import { title } from "@/components/others/primitives";
import { Button, Card, Input, Textarea } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiSend } from "react-icons/bi";


interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactPage() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [status, setStatus] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus('Sending...');

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const responseData = await response.json(); // Si tu API devuelve JSON, parsea la respuesta

			if (response.ok) {
				setStatus('Failed to send message.');
				toast.error(`Failed to send the message`, {
					style: {
						borderRadius: '10px',
						background: '#cc0000',
						color: '#fff',
					},
				});
				setFormData({ name: '', email: '', subject: '', message: '' });
			} else {
				throw new Error(responseData.message || 'Failed to send message.');
			}
		} catch (error) {
			setStatus('Message sent successfully!');
			toast.success('The message was sent.', {
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			});
		}
	};



	return (
		<section className="absolute inset-5 flex flex-col items-center justify-center md:p-10 ">

			<div className="flex gap-10 items-center justify-center w-full h-full relative">
				<Toaster />
				<Card className="w-2/6 h-full hidden lg:block ">
					<figure className="flex  h-full w-full">
						<iframe
							className="w-full h-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62667.48133567827!2d-74.85917471551419!3d10.98467658924206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1718217933638!5m2!1ses!2sco"
							width="600" height="780" loading="eager"></iframe>
					</figure>
				</Card>

				<div className="flex-col lg:w-2/6 w-full">

					<h1 className={title({ size: 'md', color: "pink" })}>Contact Me</h1>

					<form onSubmit={handleSubmit} className="gap-5 flex flex-col h-[70%]  justify-center m-5" >

						<Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Full name" />
						<Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
						<Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
						<Textarea
							id="message"
							value={formData.message} onChange={handleChange}
							label="your message"
							variant="faded"
							placeholder="Enter your description"
							disableAnimation
							disableAutosize
							classNames={{
								base: "w-full",
								input: "resize-y min-h-[40px]",
							}}
						/>

						<Button type="submit" >
							<BiSend />
							Send Message
						</Button>

					</form>
				</div>


			</div>


		</section>
	);
}
