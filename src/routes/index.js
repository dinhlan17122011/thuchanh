import HomePages from'../pages/Home/HomePages'
import No from '../pages/No/No'
import Tyle from '../pages/Sampham/sampham'
import OrderPages from'../pages/Order/OrderPages'
import CTSanPham from '../components/Chitietsanpham/CTSanPham'
import SingUp from '../pages/Danhnhap/SingUp'
export const routes =[
    {
        path:'/',
        page:HomePages
    },
    {
        path:'/khac',
        page:OrderPages
    },
    {
        path:'/sampham',
        page:Tyle
    },
    {
        path:'/chitiet',
        page:CTSanPham,
    },
    {
        path:'/danhnhap',
        page:SingUp,
        isShowHeader: false

    },
    {
        path:'*',
        page:No
    }
]
