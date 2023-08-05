import { useState } from 'react'
import { Link, useRoutes } from "react-router-dom"
import router from './router'
//import 'antd/dist/reset.css'//全局引入
function App() {
  const [count, setCount] = useState(0)
  const outLet = useRoutes(router)
  return (
    <div className='App'>
      {/*实现跳转*/}
      {/* <Link to="/home">Home</Link>*/}

      {/*  <Link to="/about">About</Link>*/}
      {/*    <Link to="/user">User</Link>*/}
      {/* { 顶级组件
      <Button type='primary'>我们按钮</Button>
      <UpCircleOutlined style={{fontSize:'40px',color:'red'}}/>} */}

      {/* 占位符组件 类似于窗口 用来展示组件的 */}
      {outLet}
    </div>
  )
}

export default App
