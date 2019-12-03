<template>
  <div class="heads">
    <img src="../../../../static/images/meet/gotravle/icon-03@2x.png" @click="fa" alt />
    <slot name="a">
      <p></p>
    </slot>
   
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    fa(){
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.heads {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 0.16rem;
    position: absolute;
    left: 0.3rem;
  }
  p {
    font-size: 0.36rem;
    color: #333;
  }
}
</style>
