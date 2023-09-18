//import store from "@/store" 类型声明不要值接使用引用improt from
//而是使用 import("@/store")这种语法
//TS中获取仓库里面的类型
type RootState = ReturnType<typeof import("@/store").getState>
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function
} 