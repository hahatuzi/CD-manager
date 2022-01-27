<template>
  <div class="template_layout">
    <div class="template_header">
      <slot name="header" />
    </div>
    <div class="template_body">
      <slot name="body" />
      <!-- <div class="template_body">
        <slot name="title" /> -->
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="hsla(0,0%,100%,.9)"
        :data="tableData"
        style="width: 100%"
        stripe
      >
        <template v-for="item in tableDataList">
          <!-- 索引列 -->
          <el-table-column v-if="item.prop=='index'" :key="item.label" type="index" :label="item.label" v-bind="item.attrs" />
          <!-- 自定义列 -->
          <el-table-column v-else-if="item.slot" :key="item.label" :prop="item.prop" :label="item.label" v-bind="item.attrs">
            <template slot-scope="{row}">
              <slot :name="item.type" :row="row" />
            </template>
          </el-table-column>
          <!-- 常规列 -->
          <el-table-column v-else :key="item.label" :prop="item.prop" :label="item.label" v-bind="item.attrs" />
        </template>
      </el-table>
      <!-- </div> -->
      <div v-if="pageInfo" class="template_footer">
        <!-- <slot name="footer"> -->
        <el-pagination
          :current-page.sync="pageInfo.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size.sync="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      <!-- </slot> -->
      </div>
    </div>
    <slot name="popup" />
    <!-- <div v-if="pageInfo" class="template_footer">
      <slot name="footer">
        <el-pagination
          :current-page.sync="pageInfo.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size.sync="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    tableList: {
      type: Array,
      default: () => {}
    },
    pageInfo: {
      type: Object,
      default: () => {}
    },
    tableFn: {
      type: Function,
      default: async(res) => {
        await new Promise((resolve, reject) => {
          resolve({ name: 'lisa' })
        }).then(value => { return { value, res } })
      }
    }
  },
  data() {
    return {
      loading: true,
      tableData: [{
        approve_time: '2016-05-02',
        name: '王小虎',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }, {
        approve_time: '2016-05-02',
        name: '王小虎',
        start_time: '2016-05-02',
        end_time: '2016-05-02',
        leave_type: '1',
        total_time: '2016-05-02'
      }]
    }
  },
  computed: {
    tableDataList() {
      return this.tableList
    }
  },
  methods: {
    getTableList(form) {
      this.loading = true
      const res = this.tableFn(form)
      console.log(res, form)
      this.tableData = form
      if (this.pageInfo) this.pageInfo.total = form.length
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.template_layout{
  width: 100%;
  background-color: #f0f2f5;
  .template_header,.template_body{
    padding: 20px 28px;
    border:1px solid #ebebeb;
    // box-shadow: 0 0 10px #ebebeb;
    background-color: #fff;
  }
  .template_body{
    // padding: 0 10px;
    margin-top: 20px;
    ::v-deep.el-table{
      border: 1px solid #e6ebf5;
      border-bottom: none;
      margin-bottom: 15px;
    }
  }
  .template_footer{
    height: 50px;
    margin-top: 15px;
    text-align: right;
  }
}
</style>
