import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Home/Categories/Categories";

const routes = createBrowserRouter([
      
      {
          path : '/',
          element: <Main/>,
          children: [
            {
                  path: "/",
                  element: <Home/>
            },
            {
                   path : '/category/:id',
                   element: <Categories></Categories>,
                   
            }
            
          ]
      }
]);

export default routes;