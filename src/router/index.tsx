import React, { lazy } from "react" //是一个函数
import Home from "../views/Home"
// import About from "../views/About"
const About = lazy(() => import("../views/Page301")) //懒加载的模式需要我们添加一个LOading组件
const User = lazy(() => import("../views/User"))
const Login = lazy(() => import("../views/Login"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

//Navigate重定向组件
import { Navigate } from "react-router-dom"



const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)


const routes = [
    //嵌套路由的开始
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            }
        ]
    },    //嵌套路由结束
    {
        path: "/login",
        element:<Login/>
    },
    {
        //访问其余路径没有配置的路径直接跳转到首页
        path: "*",
        element: <Navigate to="/page1" />
    }



    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     //懒加载的模式的组件的写法，外面需要套一层 Loading的提示组件
    //     path: "/about",
    //     element: withLoadingComponent(<About />)

    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // }
]
export default routes