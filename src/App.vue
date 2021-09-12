<template>
  <div id="app">
    <basic-demo></basic-demo>
    <router-view/>
  </div>
</template>

<script>
import basicDemo from './components/basicDemo.vue'
export default {
  name: 'App',
  components:{
    basicDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
