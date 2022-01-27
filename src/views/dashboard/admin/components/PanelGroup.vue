<template>
  <el-row :gutter="12">
    <el-col v-for=" item in panelData" :key="item.name" :span="6">
      <el-card shadow="hover">
        <img :src="item.icon" alt="" width="80px">
        <div class="title">{{ item.title }}</div>
        <div class="toast">提示信息</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// import CountTo from 'vue-count-to'

export default {
  data() {
    return {
      panelData: [{
        title: '外出填写',
        icon: require('@/assets/icon/folder.png'),
        value: ''
      },
      {
        title: '请假填写',
        icon: require('@/assets/icon/folder.png'),
        value: ''
      },
      {
        title: '待审批事项',
        icon: require('@/assets/icon/folder.png'),
        value: ''
      },
      {
        title: '用章申请',
        icon: require('@/assets/icon/folder.png'),
        value: ''
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row{
  margin-bottom: 15px;
  .el-card{
    img{
      height: 80px;
      vertical-align: top;
      border-radius: 50%;
    }
    .title{
      display: inline-block;
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      font-weight: 500;
    }
    .toast{
      margin-top: 20px;
    }
  }
}
</style>
