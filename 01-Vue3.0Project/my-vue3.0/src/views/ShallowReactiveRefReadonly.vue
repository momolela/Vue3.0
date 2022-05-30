<template>
  <div>
    <h2>===== shallowReactive 和 shallowRef =====</h2>
    <div>m1: {{m1}}</div>
    <div>m2: {{m2}}</div>
    <div>m3: {{m3}}</div>
    <div>m4: {{m4}}</div>
    <button @click="update">更新数据</button>

    <h2>===== shallowReadonly =====</h2>
    <div>state: {{state}}</div>
    <button @click="updateState">更新数据</button>

  </div>
</template>
<script>
import { defineComponent, reactive, readonly, shallowReadonly, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  name: 'shallowReactiveRefReadonly',
  setup() {
    // 深劫持 ----- 深响应式
    const m1 = reactive({
      name: '王路飞',
      age: 20,
      wife: {
        name: '士娜美',
        age: 19
      }
    });
    // 浅劫持 ----- 浅响应式
    const m2 = shallowReactive({
      name: '王路飞',
      age: 20,
      wife: {
        name: '士娜美',
        age: 19
      }
    });
    // 深劫持 ----- 深响应式
    const m3 = ref({
      name: '王路飞',
      age: 20,
      wife: {
        name: '士娜美',
        age: 19
      }
    });
    // 浅劫持 ----- 浅响应式
    const m4 = shallowRef({
      name: '王路飞',
      age: 20,
      wife: {
        name: '士娜美',
        age: 19
      }
    });

    const update = () => {
      // 下面的都是单独执行才能体现
      //   m1.wife.name += '=';
      //   m2.wife.name += '=';
      //   m3.value.wife.name += '=';
      m4.value.wife.name += '=';
    }

    // const state = readonly(reactive({
    //   name: '王路飞',
    //   age: 20,
    //   wife: {
    //     name: '士娜美',
    //     age: 19
    //   }
    // }));

    const state = shallowReadonly(reactive({
      name: '王路飞',
      age: 20,
      wife: {
        name: '士娜美',
        age: 19
      }
    }));

    const updateState = () => {
      state.wife.name += '=';
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update,
      state,
      updateState
    };
  }
})
</script>
<style scoped>
</style>
