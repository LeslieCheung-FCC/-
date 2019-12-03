<template>
  <div class="main">
    <div class="scenic">
      <div class="header clearfix">
        <div class="search clearfix">
          <div class="search-left left-f">
            <img src="../../../static/images/scenic/search2.png" alt />
          </div>
          <input class="left-f" type="seach" placeholder="景点名称" onblur="seach" />
        </div>
        <router-link to="/Choose">
          <div class="search-right right-f">
            <img src="../../../static/images/scenic/select2.png" alt />
          </div>
        </router-link>
      </div>

      <!-- 出口景色列表 -->

      <ScenicRem class="scenicRem"></ScenicRem>
      <ScenicHead></ScenicHead>
      <p class="beingname">正在同游：小魔女 小天使 小天真等36人</p>
    </div>
    <Composite></Composite>
    <Foot class="foot"></Foot>
  </div>
</template>

<script>
import ScenicRem from "./scenic-rem";
import ScenicHead from "./secnic-head";
import Foot from "../public/foot";
import Composite from "./composite";
export default {
  props: [],
  data() {
    return {};
  },
  components: {
    ScenicRem,
    ScenicHead,
    Foot,
    Composite
  },
  methods:{
      seach(){
        console.log('搜索')
      }
  }
};
</script>

<style scoped lang="less">
.main {
  overflow: hidden;
}
.scenic {
  padding-top: 0.001rem;

  width: 100%;
  font-family: "PingFangMe";
  position: relative;
  padding-bottom: 0.01rem;
  .foot {
    width: 100%;
  }
  .left-f {
    float: left;
  }
  .right-f {
    float: right;
  }
  .header {
    z-index: 12;
    background-color: #ffffff;
    width: 100%;
    padding-top: 0.12rem;
    padding-left: 0.32rem;
    position: fixed;
    .search {
      height: 0.66rem;
      width: 6.3rem;
      text-align: center;
      background-color: #f1f1f1;
      border-radius: 0.66rem;
      display: inline-block;
      input {
        padding-left: 0.26rem;
        margin-top: 0.18rem;
        font-size: 0.24rem;
        color: rgb(153, 153, 153);
        background-color: #f1f1f1;
        border: none;
        outline: none;
      }
      .search-left {
        margin-left: 0.32rem;
        margin-top: 0.09rem;
      }
    }
    .search-right {
      margin-top: 0.1rem;
      margin-right: 0.34rem;
    }
    img {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
  .scenicRem {
    margin-top: 1.25rem;
  }
  .beingname {
    margin-top: 0.26rem;
    margin-left: 0.3rem;
    color: #999999;
  }
}
</style>
