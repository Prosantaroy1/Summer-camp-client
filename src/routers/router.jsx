import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classespage from "../pages/Classespage/Classespage";
import Instructorpage from "../pages/Instructorpage/Instructorpage";
import Dashboard from "../layout/Dashboard";
import Loginpage from "../pages/Home/Login page/Loginpage";
import Registerpage from "../pages/Home/Register page/Registerpage";
import Mycart from "../Dashboard/My Cart/Mycart";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
           path: 'class',
           element: <Classespage/>
        },
        {
            path: 'instructor',
            element: <Instructorpage/>
        },
        {
            path: 'login',
            element: <Loginpage/>
        },
        {
            path: 'register',
            element: <Registerpage/>
        }       
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><Dashboard/></PrivateRouter>,
        children: [
            {
              path: 'mycart',
              element:  <Mycart/>
            },
            {
              path:'/dashboard/history',
              element: <PaymentHistory/>
            }
        ]
    }
  ]);

export default router;