<template>
  <div style="align-content:center;">
    <div class="header"><h2>General Demographics</h2></div>
    <hr>
    <div class="row">
      <div class="column"><Chart :options="demographicsAgeGeneral"/></div>
      <div class="column"><Chart :options="demographicsGenderGeneral"/></div>
      <div class="column"><Chart :options="demographicsPoliticalGeneral"/></div>
    </div>
    
    <div class="row">
      <div class="column"><Chart :options="sentimentSubjectivity[0]"/></div>
      <div class="column"><Chart :options="sentimentSubjectivity[1]"/></div>
    </div>

    <div class="header"><h2>Demographics based on gender</h2></div>
    <hr>
    <div class="column"><Chart :options="demographicsGender[0]"/></div>
    <div class="column"><Chart :options="demographicsGender[1]"/></div>
    <div class="column"><Chart :options="demographicsGender[2]"/></div>
    <div class="column"><Chart :options="demographicsGender[3]"/></div>

    <div class="header"><h2>Demographics based on political orientation</h2></div>
    <hr>
    <div class="column"><Chart :options="demographicsPolitical[0]"/></div>
    <div class="column"><Chart :options="demographicsPolitical[1]"/></div>
    <div class="column"><Chart :options="demographicsPolitical[2]"/></div>
    <div class="column"><Chart :options="demographicsPolitical[3]"/></div>

  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { 
  ageGeneral, 
  genderGeneral, 
  politicalGeneral, 
  sentimentGeneral, 
  subjectivityGeneral 
} from "../config/general"

import { 
  politicalGender,
  ageGender,
  sentimentGender, 
  subjGender
} from "../config/gender"

import {
  genderPolitical,
  agePolitical,
  sentimentPolitical,
  subjPolitical
} from "../config/political"

export default {
  components: {
    Chart,
  },

  computed: {
    demographicsAgeGeneral() {
      return ageGeneral;
    },

    demographicsGenderGeneral() {
      return genderGeneral;
    },

    demographicsPoliticalGeneral() {
      return politicalGeneral;
    },

    sentimentSubjectivity() {
      return [sentimentGeneral, subjectivityGeneral]
    },

    demographicsGender() {
      return [
        politicalGender,
        ageGender,
        sentimentGender,
        subjGender
      ]
    },

    demographicsPolitical() {
      return [
        agePolitical,
        genderPolitical,
        sentimentPolitical,
        subjPolitical
      ]
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
