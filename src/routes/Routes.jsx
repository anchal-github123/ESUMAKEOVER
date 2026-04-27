import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense, lazy } from "react"


const Layout = lazy(() => import("../layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const Service_Details = lazy(() => import("../pages/Service_Details"));


const Loader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Services", element: <Services /> },
      { path: "Contact", element: <Contact /> },
      { path: "services/:id", element: <Service_Details /> },
    ],
  },
]);

export default function Routes() {
  return (<RouterProvider router={routes}></RouterProvider>
  
  )
}

