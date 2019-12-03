<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="../../../static/images/home/daytour/pic-01@2x.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../static/images/home/daytour/pic-02@2x.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../static/images/home/daytour/pic-03@2x.png" alt />
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
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
        effect: "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
        loop:true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 2.11rem !important;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>