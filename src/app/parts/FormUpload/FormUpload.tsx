// pages/uploadSong.tsx
import { Dashboard } from '@/app/api/dashboard';
import React, { useState } from 'react';
import { InputFormUpload } from "../../../Events/Event"
import InputsFile from '../InputFile/InputFile';

const UploadSong = () => {
        const [formData, setFormData] = useState({
                songName: '',
                singerName: '',
                songType: '',
                coverPhoto: null,
                songFile: null,
        });

        const handleChange = (e: { target: { name: any; value: any; }; }) => {
                const { name, value } = e.target;
                setFormData((prev) => ({ ...prev, [name]: value }));
        };

        const handleFileChange = (e: { target: { name: any; files: any; }; }) => {
                const { name, files } = e.target;
                setFormData((prev) => ({ ...prev, [name]: files[0] }));
        };

        const handleSubmit = async (e: { preventDefault: () => void; }) => {
                e.preventDefault();

                Dashboard(formData)
                        .then(response => {
                                console.log("Upload Successful:", response);
                        })
                        .catch(error => {
                                console.error("Upload Failed:", error);
                        });
        };

        return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                        <form
                                onSubmit={handleSubmit}
                                className="bg-gray-800 p-8 rounded shadow-md w-70 sm:w-96"
                        >
                                <h1 className="text-white text-2xl font-bold mb-6">Upload Your Song</h1>
                                {InputFormUpload.map((inputProps, index) => (
                                        console.log(inputProps),
                                        <InputsFile
                                                key={index}
                                                LabelName={inputProps.LabelName}
                                                TypeInput={inputProps.TypeInput}
                                                PlaceholderLabel={inputProps.PlaceholderLabel}
                                                IdLabel={inputProps.IdLabel}
                                        />
                                ))}
                                {/* <div className="mb-4">
                                        <label className="block text-gray-300 mb-2" htmlFor="songName">
                                                Song Name
                                        </label>
                                        <input
                                                type="text"
                                                id="songName"
                                                name="songName"
                                                value={formData.songName}
                                                onChange={handleChange}
                                                placeholder="Enter Song Name"
                                                className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500"
                                                required
                                        />
                                </div>

                                <div className="mb-4">
                                        <label className="block text-gray-300 mb-2" htmlFor="singerName">
                                                Singer Name
                                        </label>
                                        <input
                                                type="text"
                                                id="singerName"
                                                name="singerName"
                                                value={formData.singerName}
                                                onChange={handleChange}
                                                placeholder="Enter Singer Name"
                                                className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500"
                                                required
                                        />
                                </div>

                                <div className="mb-4">
                                        <label className="block text-gray-300 mb-2" htmlFor="songType">
                                                Song Type
                                        </label>
                                        <input
                                                type="text"
                                                id="songType"
                                                name="songType"
                                                value={formData.songType}
                                                onChange={handleChange}
                                                placeholder="Enter Song Type"
                                                className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500"
                                                required
                                        />
                                </div>

                                <div className="mb-4">
                                        <label className="block text-gray-300 mb-2" htmlFor="coverPhoto">
                                                Cover Photo
                                        </label>
                                        <input
                                                type="file"
                                                id="coverPhoto"
                                                name="coverPhoto"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="w-full p-2 border rounded bg-gray-700 text-white cursor-pointer"
                                                required
                                        />
                                </div>

                                <div className="mb-4">
                                        <label className="block text-gray-300 mb-2" htmlFor="songFile">
                                                Song File
                                        </label>
                                        <input
                                                type="file"
                                                id="songFile"
                                                name="songFile"
                                                onChange={handleFileChange}
                                                accept="audio/*"
                                                className="w-full p-2 border rounded bg-gray-700 text-white cursor-pointer"
                                                required
                                        />
                                </div> */}

                                <button
                                        type="submit"
                                        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                                >
                                        Upload Song
                                </button>
                        </form>
                </div>
        );
};

export default UploadSong;
