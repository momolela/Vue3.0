<template>
  <div>
    <h2>===== toRaw 将响应式对象转换为普通对象 =====</h2>
    <div>姓名：{{person.name}}</div>
    <div>年龄：{{person.age}}</div>
    <button @click="showRawPerson">显示 person 原始对象</button>

    <h2>===== makRaw 标记某个对象不能成为响应式对象 =====</h2>
    <div>姓名：{{person.name}}</div>
    <div>年龄：{{person.age}}</div>
    <div v-if="person.otherInfo">岗位：{{person.otherInfo.position}}</div>
    <div v-if="person.otherInfo">薪资：{{person.otherInfo.salary}}</div>
    <button @click="addOtherInfo">新增对象其他属性</button>
    <button @click="addMarkRawOtherInof">新增对象其他属性(不可标记)</button>
    <button @click="changePosition">调整岗位</button>
    <button @click="changeSalary">加薪</button>
    <button @click="changeSalary">加薪</button>
  </div>
</template>
<script>
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
export default defineComponent({
  name: 'toRawMarkRaw',
  setup() {
    const person = reactive({
      name: 'sunzj',
      age: 27
    });

    const showRawPerson = () => {
      console.log(person, 'reactive person');
      let p = toRaw(person);
      console.log(p, 'raw person');
    }

    const addOtherInfo = () => {
      person.otherInfo = {
        position: '前端工程师',
        salary: '30k'
      }
    }

    const addMarkRawOtherInof = () => {
      person.otherInfo = markRaw({
        position: '前端工程师',
        salary: '30k'
      });
    }

    const changePosition = () => {
      person.otherInfo.position = '后端工程师';
    }

    const changeSalary = () => {
      person.otherInfo.salary = '40k';
    }

    return {
      person,
      showRawPerson,
      addOtherInfo,
      changePosition,
      changeSalary,
      addMarkRawOtherInof
    };
  }
})
</script>
<style scoped>
</style>
