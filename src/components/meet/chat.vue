<template>
  <!-- 聊天页面根组件 -->
  <div>
   <Head></Head>
    <Reply></Reply>
    <Nearby></Nearby>

  </div>
</template>

<script>
import Head from './head'
import Reply from "./chat_list/reply";
import Nearby from "./chat_list/nearby";
import NearbyList from "./chat_list/nearby_list";
export default {
  props: {},
  data() {
    return {

    };
  },
  methods: {},
  components: {
    Reply,
    Nearby,
    NearbyList,
    Head
    
  }
};
</script>

<style scoped lang="less">
</style>
