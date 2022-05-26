<template>
  <div class="life-cycle-child">
    life cycle child page
    <div>{{msg}}</div>
    <button @click="update">更新数据</button>
  </div>
</template>
<script>
// vue3.x 中的生命周期钩子函数都在 setup 中使用，所以要先手动引用 onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default defineComponent({
  name: 'name',
  // vue3.x 中生命周期的钩子函数
  setup() {
    console.log('vue3.x 的 setup');
    let msg = ref('用于更新的数据');
    const update = () => {
      msg.value += '1';
    }


    // vue3.x 的生命周期钩子函数不用 return 出去
    onBeforeMount(() => {
      console.log('vue3.x 生命周期的钩子函数 onBeforeMount');
    });
    onMounted(() => {
      console.log('vue3.x 生命周期的钩子函数 onMounted');
    });
    onBeforeUpdate(() => {
      console.log('vue3.x 生命周期的钩子函数 onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('vue3.x 生命周期的钩子函数 onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('vue3.x 生命周期的钩子函数 onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('vue3.x 生命周期的钩子函数 onUnmounted');
    });


    return {
      msg,
      update
    };
  },
  // vue2.x 中生命周期钩子函数
  beforeCreate() {
    console.log('vue2.x 生命周期的钩子函数 beforeCreate');
  },
  created() {
    console.log('vue2.x 生命周期的钩子函数 created');
  },
  beforeMount() {
    console.log('vue2.x 生命周期的钩子函数 beforeMount');
  },
  mounted() {
    console.log('vue2.x 生命周期的钩子函数 mounted');
  },
  beforeUpdate() {
    console.log('vue2.x 生命周期的钩子函数 beforeUpdate');
  },
  updated() {
    console.log('vue2.x 生命周期的钩子函数 updated');
  },
  //   vue2.x 中生命周期的钩子函数 beforeDestroy 和 destroyed，已经改名了，在 vue3.x 里面使用会报错
  //   beforeDestroy() {
  //     console.log('vue2.x 生命周期的钩子函数 beforeDestroy');
  //   },
  //   destroyed() {
  //     console.log('vue2.x 生命周期的钩子函数 destroyed');
  //   }
  beforeUnmount() {
    console.log('vue2.x 生命周期的钩子函数用 beforeUnmount 代替 beforeDestroy');
  },
  unmounted() {
    console.log('vue2.x 生命周期的钩子函数用 unmounted 代替 beforeDestroy');
  }
})
</script>
<style scoped>
</style>
