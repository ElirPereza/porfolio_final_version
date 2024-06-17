import { CardFooter, Button, Card as NextUiCard, Image } from '@nextui-org/react';
import DataCrud from './crud/data';
import { ReactNode } from 'react';

type Project = {
    name: string;
    DetailsSrc: string | ReactNode;
};

const DataProjects: Project[] = [
    {
        name: "CRUD APP",
        DetailsSrc: <DataCrud />,
    },
    {
        name: "APP FINANCE MANAGEMENT MODEL",
        DetailsSrc: "",
    },
    {
        name: "Coming Soon",
        DetailsSrc: "",
    },
    {
        name: "Coming Soon",
        DetailsSrc: "",
    },
    {
        name: "Coming Soon",
        DetailsSrc: "",
    },
    {
        name: "Coming Soon",
        DetailsSrc: "",
    },
];

const Cards = () => {
    return (
        <div className=" flex-row flex-wrap flex m-6 justify-center">
            {DataProjects.map((project, index) => (
                <NextUiCard
                    key={index}
                    isFooterBlurred
                    radius="lg"
                    className=" m-4 "
                >
                    <Image
                        alt={project.name}
                        className="object-cover min-w-full item-center justify-center"
                        height={300}
                        src={"https://nextui.org/images/hero-card.jpeg"}
                        width={300}

                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="font-bold text-white/80">{project.name}</p>
                        {typeof project.DetailsSrc === 'string' ? (
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                Details
                            </Button>
                        ) : (
                            project.DetailsSrc
                        )}
                    </CardFooter>
                </NextUiCard>
            ))}
        </div>
    );
};

export default Cards;
