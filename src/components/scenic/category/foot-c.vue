<template>
  <div class="out">
    <img class="img-one" src="../../../../static/images/scenic/se_food/03@2x.png" alt />

    <span class="shaolin">河南食府</span>
    <span class="shaolin-one">28篇点评·距离你71m</span>
    <div class="out-a">
      <img class="img-two" src="../../../../static/images/scenic/se_card/icon-02@2x.png" alt />
      <span class="shuzi">2310</span>
    </div>
    <div class="out-b">
      <img class="tupian" src="../../../../static/images/scenic/se_food/pic-07@2x.png" alt />
      <img class="tupian-one" src="../../../../static/images/scenic/se_food/pic-08@2x.png" alt />
      <img class="tupian-two" src="../../../../static/images/scenic/se_food/pic-09@2x.png" alt />
      <div class="out-g"><span class="tupian-a">味道正宗分量十足</span></div>
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
  .out-e{
      margin-top: .4rem;
      width: 100%;
      height: .006rem;
      background-color: #cccccc;
  }
 
  .out-b {
    position: relative;
    .out-g{
    position: absolute;
    top: 3.24rem;
    left: .57rem;
  width: 2.30rem;
	height: .40rem;
	background-color: #fd6519;
	border-radius: .2rem;
    .tupian-a{
  
      margin-left: .2rem;
    width: 1.66rem;
	height: .23rem;
	font-size: .24rem;
	line-height: .35rem;
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
    width: .58rem;
    height: .58rem;
    margin-left: 0.33rem;
  }
  .shaolin {
    position: absolute;
    margin-left: 0.2rem;
    top: -0.2rem;
    width: 3.8rem;
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
