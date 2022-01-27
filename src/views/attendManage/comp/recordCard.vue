<template>
  <el-row :gutter="12">
    <el-col v-for=" item in cardList" :key="item.name" :span="8">
      <el-card shadow="hover">
        <img :src="item.icon" alt="" width="80px">
        <div class="title">{{ item.title }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      cardList: [{
        icon: require('@/assets/icon/folder.png'),
        title: '导入考勤记录'
      }, {
        icon: require('@/assets/icon/folder.png'),
        title: '考勤信息补填'
      }, {
        icon: require('@/assets/icon/folder.png'),
        title: '小蜜蜂名单统计'
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
    font-weight: 600;
  }
}
}
</style>>
