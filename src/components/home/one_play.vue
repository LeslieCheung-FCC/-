<template>
  <!-- 一日游 -->
  <div class="onepbox">
    <Box_top :text="text" :address='address'></Box_top>
    <!-- 必游景点 -->
    <h2>必游景点推荐</h2>
    <One_p_calouse class="Banner"></One_p_calouse>
    <h2 class="two">郑州必玩</h2>
    <Recommend :mess='message'></Recommend>
  </div>
</template>

<script>
import Box_top from "./box_top";
import One_p_calouse from "./one_p_calouse";
import Recommend from "./recommend"
export default {
  props: {},
  data() {
    return {
      text: "一日游",
      message:'../../../static/mock/home_recommend.json',
      address:'云南'
    };
  },
  methods: {},
  components: {
    Box_top,
    One_p_calouse,
    Recommend
  },
  mounted(){
    this.$store.state.place_list=[];
  }
};
</script>

<style scoped lang="less">
.onepbox {
  h2 {
      color: #333333;
      font-size: .32rem;
      margin:0 0 .39rem .34rem;
  }
  .Banner {
    height: 2.11rem;
    margin-bottom: .34rem;
  }
.two{
    margin-bottom: .34rem;
}
}
</style>
