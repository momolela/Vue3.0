<template>
  <div class="steup">
    setup 页面，请打开控制台
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'setup',
  beforeCreate() {
    console.log('beforeCreate');
  },
  setup() {
    // setup() 函数在 beforeCreate() 之前自动调用

    console.log(this, 'this in steup'); // this 在 setup() 里面就是 undefined

    let num = 100;

    // 不管是方法还是变量，通过 return 出去，外面就可以直接使用了
    return {
      num
    };
  }
})
</script>
<style scoped>
</style>
