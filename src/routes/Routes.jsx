import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy, memo } from "react";

// Lazy imports
const Layout = lazy(() => import("../layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const ServiceDetails = lazy(() => import("../pages/Service_Details"));

// Loader Component
const Loader = memo(() => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

// Wrapper for lazy pages (avoids repeating Suspense)
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Layout),
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "about", element: withSuspense(About) },
      { path: "services", element: withSuspense(Services) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "services/:id", element: withSuspense(ServiceDetails) },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default memo(Routes);