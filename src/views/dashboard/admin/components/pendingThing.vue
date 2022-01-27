<template>
  <template-layout ref="leaveForm" class="pending_table" :table-fn="testFn" :table-list="tableList">
    <template v-slot:body>
      <div class="table_title">待审批事项</div>
    </template>
    <template v-slot:button="{row}">
      <el-button type="text" @click="handleSubmit(row)">同意</el-button>
      <el-button type="text" @click="handleSubmit(row)">拒绝</el-button>
    </template>
  </template-layout>
</template>

<script>
export default {
  data() {
    return {
      tableList: [
        { label: '序号', prop: 'index', attrs: { width: '120px', sortable: true }},
        { label: '审批时间', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
        { label: '姓名', prop: 'name', attrs: {}},
        { label: '开始时间', prop: 'start_time', attrs: {}},
        { label: '结束时间', prop: 'end_time', attrs: {}},
        { label: '审批事项', prop: 'leave_type', attrs: {}},
        { label: '详情', prop: 'detail', attrs: {}},
        { label: '总时长', prop: 'total_time', attrs: {}},
        { label: '操作', slot: true, type: 'button', attrs: {}}
      ]
    }
  },
  mounted() {
    this.$refs.leaveForm.getTableList([{
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '请假',
      detail: '调休假',
      total_time: '1天'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '2016-05-02',
      leave_type: '外出',
      detail: '外出',
      total_time: '1天'
    }])
  },
  methods: {
    async testFn(form) {
      const res = await new Promise((resolve, reject) => {
        resolve({ name: 'lisa' })
      }).then(value => { return value })
      console.log(res)
      // return res
    },
    handleSubmit(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
.pending_table{
  ::v-deep.template_header{
    padding: 0;
    border: none;
  }
}

</style>
