import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { PartsMains } from "../../../Events/Event"
import Divider from '../Divider/Divider';

function PartsMain() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        const [isStopped, setIsStopped] = useState(windowWidth > 1000);
        useEffect(() => {
                const handleResize = () => {
                        setWindowWidth(window.innerWidth);
                        if (windowWidth > 1000 && !isStopped) {
                                setIsStopped(true);
                        } else if (windowWidth <= 1000 && isStopped) {
                                setIsStopped(false);
                        }
                };

                window.addEventListener('resize', handleResize);

                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, [windowWidth, isStopped]);
        return (
                <>
                        {PartsMains.map((e, key) => (
                                isStopped ? <> <div dir={e.Direction} key={key} className="w-10/12 mx-auto mt-36 border-2 bg-gray-300 flex">
                                        <div className="w-1/2 p-10">
                                                <div className="text-center text-2xl">{e.name}</div>
                                                <div className="m-10 text-center">
                                                        {e.description}
                                                </div>
                                                <div className="text-center">
                                                        <button className='border-2 border-inherit w-1/4 h-10 rounded-lg duration-500 hover:ease-in-out hover:border-black hover:bg-black hover:text-white'>Click</button>
                                                </div>
                                        </div>
                                        <div className={`w-1/2 rotate-[5deg]`}>
                                                <Image
                                                        src={e.imageLink}
                                                        alt={`Slide ${e.imageLink}`}
                                                        className='w-full h-full'
                                                />
                                        </div>
                                </div>
                                        <Divider />
                                </>
                                        :
                                        <><div dir={e.Direction} key={key} className="w-11/12 sm:w-3/5 m-auto mt-40 border-2 bg-gray-300 ">
                                                <div className='w-full m-auto mt-5'>
                                                        <Image
                                                                src={e.imageLink}
                                                                alt={`Slide ${e.imageLink}`}

                                                                className='w-60 h-60 object-cover rounded-full m-auto'
                                                        />
                                                </div>
                                                <div className="w-full p-2 sm:p-7  m-auto">
                                                        <div className="text-center text-2xl mt-2">{e.name}</div>
                                                        <div className="mt-5 text-center">
                                                                {e.description}
                                                        </div>
                                                        <div className="text-center mt-5">
                                                                <button className='border-2 border-inherit w-1/4 h-10 rounded-lg duration-500 hover:ease-in-out hover:border-black hover:bg-black hover:text-white'>Click</button>
                                                        </div>
                                                </div>
                                        </div>
                                                <Divider />
                                        </>
                        ))}
                </>
        );
}

export default PartsMain;
