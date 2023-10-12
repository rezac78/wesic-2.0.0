
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dashboard } from '@/app/api/dashboard';
import { InputFormSinger } from "../../../Events/Event"
import Toast from '../Toast/Toast';
import Inputs from '../Inputs/Inputs';

interface initialFormData {
        name: '',
        bio: '',
        coverPhoto: null,
};

const UploadSong = () => {
        const {
                register,
                handleSubmit,
                watch,
                formState: { errors },
        } = useForm();
        const [showToast, setShowToast] = useState(false);
        const [toastMessage, setToastMessage] = useState("");
        const [toastType, setToastType] = useState("");

        const onSubmit = async (e:any) => {
                const NewData: initialFormData = {
                        bio: e.bio,
                        name: e.singerName,
                        coverPhoto: e.coverPhoto[0]
                }
                try {
                        await Dashboard(NewData);
                        setToastMessage("Create successfully");
                        setToastType("success");
                        setShowToast(true);
                } catch (error) {
                        setToastMessage("Create Failed");
                        setToastType("error");
                        setShowToast(true);
                }
        };
        return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                        {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
                        <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="bg-gray-800 p-8 rounded shadow-md w-70 sm:w-96"
                        >
                                <h1 className="text-white text-2xl font-bold mb-6">Upload Your Song</h1>
                                {InputFormSinger.map((inputProps, index) => (
                                        <Inputs
                                                key={index}
                                                {...inputProps}
                                                Register={register}
                                                Watch={watch}
                                                Errors={errors}
                                                ModelInput="dashboard"
                                        />
                                ))}
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