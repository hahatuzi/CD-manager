<template>
  <div class="dashboard-editor-container">
    <panel-group />
    <pending-thing />
    <solved-thing />
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <late-inform />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import PieChart from './components/PieChart'
import pendingThing from './components/pendingThing.vue'
import solvedThing from './components/solvedThing.vue'
import lateInform from './components/lateInform.vue'
export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    PieChart,
    pendingThing,
    solvedThing,
    lateInform
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  position: relative;
  .chart-wrapper {
    height: 400px;
    background: #fff;
    padding: 16px 16px 0;
  }
  ::v-deep.el-row{
    margin-top: 20px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
