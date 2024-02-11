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
      {
             path: '/',
             element: <LogInLayout/>,
             children: [
                  {
                        path: '/',
                        element: <Navigate to="/category/0" replace={true}></Navigate>
                  },
                  {
                        path: '/logIn',
                        element: <LogIn/>
                     },
                  {
                     path: '/register',
                     element: <Register/>
                  }
             ]
      },
      {
          path : '/category',
          element: <Main/>,
          children: [
            
            {
                   path : '/category/:categoryId',
                   element: <Categories></Categories>,
                   loader : ({params}) => fetch(`https://the-dragon-news-server-snowy-iota.vercel.app/category/${params.categoryId}`)
                   
            },
            
            
          ]
      },
      {
            path: 'newsDetails',
            element: <PrivateRoute><NewsLayout/></PrivateRoute>,
            children: [
                {
                   path: ':newsId',
              element: <News/>,
                   loader : ({params}) => fetch(`https://the-dragon-news-server-snowy-iota.vercel.app/newsDetails/${params.newsId}`)
                }
            ]
      }
]);

export default routes;