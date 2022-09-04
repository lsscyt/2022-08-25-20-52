<!-- eslint-disable-line  -->
<template>
  <div>
    <div class="big">
      <router-link
        to="/index?indexnew=新闻首页&indexactive=首页活动"
        class="index"
        >首页</router-link
      >
      <router-link
        :to="{
          path: '/sort',
          query: { shopSOrt: '商品分类', foodSort: '零食分类' }
        }"
        class="sort"
        >分类</router-link
      >
      <router-link
        class="order"
        :to="{
          name: '订单',
          params: { foodSort: '零食订单', closesort: '购物车订单' }
        }"
        >订单</router-link
      >
      <router-link
        :to="{
          name: '我的',
          params: {
            money: '个人余额',
            orders: '个人订单'
          }
        }"
        class="my"
        >我的</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
.big {
  background-color: pink;
}
.index,
.sort,
.order,
.my {
  color: #000;
  margin: 150px;
  font-size: 40px;
}
</style>
