import React from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';

interface RegisterFormProps {
    LabelName: string;
    TypeInput: string;
    IdLabel: string;
    PlaceholderLabel: string;
    Errors: DeepMap<FieldValues, FieldError>;
    Register: UseFormRegister<FieldValues>;
    Watch: (field: string) => any;
    isFile: boolean;
    isTextarea: boolean;
    ModelInput: string;
}
function Inputs(props: RegisterFormProps) {
    let inputProps = {};
    let errorMessage = "";

    if (props.isFile) {
        inputProps = {
            ...props.Register(props.IdLabel)
        };
    } else if (props.TypeInput === "confirmPassword") {
        inputProps = {
            ...props.Register('confirmPassword', {
                validate: value => {
                    const password = props.Watch('password');
                    return value === password || "Passwords don't match.";
                }
            })
        };
        errorMessage = props.Errors.confirmPassword?.message;
    } else {
        inputProps = {
            ...props.Register(props.IdLabel, { required: `${props.PlaceholderLabel} is required.` })
        };
        errorMessage = props.Errors[props.IdLabel]?.message;
    }

    return (
        <div className="mb-4">
            <label className={`block ${props.ModelInput === "dashboard" ? "text-gray-300" : "text-black"}  text-sm mb-2`}>{props.LabelName}</label>
            {props.isFile ? (
                <input
                    type="file"
                    {...props.Register(props.IdLabel)}
                    className={`w-full p-2 border ${props.ModelInput === "dashboard" ? "bg-gray-700 text-white placeholder-gray-500" : ""} ${props.Errors[props.IdLabel] ? 'border-red-500' : 'border-gray-300'} rounded`}
                    accept="image/*"
                />
            ) : props.isTextarea ? (
                <textarea
                    {...props.Register(props.IdLabel, { required: `${props.PlaceholderLabel} is required.` })}
                    id="bio"
                    name="bio"
                    placeholder={props.PlaceholderLabel}
                    className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500"
                />
            ) : (
                <input
                    type={props.TypeInput !== 'confirmPassword' ? props.TypeInput : 'password'}
                    {...inputProps}
                    className={`w-full p-2 border ${props.ModelInput === "dashboard" ? "bg-gray-700 text-white placeholder-gray-500" : ""} ${props.Errors[props.IdLabel] ? 'border-red-500' : 'border-gray-300'} rounded`}
                    placeholder={props.PlaceholderLabel}
                />
            )}
            {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
        </div>
    );
}


export default Inputs;