import React from "react";
import { Container, Postform } from "../components";

function AddPost() {
    return (
        <main className="min-h-screen bg-slate-50 py-8 sm:py-10 lg:py-12">
            <Container>
                <div className="mx-auto w-full max-w-5xl">
                    <Postform />
                </div>
            </Container>
        </main>
    );
}

export default AddPost;