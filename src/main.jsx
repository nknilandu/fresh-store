import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../layout/Root/Root.jsx";
import Home from "../page/Home/Home.jsx";
import Categories from "../page/Categories/Categories.jsx";
import ErrorApp from "../component/ErrorApp/ErrorApp.jsx";
import PageNotFound from "../component/PageNotFound/PageNotFound.jsx";
import AllProduct from "../page/AllProduct/AllProduct.jsx";
import LoadingPage from "../component/Loading/LoadingPage.jsx";
import Details from "../page/Details/Details.jsx";
import AuthProvider from "../provider/AuthProvider.jsx";
import Login from "../page/login/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorApp></ErrorApp>,
    children: [
      { index: true, Component: Home },

      {
        path: "categories",
        loader: () => fetch("/category.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        Component: Categories,
      },

      { path: "all-product", Component: AllProduct },
      { path: "login", Component: Login },

      {
        path: "details/:id",
        loader: async () => {
          const data = await fetch("/product.json");
          return data.json();
        },
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        Component: Details,
      },
    ],
  },

  {
    path: "*",
    Component: PageNotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
