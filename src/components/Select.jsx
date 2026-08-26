import React, { useId } from "react";

const Select = React.forwardRef(function Select(
    {
        options = [],
        label,
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
                    htmlFor={id}
                    className="mb-2 block text-sm font-semibold text-slate-700"
                >
                    {label}
                </label>
            )}

            <select
                {...props}
                id={id}
                ref={ref}
                className={`w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;