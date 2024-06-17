import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link.js";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/components/others/site";
import clsx from "clsx";
import SwitchTheme from "@/components/switch-theme";
import { Logo, DiscordIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo  />
						<p className="font-bold text-inherit ">JMAL</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex  xl:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden lg:flex basis-1/5 lg:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex gap-2">
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-lg font-normal text-default-600 bg-default-100"
						startContent={<HeartFilledIcon className="text-danger " />}
						variant="flat"
					>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<NavbarMenuToggle />
			</NavbarContent>



			<NavbarMenu className="bg-transparent">
				<div className="mx-4  mt-2 flex flex-col  gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								color={'foreground'}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>


			
		</NextUINavbar>

	);
};
