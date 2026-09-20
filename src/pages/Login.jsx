import React from "react";
import { Login as Logincomponent } from "../components";

function Login() {
    return (
        <div className="min-h-screen bg-white flex flex-col">

            <main className="flex-1 bg-white-50 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">

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

                            <h1 className="text-2xl font-bold tracking-tight text-white-900 sm:text-3xl">
                                Welcome back
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Sign in to continue to your account.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 mb-10">
                            <Logincomponent />
                        </div>

                    </div>
                </div>
            </main>

            <footer className="bg-white py-5 text-center mb-10">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Modern Blog Platform. All rights reserved.
                </p>
            </footer>

        </div>
    );
}

export default Login;

