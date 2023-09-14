// reducer使用了管理数据的
import { act } from "react-dom/test-utils"
import handler from "./index"



let reducer = (state = { ...handler.state }, action: { type: string, val: number }) => {
    //调用dispatch就回执行这里

    //进行一个深拷贝
    let newState = JSON.parse(JSON.stringify(state))


    for (let key in handler.actionNames) {
        //key是每一个键
        //判断是不是相等
        if (action.type === handler.actionNames[key]) {
            handler.actions[handler.actionNames[key]](newState, action)
            break
        }

    }

    return newState
}
export default reducer