import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
    const apiKey = import.meta.env.VITE_TINYMCE_APIKEY;

    return (
        <div className="w-full">
            {label && (
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <Controller
                    name={name || "content"}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field: { onChange, value } }) => (
                        <Editor
                            apiKey={apiKey}
                            value={value}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "help",
                                    "wordcount",
                                ],
                                toolbar:
                                    "undo redo | blocks | bold italic underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen | help",
                                content_style:
                                    "body { font-family: Inter, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #334155; padding: 12px; }",
                                branding: false,
                                resize: true,
                            }}
                            onEditorChange={onChange}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default RTE;