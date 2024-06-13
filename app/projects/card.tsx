import { CardFooter, Button, Card as NextUiCard, Image } from '@nextui-org/react'
import DataCrud from './crud/data'

const Cards = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex p-3 gap-8 justify-center '>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="font-bold text-white/80">CRUD APP</p>
                        <DataCrud/>
                    </CardFooter>
                </NextUiCard>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Model bank App</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </NextUiCard>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </NextUiCard>
            </div>

            <div className='flex p-3 gap-16 '>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </NextUiCard>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </NextUiCard>
                <NextUiCard
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={300}
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </NextUiCard>

            </div>

        </div>
    )
}

export default Cards
