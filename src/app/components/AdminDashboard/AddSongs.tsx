
import FormUpload from '@/app/parts/FormUpload/FormUpload';
import HeaderDash from '@/app/parts/HeaderDash/HeaderDash';
import Sidebar from '@/app/parts/Sidebar/Sidebar';
import TableComponent from '@/app/parts/TableComponent/Table';
import React, { useEffect, useState } from 'react';



export default function AddSongs() {
        const [activeTab, setActiveTab] = useState('create');
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [windowWidth, setWindowWidth] = useState(
                typeof window !== 'undefined' ? window.innerWidth : 1169
        );

        useEffect(() => {
                if (typeof window === 'undefined') {
                        return;
                }

                const handleResize = () => {
                        const currentWindowWidth = window.innerWidth;
                        setWindowWidth(currentWindowWidth);

                        setIsMenuOpen((prevIsMenuOpen) => {
                                if (currentWindowWidth < 1169 && !prevIsMenuOpen) {
                                        return true;
                                } else if (currentWindowWidth >= 1169 && prevIsMenuOpen) {
                                        return false;
                                }
                                return prevIsMenuOpen;
                        });
                };

                window.addEventListener('resize', handleResize);

                handleResize();

                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);
        return (
                <div className="flex flex-col h-screen ">
                        <div className="bg-gray-700 text-white shadow w-full p-2 flex items-center justify-between">
                                <HeaderDash setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                        </div>
                        <div className={`mdl:flex-1 mdl:flex ${isMenuOpen ? '' : ''}`}>
                                <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                                <div className="flex-1 sm:p-4 bg-gray-800">
                                        <div className="flex p-4 bg-gray-800">
                                                <button
                                                        className={`p-2 ${activeTab === 'create' ? 'bg-gray-600' : ''}`}
                                                        onClick={() => setActiveTab('create')}
                                                >
                                                        Create Song
                                                </button>
                                                <button
                                                        className={`p-2 ${activeTab === 'display' ? 'bg-gray-600' : ''}`}
                                                        onClick={() => setActiveTab('display')}
                                                >
                                                        Display Songs
                                                </button>
                                        </div>
                                        <div className="flex-1 sm:p-4 bg-gray-800">
                                                {activeTab === 'create' && (
                                                        <FormUpload />
                                                )}
                                                {activeTab === 'display' && (
                                                        <TableComponent />
                                                )}
                                        </div>

                                </div>
                        </div>
                </div>
        );
}
