<template>
  <div class="info_container">
    <main-form ref="formModel" :form-model="formModel" title="员工基本信息" />
    <main-form ref="formModel1" :form-model="formModel1" title="员工合同信息" />
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button @click="reset('formModel')">重置</el-button>
    <el-button @click="reset('formModel')">合同变更记录</el-button>
  </div>
</template>

<script>
import mainForm from '@/components/mainForm'
const formModel = [
  { type: 'input', label: '员工姓名', prop: 'name', attrs: { placeholder: '请输入姓名' }},
  { type: 'input', label: '员工工号', prop: 'number', attrs: { placeholder: '请输入员工工号' }},
  { type: 'select', label: '员工部门', prop: 'department', attrs: { placeholder: '请选择员工部门', clearable: true }, options: [{ label: '选项一', value: 'options1' }] },
  { type: 'select', label: '员工岗位', prop: 'work', attrs: { placeholder: '请选择岗位', clearable: true }, options: [{ label: '选项一', value: 'options1' }] },
  { type: 'datePicker', label: '出生年月', prop: 'birthday', attrs: { placeholder: '请选择时间', format: 'yyyy-mm-dd', valueFormat: 'yyyy-mm-dd' }},
  { type: 'select', label: '员工学历', prop: 'school', attrs: { placeholder: '请输入员工学历', clearable: true }, options: [{ label: '选项一', value: 'options1' }] },
  { type: 'select', label: '员工手机号码', prop: 'phone', attrs: { placeholder: '请输入审批员' }, options: [{ label: '选项一', value: 'options1' }] },
  { type: 'input', inputType: 'number', label: '社会工龄', prop: 'time', attrs: { placeholder: '请输入员工社会工龄' }},
  { type: 'input', inputType: 'email', label: '员工邮箱', prop: 'email', attrs: { placeholder: '请输入员工邮箱' }}
  // { type: 'radio', label: '测试数据', prop: 'test', radioType: 'radio', attrs: { size: '100px' }, options: [{ label: '选项一', value: '选项一', selected: true }, { label: '选项二', value: '选项一' }] },
  // { type: 'checkbox', label: '测试数据一', prop: 'checktest', attrs: { size: '100px' }, options: [{ label: '选项一', value: '选项一', selected: true }, { label: '选项二', value: '选项一' }] }
]
const formModel1 = [
  { type: 'input', label: '岗位级别', prop: 'leval', attrs: { placeholder: '请输入岗位级别' }},
  { type: 'input', label: '合同工资', prop: 'salary', attrs: { placeholder: '请输入合同工资' }},
  { type: 'select', label: '合同绩效', prop: 'task', attrs: { placeholder: '请选择员工部门', clearable: true }, options: [{ label: '选项一', value: 'options1' }] },
  { type: 'datePicker', label: '试用期时间', prop: 'start_time', attrs: { placeholder: '请选择时间', format: 'yyyy-mm-dd', valueFormat: 'yyyy-mm-dd' }},
  { type: 'datePicker', label: '入职日期', prop: 'time', attrs: { placeholder: '请选择时间', format: 'yyyy-mm-dd', valueFormat: 'yyyy-mm-dd' }},
  { type: 'datePicker', label: '合同到期日期', prop: 'end_time', attrs: { placeholder: '请选择时间', format: 'yyyy-mm-dd', valueFormat: 'yyyy-mm-dd' }},
  { type: 'datePicker', label: '转正日期', prop: 'date', attrs: { placeholder: '请选择时间', format: 'yyyy-mm-dd', valueFormat: 'yyyy-mm-dd' }},
  { type: 'input', inputType: 'number', label: '工资卡号', prop: 'time', attrs: { placeholder: '请输入员工社会工龄' }},
  { type: 'input', label: '工龄', prop: 'email', attrs: { placeholder: '请输入员工邮箱' }}
]
export default {
  components: {
    mainForm
  },
  data() {
    return {
      formModel,
      formModel1
      // options: [{
      //   value: '选项1',
      //   label: '黄金糕'
      // }, {
      //   value: '选项2',
      //   label: '双皮奶'
      // }],
      // tableList: [
      //   { label: '序号', prop: 'index', attrs: { width: '120px', sortable: true }},
      //   { label: '审批时间', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
      //   { label: '姓名', prop: 'name', attrs: {}},
      //   { label: '开始时间', prop: 'start_time', attrs: {}},
      //   { label: '结束时间', prop: 'end_time', attrs: {}},
      //   { label: '请假类型', prop: 'leave_type', attrs: {}},
      //   { label: '总时长', prop: 'total_time', attrs: {}},
      //   { label: '操作', slot: true, type: 'button', attrs: {}}
      // ],
      // form: {
      //   name: '',
      //   department: '',
      //   leave_type: '',
      //   leave_time: '明早一小时',
      //   cur_remain: '',
      //   start_time: '',
      //   time_range: [],
      //   end_time: '',
      //   desc: ''
      // },
      // pageInfo: {
      //   currentPage: 1,
      //   total: 30,
      //   pageSize: 20
      // }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.$refs.formModel.form)
      console.log(this.$refs.formModel1.form)
    },
    reset(formName) {
      this.$refs[formName].resetFields()
      console.log(this.$refs[formName].form)
    }
  }
}
</script>

<style lang="scss" scoped>
.info_container{
  background-color: #fff;
    padding: 20px 28px;
}
  ::v-deep .el-form{
    .el-form-item{
      margin-right: 0;
      padding-right: 80px;
      width:33.3%;
      .el-form-item__label{
        display: block;
        text-align: left;
      }
      .el-form-item__content,.el-input,.el-select{
        width: 100%;
      }
    }
  }
</style>
