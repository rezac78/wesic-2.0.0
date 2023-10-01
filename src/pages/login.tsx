import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginInputData } from "../Events/Event"
import Inputs from '@/app/parts/Inputs/Inputs';
import Toast from '@/app/parts/Toast/Toast';
import { LoginUser } from '@/app/api/userApi';
import Router from "next/router";

function Login() {
        const [showToast, setShowToast] = useState(false);
        const [toastMessage, setToastMessage] = useState("");
        const [toastType, setToastType] = useState("");
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = async (data: any) => {
                try {
                        const response = await LoginUser(data);
                        console.log(response)
                        login(response);
                        setToastMessage(response.message);
                        setToastType("success");
                        setShowToast(true);
                        Router.push("/");
                } catch (error: any) {
                        setToastMessage(error.response.data.message);
                        setToastType("error");
                        setShowToast(true);
                }
        };

        return (
                <div className="min-h-screen  flex items-center justify-center">
                        {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
                        <div className="bg-gray-200 border-2 rounded-lg shadow-2xl border-[#4CD5AE] p-8 rounded shadow-md w-96">
                                <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        {LoginInputData.map((inputProps, index) => (
                                                <Inputs
                                                        key={index}
                                                        Watch={watch}
                                                        Register={register}
                                                        Errors={errors}
                                                        {...inputProps}
                                                />
                                        ))}
                                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
                                </form>
                        </div>
                </div>
        );
}

export default Login;
