import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/components/others/site";
import { title, subtitle } from "@/components/others/primitives";
import { GithubIcon } from "@/components/icons";
import { Textarea } from "@nextui-org/input";

export default function Home() {
	return (
		<section className="flex flex-col h-[100%] items-center justify-center gap-4 py-2 md:py-10 animate-ping animate-once animate-reverse" >
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({size:'md'})}>Hey&nbsp;</h1>
				<h1 className={title({size:'md', color: "violet",})}>There!!&nbsp;</h1>
				<br />
				<br />
				<h1 className={title({size:'lg'})}>
					I&apos;m David
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Welcome to my digital portfolio, where creativity meets innovation. Explore my world of possibilities...
				</h2>
			</div>

			<div className="flex ">
				<Link
					isExternal
					className={buttonStyles({ variant: "solid", radius: "full", color: "primary" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-10 flex w-[40%] h-[30%] text-4xl ">
				<Textarea
					label="Come back when you finish watching and leave a comment"
					placeholder="Enter your description"
					className=" justify-center items-center text-7xl "
					variant="flat"
					
				/>
			</div>

		</section>
	);
}
