<template>
  <div>
    <div style="width: 20%;margin: 0 auto;"><h2>Emerging Topic Analysis</h2></div>
    <Chart :options="getTopics"/>    
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { topics } from "../config/topics";

export default {
  components: {
    Chart,
  },

  computed: {
      getTopics() {
          return topics;
      } ,   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  margin: 50px 0 50px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 2px solid lightblue;
  padding: 10px;
  border-radius:10px;
}
</style>
