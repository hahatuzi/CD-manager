<template>
  <div>
    <div class="table_title">假期统计：</div>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="hsla(0,0%,100%,.9)"
      :data="tableData"
      style="width: 100%"
      stripe
    >
      <el-table-column v-for="item in tableList1" :key="item.label" :prop="item.prop" :label="item.label" v-bind="item.attrs" />
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      tableList1: [
        { label: '假期类型', prop: 'approve_time', attrs: { width: '120px', sortable: true }},
        { label: '余量', prop: 'name', attrs: {}},
        { label: '有效期', prop: 'start_time', attrs: {}}
      ]
    }
  },
  methods: {
    handleClick(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
// .table_title{
//   font-weight: 600;
//   font-size: 18px;
//   padding: 15px 0 5px 0;
// }
</style>
