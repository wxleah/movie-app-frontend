// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import routes from "./routes"


function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ], { basename: '/movie-app-frontend/' })


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
