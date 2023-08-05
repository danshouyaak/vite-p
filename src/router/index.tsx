import React, { lazy } from "react" //是一个函数
import Home from "../views/Home"
// import About from "../views/About"
const About = lazy(() => import("../views/About")) //懒加载的模式需要我们添加一个LOading组件
const User = lazy(() => import("../views/User"))
//Navigate重定向组件
import { Navigate } from "react-router-dom"



const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)


const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        //懒加载的模式的组件的写法，外面需要套一层 Loading的提示组件
        path: "/about",
        element: withLoadingComponent(<About />)

    },
    {
        path: "/user",
        element: withLoadingComponent(<User />)
    }
]
export default routes