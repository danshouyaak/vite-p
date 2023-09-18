const store = {
    state: {
        num: 40
    },
    actions: {//只放同步方法
        add1(newState: { num: number }, action: { type: string }) {
            //进行异步操作
            newState.num++
        },
        add2(newState: { num: number }, action:
            { type: string, val: number }) {
            newState.num += action.val
        },
        add3(newState: { num: number }, action:
            { type: string, val: number }) {
            newState.num += action.val
        },
    },

    //优化redux-thunk的异步写法（模仿Vuex的写法）
    asyncAction: {//只放异步写法
        anyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({ type: "add1" })
            }, 800)
        }
    },
    //名字统一管理
    // add1: "add1",
    // add2: "add2"
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2"
    // }

    //遍历actions
    actionNames: {}
}
let actionNames = {} // 全局的actionNames
for (let key in store.actions) {
    actionNames[key] = key
}
store.actionNames = actionNames // 把全局的actionName赋值给store的actionName对象
//做到actionNames自动生成
export default store

//封装的目的有利于我们的开发或者维护
//封装的思路是：将来开发的时候只需要把数据
//写和方法写入到这个状态文件中，例如：
//XxxxState/index.ts，而不需要再去操作其他的问文件。（我们往这个方向去封装）
