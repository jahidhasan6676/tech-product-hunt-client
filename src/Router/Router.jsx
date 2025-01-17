import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserHome from "../Pages/Dashboard/commonUser/UserHome";
import MyProfile from "../Pages/Dashboard/commonUser/MyProfile";
import AddProduct from "../Pages/Dashboard/commonUser/AddProduct";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            
            // normal user nav
            {
                path:"userHome",
                element:<UserHome></UserHome>
            },
            {
                path:"myProfile",
                element:<MyProfile></MyProfile>
            },
            {
                path:'addProduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])