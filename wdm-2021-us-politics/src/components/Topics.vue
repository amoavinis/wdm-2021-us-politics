<template>
  <div>
    <h2>Emerging Topic Analysis</h2>
    <Chart :options="getTopics" class="chart-3"/>    
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
.grid-3 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-2{
  display: grid;
  grid-template-columns: auto auto;
}
h2 {
  text-align: center;
  margin: 150px 0 100px 0;
}
</style>
