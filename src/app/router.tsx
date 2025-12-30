import { CategoriesPage } from "@/pages/categories/CategoriesPage";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { WelcomePage } from "@/pages/welcome/WelcomePage";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./root-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      }
    ],
  },
])