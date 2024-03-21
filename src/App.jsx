// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import routes from "./routes"
import { defineConfig } from 'vite';


function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ], { basename: import.meta.env.DEV ? '/' : defineConfig.base })


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
