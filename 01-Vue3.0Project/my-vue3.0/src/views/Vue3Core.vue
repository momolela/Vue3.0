<template>
  <div>
    这里演示的是 vue3 的响应式原理，请打开控制台查看
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'name',
  setup() {

    // 这里开始演示 Proxy 的使用
    const user = {
      name: '佐助',
      age: 26,
      wife: {
        name: '小樱',
        age: 25
      }
    }

    // Proxy
    // user：目标对象
    // handler： 处理器对象
    // Reflect：反射对象，可以调用目标对象的方法，实际操作目标对象
    const proxyUser = new Proxy(user, {
      // 获取目标对象的某个值
      get(target, prop) {
        console.log('调用了 get 方法');
        return Reflect.get(target, prop);
      },
      // 修改目标对象的属性值
      // 也可以为目标对象添加新的属性
      set(target, prop, val) {
        console.log('调用了 set 方法');
        return Reflect.set(target, prop, val);
      },
      // 删除目标对象上的某个属性
      deleteProperty(target, prop) {
        console.log('调用了 delete 方法');
        return Reflect.deleteProperty(target, prop);
      }
    });

    // 通过代理对象获取目标对象的某个属性值
    console.log(proxyUser.name);
    // 通过代理对象更新目标对象的某个属性值
    proxyUser.name = '鸣人';
    console.log(user);
    // 通过代理对象向目标对象添加一个新的属性
    proxyUser.gender = '男';
    console.log(user);
    // 通过代理对象删除目标对象中的一个属性
    delete proxyUser.age;
    console.log(user);
    // 通过代理对象给目标对象的深层对象的属性进行修改
    proxyUser.wife.name = '雏田';
    console.log(user);


    return {};
  }
})
</script>
<style scoped>
</style>
