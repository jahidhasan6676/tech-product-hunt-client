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
import MyProduct from "../Pages/Dashboard/commonUser/MyProduct";
import UpdateProduct from "../Components/Dashboard/commonUser/UpdateProduct";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import PrivateRouter from "./PrivateRouter";
import AdminRoute from "./AdminRoute";
import ProductDetails from "../Components/ProductDetailsPage/ProductDetailsPage";
import ProductReviewQueue from "../Pages/Dashboard/Moderator/ProductReviewQueue";
import ModeratorRoute from "./ModeratorRoute";
import ReportContent from "../Pages/Dashboard/Moderator/ReportContent";
import AllAcceptedProducts from "../Pages/AllAcceptedProducts/AllAcceptedProducts";
import Statistics from "../Pages/Dashboard/Admin/Statistics";
import ManageCoupon from "../Pages/Dashboard/Admin/ManageCoupon";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/productDetails/:id",
                element:<ProductDetails></ProductDetails>
            },
            {
                path:"/allAcceptedProduct",
                element:<AllAcceptedProducts></AllAcceptedProducts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [

            // normal user nav
            {
                path: "userHome",
                element: <PrivateRouter><UserHome></UserHome></PrivateRouter>
            },
            {
                path: "myProfile",
                element: <PrivateRouter><MyProfile></MyProfile></PrivateRouter>
            },
            {
                path: 'addProduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: "myProduct",
                element: <PrivateRouter><MyProduct></MyProduct></PrivateRouter>
            },
            {
                path: "updateProduct/:id",
                element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>
            },

            // moderator route
            {
                path:"productReviewQueue",
                element: <PrivateRouter><ModeratorRoute><ProductReviewQueue></ProductReviewQueue></ModeratorRoute></PrivateRouter>
            },
            {
                path:"reportedContent",
                element:<PrivateRouter><ModeratorRoute><ReportContent></ReportContent></ModeratorRoute></PrivateRouter>
            },

            // admin route
            {
                path: "manageUsers",
                element: <PrivateRouter>
                    <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                </PrivateRouter>
            },
            {
                path:"statistics",
                element:<PrivateRouter><AdminRoute><Statistics></Statistics></AdminRoute></PrivateRouter>
            },
            {
                path:"manageCoupon",
                element:<PrivateRouter><AdminRoute><ManageCoupon></ManageCoupon></AdminRoute></PrivateRouter>
            }

        ]
    }
])