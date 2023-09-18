import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux" // 创建redux
import reduxThunk from "redux-Thunk"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"
import XxxxState from "./XxxxState/reducer"

//组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr,
    XxxxState
})


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.
//__REDUX_DEVTOOLS_EXTENSION__() 为了让浏览器正常使用
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.
//     __REDUX_DEVTOOLS_EXTENSION__())//创建数据仓库


let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
({}):compose

const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

export default store