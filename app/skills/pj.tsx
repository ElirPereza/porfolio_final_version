'use server'
import { Progress } from '@nextui-org/react';
import React from 'react'
import { FaCode } from 'react-icons/fa';

const Pj = () => {

    return (
        <div className=' flex w-full h-full flex-col m-5 justify-center items-center '>

            <div className='flex w-52 gap-4 justify-center '>
                <div className='flex bg-black items-center justify-center rounded-full w-16 h-16 '>
                    <FaCode color='white' size={30}/>
                </div>
                <div >
                    <h1 className='font-bold text-3xl'>ELIR DEV</h1>
                    <h1 className='font-bold'>Front End</h1>
                </div>

            </div>

            <div className="flex w-full justify-center">
                <h1 className=" text-2xl items-end flex w-[8%] bottom-[-3] ">Exp</h1>
                <Progress
                    size="md"
                    radius="full"
                    classNames={{
                        base: "max-w-lg",
                        track: "drop-shadow- border border-default h-1.5",
                        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500 overflow-hidden ",
                        label: "tracking-wider font-medium text-white-600",
                    }}
                    label="Lvl 10/30"
                    value={80}
                    showValueLabel={true}
                    className="p-2.5"
                />
            </div>
        </div>
    );
}

export default Pj
