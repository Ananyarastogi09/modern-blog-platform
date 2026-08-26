import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/confi";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        service
            .getpost(slug)
            .then((response) => {
                if (response) {
                    setPost(response);
                } else {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error(error);
                navigate("/");
            });
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!post) return;

        try {
            const status = await service.deletepost(post.$id);

            if (status) {
                if (post.featuredimg) {
                    await service.deletefile(post.featuredimg);
                }

                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!post) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
                    <p className="text-sm text-slate-500">
                        Loading post...
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 py-8 sm:py-10 lg:py-12">
            <Container>
                <article className="mx-auto max-w-5xl">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {post.featuredimg && (
                            <div className="aspect-video w-full overflow-hidden bg-slate-100">
                                <img
                                    src={service.getfileview(post.featuredimg)}
                                    alt={post.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}

                        {userData && (
                            <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        type="button"
                                        bgColor="bg-white"
                                        textColor="text-slate-700"
                                        className="border border-slate-200 shadow-md hover:bg-slate-50"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                <Button
                                    type="button"
                                    bgColor="bg-red-600"
                                    className="shadow-md hover:bg-red-700"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}

                        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
                            {post.status && (
                                <span className="mb-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
                                    {post.status}
                                </span>
                            )}

                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>

                            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                <span>Published article</span>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                <span>Blog post</span>
                            </div>

                            <div className="mt-8">
                                <div className="browser-css">
                                    {parse(post.content)}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </main>
    );
}