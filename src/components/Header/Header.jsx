import React from "react";
import { Container, Logo, Logoutbtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
            <Container>
                <nav className="flex min-h-[72px] items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="flex shrink-0 items-center transition-opacity hover:opacity-80"
                    >
                        <Logo width="70px" />
                    </Link>

                    <div className="flex items-center">
                        <ul className="flex items-center gap-1 sm:gap-2">
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate(item.slug)
                                            }
                                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-4"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}

                            {authStatus && (
                                <li className="ml-1 border-l border-slate-200 pl-2 sm:ml-2 sm:pl-3">
                                    <Logoutbtn />
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;