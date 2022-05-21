<template>
  <div>
    <div>watch 演示</div>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.lastName" /><br />
      名字：<input type="text" placeholder="请输入名字" v-model="user.firstName" /><br />
    </fieldset>
    <fieldset>
      <legend>watch 监视操作</legend>
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    </fieldset>
  </div>
</template>
<script>
import { defineComponent, ref, watch, reactive, watchEffect } from 'vue'
export default defineComponent({
  name: 'watch',
  setup() {
    const user = reactive({
      firstName: "不败",
      lastName: "东方",
    });

    // 监视 user 对象的某些属性
    // immediate 指：初次加载的时候，执行一次 watch 的方法
    // deep 指：深层的数据变化也能监听得到
    const fullName1 = ref('');
    watch(user, ({ firstName, lastName }) => {
      fullName1.value = lastName + ',' + firstName;
    }, { immediate: true, deep: true });

    // watchEffect 比 watch 更智能，相当于自己加上了 immediate: true
    const fullName2 = ref('');
    watchEffect(() => {
      fullName2.value = user.lastName + ',' + user.firstName;
    })
    // watchEffect 实现当 fullName 改变时，动态修改 user 的数据
    watchEffect(() => {
      let name = fullName2.value.split(',');
      user.firstName = name[1];
      user.lastName = name[0];
    })

    // watch 还可以监视多个数据，但是要求监视的数据必须是响应的
    watch([() => user.firstName, () => user.lastName, fullName2], () => {
      console.log('watch 监视多个数据');
    })

    return {
      user,
      fullName1,
      fullName2,
    };
  }
})
</script>
<style scoped>
</style>
