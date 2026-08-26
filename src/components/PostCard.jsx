import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/confi";

function Postcard({ title, featuredimg, slug, $id }) {
    const imageUrl = featuredimg
        ? service.getfileview(featuredimg)
        : null;

    return (
        <Link
            to={`/post/${slug || $id}`}
            className="group block h-full"
        >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={title || "Post image"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                                    <svg
                                        className="h-5 w-5 text-slate-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                        />
                                        <circle
                                            cx="8.5"
                                            cy="8.5"
                                            r="1.5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 15l-5-5L5 21"
                                        />
                                    </svg>
                                </div>

                                <span className="text-xs font-medium text-slate-400">
                                    No image
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
                            Article
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <h2 className="line-clamp-2 text-lg font-bold leading-7 text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                        {title || "Untitled Post"}
                    </h2>

                    <div className="mt-auto flex items-center justify-between pt-5">
                        <span className="text-sm font-medium text-slate-500">
                            Read article
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h14M13 6l6 6-6 6"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default Postcard;