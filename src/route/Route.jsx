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
import ManageItem from "../pages/ManageItem";
import UpdatedTable from "../pages/UpdatedTable";

import ErrorPage from "../pages/ErrorPage";
import ManageRecover from "../pages/ManageRecover";
import QnAPage from "../pages/QnAPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
     {
        index:true,
          loader: () => fetch('https://eleventh-assignment-server-eta.vercel.app/my-items'),
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
          loader: () => fetch('https://eleventh-assignment-server-eta.vercel.app/items'),
      element:<AllItems></AllItems>,
       hydrateFallbackElement:<Loading></Loading>,

     },
     {
     path:"/items/:id",
        loader: ({params}) => fetch(`https://eleventh-assignment-server-eta.vercel.app/items/${params.id}`),
     element:<PrivateRoute>
      <ItemsDetails></ItemsDetails>
     </PrivateRoute>,
        hydrateFallbackElement:<Loading></Loading>,
          
     },
       {
     path:"/item/:email",
      
     element:<PrivateRoute>
      <ManageItem></ManageItem>
     </PrivateRoute>,
      hydrateFallbackElement:<Loading></Loading>,
          
     },
     {
      path:"/updated-table/:id",
        loader: ({params}) => fetch(`https://eleventh-assignment-server-eta.vercel.app/items/${params.id}`),
      element:<PrivateRoute>
        <UpdatedTable></UpdatedTable>
      </PrivateRoute>,
       hydrateFallbackElement:<Loading></Loading>,
     },
     {
      path:"/recover/:email",
      
      element:<PrivateRoute>
     <ManageRecover></ManageRecover>
      </PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>,
     },


     {
      path:"/questionAndAnswer",
      element:<QnAPage></QnAPage>
     },
       {
      path:'/*',
      element:<ErrorPage></ErrorPage>

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
      {
      path:'/auth/*',
      element:<ErrorPage></ErrorPage>

        },

]


  
  },

    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

        },
]);

export default router;