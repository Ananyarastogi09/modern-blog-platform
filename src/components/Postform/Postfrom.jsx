import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";
import RTE from "../RTE";
import service from "../../appwrite/confi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Postform({ post }) {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userdata = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            setLoading(true);

            if (post) {
                const file = data.image?.[0]
                    ? await service.uploadfile(data.image[0])
                    : null;

                if (file) {
                    await service.deletefile(post.featuredimg);
                }

                const dbpost = await service.updatepost(post.$id, {
                    ...data,
                    featuredimg: file ? file.$id : undefined,
                });

                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`);
                }
            } else {
                const file = await service.uploadfile(data.image?.[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredimg = fileId;

                    const dbpost = await service.createpost({
                        ...data,
                        userid: userdata.$id,
                    });

                    if (dbpost) {
                        navigate(`/post/${dbpost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
        } finally {
            setLoading(false);
        }
    };

    const slugtransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue(
                    "slug",
                    slugtransform(value.title),
                    { shouldValidate: true }
                );
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugtransform, setValue]);

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="w-full"
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                    <div>
                        <Input
                            label="Title"
                            placeholder="Enter your post title"
                            className="mb-0"
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div>
                        <Input
                            label="Slug"
                            placeholder="your-post-slug"
                            className="mb-0"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue(
                                    "slug",
                                    slugtransform(e.currentTarget.value),
                                    { shouldValidate: true }
                                );
                            }}
                        />
                    </div>

                    <div>
                        <RTE
                            label="Content"
                            name="content"
                            control={control}
                            defaultValue={post?.content || ""}
                        />
                    </div>
                </div>

                <div className="h-fit space-y-6 lg:sticky lg:top-24">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <Input
                            label="Featured Image"
                            type="file"
                            className="mb-0"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", {
                                required: !post,
                            })}
                        />

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                            PNG, JPG, JPEG or GIF. Choose a clear image that
                            represents your post.
                        </p>
                    </div>

                    {post && post.featuredimg && (
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                            <img
                                src={service.getfileview(post.featuredimg)}
                                alt={post.title}
                                className="aspect-video w-full object-cover"
                            />
                        </div>
                    )}

                    <div>
                        <Select
                            options={["active", "inactive"]}
                            label="Status"
                            className="mb-0"
                            {...register("status", { required: true })}
                        />
                    </div>

                    <Button
                        type="submit"
                        bgColor={post ? "bg-green-600" : "bg-indigo-600"}
                        className="w-full transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading
                            ? post
                                ? "Updating..."
                                : "Publishing..."
                            : post
                                ? "Update Post"
                                : "Publish Post"}
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default Postform;