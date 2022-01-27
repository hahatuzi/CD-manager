<template>
  <div>
    <div v-if="title" class="form_title">{{ title }}</div>
    <el-form ref="form" :model="form" inline>
      <el-form-item v-for="(item, key) in formModel" :key="key" :label="item.label" :prop="item.prop">
        <!-- 输入框 -->
        <el-input v-if="item.type === 'input'" v-model="form[item.prop]" :type="item.inputType" v-bind="item.attrs" />
        <!-- 选择器 -->
        <el-select v-if="item.type === 'select'" v-model="form[item.prop]" v-bind="item.attrs">
          <el-option v-for="i in item.options" :key="i.value" :label="i.label" :value="i.value" />
        </el-select>
        <!-- 日期时间选择器 -->
        <el-date-picker v-if="item.type === 'datePicker'" v-model="form[item.prop]" v-bind="item.attrs" />
        <!-- 单选框 -->
        <el-radio-group v-if="item.type === 'radio'" v-model="form[item.prop]" v-bind="item.attrs">
          <!-- 普通单选框 -->
          <template v-if="item.radioType === 'radio'">
            <el-radio v-for="(radio, index) in item.options" :key="index" :label="radio.label" />
          </template>
          <!-- 按钮形式的单选框 -->
          <template v-if="item.radioType === 'radioButton'">
            <el-radio-button v-for="(radio, index) in item.options" :key="index" :label="radio.label" />
          </template>
        </el-radio-group>
        <!-- 复选框 -->
        <el-checkbox-group v-if="item.type === 'checkbox'" v-model="form[item.prop]" v-bind="item.attrs">
          <el-checkbox v-for="(i, index) in item.options" :key="index" :label="i.label">
            {{ i.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    formModel: {
      type: Array,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.form = this.formModel.reduce(function(result, item) {
      result[item.prop] = ''
      if (item.options && item.type === 'checkbox') {
        result[item.prop] = []
        item.options.forEach(i => { if (i.selected) result[item.prop].push(i.value) }
        )
      } else if (item.options) {
        item.options.forEach(i => { if (i.selected) result[item.prop] = i.value })
      }
      return result
    }, {})
    console.log(this.form)
  },
  methods: {
    resetFields() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.form_title{
  line-height: 70px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
</style>
