<template>
  <div class="comlist">
    <ul v-for="(item,index) in formatList" :key="index" class="list">
      <li class="clearfix">
        <!-- 这里需要加路由 -->

        <router-link :to='"/Part/"+index'  tag="div">
        
   
          <div class="left left_f">
            <img :src="item.photo" alt />
            <p>{{item.time}}</p>
          </div>
 
          <div class="center left_f">
            <h1>{{item.name}}</h1>
            <div class="evaluate">
              <van-rate v-model="value" readonly clearable="true" color="#fd5619" size="14" />
              <span>{{item.spot}}条评价</span>
            </div>
            <h2 class="appraise">{{item.introduce}}</h2>
            <p class="position">距你{{item.distance}}米</p>
          </div>
     
         </router-link>
        <div class="right">
         
          <div :class="{active:isActive}" >
            <van-icon name="good-job-o"  @click="fn(index)" size="33" color="#999999" />
          </div>      
       
          <div>
            <span class="symbol">￥</span>
            <span class="price">{{item.price}}</span>
          </div>
        </div>
  
        <!-- 本来在这 -->
      </li>
    </ul>
   <div style="height:2rem"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list:[],
      value: 4,
      isActive: false
    };
  },
  methods: {
    fn(index) {
      if (index = 0) {
        this.isActive = true;
      }
      console.log(index)
    }
  },
  created(){
      
  },
  computed:{
     formatList(){ 
       //console.log(`计算属性${value}`);
       if( this.$store.state.storeList.length !=0) {
        //   this.axios.get("api/scenic/zhRank").then(res => {
        //   console.log(res.data);
        //   this.list = res.data;

        // })
           return this.$store.state.storeList
       }else{
           return this.list
       }
       
     }
  },
  components: {},
  mounted() {
    //json接口
    // this.axios.get("../../../static/mock/scenic-head-list.json").then(res => {
    //   console.log(res.data.data);
    //   this.list = res.data.data;
    // })
    //后台接口 默认数据少林寺......

     this.$axios.get("api/scenic/zhRank").then(res => {
      console.log(res.data);
      this.list = res.data;
          
    });  


  }
};
</script>

<style scoped lang="less">
.comlist {
  z-index: -12;
  .left_f {
    float: left;
  }
  .list {
    width: 100%;
    margin-left: 0.3rem;
    margin-top: 0.32rem;
    //  height: 1.5rem;
    li {
      // width: 100%;
      .right {
        z-index: -3;
        // position: absolute;
        float: right;
        text-align: center;
        margin-right: 0.26rem;
        div {
          margin-top: 0.4rem;
        }
        img {
          width: 0.48rem;
          height: 0.48rem;
        }
        // p {
        //   font-size: 0.22rem;
        //   color: rgb(153, 153, 153);
        // }
        .price {
          font-size: 0.48rem;
          color: rgb(253, 101, 25);
        }
        .symbol {
          color: rgb(253, 101, 25);
        }
      }
      .left {
        z-index: -12;
        width: 1.5rem;
        position: relative;
        height: 1.5rem;
        display: block;
        img {
          width: 1.47rem;
          height: 1.5rem;
        }

        p {
          //width: 1.1rem;
          position: absolute;
          display: inline-block;
          font-size: 0.15rem;
          //   float: left;
          left: 0;
          color: white;
          margin-top: 1.2rem;
          margin-left: 0.15rem;
          font-weight: 500;
        }
      }
      .center {
        z-index: -22;
        margin-left: 0.3rem;
        h1 {
          font-size: 0.28rem;
          display: inline-block;
          font-weight: 600;
          color: rgb(51, 51, 51);
        }
        .evaluate {
          z-index: -3;
          padding-top: 0.09rem;
          margin-top: -0.15rem;
          margin-right: -0.4rem;
          span {
            font-size: 0.22rem;
            color: rgb(153, 153, 153);
          }
        }
        .appraise {
          font-size: 0.24rem;
          color: rgb(79, 178, 255);
        }
        .position {
          font-size: 0.22rem;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
}
.active {
  color: #fd6519;
}
</style>
