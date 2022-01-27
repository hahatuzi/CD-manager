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
      <el-form ref="form" :model="form" :inline="true">
        <el-form-item label="请假人">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="form.department" placeholder="请输入部门" />
        </el-form-item>
        <el-form-item label="请假类型">
          <el-select v-model="form.leave_type" placeholder="请选择请假类型">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="请假时间">
          <el-radio-group v-model="form.leave_time">
            <el-radio-button v-for="item in ['明早一小时','明天','其他']" :key="item" :label="item" />
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="当前余量">
          <el-input v-model="form.cur_remain" placeholder="假期剩余额度" />
        </el-form-item>
        <el-form-item label="请假时间">
          <el-date-picker v-model="form.time_range" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item>
        <!-- <el-form-item label="结束时间">
          <el-date-picker v-model="form.end_time" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item> -->
        <el-form-item label="请假说明">
          <el-input v-model="form.desc" type="textarea" :autosize="{ minRows: 1.5, maxRows: 18}" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
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
      options: [{
        value: '选项1',
        label: '年假'
      }, {
        value: '选项2',
        label: '调休假'
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
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '年假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '年假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '调休假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '年假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '调休假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '调休假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '年假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '调休假',
      total_time: '2016-05-02'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '调休假',
      total_time: '2016-05-02'
    },
    {
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
        leave_type: '年假',
        total_time: '2016-05-02'
      },
      {
        approve_time: '2016-05-02',
        name: '王小',
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
        name: '王小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '年假',
        total_time: '2016-05-02'
      },
      {
        approve_time: '2016-05-02',
        name: '王小',
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
        leave_type: '年假',
        total_time: '2016-05-02'
      },
      {
        approve_time: '2016-05-02',
        name: '王小',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '调休假',
        total_time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
