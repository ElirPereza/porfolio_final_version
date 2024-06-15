'use client'
import { title } from "@/components/others/primitives";
import Cards from "./card";
export default function ProjectPage() {

	return (

		<div className="m-4 sm:overflow-hidden overflow-auto h-screen pb-40">
			<div className="">
				<h1 className={title({ color: "cyan", size: "md", className: "" })}>Projects</h1>
			</div>
			<div className="">
				<Cards />
			</div>
		</div>


	);
}
