import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { GithubIcon, Vlogo } from "@/components/icons";
import { IconBase } from "react-icons";
import { ExpressIcon, MongoIcon, Nextjs, NodeIcon, ReactHookForm, ReactIcon, ReactQuery, ShadcnIcon, TailwindIcon, TypescriptIcon, ZustandIcon } from "@/components/tecnoicons";
import Link from "next/link";

export default function DataCrud() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm"
                onPress={onOpen}>
                Details
            </Button>
            <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange} className="dark text-white">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-1">CRUD APP</ModalHeader>
                            <ModalBody className="flex-col">

                                <div className="sm:flex-col">
                                    <div className="flex-col sm:flex sm:flex-row w-full sm:pb-5 gap-5 ">

                                        <div className="sm:w-1/2 ">
                                            <Carousel />
                                        </div>

                                        <div className="sm:w-1/2 p-2 items-start">
                                            <div className="flex gap-3">
                                                <Chip color="warning" variant="faded">
                                                    <Link href={'https://crud-app-zeta-ashy.vercel.app/'} className="flex items-center gap-2" >
                                                        <Vlogo width={10} height={10} />
                                                        View Deploy
                                                    </Link>
                                                </Chip>
                                                <Chip color="warning" variant="faded">
                                                    <Link href={'https://github.com/ElirPereza/Crud-App.git'} className="flex items-center gap-2">
                                                        <GithubIcon width={10} height={10} />
                                                        View Code
                                                    </Link>
                                                </Chip>
                                            </div>

                                            <h1 className="py-1 text-lg font-bold">Technologies</h1>

                                            <div className="gap-1 flex-wrap flex">
                                                <Chip className="bg-[#3178C6]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <TypescriptIcon width={8} height={8} />
                                                        TypeScript
                                                    </div>
                                                </Chip>

                                                <Chip className="bg-[#61DAFB]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ReactIcon width={8} height={8} />
                                                        React
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#FF4154]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ReactQuery width={8} height={8} />
                                                        React Query
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#EC5990]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ReactHookForm width={8} height={8} />
                                                        React Hook Form
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#000000]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <Nextjs width={8} height={8} className="bg-white rounded-full"/>
                                                        Next JS
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#06B6D4]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <TailwindIcon width={8} height={8} />
                                                        Tailwind
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#5FA04E]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <NodeIcon width={8} height={8} />
                                                        Node
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#000000]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ExpressIcon width={8} height={8} className="bg-white rounded-xl" />
                                                        Express
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#47A248]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <MongoIcon width={8} height={8} />
                                                        MondoDB
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#000000]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ShadcnIcon width={8} height={8} className="bg-white rounded-xl " />
                                                        ShadCN
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#66459B]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <ZustandIcon width={500} height={500} />
                                                        Zustand
                                                    </div>
                                                </Chip>

                                            </div>
                                            <h1 className="pt-8 text-lg font-bold">Description</h1>
                                            <div className="p-2 text-justify">

                                                This project is a CRUD (Create, Read, Update, Delete) application developed to showcase skills in modern web development.
                                                The application allows users to manage data through an intuitive and functional interface,
                                                incorporating advanced search features for a better user experience.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

