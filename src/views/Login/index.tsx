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
    const [usenameVal, setUsenameVal] = useState("") //定义用户输入信息这个变量
    const [passwordVal, setPasswordVal] = useState("") // 定义用户输入密码的这个变量
    const [captchaVal, setCaptchaVal] = useState("")//定义用户输入验证码这个变量

    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        //获取用户输入的用户名
        // console.log(e.target.value);
        setUsenameVal(e.target.value)
        //修改usenameVal这个变量为用户输入的那个值以后拿到usenameVal这个变量就相当于拿到用户这个值
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value)
    }

    //点击登录按钮事件
    const gotLogin = () => {
        console.log("用户输入的用户名，密码，验证码分别是：", usenameVal, passwordVal, captchaVal);

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
                        <Input.Password placeholder="请输入密码：" onChange={passwordChange}></Input.Password>
                        <div className="captchaBox">
                            <Input placeholder="请输入验证码：" onChange={captchaChange}></Input>
                            <div className="captchaImg">
                                <img src="" alt="" height="38" />
                            </div>
                        </div>
                        <Button type="primary" block className="loginBtn" onClick={gotLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default view
