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
        <el-form-item label="员工姓名">
          <el-input v-model="form.name" placeholder="请输入员工姓名" />
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="form.department" placeholder="请选择员工状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="员工状态">
          <el-select v-model="form.leave_type" placeholder="请选择员工状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:body>
      <div class="table_form">
        <el-button type="primary" icon="el-icon-plus">新增员工</el-button>
        <el-button type="primary">批量操作</el-button>
      </div>
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
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      tableList: [
        { label: '姓名', prop: 'name', attrs: {}},
        { label: '所属部门', prop: 'department', attrs: {}},
        { label: '基本工资', prop: 'money', attrs: {}},
        { label: '其他工资', prop: 'other_money', attrs: {}},
        { label: '绩效', prop: 'stand', attrs: {}},
        { label: '其他绩效', prop: 'other', attrs: {}},
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
      name: '王小',
      department: '综合管理部',
      money: '2400',
      other_money: '1000',
      stand: '2000',
      other: '3000'
    },
    {
      name: '王小',
      department: '综合管理部',
      money: '2400',
      other_money: '1000',
      stand: '2000',
      other: '3000'
    }])
  },
  methods: {
    handleSubmit(row) {
      console.log(this.form, row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      const rr = [{
        name: '王小',
        department: '综合管理部',
        money: '2400',
        other_money: '1000',
        stand: '2000',
        other: '3000'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        name: '王小',
        department: '综合管理部',
        money: '2400',
        other_money: '1000',
        stand: '2000',
        other: '3000'
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
        name: '王小',
        department: '综合管理部',
        money: '2400',
        other_money: '1000',
        stand: '2000',
        other: '3000'
      }]
      this.$refs.leaveForm.getTableList(rr)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
