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
      <div class="column"><Chart :options="demographicsGender[9]"/></div>
      <!--div class="column"><Chart :options="demographicsGender[4]"/></div-->
    </div>
    
    <div class="header"><h2>Political affiliation distribution of genders</h2></div>
    <hr>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[8]"/></div>
      <!--div class="column"><Chart :options="demographicsGender[5]"/></div-->
    </div>

    <div class="header"><h2>Sentiment distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[10]" class="chart-2"/></div>
    </div>

    <div class="header"><h2>Subjectivity distribution of genders</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsGender[11]" class="chart-2"/></div>
    </div>
    
    <div class="header"><h2>Age distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[8]" class="chart-2"/></div>
    </div>
    
    <div class="header"><h2>Gender distribution of parties</h2></div>
    <div class="row">
      <div class="column"><Chart :options="demographicsPolitical[9]" class="chart-2"/></div>
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
  maleSubjectivity,
  politicalGender,
  ageGender,
  sentimentGender, 
  subjGender
} from "../config/gender"

import {
  demAge,
  demGender,
  demSentiment,
  demSubjectivity,
  repAge,
  repGender,
  repSentiment,
  repSubjectivity,
  agePolitical,
  genderPolitical
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
        maleSubjectivity,
        politicalGender,
        ageGender,
        sentimentGender,
        subjGender
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
        repSubjectivity ,
        agePolitical,
        genderPolitical
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
