<template>
  <div class="tra_box">
    <!-- 顶部搜索栏 -->
    <div class="tra_top">
      <router-link to="/home">
        <img src="../../../static/images/home/travel/icon-02@2x.png" alt />
      </router-link>
      <Search :leng="4.86" :text="text" :color="color"></Search>
      <router-link to="/meet"><img src="../../../static/images/home/travel/icon-03@2x.png" alt /></router-link>
    </div>
    <!-- 推荐change -->
    <div class="recommomd">
      <router-link to="/Travel/Tra_Recommend">推荐</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./search";
export default {
  props: {},
  data() {
    return {
      text: "热搜景点游记云南大理",
      color: "#f5f5f5"
    };
  },
  methods: {},
  components: {
    Search
  }
};
</script>

<style scoped lang="less">
.tra_box {
  .tra_top {
    display: flex;
    height: 0.66rem;
    justify-content: space-between;
    padding: 0 0.43rem 0.17rem 0.31rem;
    margin-top: 0.55rem;
    align-items: center;
    border-bottom: 1px solid #fdfdfd;
    box-sizing: border-box;
    margin-bottom: 0 .25rem 0.4rem .4rem;
    img {
      width: 0.48rem;
      height: 0.48rem;
    }
    div {
      height: 0.66rem;
    }
  }
  .recommomd {
    margin-top: 0.24rem;
    margin-left:0.4rem;
    overflow: hidden;
    a {
      display: block;
      float: left;
      font-size: 0.3rem;
      padding-bottom: 0.16rem;
      margin-right:.92rem;
      color: #333333;
      box-sizing: border-box;
    }
    .router-link-active {
      color: #fb6519;
      border-bottom: 0.04rem solid #fb6519;
    }
  }
}
</style>
