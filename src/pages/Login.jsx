import React from "react";
import { Login as Logincomponent } from "../components";

function Login() {
    return (
        <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    {/* Page Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-sm">
                            <svg
                                className="h-7 w-7 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 17l5-5-5-5"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H3"
                                />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Welcome back
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Sign in to continue to your account.
                        </p>
                    </div>

                    {/* Login Component */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                        <Logincomponent />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;