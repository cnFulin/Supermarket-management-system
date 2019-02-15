import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/',
      component: () => import('./views/index/index.vue'),
      children:[
        {
         //系统信息
         path: '',
         component: () => import('./views/sysmessage/sysmessage.vue')
       },
        {
          //添加用户组
          path:'/addgroup',
          name:'addgroup',
          component:()=>import('./views/addgroup/addgroup.vue')
        },
        {
          //系统设置
          path:'/sysconfig',
          name:'sysconfig',
          component:()=>import('./views/sysconfig/sysconfig.vue')
        },
        {
          //添加账号
          path: '/addacount',
          name: 'addacount',
          component: () => import('./views/addacount/addacount.vue')
        },
        // 账号管理
        {
          //添加账号
          path: '/acountmange',
          name: 'acountmange',
          component: () => import('./views/acountmange/acountmange.vue')
        },
        {
          //密码修改
          path:'/passwordedit',
          name:'passwordedit',
          component:()=> import('./views/passwordedit/passwordedit.vue')
        },
        {
          //分类管理
          path:'/classifymange',
          name:'classifymange',
          component:()=> import('./views/classifymange/classifymange.vue')
        },
        {
          //添加分类
          path:'/addclassify',
          name:'addclassify',
          component:()=> import('./views/addclassify/addclassify.vue')
        },
        {
          //添加商品
         path:'/addproducts',
         name:'addproducts',
         component:()=> import('./views/addproducts/addproducts.vue')
        },
        {
          // 商品管理
          path:'/productsmange',
          name:'productsmange',
          component:()=> import('./views/productsmange/productsmange.vue')
        },
        {
          //库存管理
          path:'/stockcontrol',
          name:'stockcontrol',
          component:()=> import('./views/stockcontrol/stockcontrol.vue')
        },
        {
          //添加库存
          path:'/Addinventory',
          name:'Addinventory',
          component:()=> import('./views/Addinventory/Addinventory.vue')
        },
        {
          //销售列表
          path:'/salelist',
          name:'salelist',
          component:() => import('./views/salelist/salelist.vue')
        },
        {
          //商品出库
          path:'/Outboundgoods',
          name:'Outboundgoods',
          component:()=> import('./views/Outboundgoods/Outboundgoods.vue')
        },
        {
          //商品退货
          path:'/Goodsreturn',
          name:'Goodsreturn',
          component:()=> import('./views/Goodsreturn/Goodsreturn.vue')
        },
        {
          //添加账号
          path:'/addvip',
          name:'addvip',
          component:()=> import('./views/addvip/addvip.vue')
        },
        {
          //账号管理
          path:'/vipmange',
          name:'vipmange',
          component:()=> import('./views/vipmange/vipmange.vue')
        },
      ]
    }
  ]
})
