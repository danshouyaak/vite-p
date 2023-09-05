import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];
//登录请求到数据之后，就可以跟item这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目一',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目二',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目三',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            },
            {
                label: '栏目302',
                key: '/page3/page302'
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目四',
        key: '/page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            }
        ]
    },
    {
        label: '栏目五',
        key: '/page5',
        icon: <FileOutlined />
    },
]
const Comp: React.FC = () => {

    const navigateTo = useNavigate()
    // 点击获取到路径 设置跳转路由
    const currentRoute = useLocation() // 获取当前路由
    console.log("---------------", currentRoute);

    const menuClick = (e: { key: string }) => {

        //编程式导航跳转需要用到 hook
        navigateTo(e.key)
        console.log('点击了', e.key);

    }

    //拿着currentRoute.pathname 跟items数组的每一项的children的key值进行对比 如果找到了就 拿他上一级的key作为初始值
    //这个key给到openKeys数组的元素作为初始值
    let firstOpenKey: string = ""

    //进行对比
    function findKey(obj:{key:string}) {
        return obj.key === currentRoute.pathname
    }

    //要对比多个children 循环遍历
    for (let i = 0; i < items.length; i++) {
        //判断是否找到  先判断是否有children 有才进行下一步寻找
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string
            break;
        }
    }
    // items[]['children'].find(findKey)//如过拿到一个对象 转为布尔值true 没有为false


    const [openKeys, setopenKeys] = useState([firstOpenKey]);//设置展开项的初始值
    const handleOpenChange = (keys: string[]) => {
        //展开和回收某项菜单的时候执行这里的代码
        // console.log(keys);
        //把这个数组修改为最后一项,因为只要一项是展开的
        setopenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]} //表示当前样式所在的选中项的key
            mode="inline"
            //菜单项数据
            items={items}
            onClick={menuClick}

            ///某项菜单展开和回收的事件
            onOpenChange={handleOpenChange}

            //当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )
}
export default Comp