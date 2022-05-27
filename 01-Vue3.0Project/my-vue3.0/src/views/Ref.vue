<template>
  <div class="ref">
    <h2>===== ref 的作用：将数据包装成响应式数据对象 =====</h2>
    <!-- 在视图层要访问双向绑定的数据可以直接用 num 而不用 num.value -->
    <div class="num-box">{{num}}</div>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <div>ref 函数也可以传入<span style="color: red;">数组</span>和<span style="color: red;">对象</span>类型进行包装，如下：</div>
    <ul>
      <li v-for="(item, index) in personList.list" :key="index">{{item.name}}：{{item.age}} 岁</li>
    </ul>

    <h2>===== ref 的另外一个作用：获取页面中的元素 =====</h2>
    <input type="text" ref="inputRef" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "ref",
  setup() {
    // ===== ref 的作用：将数据包装成响应式数据对象 =====
    let num = ref(100); // 要做响应式绑定数据可以用 ref() 函数进行包装
    console.log(num);
    console.log(num.value); // 在数据层，要访问数据要用 num.value

    const add = () => {
      num.value++;
    };

    const subtract = () => {
      num.value--;
    };

    // 如果用 ref 对象/数组，内部会自动将对象/数组转换为 reactive 的代理对象
    // ref 内部：通过给 value 属性添加 getter/setter 来实现对数据的劫持
    // reactive 内部：通过使用 Proxy 来实现对对象内部所有数据的劫持，并通过 Reflect 操作对象内部数据
    let personList = ref({
      list: [
        { name: "sunzj", age: 26 },
        { name: "hufy", age: 25 },
      ],
    });
    console.log(personList.value.list[0]); // ref 函数包装的对象数据在数据层要获取还是要通过 value 获取

    // ===== ref 的另外一个作用：获取页面中的元素 =====
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus(); // 自动获取焦点
    });

    // ===== 通过 getCurrentInstance 函数获取页面中的元素 =====
    // let currentInstance: any = "";
    // onMounted(() => {
    //   currentInstance = getCurrentInstance();
    //   currentInstance.ctx.$refs.inputRef &&
    //     currentInstance.ctx.$refs.inputRef.focus();
    // });
    return {
      personList,
      num,
      add,
      subtract,
      inputRef,
    };
  },
});
</script>
<style scoped>
</style>
