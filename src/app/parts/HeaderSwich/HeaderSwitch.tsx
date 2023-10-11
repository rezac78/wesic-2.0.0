import React from 'react';
interface HeaderSwitch {
        activeTab: string;
        setActiveTab: (newTab: string) => void;
        TitleSong: string;
        TitleSongs: string;
}
const HeaderSwitch = (props: HeaderSwitch) => {
        return (
                <div className="flex p-4 bg-gray-800">
                        <button
                                className={`p-2 ${props.activeTab === 'create' ? 'bg-gray-600' : ''}`}
                                onClick={() => props.setActiveTab('create')}
                        >
                                {props.TitleSong}
                        </button>
                        <button
                                className={`p-2 ${props.activeTab === 'display' ? 'bg-gray-600' : ''}`}
                                onClick={() => props.setActiveTab('display')}
                        >
                                {props.TitleSongs}
                        </button>
                </div>
        );
};

export default HeaderSwitch;
