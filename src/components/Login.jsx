import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "../components/index";
import { login as authlogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import authservice from "../appwrite/auth";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async (data) => {
        setError("");
        setLoading(true);

        try {
            const session = await authservice.login(data);

            if (session) {
                const userData = await authservice.getcurrentuser();

                if (userData) {
                    dispatch(authlogin(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message || "Unable to sign in. Please try again.");
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
                        Sign in to your account
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-700 hover:underline"
                        >
                            Sign Up
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

                <form onSubmit={handleSubmit(login)} noValidate>
                    <div className="space-y-5">
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
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Password is required",
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
                            {loading ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;