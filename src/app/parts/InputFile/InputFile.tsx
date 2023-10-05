import React from 'react';
import { Controller } from 'react-hook-form';

export interface InputsFiles {
        key: number;
        LabelName: string;
        TypeInput: string;
        PlaceholderLabel: string;
        IdLabel:string;
}

const InputsFile = (props: InputsFiles) => {
        return (
                <div key={props.key} className="mb-4">
                        <label className="block text-sm mb-2">{props.LabelName}</label>
                        <input
                                type={props.TypeInput !== 'confirmPassword' ? props.TypeInput : 'password'}
                                className={`w-full p-2 border ${props.IdLabel ? 'border-red-500' : 'border-gray-300'} rounded`}
                                placeholder={props.PlaceholderLabel}
                        />
                        {/* {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>} */}
                </div>
        );
};

export default InputsFile;
