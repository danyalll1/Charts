<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'ElChart',
  components: {Pie},
  

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
  
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>