<template>
  <el-calendar v-model="value">
    <template
      slot="dateCell"
      slot-scope="{date, data}"
    >
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.is-selected {
    color: #1989FA;
  }
</style>>
