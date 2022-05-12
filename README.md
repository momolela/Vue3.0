# Vue3.0
> Vue3.0 study


## 了解相关信息
- Vue.js 3.0 "One Piece" 正式版在 2020 年 9 月份发布
- 2年多开发 100+ 位贡献者, 2600+ 次提交, 600+ 次PR
- Vue3 支持 vue2 的大多数特性
- 更好的支持 Typescript


## 性能提升
- 打包大小减少 41%
- 初次渲染快 55% ,更新渲染快 133%
- 内存减少 54%
- 使用 Proxy 代替 defineProperty 实现数据响应式
- 重写了虚拟 DOM 的实现和 Tree-Shaking

## 新增特性
- Composition（组合）API
- setup

    - ref 和 reactive
    - computed 和 watch
    - 新的生命周期函数
    - provide 与 inject
    - ...

- 新组件

    - fragment - 文档碎片
    - teleport - 瞬移组件的位置
    - Suspense - 异步加载组件的 loading 界面

- 其他API更新

    - 全局 API 的修改
    - 将原来的全局 API 转移到应用对象
    - 模版语法变化