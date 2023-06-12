import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classespage from "../pages/Classespage/Classespage";
import Instructorpage from "../pages/Instructorpage/Instructorpage";

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
        }
      ]
    },
  ]);

export default router;