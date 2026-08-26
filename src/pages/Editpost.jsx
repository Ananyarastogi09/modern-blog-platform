import React, { useEffect, useState } from "react";
import { Container, Postform } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/confi";

function Editpost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

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

    if (!post) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
                    <p className="text-sm text-slate-500">
                        Loading post...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 py-8 sm:py-10 lg:py-12">
            <Container>
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-sm font-semibold text-indigo-600">
                            Content Management
                        </p>

                        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                            Edit Post
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Update your article and keep your content fresh.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                        <Postform post={post} />
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Editpost;