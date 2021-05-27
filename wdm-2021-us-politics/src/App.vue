<template>
  <div>
    <Header></Header>
    <Demographics />
    <Topics />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Demographics from './components/Demographics.vue'
import Topics from './components/Topics.vue';

export default {
  name: 'App',
  components: {
    Header,
    Demographics,
    Topics,
  }
}
</script>

<style>

</style>
