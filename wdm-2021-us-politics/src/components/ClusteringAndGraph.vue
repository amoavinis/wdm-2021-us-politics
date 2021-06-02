<template>
    <div>
        <div style="width: 20%;margin: 0 auto;"><h2>Clustering quality metrics</h2></div>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Inertia clustering metric</h3></div>
        <Chart :options="getInertia"/>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Davies-Bouldin clustering metric</h3></div>
        <Chart :options="getDaviesBouldin"/>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Kalinki-Harabasz clustering metric</h3></div>
        <Chart :options="getKalinskiHarabasz"/>

        <div style="width: 20%;margin: 0 auto;"><h2>User clusters wordclouds</h2></div>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Cluster 1</h3></div>
        <div class="image"><img src="@/assets/cluster_1.png" alt=""></div>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Cluster 2</h3></div>
        <div class="image"><img src="@/assets/cluster_2.png" alt=""></div>
        
        <div style="width: 20%;margin: 0 auto;"><h3>Cluster 3</h3></div>
        <div class="image"><img src="@/assets/cluster_3.png" alt=""></div>


        <div style="width: 20%;margin: 0 auto;"><h3>Retweet graph</h3></div>
        <div class="image"><img src="@/assets/retweet-graph.png" alt=""></div>
    </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { inertia } from "../config/inertia";
import { daviesBouldin } from "../config/davies-bouldin";
import { kalinskiHarabasz } from "../config/kalinski-harabasz";

export default {
    components: {
        Chart,
    },

    computed: {
        getInertia() {
            return inertia;
        },
        getDaviesBouldin() {
            return daviesBouldin;
        },
        getKalinskiHarabasz() {
            return kalinskiHarabasz;
        }
    }
}
</script>

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
h3 {
  text-align: center;
  margin: 20px 0 20px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 2px solid lightblue;
  padding: 10px;
  border-radius:10px;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 3px solid rgb(146, 146, 146);
  border-radius: 4px;
}
</style>