import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://cooks-compendium-server-site-6w7vu3qaq-aminul-islam01.vercel.app/chefs')
      },
      {
        path: "/chef-recipe/:id",
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://cooks-compendium-server-site-6w7vu3qaq-aminul-islam01.vercel.app/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router;