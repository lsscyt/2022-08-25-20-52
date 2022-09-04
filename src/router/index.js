import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import order from '@/views/order.vue'
import sort from '@/views/sort.vue'
import my from '@/views/my.vue'
Vue.use(VueRouter)
const routes = [
  {
    name: '首页',
    path: '/index',
    component: index
  },
  { name: '订单', path: '/order', component: order },
  {
    name: '分类',
    path: '/sort',
    component: sort
  },
  {
    name: '我的',
    path: '/my',
    component: my
  }
]
const router = new VueRouter({
  routes
})
export default router
