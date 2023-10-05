// src/pages/register.tsx
import Inputs from '@/app/parts/Inputs/Inputs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputRegister } from "../../../Events/Event"
import Link from 'next/link';
import { registerUser } from '../../api/userApi';
import Toast from "../../parts/Toast/Toast"
import Router from "next/router";


export default function Register() {
        const [showToast, setShowToast] = useState(false);
        const [toastMessage, setToastMessage] = useState("");
        const [toastType, setToastType] = useState("");
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = async (data: any) => {
                try {
                        const response = await registerUser(data);
                        setToastMessage(response.message);
                        setToastType("success");
                        setShowToast(true);
                        Router.push("/login");
                } catch (error: any) {
                        setToastMessage(error.response.data.error);
                        setToastType("error");
                        setShowToast(true);
                }
        };
        return (
                <div className="min-h-screen  flex items-center justify-center">
                        {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
                        <div className="bg-gray-200 border-2 rounded-lg shadow-2xl border-[#4CD5AE] p-8 rounded shadow-md w-72 sm:w-96">
                                <h2 className="text-2xl mb-6 text-center font-bold">Register</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        {InputRegister.map((inputProps, index) => (
                                                <Inputs
                                                        key={index}
                                                        Watch={watch}
                                                        Register={register}
                                                        Errors={errors}
                                                        {...inputProps}
                                                />
                                        ))}
                                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Register</button>
                                        <div className='mt-4 text-sm'>
                                                Already registered? <Link className="text-blue-600" href="/login">Login here</Link>
                                        </div>
                                </form>
                        </div>
                </div>
        );
}
