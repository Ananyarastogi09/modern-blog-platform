import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
            <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    <div className="sm:col-span-2 lg:col-span-5">
                        <Link
                            to="/"
                            className="inline-flex items-center"
                        >
                            <Logo width="90px" />
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:leading-7">
                            A place to discover thoughtful stories, share
                            ideas, and connect through meaningful content.
                        </p>

                        <p className="mt-6 text-xs text-slate-500 sm:mt-8 sm:text-sm">
                            &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Company
                        </h3>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Support
                        </h3>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Account
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Help
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Legal
                        </h3>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                                    to="/"
                                >
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-9 border-t border-slate-800 pt-5 sm:mt-10 sm:pt-6">
                    <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <span>Built for creators and readers.</span>
                        <span>Read. Write. Share.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;