<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="uname" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="userSex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="Add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="deleteIng(item)">删除</button>
            <button @click="editIng(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: JSON.parse(localStorage.getItem("todo")) || [
        { id: 1, name: "张三", age: "18", sex: "男" },
        { id: 2, name: "李四", age: "28", sex: "男" },
      ],

      uname: "",
      age: "",
      userSex: "男",
    };
  },
  methods: {
    Add() {
      if (this.uname === "" || this.age == "") {
        alert("请正确输入");
      } else {
        const id = this.id > 0 ? 0 : this.arr.at(-1).id + 1;
        const total = {
          id: id,
          name: this.uname,
          age: this.age,
          sex: this.userSex,
        };
        this.arr.push(total);
      }
    },

    deleteIng({ id }) {
      this.arr = this.arr.filter((item) => item.id !== id);
    },
  },
  watch: {
    deepp: true,
    immediate: true,
    arr: {
      handler() {
        localStorage.setItem("todo", JSON.stringify(this.arr));
      },
    },
  },
};
</script>
