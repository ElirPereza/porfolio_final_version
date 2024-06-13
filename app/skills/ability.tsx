import { Tooltip } from '@nextui-org/react'
import React from 'react'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'

const Ability = () => {
    return (
        <div className='m-5'>
            <h2 className="flex justify-start text-xl font-bold">Skills</h2>

            <div className="max-w-md mx-auto pt-5 items-center">

                <div className="flex gap-7 mb-4">
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-base font-bold">HTML Constructer</div>
                                    <p className="text-tiny leading-snug ">
                                        Dominando la construcción de la estructura 
                                        fundamental de las páginas web
                                    </p>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full"><FaHtml5 color="orange" className="w-full h-full" /></div>
                        </Tooltip>
                        <span>Max Lvl</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">CSS Stylist</div>
                                    <div className="text-tiny ">Explorando las técnicas para dar estilo y diseño a las interfaces de usuario.</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20 rounded-full"><FaCss3Alt color="blue" className="w-full h-full" /></div>
                        </Tooltip>
                        <span>Max Lvl</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">TypeScript Trailblazer</div>
                                    <div className="text-tiny">Descubriendo el potencial de la tipificación estática y el desarrollo moderno en la web.</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full "><SiTypescript color="#0E46A3" className="w-full h-full rounded-medium" /></div>
                        </Tooltip>
                        <span>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify bg-dark">
                                    <div className="text-small font-bold">JavaScript Explorer</div>
                                    <div className="text-tiny">Navegando a través de los conceptos básicos de programación frontend para crear interactividad y dinamismo en las páginas web</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full"> <SiJavascript color="yellow" className="w-full h-full rounded-medium" /></div>
                        </Tooltip>
                        <span>lvl 4/5</span>
                    </div>
                </div>

                <div className="flex gap-5 justify-center">
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">React Mago</div>
                                    <div className="text-tiny">Dominando el arte de React para conjurar interfaces de usuario interactivas y dinámicas.</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full "><FaReact color="#61DBFB" className="w-full h-full" /></div>
                        </Tooltip>
                        <span>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">Node.js Voyager</div>
                                    <div className="text-tiny">Explorando el entorno de ejecución de Node.js para construir aplicaciones web escalables y de alto rendimiento en el lado del servidor.</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full"><FaNodeJs color="#7ABA78" className="w-full h-full" /></div>
                        </Tooltip>
                        <span>lvl 4/5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tooltip
                            content={
                                <div className="max-w-xs px-2 py-3  rounded-2xl text-justify">
                                    <div className="text-small font-bold">GIT Custodio</div>
                                    <div className="text-tiny">Protegiendo y salvaguardando los proyectos de desarrollo, velando por una colaboración armoniosa y manteniendo el orden de las versiones con diligencia utilizando Git.</div>
                                </div>
                            }
                        >
                            <div className="w-20 h-20  rounded-full"><FaGitAlt color="orange" className="w-full h-full" /></div>
                        </Tooltip>
                        <span>lvl 4/5</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ability
