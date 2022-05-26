<template>
  <div>
    <div>===== 自定义 hook 函数实现点击页面显示鼠标位置 =====</div>
    <div>x:{{x}}</div>
    <div>y:{{y}}</div>
    <div>===== 自定义 hook 函数实现 axios 请求封装 =====</div>
    <div v-if="loading">加载中...</div>
    <div v-else>
      <div>请求结果数据 object：</div>
      <div>编号：{{data.id}}</div>
      <div>地址：{{data.address}}</div>
      <div>距离：{{data.distance}}</div>
      <div>请求结果数据 list：</div>
      <template v-for="(item, index) in data" :key="index">
        <div>编号：{{item.id}}</div>
        <div>品牌：{{item.title}}</div>
        <div>价格：{{item.price}}</div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "../hooks/useMousePosition";
import useRequest from "../hooks/useRequest";

interface ObjectVo {
  id: number;
  address: string;
  distance: string;
}
interface ListVo {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  name: "hook",
  setup() {
    // const { errorMsg, data, loading } = useRequest<ObjectVo>("/object.json");
    const { errorMsg, data, loading } = useRequest<ListVo>("/list.json");

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });

    const { x, y } = useMousePosition();
    return {
      x,
      y,
      errorMsg,
      data,
      loading,
    };
  },
});
</script>
<style scoped>
</style>
