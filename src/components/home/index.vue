<template>
  <div class="home_box">
    <!-- 轮播图 -->
    <Calouse></Calouse>
    <!-- 搜索框 -->
    <div class="top_list">
      <div class="top_position">
        <img src="../../../static/images/home/Icon- (8).png" alt />
        <p>郑州</p>
        <Search :leng="5.9"></Search>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="nav_box">
      <ul class="nav_list">
        <li>
          <router-link to="/Travel">
            <img src="../../../static/images/home/Icon- (14).png" alt />
            <p>游记</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Air_ticket">
            <img src="../../../static/images/home/Icon- (17).png" alt />
            <p>机票/火车票</p>
          </router-link>
        </li>
        <li>
          <router-link to="/One_play">
            <img src="../../../static/images/home/Icon- (20).png" alt />
            <p>一日游</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Around_travel">
            <img src="../../../static/images/home/Icon- (23).png" alt />
            <p>周边游</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Scenic">
            <img src="../../../static/images/home/Icon-1 (2).png" alt />
            <p>景点</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 灰度条 -->
    <div class="gray"></div>
    <!-- 推荐和关注 -->
    <div class="tap_change">
      <router-link to="/Home/Recommend">推荐</router-link>
      <router-link to="/Focus">关注</router-link>
    </div>
    <router-view></router-view>
    <div class="more">
    <img class="goldenshou" src="../../../static/images/luck/2.gif" alt="" v-if="isimg">
    <div class="loadingmore" @click="changemore" v-if="issshow">显示更多</div>
    <div class="loadingmore" v-else>没有更多了~</div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Calouse from "./calouse";
import Search from "./search";
import Foot from "../public/foot";

export default {
  props: {},
  data() {
    return {
      message: [],
      issshow: true,
      isimg:false
    };
  },
  methods: {
    changemore() {
      this.isimg=true;
      setTimeout(() => {
        this.isimg=false;
        this.$store.state.home_more = 12;
        this.issshow = false;
      },2000);
    }
  },
  components: {
    Calouse,
    Search,
    Foot
  }
};
</script>

<style scoped lang="less">
.home_box {
  .top_list {
    position: absolute;
    width: 100%;
    padding: 0 0.3rem 0 0.24rem;
    margin-top: 0.54rem;
    top: 0;
    z-index: 1;
    .top_position {
      display: flex;
      align-items: center;
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      p {
        font-size: 0.2rem;
        margin-right: 0.26rem;
        white-space: nowrap;
      }
    }
  }
  .nav_box {
    background: url("/static/images/home/Icon- (2).png") no-repeat center -3.9rem;
    background-size: cover;
    .nav_list {
      display: flex;
      width: 100%;
      justify-content: space-around;
      border-radius: 0.14rem;
      background-color: #fff;
      padding: 0.38rem 0 0.32rem 0;
      li {
        a {
          display: flex;
          align-items: center;
          flex-direction: column;

          img {
            width: 0.8rem;
            height: 0.8rem;
            margin-bottom: 0.2rem;
          }
          p {
            font-family: "PingFang-SC-Medium";
            text-align: center;
            font-size: 0.24rem;
            color: rgb(102, 102, 102);
          }
        }
      }
    }
  }
  .gray {
    background-color: #f1f1f1;
    height: 0.16rem;
    width: 100%;
  }
  .tap_change {
    margin: 0.31rem 0 0 0;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    padding: 0 0 0.21rem 0.5rem;
    a {
      color: rgb(51, 51, 51);
      font-size: 0.32rem;
      margin-right: 0.85rem;
      box-sizing: border-box;
    }
    .router-link-active {
      color: rgb(235, 101, 25);
      border-bottom: 0.04rem solid #fe3d74;
    }
  }
  .loadingmore {
    font-size: 0.28rem;
    color: #fb6519;
    width: 100%;
    text-align: center;
  }
  .goldenshou{
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 auto;
  }
  .more{
    margin-bottom: 2rem;
  }
}
</style>
