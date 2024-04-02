import React, { useState } from "react";
import bgLogin from "../../public/img/bg_login.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as request from "../../services/login.js";
import { toast } from "react-toastify";
import { set } from "lodash";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPasword, setConfirmPassword] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        // check if any fields is omitted
        if (!(username && password && email)) {
            toast.error("Please provide enough information");
            return;
        }
        // check if the password and confirm password is the samne
        if (password !== confirmPasword) {
            toast.error("Your current password did not match confirm password");
            setPassword(() => "");
            setConfirmPassword(() => "");
            return;
        }
        const dataForm = {
            username,
            email,
            password,
            retype_password: password,
        };
        try {
            setIsProcessing(() => true);
            const data = await request.register(dataForm);
            toast.success("Register Success");
            setTimeout(() => {
                navigate("/login");
            }, 600);
        } catch (e) {
            toast.error("Register failed");
            console.log(e);
        } finally {
            setIsProcessing(() => false);
        }
    }
    return (
        <div className="max-w-screen h-screen ">
            <img
                src={bgLogin}
                alt="...."
                className="relative object-cover h-full w-full"
            />
            <div className="bg-white opacity-90 shadow-md rounded-lg px-8 pb-8 w-full h-[90%] max-w-md absolute top-[5%] right-[8%] ">
                <h1 className="text-2xl font-bold text-center py-4 text-gray-500">
                    Sign up
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-500 mb-2"
                        >
                            User name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full dark:bg-white dark:text-slate-600"
                            onChange={(e) => {
                                setUsername(() => e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-500 mb-2"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full dark:bg-white dark:text-slate-600"
                            onChange={(e) => {
                                setEmail(() => e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-500 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full  dark:bg-white dark:text-slate-600"
                            onChange={(e) => {
                                setPassword(() => e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-500 mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPasword}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full  dark:bg-white dark:text-slate-600"
                            onChange={(e) => {
                                setConfirmPassword(() => e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link
                            to="/login"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Already a member?
                        </Link>
                    </div>
                    {isProcessing ? (
                        <button className="text-white bg-[#f77ebb] px-2 py-2 rounded-lg focus:outline-none flex justify-center w-full">
                            <svg
                                aria-hidden="true"
                                className={`w-8 h-8 text-gray-200 animate-spin dark:text-white fill-slate-400`}
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-[#f77ebb] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-opacity-50 w-full hover:scale-105 transition-all duration-300"
                        >
                            Register
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
