<template>
  <div>
    <div>lifeCycle page</div>
    <button @click="childShow = !childShow">切换显示子组件</button>
    <LifeCycleChild v-if="childShow"></LifeCycleChild>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import LifeCycleChild from '@/components/LifeCycleChild.vue'
export default defineComponent({
  name: 'lifeCycle',
  components: {
    LifeCycleChild,
  },
  setup() {

    let childShow = ref(true);

    return {
      childShow
    };
  },
})
</script>
<style scoped>
</style>
