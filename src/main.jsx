import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../layout/Root/Root.jsx';
import Home from '../page/Home/Home.jsx';
import Categories from '../page/Categories/Categories.jsx';
import ErrorApp from '../component/ErrorApp/ErrorApp.jsx';
import PageNotFound from '../component/PageNotFound/PageNotFound.jsx';
import AllProduct from '../page/AllProduct/AllProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorApp></ErrorApp>,
     children: [
      { index: true, Component: Home },
      { path: "categories", Component: Categories },
      { path: "all-product", Component: AllProduct }
     ]
    
  },
  {
    path: "*",
    Component: PageNotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
