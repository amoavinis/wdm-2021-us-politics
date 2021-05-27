<template>
  <div>
    <Header @event1="selectTab"></Header>
    <Demographics v-if="selectedTab==1"/>
    <Topics v-if="selectedTab==2"/>
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
  },

  data: () => {
    return {
      selectedTab: 0
    };
  },

  methods: {
    selectTab(t) {
      this.selectedTab = t
    }
  }
}
</script>

<style>

</style>
