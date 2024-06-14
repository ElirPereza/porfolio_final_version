// import { title } from "@/components/primitives";
import Pj from "./pj";
import Stats from "./stats";
import Ability from "./ability";
import Image from "next/image";

export default function SkillPage() {
	return (
		<section className="absolute inset-5 flex items-center justify-center md:p-10 animate-fade-left">
			<div className="sm:flex items-center justify-center w-full h-full ">

				<div className=" sm:flex-col sm:w-2/6 ">
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

				<div className="sm:mt-0 sm:w-auto sm:block hidden cut">
					<Image
						src="/pjframe.png"
						width={400}
						height={400}
						style={{ objectFit: "contain" }}
						alt="Frame"
						className="sm:w-auto sm:h-auto w-full h-full "
					/>
				</div>
			</div>
		</section>


	);

}
