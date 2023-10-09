import HeaderDash from '@/app/parts/HeaderDash/HeaderDash';
import Sidebar from '@/app/parts/Sidebar/Sidebar';
import React from 'react';

const Dashboard: React.FC = () => {
        return (
                <div className="flex flex-col h-screen">
                        <div className="bg-gray-700 text-white shadow w-full p-2 flex items-center justify-between">
                                <HeaderDash  />
                        </div>
                        <div className="flex-1 flex ">
                                <Sidebar />
                                <div className="flex-1 p-4 bg-gray-800"></div>
                        </div>
                </div>

        );
};

export default Dashboard;
