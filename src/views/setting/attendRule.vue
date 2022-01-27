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
      <div>
        <el-input v-model="ruleName" prefix-icon="el-icon-search" placeholder="请输入考勤规则名称" style="width:320px;margin-right:50px" @change="search" />
        <el-button type="plain" icon="el-icon-plus">添加考勤规则</el-button>
      </div>
    </template>
    <template v-slot:button="{row}">
      <el-button type="primary" @click="handleSubmit(row)">编辑</el-button>
    </template>
    <template v-slot:popup>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </template>
  </template-layout>
</template>

<script>
export default {
  data() {
    return {
      ruleName: '',
      dialogVisible: false,
      task: [{
        label: '普通办公',
        name: 'waitingTask',
        value: '8人'
      },
      {
        label: '不定时办公',
        name: 'averageTask',
        value: '32人'
      },
      {
        label: '驻场办公',
        name: 'totalTask',
        value: '24人'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      tableList: [
        { label: '名称', prop: 'name', attrs: {}},
        { label: '工作时间', prop: 'time', attrs: {}},
        { label: '考勤方式', prop: 'methods', attrs: {}},
        { label: '地点', prop: 'place', attrs: {}},
        { label: '考勤范围', prop: 'scale', attrs: {}},
        { label: '人脸验身', prop: 'face', attrs: {}},
        { label: '人员', prop: 'people', attrs: {}},
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
      name: '驻场办公',
      time: '09:00',
      methods: '现场，移动',
      place: '小木路桥100号',
      scale: '300米',
      face: '否',
      people: '王小'
    }, {
      name: '普通办公',
      time: '09:00',
      methods: '自动',
      place: '五洲国际大厦',
      scale: '300米',
      face: '否',
      people: '默认'
    }])
  },
  methods: {
    search() {
      console.log(this.ruleName)
    },
    handleSubmit(row) {
      console.log(this.form, row)
      this.dialogVisible = true
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      const rr = [{
        name: '普通办公',
        time: '09:00',
        methods: '自动',
        place: '五洲国际大厦',
        scale: '300米',
        face: '否',
        people: '默认'
      }]
      this.$refs.leaveForm.getTableList(rr)
    },
    handleCurrentChange(val) {
      console.log('当前页', val)
      const rr = [{
        name: '普通办公',
        time: '09:00',
        methods: '自动',
        place: '五洲国际大厦',
        scale: '300米',
        face: '否',
        people: '默认'
      }, {
        name: '普通办公',
        time: '09:00',
        methods: '自动',
        place: '五洲国际大厦',
        scale: '300米',
        face: '否',
        people: '默认'
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
        name: '普通办公',
        time: '09:00',
        methods: '自动',
        place: '五洲国际大厦',
        scale: '300米',
        face: '否',
        people: '默认'
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
    text-align: center;
    margin: 10px 0;
    border-right: 2px solid #e0e0e0;
    &:last-child{
      border-right: none;
    }
    div{

      &:first-child{
        color: #8c8c8c;
        font-size: 23px;
        line-height: 50px;
      }
      &:last-child{
        font-size: 25px;
      }
    }
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
    // height: 120px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
