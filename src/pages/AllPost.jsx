import React, { useState, useEffect } from "react";
import { Container, Postcard } from "../components";
import service from "../appwrite/confi";

function Allposts() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        service
            .getposts([])
            .then((response) => {
                setposts(response?.rows || []);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
            <Container>
                {/* Page Header */}
                <div className="mb-10 flex flex-col gap-3 sm:mb-12">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            Discover & Read
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            All Posts
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                            Explore the latest stories, ideas, and insights from
                            the community.
                        </p>
                    </div>
                </div>

                {/* Posts */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {posts.map((post) => (
                            <div
                                key={post.$id}
                                className="h-full transition-transform duration-200 hover:-translate-y-1"
                            >
                                <Postcard {...post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
                            <svg
                                className="h-7 w-7 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>

                        <h2 className="text-lg font-semibold text-slate-900">
                            No posts yet
                        </h2>

                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                            There are no published posts to display right now.
                            Check back later for new content.
                        </p>
                    </div>
                )}
            </Container>
        </main>
    );
}

export default Allposts;