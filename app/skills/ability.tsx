import { Tooltip } from '@nextui-org/react'
import React from 'react'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'

const Ability = () => {
    return (
        <div className='m-5 '>
            <h2 className="flex justify-start text-xl font-bold">Skills</h2>

            <div className="max-w-md mx-auto pt-5 items-center">

                <div className="sm:flex sm:gap-7 sm:mb-4 flex gap-3 justify-center">
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify ">
                                    <div className="text-base font-bold">HTML Constructer</div>
                                    <p className="text-tiny leading-snug ">
                                        Mastering the construction of the fundamental structure of web pages
                                    </p>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full"><FaHtml5 color="orange" className="w-full h-full" /></div>
                        </Tooltip>
                        <span className='font-bold'>Max Lvl</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">CSS Stylist</div>
                                    <div className="text-tiny ">
                                        Exploring techniques for styling and designing user interfaces.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full"><FaCss3Alt color="blue" className="w-full h-full" /></div>
                        </Tooltip>
                        <span className='font-bold'>Max Lvl</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">TypeScript Trailblazer</div>
                                    <div className="text-tiny">
                                        Discovering the potential of static typing and modern web development.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full "><SiTypescript color="#0E46A3" className="w-full h-full rounded-medium" /></div>
                        </Tooltip>
                        <span className='font-bold'>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify bg-dark">
                                    <div className="text-small font-bold">JavaScript Explorer</div>
                                    <div className="text-tiny">
                                        Navigating through the basics of frontend programming to create interactivity and dynamism in web pages.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full"> <SiJavascript color="yellow" className="w-full h-full rounded-medium" /></div>
                        </Tooltip>
                        <span className='font-bold'>lvl 4/5</span>
                    </div>
                </div>

                <div className="sm:flex sm:gap-5 sm:justify-center justify-center gap-3 p-3 flex">
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">React Mago</div>
                                    <div className="text-tiny">
                                        Mastering the art of React to conjure interactive and dynamic user interfaces.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full "><FaReact color="#61DBFB" className="w-full h-full" /></div>
                        </Tooltip>
                        <span className='font-bold'>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">Node.js Voyager</div>
                                    <div className="text-tiny">
                                        Exploring the Node.js runtime environment to build scalable and high-performance web applications on the server side.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full"><FaNodeJs color="#7ABA78" className="w-full h-full" /></div>
                        </Tooltip>
                        <span className='font-bold'>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            className='dark'
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">GIT Custodio</div>
                                    <div className="text-tiny">
                                        Protecting and safeguarding development projects, ensuring harmonious collaboration, and diligently maintaining version control with Git.
                                    </div>
                                </div>
                            }
                        >
                            <div className="sm:w-20 sm:h-20 w-16 h-16  rounded-full"><FaGitAlt color="orange" className="w-full h-full" /></div>
                        </Tooltip>
                        <span className='font-bold'>lvl 4/5</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ability
