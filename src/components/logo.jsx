import React from "react";

function Logo({ width = "100px" }) {
    return (
        <div
            style={{ width }}
            className="flex items-center gap-2"
            aria-label="Blog"
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 shadow-sm">
                <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 5.5A2.5 2.5 0 016.5 3H20v17H6.5A2.5 2.5 0 014 17.5v-12z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h8M8 11h8M8 15h5"
                    />
                </svg>
            </div>

            <span className="truncate text-lg font-bold tracking-tight text-slate-900">
                Blogify
            </span>
        </div>
    );
}

export default Logo;