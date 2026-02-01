import React from "react";
import ReactDOM from  "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import RestaurantGrid from "./src/components/RestaurantGrid";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Header from "./src/components/Header";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ErrorPage from "./src/components/ErrorPage";
const App=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
</>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<RestaurantGrid/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<ErrorPage/>
    },

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);