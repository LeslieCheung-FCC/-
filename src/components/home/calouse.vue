//顶部轮播图
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="../../../static/images/home/Icon- (2).png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../static/images/home/Icon- (5).png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../static/images/home/Icon- (2).png" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
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
        pagination: {
          el: ".swiper-pagination"
        },
        loop:true
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
  }
};
</script>

<style lang="less" scoped>
.swiper-container{
  height: 4rem;
  .swiper-slide{
    height: 100%;
    img{
      height: 100%;
    }
  }
}
.swiper-pagination-bullet{
  background: #aba29b;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background: #ff9aff;
}

</style>