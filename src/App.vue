<script setup>
import { reactive, computed } from 'vue'
import dataset from './csvjson.json'
import datasetCrypto from './crypt.json'
datasetCrypto.forEach(el => {
  el.date=el.date.slice(0,4)
})

const genders = computed({
  get() {
    let male = 0
    let female = 0
    if (dataset != false) {
      dataset.forEach(el => {
        if (el.Genre === 'Male') {
          male++
        }
        else {
          female++
        }
      })
      let mP = male * 100 / (male + female)
      let fP = female * 100 / (male + female)
      return ([mP, fP])
    }
  }
})
const barLabels = computed({
  get() {
    let labels = []
    dataset.forEach(el => {
      if (!labels.includes(el.Age))
        labels.push(el.Age)
    })

    return labels.sort()
  }
})
const barDataAge = computed({
  get() {
    let data = []
    dataset.forEach(el => {
      data.push(el.Age)
    })
    let mass = []
    barLabels.value.forEach(el => {
      let temp = 0
      data.forEach(item => {
        if (item === el)
          temp++
      })
      mass.push(temp)
    })
    return mass
  }
})
const barDataSpending = computed({
  get() {
    let mass = []
    let labels = []
    dataset.forEach(el => {
      if (!labels.includes(el.Age))
        labels.push(el.Age)
    })
    let data = []
    dataset.forEach(el => {
      data.push(el.Spending)
    })
    labels.forEach(el => {
      let counter = 0
      let sum = 0
      dataset.forEach(item => {
        if (item.Age === el) {
          sum = sum + item.Spending
          counter++
        }
      })
      mass.push(sum / counter)
    })
    return mass
  }
})
const avgIncomeM = computed({
  get() {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    dataset.forEach(el => {
      if (el.Genre === 'Male') {
        if (el.Age <= 25) {
          sum1 += el.Income
          counter1++
        }
        if ((el.Age > 25) && (el.Age <= 45)) {
          sum2 += el.Income
          counter2++
        }
        if ((el.Age > 45) && (el.Age <= 60)) {
          sum3 += el.Income
          counter3++
        }
        if (el.Age > 60) {
          sum4 += el.Income
          counter4++
        }
      }
    })
    sum1 = sum1 / counter1
    sum2 = sum2 / counter2
    sum3 = sum3 / counter3
    sum4 = sum4 / counter4
    return [sum1, sum2, sum3, sum4]
  }
})
const avgIncomeF = computed({
  get() {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    dataset.forEach(el => {
      if (el.Genre === 'Female') {
        if (el.Age <= 25) {
          sum1 += el.Income
          counter1++
        }
        if ((el.Age > 25) && (el.Age <= 45)) {
          sum2 += el.Income
          counter2++
        }
        if ((el.Age > 45) && (el.Age <= 60)) {
          sum3 += el.Income
          counter3++
        }
        if (el.Age > 60) {
          sum4 += el.Income
          counter4++
        }
      }
    })
    sum1 = sum1 / counter1
    sum2 = sum2 / counter2
    sum3 = sum3 / counter3
    sum4 = sum4 / counter4
    return [sum1, sum2, sum3, sum4]
  }
})
const chartData = reactive({
  labels: ['male', 'female'],
  datasets: [
    {
      backgroundColor: ['#E46651', '#41B883'],
      data: genders,
    },

  ],
})
const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false
})
const chartData2 = reactive({
  labels: barLabels,
  datasets: [
    {
      label: 'Total people',
      backgroundColor: ['#E46651'],
      data: barDataAge
    },
    {
      label: 'Average Spending',
      backgroundColor: ['#41B883'],
      data: barDataSpending
    }

  ],
})
const chartData3 = reactive({
  labels: ['<25', '25-45', '45-60', '60>'],
  datasets: [
    {
      label: 'Average income by Males',
      backgroundColor: ['rgba(9, 255, 124, 0.36)'],
      borderColor: 'rgba(9, 255, 124, 1)',
      data: avgIncomeM
    },
    {
      label: 'Average Income by Females',
      borderColor: 'rgba(217, 24, 24, 1)',
      backgroundColor: ['rgba(217, 24, 24, 0.51)'],
      data: avgIncomeF
    }

  ],
})



