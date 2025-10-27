import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import HistorySignals from "./pages/HistorySignals";

const router = createBrowserRouter(
  [
    {path: "/", element:<Home/>},
    {path: "/about", element:<About/>},
    {path: "/contact", element:<Contact/>},
    {path: "/history", element:<HistorySignals/>}
  ]
);

export default function App(){
  return (
  
    <RouterProvider router={router}/>
  
  )
}
