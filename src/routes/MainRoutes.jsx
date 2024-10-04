import { createBrowserRouter } from "react-router-dom";
import Home from "../components/common/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "../components/common/NotFound";



const routes = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path:'*',
    element:<NotFound/>
  }
])

export default routes