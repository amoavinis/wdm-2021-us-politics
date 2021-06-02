<template>
  <div style="align-content:center;">
    <div class="header"><h2>General Demographics</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsAgeGeneral"/></div>
      <div class="column"><Chart :options="demographicsGenderGeneral"/></div>
    </div>
    <Chart :options="demographicsPoliticalGeneral"/>
    
    <div class="header"><h2>Sentiment and Subjectivity - General</h2></div>
    <div class="row">
      <div class="column"><Chart :options="sentimentSubjectivity[0]"/></div>
      <div class="column"><Chart :options="sentimentSubjectivity[1]"/></div>
    </div>

    <div class="header"><h2>Age distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[0]"/></div>
      <div class="column"><Chart :options="demographicsGender[4]"/></div>
    </div>
    
    <div class="header"><h2>Political affiliation distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[1]"/></div>
      <div class="column"><Chart :options="demographicsGender[5]"/></div>
    </div>

    <div class="header"><h2>Sentiment distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[2]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsGender[6]" class="chart-2"/></div>
    </div>

    <div class="header"><h2>Subjectivity distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[3]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsGender[7]" class="chart-2"/></div>
    </div>
    
    <div class="header"><h2>Age distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[0]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsPolitical[4]" class="chart-2"/></div>
    </div>
    
    <div class="header"><h2>Gender distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[1]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsPolitical[5]" class="chart-2"/></div>
    </div>

    <div class="header"><h2>Sentiment distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[2]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsPolitical[6]" class="chart-2"/></div>
    </div>

    <div class="header"><h2>Subjectivity distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[3]" class="chart-2"/></div>
      <div class="column"><Chart :options="demographicsPolitical[7]" class="chart-2"/></div>
    </div>
    

  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { ageGeneral, genderGeneral, politicalGeneral, sentimentGeneral, subjectivityGeneral } from "../config/general"
import { 
  femaleAge, 
  femalePolitical, 
  femaleSentiment, 
  femaleSubjectivity, 
  maleAge, 
  malePolitical, 
  maleSentiment, 
  maleSubjectivity 
} from "../config/gender"

import {
  demAge,
  demGender,
  demSentiment,
  demSubjectivity,
  repAge,
  repGender,
  repSentiment,
  repSubjectivity
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
        femaleAge, 
        femalePolitical, 
        femaleSentiment, 
        femaleSubjectivity, 
        maleAge, 
        malePolitical, 
        maleSentiment, 
        maleSubjectivity 
      ]
    },

    demographicsPolitical() {
      return [
        demAge, 
        demGender, 
        demSentiment, 
        demSubjectivity, 
        repAge, 
        repGender, 
        repSentiment, 
        repSubjectivity 
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
  flex: 50%;
}
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
.header {
  width: 20%;
  margin: 0 auto;
}
</style>
