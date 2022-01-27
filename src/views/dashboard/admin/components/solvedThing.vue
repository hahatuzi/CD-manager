<template>
  <template-layout ref="leaveForm" class="pending_table" :table-fn="testFn" :table-list="tableList">
    <template v-slot:body>
      <div class="table_title">已安排的外出</div>
    </template>
    <template v-slot:button="{row}">
      <el-button type="text" @click="handleSubmit(row)">删除</el-button>
    </template>
  </template-layout>
</template>

<script>
export default {
  data() {
    return {
      tableList: [
        { label: '申请时间', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
        { label: '外出人员', prop: 'name', attrs: {}},
        { label: '开始时间', prop: 'start_time', attrs: {}},
        { label: '时长', prop: 'end_time', attrs: {}},
        { label: '外出单位', prop: 'company', attrs: {}},
        { label: '是否派车', prop: 'car', attrs: {}},
        { label: '操作', slot: true, type: 'button', attrs: {}}
      ]
    }
  },
  mounted() {
    this.$refs.leaveForm.getTableList([{
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '1天',
      company: '浦知局',
      car: '是'
    },
    {
      approve_time: '2016-05-02',
      name: '王小',
      start_time: '2016-05-02',
      end_time: '1天',
      company: '浦知局',
      car: '是'
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
