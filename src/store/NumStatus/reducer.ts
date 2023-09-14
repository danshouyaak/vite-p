// reducer使用了管理数据的
import { act } from "react-dom/test-utils"
import handleNum from "./index"



let reducer = (state = { ...handleNum.state }, action: { type: string, val: number }) => {
    //调用dispatch就回执行这里

    //进行一个深拷贝
    let newState = JSON.parse(JSON.stringify(state))


    //优化思路：switch的做法是拿着action.type跟后面的每一个case进行对比
    //这种做法很像遍历 做成对象才能遍历:actionName

    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.action[handleNum.add1](newState, action)
    //         break
    //     case handleNum.add2:
    //         handleNum.action[handleNum.add2](newState, action)
    //         break
    //     default:
    //         break
    // }
    ///优化上面switch代码 我们设添加一个方法，都要在这里多添加一个case语句
    // 拿着action.type和actionName进行每一项的对比 如果相等就调用 模块名.actions[下标](newState,action)
    for (let key in handleNum.actionNames) {
        //key是每一个键
        //判断是不是相等
        if (action.type === handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState, action)
        }
        break
    }
    //这样写就达到每一次写一个方法都不需要手动来添加这几句case

    return newState
}
export default reducer