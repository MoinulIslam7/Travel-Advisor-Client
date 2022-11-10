import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddNewService from "../Pages/AddNewService/AddNewService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceReview from "../Pages/ServiceReview/ServiceReview";
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/AllServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/MyReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>

            },
            {
                path: '/reviews/:id',
                element: <ServiceReview></ServiceReview>,
                loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
               
            },
            {
                path: '/AddNewService',
                element: <PrivateRoutes><AddNewService></AddNewService></PrivateRoutes>
               
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