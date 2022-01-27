<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: '本月考勤统计',
          left: 'center',
          top: '0px',
          textStyle: {
            color: '#000'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'center',
          bottom: '50',
          data: ['9点前打卡', '外出', '请假', '九点后打卡', '迟到']
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: [70, 95],
            center: ['50%', '38%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: [
              { value: 320, name: '9点前打卡' },
              { value: 240, name: '外出' },
              { value: 149, name: '请假' },
              { value: 100, name: '九点后打卡' },
              { value: 59, name: '迟到' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
