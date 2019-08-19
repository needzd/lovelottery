import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Tvchart from '@/pages/Tvchart'
import Codetrend from '@/pages/Codetrend'
import Missdata from '@/pages/Missdata'
import My from '@/pages/My'
import Lotterydetail from '@/components/index/Lotterydetail'
import Charge from  '@/components/my/Charge'
import Concern from  '@/components/my/Concern'
import Browse from  '@/components/my/Browse'
import Xgphone from  '@/components/my/Xgphone'
import Xgphoneyzm from  '@/components/my/Xgphoneyzm'
import Xginfo from  '@/components/my/Xginfo'
import Xgname from  '@/components/my/Xgname'
import Xgpwd from  '@/components/my/Xgpwd'
import Login from '@/components/my/Login'
import Myindex from '@/components/my/Myindex'
import Reg from '@/components/my/Reg'
import Findpwd from '@/components/my/Findpwd'
import KJdetailcon from '@/components/index/KJdetailcon'
import ZSdetailcon from '@/components/index/ZSdetailcon'
import JHdetailcon from '@/components/index/JHdetailcon'
import XQdetailcon from '@/components/index/XQdetailcon'
import ZHdetailcon from '@/components/index/ZHdetailcon'
import DQdetailcon from '@/components/index/DQdetailcon'
import YLdetailcon from '@/components/index/YLdetailcon'
import CLdetailcon from '@/components/index/CLdetailcon'
import FXdetailcon from '@/components/index/FXdetailcon'
import LZdetailcon from '@/components/index/LZdetailcon'
import LRdetailcon from '@/components/index/LRdetailcon'
import BTdetailcon from '@/components/index/BTdetailcon'
import GXQdetailcon from '@/components/index/GXQdetailcon'
import JQdetailcon from '@/components/index/JQdetailcon'
import Jqarticle from '@/components/index/Jqarticle'

Vue.use(Router);
export default new Router({
  routes: [
    {path: '/index', component: Index,},
    {path: '/tvchart', component: Tvchart},
    {path: '/codetrend', component: Codetrend},
    {path: '/missdata', component: Missdata},
    {path: '/my', component: My, meta: {title: '', requireAuth: true}},
    {path: '/', redirect: 'index'},
    {path: '/lotterydetail', component: Lotterydetail,
      children:[
        {path: '/lotterydetail', redirect: 'kjdetailcon'},
        {path: '/lotterydetail/kjdetailcon', component: KJdetailcon},
        {path: '/lotterydetail/zsdetailcon', component: ZSdetailcon},
        {path: '/lotterydetail/jhdetailcon', component: JHdetailcon},
        {path: '/lotterydetail/xqdetailcon', component: XQdetailcon},
        {path: '/lotterydetail/zhdetailcon', component: ZHdetailcon},
        {path: '/lotterydetail/dqdetailcon', component: DQdetailcon},
        {path: '/lotterydetail/yldetailcon', component: YLdetailcon},
        {path: '/lotterydetail/cldetailcon', component: CLdetailcon},
        {path: '/lotterydetail/fxdetailcon', component: FXdetailcon},
        {path: '/lotterydetail/lzdetailcon', component: LZdetailcon},
        {path: '/lotterydetail/lrdetailcon', component: LRdetailcon},
        {path: '/lotterydetail/btdetailcon', component: BTdetailcon},
        {path: '/lotterydetail/gxqdetailcon', component: GXQdetailcon},
        {path: '/lotterydetail/jqdetailcon', component: JQdetailcon}
        ]
    },
    {path: '/jqdetailcon/jqarticle', component: Jqarticle},
    {path: '/charge', component: Charge},
    {path: '/concern', component: Concern},
    {path: '/browse', component: Browse},
    {path: '/xgphone', component: Xgphone},
    {path: '/xgphoneyzm', component: Xgphoneyzm},
    {path: '/xginfo', component: Xginfo},
    {path: '/xgname', component: Xgname},
    {path: '/xgpwd', component: Xgpwd},
    {path: '/login', component: Login},
    {path: '/myindex', component: Myindex},
    {path: '/reg', component: Reg},
    {path: '/findpwd', component: Findpwd},

  ]
})
