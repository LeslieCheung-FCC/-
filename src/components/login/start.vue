<template>
  <div>
    <img class="fade" src="../../../static/images/login/3qidong.png" alt />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/Guidance");
    }, 3000);
  },
  methods: { 
  },
  components: {}
}
</script>

<style scoped lang="less">
.fade{
    width:7.5rem;
}
</style>
