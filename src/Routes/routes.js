import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddNewService from "../Pages/AddNewService/AddNewService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview/UpdateReview";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceReview from "../Pages/ServiceReview/ServiceReview";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PublicRoutes><Home></Home></PublicRoutes>
            },
            {
                path: '/login',
                element: <PublicRoutes><Login></Login></PublicRoutes>
            },
            {
                path: '/register',
                element: <PublicRoutes><Register></Register></PublicRoutes>
            },
            {
                path: '/AllServices',
                element: <PublicRoutes><AllServices></AllServices></PublicRoutes>
            },
            {
                path: '/serviceDetails/:id',
                element: <PublicRoutes><ServiceDetails></ServiceDetails></PublicRoutes>,
                loader: ({ params }) => fetch(`https://travel-advisor-server.vercel.app/serviceDetails/${params.id}`)
            },
            {
                path: '/MyReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>

            },
            {
                path: '/reviews/:id',
                element: <ServiceReview></ServiceReview>,
                loader: ({ params }) => fetch(`https://travel-advisor-server.vercel.app/reviews/${params.id}`)

            },
            {
                path: '/AddNewService',
                element: <PrivateRoutes><AddNewService></AddNewService></PrivateRoutes>

            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://travel-advisor-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            }
        ]
    },
    {
        path: '*',
        element: <h1 className="text-5xl text-center">SORRY!! Router Not Found!!</h1>
    }

])