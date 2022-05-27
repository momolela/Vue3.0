<template>
  <div>
    <h2>===== const state = reactive({name: 'sunzj', age: 27}); =====</h2>
    <div>state.name: {{state.name}}</div>
    <div>state.age: {{state.age}}</div>

    <h2>===== toRefs 之后结构出来的 name，age =====</h2>
    <div>name: {{name}}</div>
    <div>age: {{age}}</div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'toRefs',
  setup() {
    const state = reactive({
      name: 'sunzj',
      age: 27
    });
    console.log(state); // state 对象通过 reactive 包装生成，state 里面的属性如果拆开都是普通的对象

    setInterval(() => {
      state.name += '='; // 这里的定时修改，也会同时修改 toRefs 出来的 Ref 对象数据
      state.age += 1;
    }, 3000);

    return {
      state,
      ...toRefs(state) // 被拆分成 name, age，这两个对象都是 Ref 对象；如果在 hook 函数的 return 中，用 toRefs 包装执行以下，其他要用的地方用到的就都是 Ref 响应式对象了
    };
  }
})
</script>
<style scoped>
</style>
