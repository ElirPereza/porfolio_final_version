import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { GithubIcon, Vlogo } from "@/components/icons";

export default function DataCrud() {
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

                                <div className="flex-col">
                                    <div className="flex gap-5">
                                        <div className="w-1/2">
                                            <Carousel />
                                        </div>
                                        <div className="w-1/2">
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

                                            <h1 className="p-4 text-lg font-bold">Technologies</h1>
                                            <div className="flex gap-2 m-2">
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                                <Chip>1231231</Chip>
                                            </div>
                                            <div className="p-4 text-justify">
                                                This project is a CRUD (Create, Read, Update, Delete) application developed to showcase skills in modern web development.
                                                The application allows users to manage data through an intuitive and functional interface,
                                                incorporating advanced search features for a better user experience.
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

