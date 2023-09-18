"use client"
import { useState } from 'react';
import {
        HomeIcon,
        UserIcon,
        PlayCircleIcon,
        PuzzlePieceIcon,
        Bars3Icon,
} from "@heroicons/react/24/outline";
import { navbar } from "@/Events/Event"
import Search from '../search/search';

function Navbar() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
                <nav className="bg-bg-Navbar p-4 shadow-md w-10/12 m-auto rounded-full">
                        <div className="container mx-auto">
                                <div className="flex justify-between items-center">
                                        <div className="text-white font-semibold text-xl">WESIC</div>

                                        <div className={`flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                                                {navbar.map((e, key) => (
                                                        <a href={e.Link} className="text-white hover:text-gray-200 transition">{e.name !== "Home" ? e.name : <e.icon height={20} width={20} />}</a>
                                                ))}
                                                <Search/>
                                        </div>

                                        <button
                                                className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200 transition"
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                                <Bars3Icon height={20} width={20} />
                                        </button>
                                </div>
                        </div>
                        {isMenuOpen && (
                                <div className="md:hidden flex flex-col space-y-2 mt-2">
                                        <a href="#" className="text-white hover:text-gray-200 transition">Tradition</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition">pop</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition">IranPop</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition">FilmMusic</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition">MusicVideo</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition">Study</a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><HomeIcon height={20} width={20} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><UserIcon height={20} width={20} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><PlayCircleIcon height={20} width={20} /></a>
                                        <a href="#" className="text-white hover:text-gray-200 transition"><PuzzlePieceIcon height={20} width={20} /></a>
                                </div>
                        )}
                </nav>
        );
}

export default Navbar;
