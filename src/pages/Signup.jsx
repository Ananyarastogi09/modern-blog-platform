import React from "react";
import { Signup as Signupcomponent } from "../components";

function Signup() {
    return (
        <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
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
                                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                                />
                                <circle
                                    cx="9"
                                    cy="7"
                                    r="4"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 8v6M22 11h-6"
                                />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Create your account
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Join the community and start sharing your ideas.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                        <Signupcomponent />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup;