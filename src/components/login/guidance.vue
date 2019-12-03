<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../../../static/images/login/pic-02@2x.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../static/images/login/pic-03@2x.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../static/images/login/pic-01@2x.png" alt />
        <div class="start" @click="$router.push('/Register')">
            <span>立即出发</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style scoped lang="less">
.start{
    width: 3rem;
    height: .66rem;
    margin-top: 1.6rem;
    margin-left: 30%;
    background-color:#BC42F9;
    border-radius: .5rem;
span{
    color: #ffffff;
    font-size: .36rem;
    margin-left: .8rem;
 line-height: .6rem;
}
}
</style>
