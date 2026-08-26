import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "../components/index";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import authservice from "../appwrite/auth";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const signup = async (data) => {
        setError("");
        setLoading(true);

        try {
            const userdata = await authservice.createAccount(data);

            if (userdata) {
                const current = await authservice.getcurrentuser();

                if (current) {
                    dispatch(login(current));
                }

                navigate("/");
            }
        } catch (error) {
            setError(
                error.message ||
                    "Unable to create your account. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full items-center justify-center">
            <div className="mx-auto w-full max-w-md">
                <div className="mb-7 text-center">
                    <div className="mb-5 flex justify-center">
                        <span className="inline-block w-full max-w-[90px]">
                            <Logo width="100%" />
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Create your account
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-700 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                {error && (
                    <div
                        className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                        role="alert"
                    >
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(signup)} noValidate>
                    <div className="space-y-5">
                        <div>
                            <Input
                                label="Full Name"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                {...register("name", {
                                    required: "Full name is required",
                                })}
                            />

                            {errors.name && (
                                <p className="mt-1.5 text-xs font-medium text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                autoComplete="email"
                                {...register("email", {
                                    required: "Email is required",
                                    validate: {
                                        matchPattern: (value) =>
                                            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
                                                value
                                            ) ||
                                            "Please enter a valid email address",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p className="mt-1.5 text-xs font-medium text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Create a password"
                                autoComplete="new-password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters",
                                    },
                                })}
                            />

                            {errors.password && (
                                <p className="mt-1.5 text-xs font-medium text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading
                                ? "Creating account..."
                                : "Create Account"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;