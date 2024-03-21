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
      path: import.meta.env.DEV ? '/' : '/movie-app-frontend/',
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
