<template>
  <div>
    <Header></Header>
    <Demographics />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Demographics from './components/Demographics.vue'

export default {
  name: 'App',
  components: {
    Header,
    Demographics
  }
}
</script>

<style>

</style>
