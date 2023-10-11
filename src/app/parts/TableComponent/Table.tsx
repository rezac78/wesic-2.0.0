import React, { useEffect, useState } from 'react';
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { DeletedSong, GetAllSong } from '@/app/api/dashboard';
import Toast from '../Toast/Toast';
import HeaderTable from '../HeaderTable/HeaderTable';
import { HeaderTableSinger } from "../../../Events/Event"

interface Song {
    _id: string;
    name: string;
    bio: string;
    coverPhoto: string;
}

const TableComponent = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const fetchedSongs = await GetAllSong();
            setSongs(fetchedSongs || []);
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!songs?.length) return <p>No songs available.</p>;

    const handleDelete = async (songId: string) => {
        try {
            await DeletedSong(songId); // Assuming DeletedSong returns a promise that deletes a song
            setToastType("success");
            setShowToast(true);
            setToastMessage("Delete Successful");

            fetchData(); // Fetch the data again after successfully deleting a song
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
            <HeaderTable Data={HeaderTableSinger} />
            <tbody>
                {songs.map((song: Song, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="py-2 px-3 border-b border-gray-200">{song.name}</td>
                        <td className="py-2 px-3 border-b border-gray-200">{song.bio}</td>
                        <td className="py-2 px-3 border-b border-gray-200">
                            <img src={`http://localhost:3001/uploads/covers/${song.coverPhoto}`} alt={song.name} width="100" height="50" />
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
