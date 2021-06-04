<template>
    <div style="align-content:center;">
        <div class="header"><h2>Clustering quality metrics</h2></div>
        <hr>
        <div>
            <Chart :options="getInertia"/>
            <Chart :options="getDaviesBouldin"/>
            <Chart :options="getKalinskiHarabasz"/>
        </div>
        
        <div class="header"><h2>User clusters wordclouds</h2></div>
        <hr>
        <h3>Cluster 1</h3>
        <div class="image"><img src="@/assets/cluster_1.png" alt=""></div>
        <h3>Cluster 2</h3>
        <div class="image"><img src="@/assets/cluster_2.png" alt=""></div>
        <h3>Cluster 3</h3>
        <div class="image"><img src="@/assets/cluster_3.png" alt=""></div>
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
h3 {
  text-align: center;
  margin: 20px 0 20px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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