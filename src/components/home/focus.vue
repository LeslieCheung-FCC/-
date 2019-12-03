<template>
  <!-- 关注页面 -->
  <div>
    <Box_top :text='text'></Box_top>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Recommend from './recommend'
import Box_top from './box_top'
export default {
  props: {},
  data() {
    return { 
        message:'../../../static/mock/home_recommend.json',
        text:'关注'
    };
  },
  methods: {
  },
  components: {
      Recommend,
      Box_top
  }
};
</script>

<style scoped lang="less">
.box_top {
    display: flex;
    justify-content: space-between;
    padding:.71rem .25rem .21rem 0;
    border-bottom: 1px solid #e8e8e8;
    img{
        width: .48rem;
        height: .48rem;
    }
    p{
        color: #333333;
        font-size: .33rem;
    }
  select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: .92rem;
    font-size: .26rem;
    color: #333333;
    background: url("../../../static/images/home/attebtion/icon-02@2x.png")
      no-repeat scroll right center transparent;
    background-size: 0.48rem 0.48rem;
  }
}
</style>
