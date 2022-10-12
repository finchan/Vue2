import Vue from 'vue'
import Router from 'vue-router'
// 可以省略扩展名.vue
import Film from '@/views/Film'
import NowPlaying from '@/views/film/NowPlaying'
import ComingSoon from '@/views/film/ComingSoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
// 注册路由
Vue.use(Router)

const auth = {
  isLogin () {
    return false
  }
}

const router = new Router({
  mode: 'history', //  default:hash或者显式的配置 mode:hash hash模式
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          //  用这个目录是可以，也可以省略掉一级目录直接使用二级目录
          path: '/film/nowplaying',
          component: NowPlaying
        },
        {
          //  单独写二级目录前面不能添加/
          path: 'comingsoon',
          component: ComingSoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detail/:id', // 动态路由
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})

// 全局守卫
router.beforeEach((to, from, next) => {
  // if (to.path === '/center') {
  //   console.log('检查是否登陆')
  //   if (auth.isLogin()) {
  //     // 验证token - JWT
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // } else {
  //   next()
  // }
  next()
})

export default router
