<template>
  <div id="container">
    <vue-particles
      id="tsparticles"
      :options="particlesOptions"
    />
    <Header @event1="selectTab"></Header>
    <Information v-if="selectedTab==0"/>
    <Demographics v-if="selectedTab==1"/>
    <Topics v-if="selectedTab==2"/>
    <Clustering v-if="selectedTab==3" />
    <GraphAnalysis v-if="selectedTab==4"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Demographics from './components/Demographics.vue'
import Topics from './components/Topics.vue'
import Clustering from './components/Clustering'
import Information from './components/Information.vue'
import GraphAnalysis from './components/GraphAnalysis.vue'
export default {
  name: 'App',
  components: {
    Header,
    Demographics,
    Topics,
    Clustering,
    Information,
    GraphAnalysis,
  },

  data: () => {
    return {
      selectedTab: 0,
      particlesOptions: {
        background: { color: { value: "transparent" } },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          color: { value: "#ffffff" },
          links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2 },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      },
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
