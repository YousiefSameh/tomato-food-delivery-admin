import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// Templates
import AppTemplate from "@templates/App.templates";
import Loading from "@components/Loading";

// Pages
const Add = lazy(() => import("@pages/Add"));
const List = lazy(() => import("@pages/List"));
const Orders = lazy(() => import("@pages/Orders"));

const router = createBrowserRouter([
  {
    element: <AppTemplate />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>
        ),
      },
      {
        path: "/add",
        element: (
          <Suspense fallback={<Loading />}>
            <Add />
          </Suspense>
        ),
      },
      {
        path: "/orders",
        element: (
          <Suspense fallback={<Loading />}>
            <Orders />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
