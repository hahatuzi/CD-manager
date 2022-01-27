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
      <el-row>
        <el-col v-for="item in task" :key="item.name" :span="8">
          <div class="grid-content bg-purple">
            <div>{{ item.label }}</div>
            <div>{{ item.value }}</div>
          </div>
        </el-col>
      </el-row>
    </template>
    <template v-slot:body>
      <div class="table_title">考勤规则列表：</div>
      <el-button type="plain" icon="el-icon-plus">添加考勤规则</el-button>
    </template>
    <template v-slot:button="{row}">
      <el-button type="primary" @click="handleSubmit(row)">编辑</el-button>
    </template>
  </template-layout>
</template>

<script>
export default {
  data() {
    return {
      task: [{
        label: '我的待办',
        name: 'waitingTask',
        value: ''
      },
      {
        label: '本周任务平均处理时间',
        name: 'averageTask',
        value: ''
      },
      {
        label: '本周完成任务数',
        name: 'totalTask',
        value: ''
      }],
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
      form: {
        name: '',
        department: '',
        leave_type: '',
        leave_time: '明早一小时',
        cur_remain: '',
        start_time: '',
        time_range: [],
        end_time: '',
        desc: ''
      },
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
      name: '小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '1',
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
        name: '小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        approve_time: '2016-05-02',
        name: '小小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '小小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
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
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '王小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e8ecf5;
  }
  .grid-content {
    height: 120px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
