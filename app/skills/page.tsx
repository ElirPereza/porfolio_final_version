// import { title } from "@/components/primitives";
import Pj from "./pj";
import Stats from "./stats";
import Ability from "./ability";
import Image from "next/image";

export default function SkillPage() {
	return (
		<section className="absolute inset-5 flex items-center justify-center md:p-10 animate-fade-left">
			<div className="lg:flex items-center justify-center w-full h-full lg:gap-20 ">

				<div className=" lg:flex-col lg:w-2/6 ">
					<div className='flex h-full text-white '>
						<Pj />
					</div>

					<div className="text-white"> 
						<Stats />
					</div>

					<div className="text-white ">
						<Ability />
					</div>
				</div>

				<div className="mt-24 hidden lg:block lg:mt-0 lg:w-auto w-56 sm:pt-0 lg:pt-0 pt-44 cut">
					<Image
						src="/pjframe.png"
						width={400}
						height={400}
						style={{ objectFit: "contain" }}
						alt="Frame"
						className="lg:w-auto lg:h-auto w-full h-full  "
					/>
				</div>
			</div>
		</section>


	);

}
