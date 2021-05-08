<template>
  <div id="app">
    <h1 style="text-align: center">US Politics Topic Detection and Demographics Analysis</h1>
    <div style="text-align: center"> Developed by Angelos Moavinis, Asterios Bampakis, Themistoklis Spanoudis and Konstantinos Giantsios</div>
    <HelloWorld msg="Change"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
