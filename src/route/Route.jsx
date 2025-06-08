import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../pages/layout/AuthLayout";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddItems from "../pages/AddItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
     {
        index:true,
        element:<Home></Home>,
     },
     {
      path:"/addItems",
      element: <AddItems></AddItems>
     }
    ]
  },
  {

path:"/auth",
Component:AuthLayout,
children:[
    {
        path:"/auth/login",
        Component:LogIn,

    },
    {
        path:"/auth/register",
        Component:Register,
    },

]

  
  },
]);

export default router;