import { useEffect, useState } from "react"
import style from "./login.module.scss"
import intitLoginBg from "./init.ts"
import { Input, Space, Button } from "antd"
//import 'antd/dist/antd.less'
import './login.less'
import { log } from "console"

const view = () => {
    //加载完组件之后,加载背景
    useEffect(() => {
        intitLoginBg();
        window.onresize = function () {
            intitLoginBg()
            //窗口的改变引起初始化
        }
    }, [])

    //获取用户输入的信息
    const [usenameVal,set] = useState("") //存储用户输入的信息
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        //获取用户输入的用户名
        console.log(e.target.value);

    }

    return (
        // 登陆盒子
        <div className={style.loginPage}>

            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>

            <div className={style.loginBox + " loginBox"}>
                {/* 辅助类 空格加类名 */}

                {/* 登录盒子 */}

                <div className={style.title}>
                    {/* 登录标题 */}
                    <h1>----------</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="请输入用户名：" onChange={usernameChange}></Input>
                        <Input.Password placeholder="请输入密码："></Input.Password>
                        <div className="captchaBox">
                            <Input placeholder="请输入验证码：" ></Input>
                            <div className="captchaImg">
                                <img src="" alt="" height="38" />
                            </div>
                        </div>
                        <Button type="primary" block className="loginBtn">登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default view
