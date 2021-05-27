import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from "highcharts-vue"
import Highcharts from "highcharts"
import packedbubble from 'highcharts/highcharts-more'

packedbubble(Highcharts)

Vue.use(HighchartsVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
