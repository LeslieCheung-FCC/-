<template>
  <div class="head">
    <ul>
      <li>
          <router-link to="/Meet/chat">聊天</router-link>
           <!-- <router-link to="/meet/list" class="head_a">列表</router-link>   -->
      </li>
      <li  class="head_a">
         <router-link to="/Meet/list">列表</router-link>
        </li>   
    </ul>
    
     <!-- <router-view>
     </router-view> -->
     

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
.head{
  width: 100%;
  height: .88rem;
  ul{
    height: .88rem;
    display: flex;
    justify-content: center;
   
    li{
      display: flex;
      font-size: .32rem;
      text-align: center;
      align-items: center;
      
     
    
     .router-link-active{
       color: rgb(253, 101, 25);
      border-bottom: 3px rgb(253, 101, 25) solid;
     }
   
    }
    
    .head_a{
      margin-left: .8rem;
    }
  }
}
</style>
