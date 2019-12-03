<template>
  <div class="nav">
    <van-nav-bar 
    title="高级刷选" 
    @click-left="onClickLeft" 
    left-arrow>
      
    </van-nav-bar>
    <button >提交</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.van-nav-bar__title {
  font-size: 0.36rem;
  color: rgb(51, 51, 51);
}
.van-icon {
  color: black;
}
</style>
