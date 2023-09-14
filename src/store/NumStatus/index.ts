const store = {
    state: {
        //放数据
    },
    actions: {
        //放方法

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
