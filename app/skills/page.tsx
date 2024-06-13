// import { title } from "@/components/primitives";
import Pj from "./pj";
import Stats from "./stats";
import Ability from "./ability";
import Image from "next/image";

export default function SkillPage() {
	return (
		<section className="absolute inset-5 flex items-center justify-center md:p-10  animate-fade-left">
			<div className="flex items-center justify-center w-full h-full relative">

				<div className="flex-col w-2/6">
					<div className='flex h-full text-white '>
						<Pj />
					</div>

					<div className="text-white"> 
						<Stats />
					</div>

					<div className="text-white">
						<Ability />
					</div>
				</div>

				<div className="relative flex h-full w-2/6 justify-center items-center">
					<Image src="/card_stats.jpg" className="recortar-imagen" width={415} height={140} alt="Card Stats" />
					<div className="absolute inset-0 contrast-200" style={{
						backgroundImage: "url('frame.png')",
						backgroundPosition: 'center',
						backgroundSize: '146%'
					}} />
				</div>
			</div>
		</section>


	);

}
