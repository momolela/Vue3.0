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
  // async setup() { // setup 函数只能是同步的不能是异步（async）的
  // setup 可以接收两个参数，props 和 context，context 可以结构成 {attrs, emit, slots}
  setup(props, { attrs, emit, slots }) {
    console.log(props, 'setup\'s param props'); // 
    console.log(attrs, 'setup\'s param attrs'); // 
    console.log(emit, 'setup\'s param emit'); // 
    console.log(slots, 'setup\'s param slots'); // 

    // setup() 函数在 beforeCreate() 之前自动调用

    console.log(this, 'this in steup'); // this 在 setup() 里面就是 undefined，因为 setup 在 beforeCreate 之前

    let num = 100;

    // 不管是方法还是变量，通过 return 出去，模版文件就可以直接使用了
    // 返回对象中的属性会与 vue2 data 函数返回对象的属性合并成为组件对象的属性
    // 返回对象中的方法会与 vue2 methods 中的方法合并成组件对象的方法
    // setup 函数只能是同步的不能是异步（async）的，因为如果是 async 修饰，说明 setup 返回的不再是一个简单对象，而是 Promise 对象，而这样，模版看不到 return 对象中的属性和方法数据
    return {
      num
    };
  }
})


// 直接在 script 标签中添加 setup 属性就可以直接使用 setup 语法糖了
// 使用 setup 语法糖后，不用写 setup 函数；
// 组件只需要引入不需要注册；
// 属性和方法也不需要再返回，可以直接在 template 模板中使用。
// 自动将文件名定义为组件的 name 属性

// setup 语法糖中新增的 api
// defineProps：子组件接收父组件中传来的 props
// defineEmits：子组件调用父组件中的方法 emit
// defineExpose：子组件暴露属性，可以在父组件中拿到
</script>

<style scoped>
</style>
