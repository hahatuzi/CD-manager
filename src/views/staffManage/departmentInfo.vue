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
          <div>{{ item.label }}</div>
          <div>{{ item.value }}个</div>
        </el-col>
      </el-row>
    </template>
    <template v-slot:body>
      <div class="table_title">部门列表</div>
      <div class="table_form">
        <el-button type="primary" icon="el-icon-plus">新增部门</el-button>
        <el-radio-group v-model="radio1" @change="handleRadio">
          <el-radio-button v-for="item in radio1s" :key="item" :label="item" />
        </el-radio-group>
      </div>
    </template>
    <template v-slot:button="{row}">
      <el-button type="text" @click="handleSubmit(row)">查看</el-button>
      <el-button type="text" @click="handleSubmit(row)">编辑</el-button>
    </template>
  </template-layout>
</template>

<script>
export default {
  data() {
    return {
      task: [{
        label: '一级职能部门',
        name: 'oneLevel',
        value: '1'
      },
      {
        label: '二级职能部门',
        name: 'twoLevel',
        value: '1'
      },
      {
        label: '独立核算事业部',
        name: 'calculate',
        value: '1'
      }],
      radio1: '全部',
      radio1s: ['全部', '一级部门', '独立核算部门'],
      tableList: [
        { label: '部门名称', prop: 'name', attrs: {}},
        { label: '部门性质', prop: 'property', attrs: {}},
        { label: '上级部门', prop: 'top', attrs: {}},
        { label: '部门负责人', prop: 'people', attrs: {}},
        { label: '审批负责人假期', prop: 'who', attrs: {}},
        { label: '部门人数', prop: 'num', attrs: {}},
        { label: '部门核算方式', prop: 'leave_type', attrs: {}},
        { label: '该部门成员名单', slot: true, type: 'button', attrs: {}}
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
      name: '经理室',
      property: '一级职能部门',
      top: '无',
      people: '董晓枫',
      who: '',
      num: 1,
      leave_type: '不核算'
    },
    {
      name: '财务室',
      property: '二级职能部门',
      top: '经理室',
      people: '应君',
      who: '',
      num: 5,
      leave_type: '独立核算'
    }])
  },
  methods: {
    handleRadio(e) {
      console.log(e)
      const rr = [{
        name: '经理室',
        property: '一级职能部门',
        top: '无',
        people: '董晓枫',
        who: '',
        num: 1,
        leave_type: '不核算'
      },
      {
        name: '财务室',
        property: '二级职能部门',
        top: '经理室',
        people: '应君',
        who: '',
        num: 5,
        leave_type: '独立核算'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleSubmit(row) {
      console.log(this.form, row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      const rr = [{
        name: '经理室',
        property: '一级职能部门',
        top: '无',
        people: '董晓枫',
        who: '',
        num: 1,
        leave_type: '不核算'
      },
      {
        name: '财务室',
        property: '二级职能部门',
        top: '经理室',
        people: '应君',
        who: '',
        num: 5,
        leave_type: '独立核算'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        name: '经理室',
        property: '一级职能部门',
        top: '无',
        people: '董晓枫',
        who: '',
        num: 1,
        leave_type: '不核算'
      },
      {
        name: '财务室',
        property: '二级职能部门',
        top: '经理室',
        people: '应君',
        who: '',
        num: 5,
        leave_type: '独立核算'
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
        name: '经理室',
        property: '一级职能部门',
        top: '无',
        people: '董晓枫',
        who: '',
        num: 1,
        leave_type: '不核算'
      },
      {
        name: '财务室',
        property: '二级职能部门',
        top: '经理室',
        people: '应君',
        who: '',
        num: 5,
        leave_type: '独立核算'
      }]
      this.$refs.leaveForm.getTableList(rr)
    }
  }
}
</script>

<style lang="scss" scoped>
.table_title{
  float: left;
  padding-top: 20px;
}
.table_form{
  float: right;
  margin-top: 20px;
  .el-radio-group{
    margin: 0 15px;
  }
}
  .el-row {
      margin-bottom: 0;
  }
  .el-col {
    text-align: center;
    margin: 15px 0;
    border-right: 2px solid #e0e0e0;
    &:last-child{
      border-right: none;
    }
    div{

      &:first-child{
        color: #8c8c8c;
        font-size: 23px;
        line-height: 60px;
      }
      &:last-child{
        font-size: 25px;
      }
    }
  }
</style>
