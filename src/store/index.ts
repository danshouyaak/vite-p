import { legacy_createStore, combineReducers } from "redux" // 创建redux

import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"

//组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr
})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.
//__REDUX_DEVTOOLS_EXTENSION__() 为了让浏览器正常使用
const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__())//创建数据仓库

export default store