<template>
    <div>
      <Heads>
      <p slot="a">@我的</p>
    </Heads>
     <!-- 需要布局 -->
<list_a v-for="(item,index) in list" :key="index">
   <ul slot="b">
      <li>
        <div class="left">
          <img :src="item.user.headportrait" alt />
        </div>
        <div class="right">
          <p>
            <span>{{item.user.nickname}}</span>
          {{item.content}}
          </p>
        
          <p>{{item.time}}</p>
        </div>
      </li>
    </ul>
</list_a>

<!-- <list_a>
   <ul slot="b">
      <li>
        <div class="left">
          <img src="../../../../static/images/meet/mine/pic-02@3x.png" alt />
        </div>
        <div class="right" style="border:none">
          <p>
            <span>夏季恋熏</span>在评论中提到你
          </p>
         
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
</list_a> -->
    </div>
</template>

<script>
import List_a from './list_a'
import Heads from "./heads";
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
   computed:{
     list(){
       return this.$store.state.mineList
     }
   },
    components: {
Heads,
List_a
    },
};
</script>

<style scoped lang="less">
ul{
  margin-top: .5rem;
  li{
    img{
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
}
</style>
