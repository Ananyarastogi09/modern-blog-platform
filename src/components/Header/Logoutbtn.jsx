import React from "react";
import authservice from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function Logoutbtn() {
    const dispatch = useDispatch();

    const LogoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            type="button"
            onClick={LogoutHandler}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-4"
        >
            Log out
        </button>
    );
}

export default Logoutbtn;