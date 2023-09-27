import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginInputData } from "../Events/Event"
import Inputs from '@/app/parts/Inputs/Inputs';

function Login() {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = (data: any) => console.log(data);

        return (
                <div className="min-h-screen  flex items-center justify-center">
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