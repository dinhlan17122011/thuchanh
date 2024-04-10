import HomePages from'../pages/Home/HomePages'
import No from '../pages/No/No'
import OrderPages from'../pages/Order/OrderPages'
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
        path:'*',
        page:No
    }
]
