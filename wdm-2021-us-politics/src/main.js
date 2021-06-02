import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from "highcharts-vue"
import Highcharts from "highcharts"
import packedbubble from 'highcharts/highcharts-more'
import VuePageTitle from 'vue-page-title'

packedbubble(Highcharts)

Vue.use(HighchartsVue);

Vue.use(VuePageTitle, {
  suffix: ''
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
