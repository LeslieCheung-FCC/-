<template>
  <div class="jd">
  <div class="comlist">
    <h3 >热门景点</h3>
    <ul v-for="(item,index) in list" :key="index" class="list">
      <li class="clearfix" @click.prevent="fa(index)">
        <!-- 这里需要加路由 -->  
        <router-link :to='"/Part/"+index' class="clearfix" >
          <div class="left left_f" >
            <img :src="item.photo" />
            <p>{{item.time}}</p>
          </div>   
          <div class="center left_f" >
            <h1>{{item.name}}</h1>
            <div class="evaluate">
              <van-rate v-model="value" readonly clearable="true" color="#fd5619" :size="14" />
              <span>{{item.spot}}条评论</span>
            </div>
            <h2 class="appraise">{{item.introduce}}</h2>
            <p class="position">距你{{item.distance}}米</p>
          </div>
        </router-link> 
        <div class="right">
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
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [],
      value: 4,
      isActive: false,
      index:null,
      ids:null
    };
  },
  methods: {
    fn(index) {
      if (index = 0) {
        this.isActive = true;
      }
      console.log(index)
    },
    fa(index){
      console.log(11);
      document.body.scrollTop=document.documentElement.scrollTop=0;
    }
  },
  components: {},
  mounted() {
     this.axios.get("/api/scenic/zhRank").then(res => {
      console.log(res.data);
      this.list = res.data;

    }); 
  }
};
</script>

<style scoped lang="less">
.jd{
.comlist {
  z-index: -12;
  h3{
    font-size: .33rem;
    padding: .33rem 0 .33rem .32rem;
    font-weight: 500;
    color: #333333;
  }
  
  .list {
    width: 100%;
    margin-left: 0.3rem;
    margin-top: 0.32rem;
    
    //  height: 1.5rem;
    li {
      // width: 100%;
      display:flex;
    align-items: center;
    a{
      display: flex;
      align-items: center;flex:1;
      .center{
        
          h2{
            white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          }
      }
    }
      .right {
        z-index: -3;
        // position: absolute;
        width:1.3rem;
        // float: right;
        text-align: center;
        display: flex;
        // justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 0.26rem;
        div:nth-of-type(1){
          align-self: center;
        }
        div:nth-of-type(2){
          margin-right: .1rem;
        }

        div {
          margin-top: 0.4rem;
        }
        img {
          width: 0.48rem;
          height: 0.48rem;
        }
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
}

.active {
  color: #fd6519;
}
</style>
