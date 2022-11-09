import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceReview from "../Pages/ServiceReview/ServiceReview";
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
                path: 'AllServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/MyReviews',
                element: <MyReviews></MyReviews>
                
            },
            {
                path: '/reviews/:id',
                element: <ServiceReview></ServiceReview>,
                loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
               
            },
        ]
    },
    {
        path: '*',
        element: <h1 className="text-5xl text-center">SORRY!! Router Not Found!!</h1>
    }

])