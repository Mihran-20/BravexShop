import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import { CLOTHING_PAGE } from "../Routes.jsx";
import { emailValidation, passwordValidation, requiredValidation } from "../validation/Validation.js";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

    const registerUser = async (data) => {
        const response = await axios.post('http://localhost:3001/users', data);
        if (response.data) {
            navigate(CLOTHING_PAGE);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0f0f0f]">
            <form
                onSubmit={handleSubmit(registerUser)}
                className="w-[400px] bg-[#1a1a1a]/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-white/10"
            >
                <h1 className="text-4xl font-extrabold text-center text-[#ffc26f] tracking-wider drop-shadow-[0_0_8px_#ffc26f]">
                    Create Account
                </h1>

                <Input
                    text="Name"
                    type="text"
                    register={register}
                    error={errors.Name?.message}
                    validation={requiredValidation}
                />

                <Input
                    text="Username"
                    type="text"
                    register={register}
                    error={errors.Username?.message}
                    validation={requiredValidation}
                />

                <Input
                    text="email"
                    type="email"
                    register={register}
                    error={errors.email?.message}
                    validation={emailValidation}
                />

                <Input
                    text="password"
                    type="password"
                    register={register}
                    error={errors.password?.message}
                    validation={passwordValidation}
                />

                <Button disabled={!isValid}>Register</Button>
            </form>
        </div>
    );
};

export default Register;
