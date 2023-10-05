import React, { Dispatch, SetStateAction } from 'react';
import {
        Bars3Icon,
        XMarkIcon,
} from "@heroicons/react/24/outline";

interface HeaderDash {
        setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
        isMenuOpen:boolean;
}

function HeaderDash(props: HeaderDash) {
        
        return (
                <>
                       <div className={`bg-gray-700 text-white shadow w-full p-2 flex items-center justify-between `}>
                                <div className="flex items-center ">
                                        <div className="hidden md:flex items-center">
                                                <h2 className="font-bold text-xl text-black">WE</h2>
                                                <h2 className="font-bold text-xl">SIC</h2>
                                        </div>
                                        <div className="md:hidden flex items-center">
                                                <button
                                                        className="md:hidden flex items-center"
                                                        onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
                                                >
                                                        {props.isMenuOpen ?  <Bars3Icon height={30} width={30} /> :  <XMarkIcon height={30} width={30} />}
                                                       
                                                </button>
                                        </div>
                                </div>
                                <div className="flex items-center">
                                        <div className="space-x-1 md:flex items-center text-center">
                                                <h2 className="font-bold text-xl">Hi</h2>
                                                <h2 className="font-bold text-xl text-black">Amin</h2>
                                        </div>
                                </div>
                        </div>


                </>
        );
}

export default HeaderDash;
