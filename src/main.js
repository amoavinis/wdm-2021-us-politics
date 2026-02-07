import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from "highcharts-vue"
import Highcharts from "highcharts"
import 'highcharts/highcharts-more'

Highcharts.setOptions({
  lang: {
    locale: 'en-US'
  }
})
import { pageTitle } from 'vue-page-title'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

const app = createApp(App)

app.use(HighchartsVue)
app.use(pageTitle, { suffix: '' })
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  }
})

app.mount('#app')
