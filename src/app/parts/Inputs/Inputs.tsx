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
}

function Inputs(props: RegisterFormProps) {
    let inputProps = {};
    let errorMessage = "";

    if (props.TypeInput === "confirmPassword") {
        inputProps = {
            ...props.Register('confirmPassword', {
                validate: value => {
                    const password = props.Watch('password');
                    return value === password || "Passwords don't match.";
                }
            })
        };
        errorMessage = props.Errors.confirmPassword?.message;
    } else if (props.TypeInput === "password") {
        // Added validation for password
        inputProps = {
            ...props.Register(props.IdLabel, {
                required: `${props.PlaceholderLabel} is required.`,
                minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters."
                }
            })
        };
        errorMessage = props.Errors[props.IdLabel]?.message;
    } else {
        inputProps = {
            ...props.Register(props.IdLabel, { required: `${props.PlaceholderLabel} is required.` })
        };
        errorMessage = props.Errors[props.IdLabel]?.message;
    }


    return (
        <div className="mb-4">
            <label className="block text-sm mb-2">{props.LabelName}</label>
            <input
                type={props.TypeInput !== 'confirmPassword' ? props.TypeInput : 'password'}
                {...inputProps}
                className={`w-full p-2 border ${props.Errors[props.IdLabel] ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder={props.PlaceholderLabel}
            />
            {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
        </div>
    );
}


export default Inputs;