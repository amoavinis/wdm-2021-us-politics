<template>
  <div id="container">
    <particles-bg type="cobweb" color="white" :bg="true" />
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
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'App',
  components: {
    ParticlesBg,
    Header,
    Demographics,
    Topics,
    Clustering,
    Information,
    GraphAnalysis,
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
