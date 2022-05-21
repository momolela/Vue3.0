<template>
  <div class="reactive">
    <ul>
      <li v-for="(item, index) in personList.list" :key="index">{{item.no}}：{{item.name}}</li>
    </ul>
    <input type="text" v-model="newPerson" />
    <button @click="addPerson">新增</button>
  </div>
</template>
<script>
// 使用 reactive 要先引入
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'reactive',
  setup() {

    let obj = { list: [{ name: 'sunzj', no: 1 }, { name: 'hufy', no: 2 }] }
    let personList = reactive(obj); // 给对象定义成响应式的代理对象，注意这里返回的式 Proxy 对象
    console.log(personList.list[0]); // reactive 函数包装的对象数据在数据层要获取不用通过 value 获取

    let newPerson = ref('');

    const addPerson = () => {
      personList.list.push({ name: newPerson.value, no: personList.list.length + 1 });
      console.log(obj); // 修改代理对象 personList 会同时修改目标对象 obj，但是如果修改的是目标对象 obj，那么代理对象 personList 是不会变化的
    }

    return {
      newPerson,
      addPerson,
      personList
    };
  }
})
</script>
<style scoped>
</style>
