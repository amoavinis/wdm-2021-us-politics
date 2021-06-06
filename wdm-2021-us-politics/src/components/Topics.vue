<template>
  <div style="align-content:center;">
    <div class="header"><h2>Emerging Topic Analysis</h2></div>
    <hr>
    <div>
      <Chart :options="getTopics"/>
    </div>

    <div class="header"><h2>Sentiment and Political orientation over time</h2></div>
    <hr>
    <div>
      <Chart :options="getSentimentOverTime"/> 
      <Chart :options="getPoliticalOverTime"/>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { topics, sentimentOverTime, politicalOverTime } from "../config/topics";

export default {
  components: {
    Chart,
  },

  computed: {
      getTopics() {
          return topics;
      } ,
      getSentimentOverTime() {
        return sentimentOverTime;
      },
      getPoliticalOverTime() {
        return politicalOverTime;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
}
.column {
  flex: 33%;
}
h2 {
  margin: 50px 0 0 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
}
.header {
  margin: 0 auto;
}
hr {
  width: 95%;
  color: rgb(80, 80, 80);
  margin-bottom: 30px;
  height: 1px;
  background-color: rgb(80, 80, 80);
}

</style>
