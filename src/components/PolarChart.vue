<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
  name: 'PolarChart',
  components: {PolarArea} ,


  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => { }
    },
  },
}
</script>


<template>
  <div>
    <PolarArea :data="chartData" :options="chartOptions" />
  </div>
</template>