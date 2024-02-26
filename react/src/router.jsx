import { createBrowserRouter, Navigate } from "react-router-dom";
import DonorLayout from "./Pages/Donor/DonorLayout";
import DonorHomepage from "./Pages/Donor/DonorHomepage";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import GuestLayout from "./Pages/Homepage/GuestLayout";
import NewLayout from "./Pages/NewHomepage/NewLayout";
import Tryy from "./Pages/NewHomepage/Tryy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/NewLayout",
          element: <NewLayout />,
        },
        {
          path: "/Tryy",
          element: <Tryy />,
        },
      ]
    },

    {
        path: "/",
        element: <DonorLayout />,
        children: [
          {
            path: "/DonorHomepage",
            element: <DonorHomepage />,
          },
          
        ],
      }, 



]);


export default router;