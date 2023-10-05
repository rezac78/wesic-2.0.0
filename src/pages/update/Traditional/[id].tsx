
import { GetOneSong } from '@/app/api/dashboard';
import FormUpload from '@/app/parts/FormUpload/FormUpload';
import HeaderDash from '@/app/parts/HeaderDash/HeaderDash';
import Sidebar from '@/app/parts/Sidebar/Sidebar.1';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



export default function Transition() {
    const [activeTab, setActiveTab] = useState('create');
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (id) {
            GetOneSong({ songId: setSongs, id })
        }
    }, [id]);
    console.log(songs)
    return (
        <div className="flex flex-col h-screen ">
            <div className="bg-gray-700 text-white shadow w-full p-2 flex items-center justify-between">
                <HeaderDash />
            </div>
            <div className="flex-1 flex ">
                <Sidebar />
                <div className="flex-1 p-4 bg-gray-800">
                    <div className="flex p-4 bg-gray-800">
                        <button
                            className={`p-2 ${activeTab === 'create' ? 'bg-gray-600' : ''}`}
                            onClick={() => setActiveTab('create')}
                        >
                            Update Song
                        </button>
                    </div>
                    <div className="flex-1 p-4 bg-gray-800">
                        <FormUpload />
                    </div>

                </div>
            </div>
        </div>
    );
}
