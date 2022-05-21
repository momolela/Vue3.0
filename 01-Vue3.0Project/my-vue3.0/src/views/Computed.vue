<template>
  <div>
    <div>计算属性</div>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.lastName" /><br />
      名字：<input type="text" placeholder="请输入名字" v-model="user.firstName" /><br />
    </fieldset>
    <fieldset>
      <legend>计算属性操作</legend>
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    </fieldset>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "computed",
  setup() {
    const user = reactive({
      firstName: "不败",
      lastName: "东方",
    });

    // 如果 computed 参数是一个回调函数，那说明定义的是一个属性的 getter 方法
    // 返回的是一个 Ref 对象
    const fullName1 = computed(() => {
      return user.lastName + "," + user.firstName;
    });

    // 如果定义个属性要有 getter 和 setter 的操作，需要往 computed 里面传入一个 {} 对象
    const fullName2 = computed({
      get() {
        return user.lastName + "," + user.firstName;
      },
      set(val: string) {
        let fullName = val.split(",");
        user.firstName = fullName[1];
        user.lastName = fullName[0];
      },
    });

    return {
      user,
      fullName1,
      fullName2,
    };
  },
});
</script>
<style scoped>
</style>
