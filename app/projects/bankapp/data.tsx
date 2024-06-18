import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";
import Carousel from "@/components/carousel";
import { GithubIcon, Vlogo } from "@/components/icons";
import { AxiosIcon, CssIcon, ExpressIcon, MongoIcon, Nextjs, NodeIcon, ReactHookForm, ReactIcon, ReactQuery, ShadcnIcon, SupaIcon, TailwindIcon, TypescriptIcon, ZustandIcon } from "@/components/tecnoicons";
import Link from "next/link";


const images = [
    '/bank_1.png',
    '/bank_2.png',
    '/bank_3.png',
    '/bank_5.png',
    '/bank_6.png',
    '/bank_7.png',
    '/bank_8.png', 
  ];
export default function DataBnk() {
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
                            <ModalHeader className="flex gap-1">APP FINANCE MANAGEMENT MODEL</ModalHeader>
                            <ModalBody className="flex-col">

                                <div className="sm:flex-col">
                                    <div className="flex-col sm:flex sm:flex-row w-full sm:pb-5 gap-5 ">

                                        <div className="sm:w-1/2  flex items-center">
                                            <Carousel images={images} />
                                        </div>

                                        <div className="sm:w-1/2 p-2 items-start">
                                            <div className="flex gap-3">
                                                <Chip color="warning" variant="faded">
                                                    <Link href={'https://bank-app-master-f.vercel.app/auth/login'} target="_blank" className="flex items-center gap-2" >
                                                        <Vlogo width={10} height={10} />
                                                        View Deploy
                                                    </Link>
                                                </Chip>
                                                <Chip color="warning" variant="faded">
                                                    <Link href={'https://github.com/ElirPereza/Model_Bank_app.git'} target="_blank" className="flex items-center gap-2">
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
                                                <Chip className="bg-[#1572B6]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <CssIcon width={8} height={8} className="" />
                                                        CSS
                                                    </div>
                                                </Chip>
                                                <Chip className="bg-[#3FCF8E]">
                                                    <div className="flex gap-2 font-bold items-center">
                                                        <SupaIcon width={8} height={8} />
                                                        SupaBase
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
                                                <Chip className="bg-[#66459B]">
                                                    <div className="flex font-bold items-center">
                                                        <AxiosIcon width={8} height={8} />
                                                        Axios
                                                    </div>
                                                </Chip>

                                            </div>
                                            <h1 className="pt-8 text-lg font-bold">Description</h1>
                                            <div className="p-2 text-justify">
                                            I developed banking application using modern technologies such as Supabase, React, Next.js, and Tailwind CSS. 
                                            This application includes user registration and login functionalities,as well as a well-designed user 
                                            interface for managing bank accounts, making transfers, and viewing transaction history.
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