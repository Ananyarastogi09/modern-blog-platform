import React from "react";
import { Link, NavLink } from "react-router-dom";
import LoginForm from "../components/Login";

export default function Login() {
    return (
        <div className="flex min-h-screen flex-col bg-[#8B95A5]">
            <SiteHeader />

            <main className="flex-1">
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">

                    <div className="hidden lg:block">
                        <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                            Welcome back
                        </p>

                        <h1 className="mt-3 text-4xl font-bold leading-tight text-white xl:text-5xl">
                            Your ideas deserve a home.
                        </h1>

                        <p className="mt-4 max-w-md text-base text-white/80">
                            Sign in to keep writing, publishing, and connecting
                            with readers who care about what you have to say.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-4">
                            <FeatureCard
                                title="Write"
                                description="Craft posts with a distraction-free editor."
                                icon={<PencilIcon />}
                            />

                            <FeatureCard
                                title="Share"
                                description="Publish instantly to your audience."
                                icon={<ShareIcon />}
                            />

                            <FeatureCard
                                title="Connect"
                                description="Grow a community around your work."
                                icon={<UsersIcon />}
                            />
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl sm:p-10">

                            <div className="flex flex-col items-center text-center">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5842FF]/10 text-[#5842FF]">
                                    <LoginIcon />
                                </span>

                                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                                    Sign in
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Access your Blogger account
                                </p>
                            </div>

                            <div className="mt-8">
                                <LoginForm />
                            </div>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="font-semibold text-[#5842FF] hover:underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}

function SiteHeader() {
    const navLinkClass = ({ isActive }) =>
        "text-sm font-medium transition-colors " +
        (isActive
            ? "text-[#5842FF]"
            : "text-gray-600 hover:text-gray-900");

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                <Link
                    to="/"
                    className="text-lg font-bold text-gray-900"
                >
                    Blogger
                </Link>

                <nav
                    aria-label="Primary"
                    className="flex items-center gap-6"
                >
                    <NavLink
                        to="/"
                        end
                        className={navLinkClass}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={navLinkClass}
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={navLinkClass}
                    >
                        Signup
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

function SiteFooter() {
    return (
        <footer className="bg-[#0A0E1A] text-gray-300">

            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">

                <div>
                    <h3 className="text-lg font-bold text-white">
                        Blogger
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                        A simple, focused place to write and share your ideas.
                    </p>
                </div>

                <FooterColumn
                    title="Company"
                    links={[
                        { label: "About", to: "/about" },
                        { label: "Careers", to: "/careers" },
                        { label: "Blog", to: "/" },
                    ]}
                />

                <FooterColumn
                    title="Support"
                    links={[
                        { label: "Help Center", to: "/help" },
                        { label: "Contact Us", to: "/contact" },
                        { label: "Status", to: "/status" },
                    ]}
                />

                <FooterColumn
                    title="Legal"
                    links={[
                        { label: "Privacy Policy", to: "/privacy" },
                        { label: "Terms of Service", to: "/terms" },
                    ]}
                />
            </div>

            <div className="border-t border-white/10">
                <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
                    &copy; {new Date().getFullYear()} Blogger. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                {title}
            </h4>

            <ul className="mt-3 space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            to={link.to}
                            className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FeatureCard({ title, description, icon }) {
    return (
        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                {icon}
            </span>

            <p className="mt-3 text-sm font-semibold text-white">
                {title}
            </p>

            <p className="mt-1 text-xs leading-snug text-white/70">
                {description}
            </p>
        </div>
    );
}

function LoginIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
    );
}

function PencilIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
    );
}

function ShareIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
            <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}