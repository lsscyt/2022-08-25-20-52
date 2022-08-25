<template id="app">
  <div>
    <input type="checkbox" value="科幻" v-model="hoppy" />科幻
    <input type="checkbox" value="喜剧" v-model="hoppy" />喜剧
    <input type="checkbox" value="动漫" v-model="hoppy" />动漫
    <input type="checkbox" value="冒险" v-model="hoppy" />冒险
    <input type="checkbox" value="科技" v-model="hoppy" />科技
    <input type="checkbox" value="军事" v-model="hoppy" />军事
    <input type="checkbox" value="娱乐" v-model="hoppy" />娱乐
    <input type="checkbox" value="奇闻" v-model="hoppy" />奇闻
    <ul>
      <li v-for="(item, index) in hoppy" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoppy: [],
    };
  },
};
</script>

<style></style>
