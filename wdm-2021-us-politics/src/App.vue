<template>
  <div id="container">
    <Header @event1="selectTab"></Header>
    <Information style="margin: auto;width: 50%;border: 3px solid purple;padding: 10px;border-radius:10px;background-color:rgb(232,232,232)" v-if="selectedTab==0"/>
    <Demographics v-if="selectedTab==1"/>
    <Topics v-if="selectedTab==2"/>
    <ClusteringAndGraph v-if="selectedTab==3" />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Demographics from './components/Demographics.vue'
import Topics from './components/Topics.vue'
import ClusteringAndGraph from './components/ClusteringAndGraph'
import Information from './components/Information.vue'

export default {
  name: 'App',
  components: {
    Header,
    Demographics,
    Topics,
    ClusteringAndGraph,
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
