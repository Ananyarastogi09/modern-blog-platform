import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    {
        label,
        type = "text",
        className = "",
        ...props
    },
    ref
) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    className="mb-2 block text-sm font-semibold text-slate-700"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={ref}
                type={type}
                className={`w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-50 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100 ${className}`}
                {...props}
            />
        </div>
    );
});

export default Input;