import { Progress } from '@nextui-org/react'
import React from 'react'

const Stats = () => {
    return (
        <div className='m-5'>
            <h2 className="flex justify-start text-xl font-bold">Stats</h2>
            <div className="flex w-full " >
                <div className="w-1/2 h-full">
                    <Progress
                        size="md"
                        radius="full"
                        classNames={{
                            base: "max-w-lg",
                            track: "drop-shadow- border border-default h-1.5",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500 overflow-hidden ",
                            label: "tracking-wider font-medium text-white-600",
                        }}
                        label="Creative"
                        value={70}
                        showValueLabel={true}
                        className="p-2.5"
                    />
                    <Progress
                        size="md"
                        radius="full"
                        classNames={{
                            base: "max-w-lg",
                            track: "drop-shadow- border border-default h-1.5",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500 overflow-hidden ",
                            label: "tracking-wider font-medium text-white-600",
                        }}
                        label="Agility"
                        value={70}
                        showValueLabel={true}
                        className="p-2.5"
                    />
                </div>

                <div className="w-1/2 inset-5">
                    <Progress
                        size="md"
                        radius="full"
                        classNames={{
                            base: "max-w-lg",
                            track: "drop-shadow- border border-default h-1.5",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500 overflow-hidden ",
                            label: "tracking-wider font-medium text-white-600",
                        }}
                        label="Comunication"
                        value={70}
                        showValueLabel={true}
                        className="p-2.5"
                    />
                    <Progress
                        size="md"
                        radius="full"
                        classNames={{
                            base: "max-w-lg",
                            track: "drop-shadow- border border-default h-1.5",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500 overflow-hidden ",
                            label: "tracking-wider font-medium text-white-600",
                        }}
                        label="Dinamic"
                        value={70}
                        showValueLabel={true}
                        className="p-2.5"
                    />
                </div>




            </div>
        </div>
    )
}

export default Stats
