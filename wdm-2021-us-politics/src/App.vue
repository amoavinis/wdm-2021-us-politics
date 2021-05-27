<template>
  <div id="container">
    <Header @event1="selectTab"></Header>
    <Information style="margin: auto;width: 50%;border: 3px solid green;padding: 10px;border-radius:10px" v-if="selectedTab==0"/>
    <Demographics v-if="selectedTab==1"/>
    <Topics v-if="selectedTab==2"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Demographics from './components/Demographics.vue'
import Topics from './components/Topics.vue'
import Information from './components/Information.vue'

export default {
  name: 'App',
  components: {
    Header,
    Demographics,
    Topics,
    Information,
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
