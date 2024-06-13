import { title } from "@/components/others/primitives";
import DataAbout from "./data";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function AboutPage() {
	return (
		
			<div className="absolute inset-5 flex items-center justify-center md:p-10 animate-fade-right">
				<div className="flex items-center justify-center w-full h-full relative">

					<div className="relative flex h-full w-2/6 justify-center items-center">
						<Image src="/card_stats.jpg" className="recortar-imagen" width={415} height={140} alt="Card Stats" />
						<div className="absolute inset-0 contrast-200" style={{
							backgroundImage: "url('frame.png')",
							backgroundPosition: 'center',
							backgroundSize: '146%'
						}} />
					</div>

					<div className="flex-col w-2/6 justify-center">

						<div className='flex h-full py-4 justify-center'>
							<h1 className={title({ size: 'md', color: "yellow", })}>About Me...</h1>
						</div>
						<p className="text-lg pb-3">
							I am Jesus, an electronics engineer from Universidad de la Costa with a strong programming background.
							I am passionate about programming and aspire to make meaningful contributions to the world of technology.
							My focus lies in harnessing online resources to craft sophisticated solutions for intricate problems.
							I am continuously learning and eagerly embrace new challenges in my field.
							My goal is to nurture and expand my skills, evolving into a developer capable of innovating solutions that bring positive change to the world.
						</p>

						<DataAbout />

					</div>

				</div>
			</div>
	);
}
