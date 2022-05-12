<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from "vue";
// 引入一个子级组件
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字
  name: "Home",
  // 注册子级组件
  components: {
    HelloWorld,
  },
});
</script>
