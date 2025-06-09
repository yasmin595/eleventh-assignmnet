import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../pages/layout/AuthLayout";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddItems from "../pages/AddItems";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/shared/Loading";
import AllItems from "../pages/AllItems";
import ItemsDetails from "../pages/ItemsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
     {
        index:true,
          loader: () => fetch('http://localhost:3000/my-items'),
        element:<Home></Home>,
        hydrateFallbackElement:<Loading></Loading>,

     },
     {
      path:"/addItems",
      element: <PrivateRoute>
        <AddItems></AddItems>
      </PrivateRoute>
     },
     {
      path:"/allItems",
          loader: () => fetch('http://localhost:3000/items'),
      element:<AllItems></AllItems>,
       hydrateFallbackElement:<Loading></Loading>,

     },
     {
     path:"/details",
     
     element:<PrivateRoute>
      <ItemsDetails></ItemsDetails>
     </PrivateRoute>,

     },
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