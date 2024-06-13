'use client'
import { title } from "@/components/others/primitives";
import Cards from "./card";
import Carousel from "@/components/carousel";
export default function ProjectPage() {

	return (
		<div className=" flex flex-col h-full justify-center items-center ">
			<h1 className={title({color:"cyan"})}>Projects</h1>
			<Cards/>
		</div>
	);
}
