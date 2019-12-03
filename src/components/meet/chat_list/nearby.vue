<template>
  <!--聊天页面 附近的人组件 -->
  <div class="nearby">
    <ul>
      <li>
        <router-link to="/Meet/chat/nearby">附近同游</router-link>
      </li>
      <li class="as">
        <router-link to="/Meet/chat/walks">我的同游</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.nearby {
    
  ul {
    display: flex;
    padding-top: 0.46rem;
    padding-left: 0.32rem;
    border-bottom: 1px solid #ccc;
    
    li {
      a {
        display: block;
        font-size: 0.29rem;
        color: #ccc;
      }

      .router-link-exact-active,
      .router-link-active {
        color: rgb(253, 101, 25);
        border-bottom: 3px rgb(253, 101, 25) solid;
      }
    }
    .as {
      margin-left: 0.91rem;
    }
  }
}
</style>
