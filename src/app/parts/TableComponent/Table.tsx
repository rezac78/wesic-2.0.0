import React, { useEffect, useState } from 'react';
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { DeletedSong, GetAllSong } from '@/app/api/dashboard';
import Toast from '../Toast/Toast';

const TableComponent = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                GetAllSong(setSongs)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!songs.length) return <p>No songs available.</p>;

    const handleDelete = async (songId: string) => {
        try {
            DeletedSong(songId)
            setToastType("success");
            setShowToast(true);
            setToastMessage("Delete SuccessFull");
        } catch (error) {
            setToastType("error");
            setShowToast(true);
            setToastMessage("Delete Failed");
        }
    };

    const handleEdit = (song) => {
        // Navigate to edit page or open a modal to edit the song details
    };

    return (
        <table className="min-w-full bg-white">
            {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
            <thead>
                <tr>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Singer Name</th>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Song Name</th>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Song Type</th>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Cover Photo</th>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Song File</th>
                    <th className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Options</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="py-2 px-3 border-b border-gray-200">{song.singerName}</td>
                        <td className="py-2 px-3 border-b border-gray-200">{song.songName}</td>
                        <td className="py-2 px-3 border-b border-gray-200">{song.songType}</td>
                        <td className="py-2 px-3 border-b border-gray-200">
                            <img src={`http://localhost:3001/uploads/covers/${song.coverPhoto}`} alt={song.songName} width="100" height="50" />
                        </td>
                        <td className="py-2 px-3 border-b border-gray-200">
                            <audio controls>
                                <source src={`http://localhost:3001/uploads/songs/${song.songFile}`} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </td>
                        <td className="flex m-5">
                            <button onClick={() => handleDelete(song._id)}><TrashIcon className='' height={20} width={20} /></button>
                            <a href={`/update/Traditional/${song._id}`}><PencilIcon className='' height={20} width={20} /></a>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
