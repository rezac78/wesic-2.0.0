"use client"
import { useState } from 'react';
import {
        HomeIcon,
        UserIcon,
        PlayCircleIcon,
        PuzzlePieceIcon,
        Bars3Icon,
        XMarkIcon,
} from "@heroicons/react/24/outline";
import { navbar } from "@/Events/Event"
import Search from '@/app/parts/search/search';

function Navbar() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
                <>

                        {!isMenuOpen ? (
                                <nav className="bg-bg-Navbar p-4 shadow-md w-10/12 m-auto rounded-full">
                                        <div className="">
                                                <div className="flex justify-between md:justify-around  items-center">
                                                        <div className="text-white font-semibold text-xl sm:text-2xl">WESIC</div>
                                                        <div className={`flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                                                                {navbar.slice(6).map((e, key) => (
                                                                        <a href={e.Link} className="text-white hover:text-gray-200 transition"><e.icon height={25} width={25} /></a>
                                                                ))}
                                                                {navbar.slice(0, 6).map((e, key) => (
                                                                        <a href={e.Link} className="text-white mt-1 hover:text-gray-200 transition">{e.name}</a>
                                                                ))}
                                                        </div>
                                                        <div className="hidden md:flex">
                                                                <Search />
                                                        </div>

                                                        <button
                                                                className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200 transition"
                                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                        >
                                                                <Bars3Icon height={20} width={20} />
                                                        </button>
                                                </div>
                                        </div>
                                </nav>

                        ) : <nav className="md:hidden bg-bg-Navbar p-4 m-auto rounded  w-10/12 ">
                                <button
                                        className="md:hidden flex ml-auto  px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200 transition"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                        <XMarkIcon height={20} width={20} />
                                </button>
                                <div className=" flex flex-col items-center space-y-2 mt-2">
                                        <a href="#" className="text-white hover:text-gray-200 transition"><HomeIcon height={30} width={30} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><UserIcon height={30} width={30} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><PlayCircleIcon height={30} width={30} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><PuzzlePieceIcon height={30} width={30} /></a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">Tradition</a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">pop</a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">IranPop</a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">FilmMusic</a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">MusicVideo</a>
                                        <a href="#" className="text-xl text-white hover:text-gray-200 transition">Study</a>
                                        <Search />
                                </div>
                        </nav>}
                </>
        );
}

export default Navbar;
