import { title } from "@/components/others/primitives";
import DataAbout from "./data";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function AboutPage() {
	return (

		<div className="absolute inset-5 flex sm:items-center sm:justify-center animate-fade-right ">
			<div className="flex sm:flex-row flex-col items-center justify-center w-full h-full sm:gap-20 overflow-auto ">

				<div className="sm:mt-0 sm:w-auto w-56 mt-96 cut">
					<Image
						src="/pjframe.png"
						width={400}
						height={400}
						style={{ objectFit: "contain" }}
						alt="Frame"
						className="sm:w-auto sm:h-auto w-full h-full "
					/>
				</div>

				<div className="flex flex-col sm:w-2/6 w-full justify-center">
					<div className="flex h-full py-4 justify-center">
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
