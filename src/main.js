import { createApp } from 'vue'
import App from './App.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import RadarChart from './components/RadarChart.vue'
import LineChart from './components/LineChart.vue'
import PolarChart from './components/PolarChart.vue'
import ElChart from     './components/ElChart.vue'
const app = createApp(App)

app.component('ElChart',ElChart)
app.component('PolarChart',PolarChart)
app.component('LineChart',LineChart)
app.component('RadarChart',RadarChart)
app.component('PieChart',PieChart)
app.component('BarChart',BarChart)
app.component('PieChart',PieChart)
app.mount('#app')
 