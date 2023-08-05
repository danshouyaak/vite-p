import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css" //初始化样式


//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
