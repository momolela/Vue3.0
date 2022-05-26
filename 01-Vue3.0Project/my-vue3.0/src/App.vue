<template>
  <!-- Vue2 中的 html 模版中必须要有一对根标签, Vue3 组件的 html 模版中可以没有根标签 -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/setup">Setup</router-link> |
    <router-link to="/ref">Ref</router-link> |
    <router-link to="/reactive">Reactive</router-link> |
    <router-link to="/vue3Core">Vue3Core</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/lifeCycle">LifeCycle</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
