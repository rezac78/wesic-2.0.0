import React from 'react';
import LOGO from "../../../../public/LOGO.png"
import Image from 'next/image';

function Footer() {
        return (
                <footer className="bg-bg-Navbar text-white py-2">
                        <div className="container mx-auto px-4 block text-center sm:flex items-center justify-between">
                                <div className="flex items-center">
                                        <Image src={LOGO} alt="Logo" style={{"margin":"auto"}} className="h-16 w-auto mr-2 rotate-[-10deg]" />
                                </div>
                                <div>
                                        <span className="text-xl font-semibold">WESIC</span>
                                </div>
                                <div>
                                        <span>Established 2019 - {new Date().getFullYear()}</span>
                                </div>

                        </div>
                </footer>

        );
}

export default Footer;
