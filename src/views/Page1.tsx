import { useSelector, useDispatch } from "react-redux" //用来获取仓库数据
//ts中提供了ReturnType用来获取函数类型的返回值

const View = () => {
    const dispatch = useDispatch()


    //对num的操作
    //获取数据
    const { num } = useSelector((state: RootState) => ({
        //通过useSelector 这个hook用来获取数据
        num: state.handleNum.num
    }))


    //修改仓库数据
    //通过useDispatch修改仓库数据

    const changNum = () => {
        // dispatch({type:"字符串（记号）,val :3"}) type是固定的 val 是自定义的
        dispatch({ type: "add1" })
        //dispatch({ type: "add2", val: 10 })
    }
    const changArr = () => {
        dispatch({ type: "sarrpush", val: 100 })
    }



    //对sarr的操作
    const { sarr } = useSelector((state: RootState) => ({
        //通过useSelector 这个hook用来获取数据
        sarr: state.handleArr.sarr
    }))


    return (
        <div className="home">
            <p>这是page1</p>
            <p>{num}</p>
            <button onClick={changNum}>按钮</button>
            <p>{sarr}</p>
            <button onClick={changArr}>按钮</button>
        </div>
    )
}
export default View