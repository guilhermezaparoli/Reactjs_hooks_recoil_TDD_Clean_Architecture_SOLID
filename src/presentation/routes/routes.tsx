import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/index"

export const Router = createBrowserRouter([
    {
        path: "/login",
        Component: Login
    }
])