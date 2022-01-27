<template>
  <template-layout
    ref="leaveForm"
    :table-fn="testFn"
    :table-list="tableList"
    :page-info="pageInfo"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
  >
    <template v-slot:header>
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
    </template>
    <template v-slot:body>
      <leaveRecord :table-data="recordData" />
      <div class="table_title">请假记录：</div>
    </template>
    <template v-slot:button="{row}">
      <el-button type="primary" @click="handleSubmit(row)">编辑</el-button>
    </template>
  </template-layout>
</template>

<script>
import leaveRecord from './comp/leaveRecord.vue'
export default {
  components: {
    leaveRecord
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      tableList: [
        { label: '序号', prop: 'index', attrs: { width: '120px', sortable: true }},
        { label: '审批时间', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
        { label: '姓名', prop: 'name', attrs: {}},
        { label: '开始时间', prop: 'start_time', attrs: {}},
        { label: '结束时间', prop: 'end_time', attrs: {}},
        { label: '请假类型', prop: 'leave_type', attrs: {}},
        { label: '总时长', prop: 'total_time', attrs: {}},
        { label: '操作', slot: true, type: 'button', attrs: {}}
      ],
      recordData: [{
        approve_time: '2016-05-02',
        name: '5天',
        start_time: '2016-05-02'
      },
      {
        approve_time: '2016-05-02',
        name: '8小时',
        start_time: '2016-05-02'
      }],
      name: '',
      pageInfo: {
        currentPage: 1,
        total: 30,
        pageSize: 20
      }
    }
  },
  mounted() {
    this.$refs.leaveForm.getTableList([{
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '事假',
      total_time: '2016-05-02'
    }])
  },
  methods: {
    handleSubmit(row) {
      console.log(this.form, row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      const rr = [{
        approve_time: '2016-05-02',
        name: '王小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '事假',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小王',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '年假',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小王',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '调休假',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        approve_time: '2016-05-02',
        name: '王小小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '调休假',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    async testFn(form) {
      const res = await new Promise((resolve, reject) => {
        resolve({ name: 'lisa' })
      }).then(value => { return value })
      console.log(res)
      // return res
    },
    onSubmit() {
      console.log('submit!', this.$refs.leaveForm)
      const rr = [{
        approve_time: '2016-05-02',
        name: '王小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '事假',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    }
  }
}
</script>

<style lang="scss" scoped>
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
// .table_title{
//   font-weight: 600;
//   font-size: 18px;
//   padding: 15px 0 5px 0;
// }
::v-deep.template_container {
.template_body{
  box-shadow: none;
  border: none;
}
.el-table{
  margin: 15px 0;
    box-shadow: 0 0 10px #ebebeb;
    border:1px solid #ebebeb;
}
}
</style>
