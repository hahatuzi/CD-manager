<template>
  <div>
    <recordCard />
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
          <el-form-item label="员工姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="考勤状态" prop="status">
            <el-select v-model="form.status" placeholder="请选择状态">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="员工部门" prop="department">
            <el-input v-model="form.department" placeholder="请输入部门" />
          </el-form-item>
          <el-form-item label="考勤时间" prop="time">
            <el-select v-model="form.time" placeholder="请选择时间">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:button="{row}">
        <el-button type="primary" @click="handleSubmit(row)">编辑</el-button>
      </template>
    </template-layout>
  </div>
</template>

<script>
import recordCard from './comp/recordCard.vue'
export default {
  components: {
    recordCard
  },
  data() {
    return {
      tableList: [
        // { label: '序号', prop: 'index', attrs: { width: '120px', sortable: true }},
        // { label: '审批时间', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
        { label: '员工姓名', prop: 'name', attrs: {}},
        { label: '员工部门', prop: 'department', attrs: {}},
        { label: '考勤方式', prop: 'method', attrs: {}},
        { label: '状态', prop: 'status', attrs: {}},
        { label: '是否违规', prop: 'rules', attrs: {}},
        { label: '是否九点前', prop: 'before', attrs: {}},
        { label: '是否有饭补', prop: 'money', attrs: {}},
        { label: '考勤时间', prop: 'time', attrs: {}},
        { label: '操作', slot: true, type: 'button', attrs: {}}
      ],
      options: [{
        value: '选项1',
        label: '正常'
      }, {
        value: '选项2',
        label: '异常'
      }],
      form: {
        name: '',
        status: '',
        department: '',
        time: ''
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
      department: '2016-05-02',
      method: '指纹打卡',
      status: '正常',
      rules: '是',
      before: '是',
      money: '是',
      time: '2016-05-02'
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
        department: '2016-05-02',
        method: '指纹打卡',
        status: '正常',
        rules: '是',
        before: '是',
        money: '是',
        time: '2016-05-02'
      }, {
        name: '王小',
        department: '2016-05-02',
        method: '指纹打卡',
        status: '正常',
        rules: '是',
        before: '是',
        money: '是',
        time: '2016-05-02'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        name: '王小',
        department: '2016-05-02',
        method: '指纹打卡',
        status: '正常',
        rules: '是',
        before: '是',
        money: '是',
        time: '2016-05-02'
      }, {
        name: '王小',
        department: '2016-05-02',
        method: '指纹打卡',
        status: '正常',
        rules: '是',
        before: '是',
        money: '是',
        time: '2016-05-02'
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
      console.log(this.form)
    },
    reset() {
      this.$refs.form.resetFields()
      console.log(this.form)
    }
  }
}
</script>

<style>

</style>
