import { useState,useEffect } from "react";
import ReactDOM from  "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import RestaurantGrid from "./src/components/RestaurantGrid";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Header from "./src/components/Header";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ErrorPage from "./src/components/ErrorPage";
import { Provider } from "react-redux";
import appStore from "./src/utilities/appStore";
import Cart from "./src/components/Cart";
import UserContext from "./src/utilities/UserContext";
const App=()=>{

    const [user,setUser]=useState("Guest");

    useEffect(()=>{
        setUser("Web Vanilla")
    },[])
    
    return (
        <>
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:user,setUser}}>
        <Header/>
        <Outlet/>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<ErrorPage/>
    },

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);