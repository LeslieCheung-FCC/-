<template>
  <div class="out_one">
    <div class="out-a">
      <!--  加路由跳转 -->
      <img
        class="out-b"
        @click="push"
        src="../../../../static/images/scenic/se_recommond/icon-05@2x.png"
        alt
      />
      <div>
        <img class="fade-two" src="../../../../static/images/scenic/se_card/icon-01@2x.png" alt />
        <span class="fade-one">{{ msg }}</span>
      </div>
      <span></span>
    </div>
    <img class="tubiao" src="../../../../static/images/scenic/se_card/banner-icon@2x.png" alt />
    <span class="wushu">少林寺</span>
    <span class="zhengzhou">郑州 经典必打卡</span>
    <span class="tiyan">42583人体验过</span>
    <div class="fade1"></div>
    <div class="pres">
      <span>—— 体验地 ——</span>
    </div>
    <Experience></Experience>
    <Experience1></Experience1>
    <Experience2></Experience2>
  </div>
</template>

<script>
import Experience from "./experience";
import Experience1 from "./experience-a";
import Experience2 from "./experience-b";
export default {
  props: {},
  data() {
    return {
      msg: "玩法介绍"
    };
  },
  methods: {
    push() {
      this.$router.go(-1);
    }
  },
  components: {
    Experience,
    Experience1,
    Experience2
  }
};
</script>

<style scoped lang="less">
.out-a {
  position: relative;
  text-align: center;
  padding-top: 0.72rem;
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  height: 7.07rem;
  background: url("../../../../static/images/scenic/se_card/banner-@2x.png")
    no-repeat;
  background-size:cover;
}
.out-b {
  width: 0.48rem;
  height: 0.48rem;
}
.out_one {
  //27bodajia处理bug
  overflow: hidden;
  .fade-one {
    padding: 0.2rem;
    // position: absolute;
    width: 1.4rem;
    height: 0.36rem;
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #ffffff;
    // left: 3rem;
  }
  .fade-two {
    width: 0.48rem;
    height: 0.48rem;
    margin-top: -0.15rem;
  }
  .wushu {
    position: absolute;
    width: 1rem;
    height: 0.21rem;
    font-size: 0.22rem;
    line-height: 0.43rem;
    color: #ffffff;
    top: 4.5rem;
    left: 1.2rem;
  }
  .zhengzhou {
    width: 5rem;
    height: 0.57rem;
    font-size: 0.6rem;
    line-height: 0.26rem;
    color: #ffffff;
    position: absolute;
    top: 5.4rem;
    left: 0.3rem;
  }
  .tiyan {
    position: absolute;
    width: 2rem;
    height: 0.21rem;
    font-size: 0.22rem;
    line-height: 0.26rem;
    color: #ffffff;
    top: 6rem;
    left: 0.3rem;
  }
  .fade1 {
    width: 100%;
    // position: absolute;
    top: 7rem;
    height: 0.15rem;
    background-color: #f1f1f1;
  }
  .pres {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
    margin-top: .2rem;
    // top:7.5rem;
    // position: absolute;
    width: 4rem;
    height: .5rem;
    font-size: 0.36rem;
    line-height: 0.26rem;
    color: #333333;
    span {
      //  text-align: center;
    }
  }
}
.tubiao {
  width: 1.73rem;
  height: 0.48rem;
  position: absolute;
  top: 4.5rem;
  left: 0.3rem;
}
</style>
