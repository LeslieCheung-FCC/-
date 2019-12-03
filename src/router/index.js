import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Guide from '@/components/guide'
import Meet from '@/components/meet'
import Mine from '@/components/mine'
import Scenic from '@/components/scenic'
import Recommend from '@/components/home/recommend'
import Focus from '@/components/home/focus'
import Part from '@/components/scenic/part/part.vue'

//景点刷选
import Choose from '@/components/scenic/choose'
//足迹
import  Footline from '@/components/mine/center/footline'
//相册
import Myphoto from '@/components/mine/center/myphoto'
//相册上传
import { Uploader } from 'vant';
Vue.use(Uploader);
//他人导游详情
import Hertravel from '@/components/guide/items/hertravel'
//向导bannder
import Guidebanner from '@/components/guide/items/guidebanner'
//修改个人资料
import Mydata from '@/components/mine/center/mydata'
//水上乐园
import Water from '@/components/scenic/waterPark/water'
//发起游记
import Announce from '@/components/mine/announce'


// 首页搜索框
import Home_search from '@/components/home/home_search'
// 一日游路由
import One_play from '@/components/home/one_play'
// 游记页路由
import Travel from '@/components/home/travel'
import Tra_Recommend from '@/components/home/tra_Recommend'
// 飞机票路由
import Air_ticket from '@/components/home/air_ticket'
import Air_details from '@/components/home/air_details'
import Air_buy from '@/components/home/air_buy'
// 周边游路由
import Around_travel from '@/components/home/around_travel'
//推荐详情页
import Details from '@/components/home/details'


import IndexOne from '@/components/scenic/cate/index-one'
import IndexTwo from '@/components/scenic/category/index'

// ..................................................................

// ......................................


// 景点
import Composite from '@/components/scenic/composite'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 引入搭讪页面组件
// import Meet from '../components/meet/index.vue'
import Chat from '../components/meet/chat'
import List from '../components/meet/list.vue'
import nearby_list from '../components/meet/chat_list/nearby_list.vue'
import nearby_walks from '../components/meet/chat_list/nearby_walks.vue'
import Wode from '../components/meet/chat_list/wode.vue'
import Tongzhi from '../components/meet/chat_list/tongzhi.vue'
import Zan from '../components/meet/chat_list/zan.vue'
import Huifu from '../components/meet/chat_list/huifu.vue'
import Tou from '../components/meet/chat_list/tongyouxiangqing.vue'

// 引导页
//起始页
import Start from '@/components/login/start.vue'
//引导页
import Guidance from '@/components/login/guidance.vue'
//登录
import Register from '../components/login/register.vue'
//注册
import Register1 from '../components/login/register-one.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: '/Start'
    },
    //起始页
    {
      path: '/Start',
      component: Start
    },
   
    //引导页
    {
      path: '/Guidance',
      component: Guidance
    },
    //登录
    {
      path: '/Register',
      component: Register
    },
    //注册
    {
      path: '/Register1',
      component: Register1
    },
    //首页路由
    {
      path: '/Home',
      component: Home,
      children: [{
          path: '/',
          redirect: "Recommend"
        },
        {
          path: 'Recommend',
          component: Recommend
        }

      ]
    },
    {
      path: '/Focus',
      component: Focus
    },
    {
      path:'/Details/:id',
      component:Details
    },
    // 一日游路由
    {
      path: '/One_play',
      component: One_play
    },
    // 周边游路由
    {
      path: '/Around_travel',
      component: Around_travel
    },
    // 首页搜索框
    {
      path: '/Home_search',
      component: Home_search
    },
    // 首页游记路由
    {
      path: '/Travel',
      component: Travel,
      children: [{
          path: '/',
          redirect: "Tra_Recommend"
        },
        {
          path: 'Tra_Recommend',
          component: Tra_Recommend
        }
      ]
    },
    // 首页飞机票
    {
      path: '/Air_ticket',
      component: Air_ticket
    },
    // 飞机票详情页
    {
      path: '/Air_details',
      component: Air_details
    },
    {
      path:'/Air_buy',
      component:Air_buy
    },

    //景点打开
    {
      path: '/IndexOne',
      component:IndexOne
    },
    //美食
    {
      path: '/IndexTwo',
      component:IndexTwo
    },
    //景点刷选
    {
      path: '/Choose',
      component:Choose
    },
    {
    path:'/Announce',
     component:Announce
    },
    //修改资料
    {
     path:'/Mydata',
     component:Mydata
    },
     //足迹
     {
      path: '/Footline',
      component:Footline
    },
     //相册
     {
      path: '/Myphoto',
      component:Myphoto
    },
    //他人详情动态路由30
    {
     path:'/Hertravel/:id',
      component:Hertravel
    },
    {
     path:'/Water',
     component:Water
    },
    //向导
    {
      path: '/Guide',
      component: Guide
    },
    //向导banner
    {
      path:'/Guidebanner',
      component:Guidebanner
    },

    // 搭讪页面路由
    {
      path: '/Meet',
      component: Meet,
      children: [ //聊天页面的二 三 级路由
        {
          path: "/",
          redirect: "chat"
        },
        {
          path: 'chat',
          name: "Chat",
          component: Chat,
          children: [

            {
              path: "nearby",
              name: "nearby_list",
              component: nearby_list
            },
            {
              path: "walks",
              name: "nearby_walks",
              component: nearby_walks
            },
            {
              path: "/",
              redirect: "nearby"
            }
          ]
        },
        {
          path:"/wode",
          component:Wode
        },
        {
          path:"/tongzhi",
          component:Tongzhi
        },
        {
          path:"/zan",
          component:Zan
        },
        {
          path:"/huifu",
          component:Huifu
        },
        {
          path:"/xiangqing",
          component:Tou
        },
        //列表页面路由
        {
          path: 'list',
          name: "List",
          component: List
        },

      ]
    },

    
    //个人中心
    {
      path: '/Mine',
      component: Mine,

    },
    {
      path: '/Scenic',
      component: Scenic,
    }
    ,
    {
      path: '/Part/:id',
      name: "Part",
      component: Part
    },

  ]
})
