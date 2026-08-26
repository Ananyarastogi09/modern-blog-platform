import React, { useState, useEffect } from "react";
import { Container, Postcard } from "../components";
import service from "../appwrite/confi";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        service
            .getposts()
            .then((response) => {
                if (response) {
                    setPosts(response.rows || []);
                } else {
                    setPosts([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setPosts([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
                <Container>
                    <div className="flex min-h-[400px] items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

                            <p className="text-sm font-medium text-slate-600">
                                Loading posts...
                            </p>
                        </div>
                    </div>
                </Container>
            </main>
        );
    }

    if (posts.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
                <Container>
                    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm sm:px-10 sm:py-20 lg:px-16">
                        <div className="mx-auto max-w-2xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                                <svg
                                    className="h-8 w-8 text-indigo-600"
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

                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                                Welcome
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                No posts available yet
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                                There is no published content to show right
                                now. Check back soon for new stories,
                                articles, and ideas.
                            </p>
                        </div>
                    </section>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">
            <Container>
                {/* Hero Section */}
                <section className="relative mb-12 overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="relative z-10 max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                            Stories • Ideas • Insights
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Discover something worth reading.
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
                            Explore thoughtful articles and fresh perspectives
                            from our growing community of writers.
                        </p>
                    </div>

                    <div
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
                        aria-hidden="true"
                    />

                    <div
                        className="absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
                        aria-hidden="true"
                    />
                </section>

                {/* Posts Header */}
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            Latest content
                        </p>

                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Featured Posts
                        </h2>
                    </div>

                    <span className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm sm:inline-flex">
                        {posts.length}{" "}
                        {posts.length === 1 ? "post" : "posts"}
                    </span>
                </div>

                {/* Posts Grid */}
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
            </Container>
        </main>
    );
}

export default Home;