<template>
  <div class="hello">
    <Chart :options="options"/>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    Chart,
  },

  computed: {
    options() {
      let chartObj = {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Historic World Population by Region'
          },
          subtitle: {
              text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
          },
          xAxis: {
              categories: ['First period', 'Second period', 'Third period', 'Fourth period'],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Population',
              },
              labels: {
                  overflow: 'justify'
              }
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor:
                  '#FFFFFF',
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: '<=24 years old',
              data: [107, 31, 635, 203]
          }, {
              name: '25 - 45 years old',
              data: [133, 156, 947, 408]
          }, {
              name: '45 - 65 years old',
              data: [814, 841, 3714, 727]
          }, {
              name: '65+ years old',
              data: [1216, 1001, 4436, 738]
          }]
      }

      return chartObj;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
