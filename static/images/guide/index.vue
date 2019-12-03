<template>
  <div>
  <div class="index">
    <!-- <img src="../../../static/images/guide/Icon- (29).png" alt class="ban" />`1      -->
    <div class="fade"></div>
    <div class="fade1">
      <h1>推荐驴友</h1>
    </div>
    <!-- <Banner></Banner> -->
    <div class="fade2"></div>
    <div class="fade1"><h1>为您推荐</h1>
      </div>
<Banner_two></Banner_two>
 <!-- <Foot></Foot> -->
  </div>
</template>

<script>
// import Banner from "../guide/banner";
import Banner_two from "../guide/Banner_two";
// import Foot from "../public/foot"
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    // Banner,
   Banner_two,
  //  Foot
  }
};
</script>

<style scoped lang="less">
.swiper-container {
    height: 5rem!important;
.index{
  padding-bottom: 1rem;
}
.swiper-container {
    height: 5rem !important;
}
.ban {
  width: 100%;
}
.fade {
  width: 100%;
  height: 0.16rem;
  background-color: #f1f1f1;
}
.fade1 {
  margin-top: 0.32rem;
  margin-left: 0.32rem;
  h1 {
    font-size: 0.32rem;
    color: #515151;
  }
}
.fade2 {
  margin-top: 0.32rem;
  width: 100%;
  height: 0.16rem;
  background-color: #f1f1f1;
  h1 {
    font-size: 0.32rem;
    color: #515151;
  }
}
}
</style>
