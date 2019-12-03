// 头部搜索框
<template>
  <div class="sea_box" :style="{width:leng+'rem',background:color}">
    <img src="../../../static/images/home/Icon- (11).png" alt />
    <router-link to="/Home_search"><input type="text" :placeholder="text" @keydown.13="message"/></router-link>
  </div>
</template>

<script>
export default {
  props: {
    leng: [String, Number],
    text: {
      default: "热搜景点：云南大理"
    },
    color: {
      default: "transparent"
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {}
};
</script>

<style scoped lang="less">
.sea_box {
  box-sizing: border-box;
  display: flex;
  height: 0.72rem;
  border-radius: 0.72rem;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  img {
    margin: 0 0.09rem 0 0.21rem;
    width: 0.48rem;
    height: 0.48rem;
  }
  input {
    height: 0.72rem;
    outline: none;
    border: none;
    font-size: 0.23rem;
    background: transparent;
  }
  input::placeholder {
    font-size: 0.23rem;
  }
}
</style>
