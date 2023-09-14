// reducer使用了管理数据的
import handleNum from "./NumStatus"


const defaultState = { // 准备数据
    //存放我们的数据
    // num: NumStatus.state.num
    ...handleNum.state, //解构的写法
}
let reducer = (state = defaultState, action: { type: string, val: number }) => {
    //调用dispatch就回执行这里

    //进行一个深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case handleNum.add1:
            handleNum.action[handleNum.add1](newState, action)
            break
        case handleNum.add2:
            handleNum.action[handleNum.add2](newState, action)
            break
        default:
            break

    }


    return newState
}
export default reducer