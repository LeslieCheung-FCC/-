<template>
  <div class="out">
    <img class="img-one" src="../../../../static/images/scenic/se_card/01@2x.png" alt />

    <span class="shaolin">少林寺</span>
    <span class="shaolin-one">3086篇点评·距离你75km</span>
    <div class="out-a">
      <img class="img-two" src="../../../../static/images/scenic/se_card/icon-02@2x.png" alt />
      <span class="shuzi">2794</span>
    </div>
    <div class="out-b">
      <img class="tupian" src="../../../../static/images/scenic/se_card/pic-01@2x.png" alt />
      <img class="tupian-one" src="../../../../static/images/scenic/se_card/pic-02@2x.png" alt />
      <img class="tupian-two" src="../../../../static/images/scenic/se_card/pic-03@2x.png" alt />
      <div class="out-g">
        <span class="tupian-a">少林武术发祥地</span>
      </div>
    </div>
    <div class="out-c">
      <span class="ori">门票</span>
      <div class="out-d">
        <span class="ori-a">门票</span>
      </div>
      <span class="ori-b">月售86</span>
      <span class="ori-c">￥82起 ></span>
    </div>
    <div class="out-e"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.out {
  margin-top: 0.5rem;
  position: relative;
  .out-e {
    margin-top: 0.4rem;
    width: 100%;
    height: 0.006rem;
    background-color: #cccccc;
  }
  .out-c {
    position: relative;
    margin-top: 0.1rem;
    margin-left: 0.33rem;
    width: 3.9rem;
    height: 0.94rem;
    background-color: #f1f1f1;
    .ori {
      position: absolute;
      margin-top: 0.16rem;
      margin-left: 0.24rem;
      width: 0.6rem;
      height: 0.23rem;
      font-size: 0.24rem;
      line-height: 0.26rem;
      color: #333333;
    }
    .ori-c {
      position: absolute;
      margin-top: 0.36rem;
      margin-left: 2.76rem;
      width: 1.2rem;
      height: 0.23rem;
      font-size: 0.24rem;
      line-height: 0.22rem;
      color: #333333;
    }
    .ori-b {
      position: absolute;
      margin-top: 0.5rem;
      margin-left: 0.81rem;
      width: 0.7rem;
      height: 0.17rem;
      font-size: 0.18rem;
      line-height: 0.22rem;
      color: #666666;
    }
    .out-d {
      position: absolute;
      margin-top: 0.44rem;
      margin-left: 0.24rem;
      width: 0.5rem;
      height: 0.3rem;
      background-color: #fd6519;
      border-radius: 0.02rem;
      .ori-a {
           position: absolute;
        width: .6rem;
        height: 0.17rem;
        font-size: 0.18rem;
        line-height: 0.29rem;
        color: #ffffff;
        margin-left: 0.07rem;
      }
    }
  }
  .out-b {
    position: relative;
    .out-g {
      position: absolute;
      top: 3.24rem;
      left: 0.57rem;
      width: 2.3rem;
      height: 0.4rem;
      background-color: #fd6519;
      border-radius: 0.2rem;
      .tupian-a {
        margin-left: 0.3rem;
        width: 1.66rem;
        height: 0.23rem;
        font-size: 0.24rem;
        line-height: 0.35rem;
        color: #ffffff;
      }
    }
    .tupian {
      margin-left: 0.33rem;
      width: 4.3rem;
      height: 3.88rem;
    }
    .tupian-one {
      margin-left: 0.1rem;
      position: absolute;
      width: 2.44rem;
      height: 1.89rem;
    }
    .tupian-two {
      margin-left: 0.1rem;
      top: 1.99rem;
      position: absolute;
      width: 2.44rem;
      height: 1.89rem;
    }
  }
  .img-one {
    width: 0.58rem;
    height: 0.58rem;
    margin-left: 0.33rem;
  }
  .shaolin {
    position: absolute;
    margin-left: 0.2rem;
    top: -0.2rem;
    width: 1rem;
    height: 0.31rem;
    font-size: 0.32rem;
    line-height: 0.38rem;
    color: #333333;
  }
  .shaolin-one {
    position: absolute;
    top: 0.2rem;
    margin-left: 0.2rem;
    width: 2.51rem;
    height: 0.21rem;
    font-size: 0.22rem;
    line-height: 0.34rem;
    color: #666666;
  }
}
.out-a {
  position: relative;
  .img-two {
    width: .48rem;
    height: .48rem;
    margin-left: 6.75rem;
    margin-top: -1.4rem;
    // width: 0.27rem;
    // height: 0.28rem;
  }
  .shuzi {
    position: absolute;
    margin-left: -0.55rem;
    margin-top: -0.3rem;
    width: 0.52rem;
    height: 0.17rem;
    font-size: 0.22rem;
    line-height: 0.26rem;
    color: #666666;
  }
}
</style>

