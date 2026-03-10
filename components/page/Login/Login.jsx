import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import { emailValidation, passwordValidation } from "../validation/Validation.js";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({ mode: "onChange" });

    const [loginError, setLoginError] = useState("");

    const login = async (data) => {
        try {
            const response = await axios.get("http://localhost:3001/users");
            const users = response.data;
            const user = users.find(f => f.email === data.email && f.password === data.password);

            if (user) {
                localStorage.setItem("token", "15615615");
                window.location.reload();
            } else {
                setLoginError("Invalid email or password");
                reset(); // Մաքրում ենք input-ները
            }
        } catch (err) {
            console.error("Login error:", err);
            setLoginError("Something went wrong. Please try again.");
            reset(); // Եթե սխալ է՝ նույնպես մաքրենք
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
            <form
                onSubmit={handleSubmit(login)}
                className="w-[400px] bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl p-10 flex flex-col gap-6
                border border-[#ffc26f33] shadow-[0_0_30px_#ffc26f44] transition hover:shadow-[0_0_40px_#ffc26f66]"
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#ffc26f] text-center tracking-wider drop-shadow-[0_0_6px_#ffc26f]">
                    Welcome Back
                </h1>

                {loginError && (
                    <p className="text-red-500 text-center text-sm -mt-2">{loginError}</p>
                )}

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

                <Button disabled={!isValid}>Login</Button>
            </form>
        </div>
    );
};

export default Login;
