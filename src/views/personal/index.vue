<template>
  <div class="attend_container">
    <div class="header_container">
      <div class="left">
        <span>员工姓名：</span><el-input v-model="name" disabled />
      </div>
      <el-input v-model="name" class="right" placeholder="请输入姓名">
        <template slot="append">
          <i slot="suffix" class="el-input__icon el-icon-search" />
        </template>
      </el-input>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="考勤" name="考勤">
        <attendCalendar />
      </el-tab-pane>
      <el-tab-pane label="薪酬" name="薪酬">薪酬</el-tab-pane>
      <el-tab-pane label="假期" name="假期">假期</el-tab-pane>
    </el-tabs>
  </div>
  <!-- <template v-slot:button="{row}">
      <el-button type="primary" @click="handleSubmit(row)">编辑</el-button>
    </template> -->
</template>

<script>
import attendCalendar from './comp/attendCalendar.vue'
export default {
  components: {
    attendCalendar
  },
  data() {
    return {
      name: '',
      activeName: '考勤',
      pageInfo: {
        currentPage: 1,
        total: 30,
        pageSize: 20
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.attend_container{
    // padding: 10px 15px 0;
    padding: 20px 28px;
  // border:1px solid #ebebeb;
  // box-shadow: 0 0 10px #ebebeb;
  background-color: #fff;
  .header_container{
    .left{
      display: inline-block;
      width: 50%;
      text-align: right;
      padding-right: 40px;
      .el-input{
        width: 150px;
      }
    }
    .right{
      width: 400px;

    }
  }
}
</style>
