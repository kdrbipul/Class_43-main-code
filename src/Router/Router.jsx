import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Dashboard/Contact/Contact";
import Profile from "../components/Dashboard/Profile/Profile";
import Project from "../components/Dashboard/Project/Project";
import Services from "../components/Dashboard/Services/Services";
import Home from "../components/Home/Home";
import Dashboard from "../components/Layout/Dashboard";
import Main from "../components/Layout/Main";
import Nothing from "../components/Nothing/Nothing";
import OrderReview from "../components/OrderReview/OrderReview";
import Shop from "../components/Shop/Shop";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/product',
          element:<Shop></Shop>
        },
        {
          path:'/order-review',
          element:<OrderReview></OrderReview>
        },
        {
          path:'*',
          element:<Nothing></Nothing>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<Profile></Profile>
        },
        {
          path:'/dashboard/services',
          element:<Services></Services>
        },
        {
          path:'/dashboard/project',
          element:<Project></Project>
        },
        {
          path:'/dashboard/contact',
          element:<Contact></Contact>
        },

      ]
    }
  ])

  export default router;