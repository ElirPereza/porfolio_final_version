import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { GithubIcon, Vlogo } from "@/components/icons";

export default function DataBnk() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm"
                onPress={onOpen}>
                Details
            </Button>
            <Modal size="5xl"  isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                                    <div className="flex items-center gap-2" >
                                                        <Vlogo width={10} height={10} />
                                                        View Deploy
                                                    </div>
                                                </Chip>
                                                <Chip color="warning" variant="faded">
                                                    <div className="flex items-center gap-2">
                                                        <GithubIcon width={10} height={10} />
                                                        View Code
                                                    </div>
                                                </Chip>
                                            </div>

                                            <h1 className="py-1 text-lg font-bold">Technologies</h1>

                                            <div className="flex-none sm:flex sm:gap-2 gap-1">
                                                <Chip>1231s231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
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