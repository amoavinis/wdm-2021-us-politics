<template>
  <div style="align-content:center;">
    <h2>General Demographics</h2>
    <div class="grid-2">
      <Chart :options="demographicsAgeGeneral" class="chart-3"/>
      <Chart :options="demographicsGenderGeneral" class="chart-3"/>
    </div>
    <Chart :options="demographicsPoliticalGeneral" class="chart-3"/>
    
    <h2>Sentiment and Subjectivity - General</h2>
    <Chart :options="sentimentSubjectivity[0]" class="chart-2"/>
    <Chart :options="sentimentSubjectivity[1]" class="chart-2"/>

    <h2>Age distribution of genders</h2>
    <div class="grid-2">
      <Chart :options="demographicsGender[0]" class="chart-2"/>
      <Chart :options="demographicsGender[4]" class="chart-2"/>
    </div>
    
    <h2>Political affiliation distribution of genders</h2>
    <span style="display:inline;">
      <Chart :options="demographicsGender[1]" class="chart-2"/>
      <Chart :options="demographicsGender[5]" class="chart-2"/>
    </span>

    <h2>Sentiment distribution of genders</h2>
    <div>
      <Chart :options="demographicsGender[2]" class="chart-2"/>
      <Chart :options="demographicsGender[6]" class="chart-2"/>
    </div>

    <h2>Subjectivity distribution of genders</h2>
    <div>
      <Chart :options="demographicsGender[3]" class="chart-2"/>
      <Chart :options="demographicsGender[7]" class="chart-2"/>
    </div>
    
    <h2>Age distribution of parties</h2>
    <div>
      <Chart :options="demographicsPolitical[0]" class="chart-2"/>
      <Chart :options="demographicsPolitical[4]" class="chart-2"/>
    </div>
    
    <h2>Gender distribution of parties</h2>
    <div>
      <Chart :options="demographicsPolitical[1]" class="chart-2"/>
      <Chart :options="demographicsPolitical[5]" class="chart-2"/>
    </div>

    <h2>Sentiment distribution of parties</h2>
    <div>
      <Chart :options="demographicsPolitical[2]" class="chart-2"/>
      <Chart :options="demographicsPolitical[6]" class="chart-2"/>
    </div>

    <h2>Subjectivity distribution of parties</h2>
    <div>
      <Chart :options="demographicsPolitical[3]" class="chart-2"/>
      <Chart :options="demographicsPolitical[7]" class="chart-2"/>
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
