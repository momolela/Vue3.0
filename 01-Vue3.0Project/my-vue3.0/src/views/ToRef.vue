<template>
  <div>
    <h2>===== toRef =====</h2>
    <p>toRefAge: {{toRefAge}}</p>
    <button @click="toRefAgeChange">toRefAgeChange</button>
    <p>refAge: {{refAge}}</p>
    <button @click="refAgeChange">refAgeChange</button>
  </div>
</template>
<script>
import { defineComponent, ref, toRef, watchEffect } from 'vue'
export default defineComponent({
  name: 'toRef',
  setup() {
    let stu = {
      name: 'zs',
      age: 18
    };
    let toRefAge = toRef(stu, 'age');
    function toRefAgeChange() {
      toRefAge.value++;
      console.log('stu.age', stu.age);
      console.log('toRefAge.value', toRefAge.value);
    }
    let refAge = ref(stu.age);
    function refAgeChange() {
      refAge.value++;
      console.log('stu.age', stu.age);
      console.log('refAge.value', refAge.value);
    }
    watchEffect(function () {
      console.log('watchEffect enter:', toRefAge.value, refAge.value);
    });

    return {
      toRefAge,
      toRefAgeChange,
      refAge,
      refAgeChange
    }
  }
})
</script>
<style scoped>
</style>
