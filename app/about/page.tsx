import { title } from "@/components/others/primitives";
import DataAbout from "./data";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="absolute inset-5 flex items-center justify-center animate-fade-right overflow-auto pt-70'p ">
			<div className="flex flex-col lg:flex-row items-center justify-center w-full h-full lg:gap-20 2xl:w-auto 2xl:h-auto">
				<div className="mt-24 lg:mt-0 lg:w-auto w-56 sm:pt-0 lg:pt-0 pt-44 cut">
					<Image
						src="/pjframe.png"
						width={400}
						height={400}
						style={{ objectFit: "contain" }}
						alt="Frame"
						className="lg:w-auto lg:h-auto w-full h-full  "
					/>
				</div>
				<div className="flex flex-col lg:w-2/6 w-full justify-center">
					<div className="flex h-full py-4 justify-center">
						<h1 className={title({ size: 'md', color: "yellow" })}>About Me...</h1>
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
