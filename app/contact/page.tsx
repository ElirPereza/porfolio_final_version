import { title } from "@/components/others/primitives";
import { Button, Card, Input, Textarea } from "@nextui-org/react";
import { BiSend } from "react-icons/bi";

export default function ContactPage() {
	return (

		<section className="absolute inset-5 flex flex-col items-center justify-center md:p-10 ">

			<div className="flex gap-10 items-center justify-center w-full h-full relative">

				<Card className="w-2/6 h-full hidden lg:block ">
					<figure  className="flex  h-full w-full">
						<iframe
							className="w-full h-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62667.48133567827!2d-74.85917471551419!3d10.98467658924206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1718217933638!5m2!1ses!2sco"
							width="600" height="780" loading="eager"></iframe>
					</figure>
				</Card>

				<div className="flex-col lg:w-2/6 w-full">

					<h1 className={title({ size: 'md', color: "pink" })}>Contact Me</h1>

					<form action="#" className="gap-5 flex flex-col h-[70%]  justify-center m-5" >

						<Input type="text" placeholder="Full name" />
						<Input type="email" placeholder="Email address" />
						<Textarea
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
