<template>
  <div class="team_container">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="选择请假人员：">
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
        />
      </el-form-item>
      <el-form-item label="请假类型：">
        <el-select v-model="form.leave_type" placeholder="请选择">
          <el-option
            v-for="item in select"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="请假时间：">
        <el-date-picker v-model="form.time_range" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
      </el-form-item>
      <el-form-item label="请假说明：">
        <el-input v-model="form.desc" type="textarea" :autosize="{ minRows: 1.5, maxRows: 18}" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      props: { multiple: true },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      select: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      value: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.team_container{
    padding: 20px 28px;
  // padding: 10px;
    border:1px solid #ebebeb;
    background-color: #fff;
    // box-shadow: 0 0 10px #ebebeb;
}

</style>
