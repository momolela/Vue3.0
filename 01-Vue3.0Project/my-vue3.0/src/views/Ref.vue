<template>
  <div class="ref">
    <!-- 在视图层要访问双向绑定的数据可以直接用 num 而不用 num.value -->
    <div class="num-box">{{num}}</div>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <div>ref 函数也可以传入<span style="color: red;">数组</span>和<span style="color: red;">对象</span>类型进行包装，如下：</div>
    <ul>
      <li v-for="(item, index) in personList.list" :key="index">{{item.name}}：{{item.age}} 岁</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ref',
  setup() {

    let num = ref(100); // 要做响应式绑定数据可以用 ref() 函数进行包装
    console.log(num);
    console.log(num.value); // 在数据层，要访问数据要用 num.value

    const add = () => {
      num.value++;
    }

    const subtract = () => {
      num.value--;
    }

    let personList = ref({ list: [{ name: 'sunzj', age: 26 }, { name: 'hufy', age: 25 }] });
    console.log(personList.value.list[0]); // ref 函数包装的对象数据在数据层要获取还是要通过 value 获取

    return {
      personList,
      num,
      add,
      subtract
    };
  }
})
</script>
<style scoped>
</style>
