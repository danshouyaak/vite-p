import { useSelector, useDispatch } from "react-redux" //用来获取仓库数据
//ts中提供了ReturnType用来获取函数类型的返回值
import numStatus from "@/store/NumStatus"
const View = () => {
    const dispatch = useDispatch()


    //对num的操作
    //获取数据
    const { num, sarr } = useSelector((state: RootState) => ({
        //通过useSelector 这个hook用来获取数据
        num: state.handleNum.num,
        sarr: state.handleArr.sarr
    }))


    //修改仓库数据
    //通过useDispatch修改仓库数据

    const changNum = () => {
        // dispatch({type:"字符串（记号）,val :3"}) type是固定的 val 是自定义的
        dispatch({ type: "add3"}) // 同步的写法
        //dispatch({ type: "add2", val: 10 })
    }

    const changNum2 = () => {
        // dispatch({type:"字符串（记号）,val :3"}) type是固定的 val 是自定义的
        // dispatch({ type: "add3", val: 100 }) // 同步的写法
        //dispatch({ type: "add2", val: 10 })

        //异步的写法 - redux-thunk的用法
        //格式dispatch(异步执行函数)
        // dispatch((dis: Function) => {
        //     setTimeout(() => {
        //         dis({ type: "add1" })
        //     }, 1000)
        // })


        //优化redux-thunk的写法
        dispatch(numStatus.asyncAction.anyncAdd1)
    }


    //对sarr的操作
    // const { sarr } = useSelector((state: RootState) => ({
    //     //通过useSelector 这个hook用来获取数据
    //     sarr: state.handleArr.sarr
    // }))

    const changArr = () => {
        dispatch({ type: "sarrpush", val: 100 })
    }


    return (
        <div className="home">
            <p>这是page1</p>
            <p>{num}</p>
            <button onClick={changNum}>同步按钮</button>
            <button onClick={changNum2}>异步按钮</button>
            <p>{sarr}</p>
            <button onClick={changArr}>按钮</button>
        </div>
    )
}
export default View