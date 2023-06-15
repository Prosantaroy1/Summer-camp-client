import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classespage from "../pages/Classespage/Classespage";
import Instructorpage from "../pages/Instructorpage/Instructorpage";
import Dashboard from "../layout/Dashboard";
import Loginpage from "../pages/Home/Login page/Loginpage";
import Registerpage from "../pages/Home/Register page/Registerpage";

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
        element: <Dashboard/>
    }
  ]);

export default router;