<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'



ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: {Doughnut },
  

  props: {
   
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    },
  },
   

}
</script>


<template>
  <div>
  
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>