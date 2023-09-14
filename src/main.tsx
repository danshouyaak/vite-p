import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css" //初始化样式


//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'


//状态管理
import { Provider } from "react-redux"
import store from '@/store'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* //  <React.StrictMode>//严格模式 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider >
)
