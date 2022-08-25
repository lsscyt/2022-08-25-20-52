<template>
  <div>
    <span v-for="(item, index) in arr"
      ><input type="checkbox" :value="item" v-model="arr2" />{{ item }}</span
    >

    <h1>所求的和为：{{ totalprice }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      arr2: [],
    };
  },
  computed: {
    totalprice() {
      return this.arr2.reduce((zero, acc) => {
        return (zero += acc);
      }, 0);
    },
  },
};
</script>

<style>
button {
  background-color: cyan;
}

span {
  margin: 10px;
}
</style>
