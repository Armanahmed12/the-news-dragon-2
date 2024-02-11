import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../pages/Home/Categories/Categories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/NewsDetails/News/News";
import LogIn from "../pages/LogIn/LogIn";

import LogInLayout from "../layouts/LogInLayout";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/LogIn/Register";

const routes = createBrowserRouter([
      // {
      //        path: '/',
      //        element: <LogInLayout/>,
      //        children: [
      //             {
      //                   path: '/',
      //                   element: <Navigate to="/" replace={true}></Navigate>
      //             },
      //             {
      //                   path: '/logIn',
      //                   element: <LogIn/>
      //                },
      //             {
      //                path: '/register',
      //                element: <Register/>
      //             }
      //        ]
      // },
      {
          path : '/category',
          element: <Main/>,
          children: [
            
            {
                   path : '/category/0',
                   element: <Categories></Categories>,
                   loader : ({params}) => fetch(`http://localhost:3000/category/0`)
                   
            },
            
            
          ]
      },
      // {
      //       path: 'newsDetails',
      //       element: <PrivateRoute><NewsLayout/></PrivateRoute>,
      //       children: [
      //           {
      //              path: ':newsId',
      //         element: <News/>,
      //              loader : ({params}) => fetch(`https://the-news-dragon-server-2-k0q4pl22c-md-arman-ahmeds-projects.vercel.app/newsDetails/${params.newsId}`)
      //           }
      //       ]
      // }
]);

export default routes;