const dataCrypt1 = computed({
  get() {
  let highPrice = []
  let date = []
  let temp = 0
    datasetCrypto.forEach(el=>{
      if(el.ticker === 'BTC'){
        if (date.includes(el.date)=== false){
          temp = 0
          date.push(el.date)
          highPrice.push(el.high)
        }
        if (temp < el.high){
          temp = el.high
       }
      }})
    
      return highPrice
    }
})
const dataCrypt2 = computed({
  get() {
  let highPrice = [0,0,0,0,0]
  let date = []
  let temp = 0
    datasetCrypto.forEach(el=>{
      if(el.ticker === 'ETH'){
        if (date.includes(el.date)=== false){
          temp = 0
          date.push(el.date)
          highPrice.push(el.high)
        }
        if (temp < el.high){
          temp = el.high
       }
      }})
     
      return highPrice
    }
})
const dataCrypt3 = computed({
  get() {
  let highPrice = [0,0,0,0,0,0,0,0,0,0]
  let date = []
  let temp = 0
    datasetCrypto.forEach(el=>{
      if(el.ticker === 'YFI'){
        if (date.includes(el.date)=== false){
          temp = 0
          date.push(el.date)
          highPrice.push(el.high)
        }
        if (temp < el.high){
          temp = el.high
       }
      }})
      return highPrice
    }
})
const dataCrypt4 = computed({
  get() {
  let highPrice = []
  let date = []
  let temp = 0
    datasetCrypto.forEach(el=>{
      if(el.ticker === 'ETH'){
        if (date.includes(el.date)=== false){
          temp = 0
          date.push(el.date)
          highPrice.push(el.high)
        }
        if (temp < el.high){
          temp = el.high
       }
      }})
      console.log(highPrice.slice(4,9))
      return highPrice.slice(4,9)
    }
})
const dataCrypt5 = computed({
  get() {
  let highPrice = []
  let date = []
  let temp = 0
    datasetCrypto.forEach(el=>{
      if(el.ticker === 'ETH'){
        if (date.includes(el.date)=== false){
          temp = 0
          date.push(el.date)
          highPrice.push(el.low)
        }
        if (temp > el.low){
          temp = el.low
       }
      }})
      console.log(highPrice.slice(4,9))
      return highPrice.slice(4,9)
    }
})
const cryptoData = reactive({
  labels: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
  datasets:
  [ 
    {
      label: 'High cost of BTC',
      backgroundColor: ['rgba(217, 24, 24, 0.51)'],
      data: dataCrypt1
    },
    {
      label: 'High cost of ETH',
      backgroundColor: ['rgba(9, 255, 124, 0.36)'],
      data: dataCrypt2
    },
    {
      label: 'High cost of YFI',
      backgroundColor: ['rgba(9, 15, 170, 0.7)'],
      data: dataCrypt3
    },
  ]
})
const cryptoData2 = reactive({
  labels: ['2019','2020','2021','2022','2023'],
  datasets:
  [ 
    {
      label: 'High cost of ETH',
      backgroundColor: ['rgba(217, 24, 24, 0.1)'],
      data: dataCrypt4
    },
    {
      label: 'Low cost of ETH',
      backgroundColor: ['rgba(9, 255, 124, 0.5)'],
      data: dataCrypt5
    },
  ]
})
const cryptoData3 = reactive({
  labels: ['2019','2020','2021','2022','2023'],
  datasets:
  [ 
    {
      label: ['open of ETH'],
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','#1a157d'],
      data: dataCrypt4
    },
  ]
})



</script>
<template>
  <div class="container">
    <div class="section2">
      <strong>First Dataset</strong>
      <PieChart :chartOptions="chartOptions" :chartData="chartData" />
    </div>
    <div class="section2">
      <RadarChart :chartOptions="chartOptons" :chartData="chartData3" />
    </div>
    <div class="section2">
      <BarChart :chartOptions="chartOptons" :chartData="chartData2" />
    </div>
  </div>
  <div class="container">
    
    <div class="section2">
      <strong>Second Dataset</strong>
     <LineChart :chartOptions="chartOptons" :chartData="cryptoData"/>
    </div>
    <div class="section2">
      <PolarChart :chartOptions="chartOptons" :chartData="cryptoData2" />
    </div>
    <div class="section2">
      <ElChart :chartOptions="chartOptons" :chartData="cryptoData3" />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: block;
  margin-bottom: 300px;
}

.section2 {
  max-width: 700px;
  margin-left: 600px;
}
</style>
