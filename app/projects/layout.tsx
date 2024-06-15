export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4  ">
			<div className="inline-block w-full h-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
