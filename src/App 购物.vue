<template id="app">
  <div>
    <div><h1>苹果10￥/斤，折扣8折</h1></div>
    <div>
      <h1>请输入要购买的斤数 <input type="text" v-model="msg" /></h1>
    </div>
    <h1>
      <div>
        结账单：总价：{{ this.msg * 10 }}￥元折后价：{{
          this.msg * 8
        }}￥省了：{{ this.msg * 2 }}￥元
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "1",
    };
  },
};
</script>

<style></style>
