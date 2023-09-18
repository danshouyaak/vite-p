
const store = {
    state: {
        //放数据
    },
    action: {
        //放方法
        //名字统一管理
        // sarrpush: "sarrpush"

    },
    asyncAction: {
        //只放异步方法
    },
    actionNames: {}
}
let actionNames = {}
for (let key in store.actions) {
    actionNames[key] = key
}
store.actionNames = actionNames

export default store
