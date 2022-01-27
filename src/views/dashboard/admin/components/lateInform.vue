<template>
  <div class="container">
    <div class="title">最新公告</div>
    <div v-for="(item,index) in informList" :key="index" class="inform">
      <img :src="item.img" alt="">
      <div class="right">
        <div>{{ item.title }}</div>
        <span class="content">{{ item.content }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      informList: [{
        img: require('@/assets/icon/folder.png'),
        title: '今日最新通知公告',
        content: '本日社会重点新闻关注的，今日全国各地疫情管理信息公布如下'
      },
      {
        img: require('@/assets/icon/folder.png'),
        title: '今日最新通知公告',
        content: '本日社会重点新闻关注的，今日全国各地疫情管理信息公布如下'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  overflow: hidden;
}
.title{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}
.inform{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img{
    width: 50px;
    vertical-align: top;
  }
  .right{
    margin-left: 15px;
    flex: 1;
    div{
      font-size: 18px;
      font-weight: 500;
    }
    .content{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

</style>
