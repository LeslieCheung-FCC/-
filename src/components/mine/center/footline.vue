<template>
  <div class="footline">
    <van-nav-bar title="我的足迹" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <!-- <h1>昨天</h1> -->
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <div class="left">
          <img :src="item.img" />
        </div>
        <div class="content">
          <p class="happy">{{item.title}}</p>
          <p class="friend">{{item.content}}</p>
          <p class="time">{{item.time | newTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    get_mess() {
      this.axios.get("/api/FootPrintList").then(data => {
        console.log(data.data);
        this.arr = data.data;
      });
    }
  },
  components: {},
  mounted() {
    this.get_mess();
  },
  filters: {
    newTime(val) {
      let getTime = new Date(val);
      let date = new Date(getTime);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';
      return Y+M+D;
    }
  }
};
</script>

<style scoped lang="less">
.van-nav-bar__title {
  font-size: 0.36rem;
  color: rgb(51, 51, 51);
}
.van-icon {
  color: black;
}
.footline {
  height: 100rem;
  background: #f1f1f1;
  overflow: hidden;
}
ul {
  padding: 0.32rem;
  background: #ffffff;
  li {
    display: flex;
    padding-bottom: .1rem;
    margin-bottom: .1rem;
    .left {
      width: 2.17rem;
      height: 1.86rem;
      margin-right: .1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .happy{
        font-size: .28rem;
      }
      .friend{
        font-size: .24rem;
        font-weight: 300;
      }
      .time{
        align-self: flex-end;
        font-size: .18rem;
      }
    }
  }
}
</style>
