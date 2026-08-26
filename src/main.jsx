import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import { Authlayout, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import Editpost from "./pages/Editpost";

import Post from "./pages/Post";

import AllPost from "./pages/AllPost";

const router = createBrowserRouter([
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/Login',
                    element:(
                        <Authlayout authentication = {false}>
                            <Login/>
                        </Authlayout>
                    )
                },
                {
                   path: "/signup",
                    element: (
                    <Authlayout authentication={false}>
                        <Signup />
                    </Authlayout>
                    ),
                },
                {
                    path: "/all-posts",
                    element: (
                        <Authlayout authentication>
                            {" "}
                            <AllPost />
                        </Authlayout>
                    ),
                },
                { 
                    path: "/add-post",
                    element: (
                        <Authlayout authentication>
                            {" "}
                            <Addpost />
                        </Authlayout>
                    ),
                },
                {
                    path: "/edit-post/:slug",
                    element: (
                        <Authlayout authentication>
                            {" "}
                            <Editpost />
                        </Authlayout>
                    ),
                },
                {
                    path: "/post/:slug",
                    element: <Post />,
                },
            ]
        }
])
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router = {router}/>
    </Provider>
)