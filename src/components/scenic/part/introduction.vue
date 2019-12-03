<template>
  <!-- 景区介绍组件 -->
  <div class="intr" >
    <div class="head">
      <div class="left" @click="fn">
        <img src="../../../../static/images/scenic/se_recommond/icon-05@2x.png" alt />
      </div>
      <div class="center">
        <p> {{list[id].name}} </p>
      </div>
      <div class="right">
        <img src="../../../../static/images/scenic/se_detail/icon-01@2x.png"  @click="fa" alt />
        <img src="../../../../static/images/scenic/se_detail/icon-02@2x.png" alt />
      </div>
    </div>
    <div class="logo">
        <img :src="list[id].banner" alt="">
    </div>
    <div class="jieshao">
        <div class="js_a">
            <div class="terraced">
                <p class="ti">{{list[id].name}}</p>
                <div class="xing">
                   <van-rate v-model="value" color="#fd6519" readonly />
                </div>
                 <p class="fen">{{list[id].grade}}</p>
            </div>
            <div class="zheng"><p>{{list[id].appraise}}</p></div>
            <div class="time">
                <p>{{list[id].time}}</p>
                <p class="time_right">{{list[id].evaluate}}</p>
            </div>
            <div class="daohang">
                <img :src="list[id].locationic" alt="">
                <span>{{list[id].location}}</span>
            </div>
        </div>
        <div>
            <h3>景点介绍</h3>

            <p> {{list[id].content}} </p>
        </div>
    </div>
    <Fenxiang v-if="show"></Fenxiang>
    <!-- <p>111111111111111111</p> -->
  </div>
</template>
<script>
import Fenxiang from './fenxiangs'

export default {
  props:{
    id:[String]
  },
  data() {
    return {
      list:[],
        value: 4,
        show:false
       
    };
  },
  methods:{
    fa(){
      this.show=!this.show;
      if(this.show == true){
        console.log(11);
        document.body.style.overflow="hidden";
      }else{
        document.body.style.overflow="visible";
      }
    },
    fn(){
      this.$router.go(-1)
    }
    
   
  },

  components:{
    Fenxiang
  },
 
   mounted() {
    this.axios.get("../../../static/mock/scenic-head-list.json").then(res => {
      this.list = res.data.data;
             this.id=this.$route.params.id

             
    })
   
}
}
</script>

<style scoped lang="less">
.intr {
  .head {
      font-size: 0;
    display: flex;
    padding-top: 0.32rem;
    height: 1.09rem;
    position: relative;
    
    .left{
        position: absolute;
        left: .32rem;
    }

    img {
      width: 0.48rem;
    }
    .center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 0.33rem;
      color: #333333;
    }
    .right {
        position: absolute;
        right: .32rem;
        img{
            margin-left: .24rem;
        }
    }
  }

  .logo{
      height: 3.77rem;
      background: #f1f1f1;
  }

  .jieshao{
      // height: 10rem;
      padding: .32rem 0 0 .32rem;

      .js_a{


          .terraced{
              display: flex;
              align-items: center;

              .ti{
                  font-size: .29rem;
                  color: #333333;
              }

              .fen{
                  font-size: .16rem;
                  color: #666666;
                   margin-left: .16rem;
                margin-top: .12rem;
              }

              .xing{
              margin-left: .2rem;
              margin-top: .12rem;
              }
          }

        .zheng{
            color:#666666;
            font-size: .22rem;
            margin-top: .12rem;
        }

        .time{

            display: flex;
            position: relative;
            margin-top: .24rem;
            .time_right{
               position: absolute;
               right: .32rem;
               color: #b6b6b6;
               font-size: .17rem;
            }

            p:nth-of-type(1){
                font-size: .18rem;
                color: #fd6519;
            }
            
        }

        .daohang{
            margin-top: .3rem;
            span{
                font-size: .21rem;
                color: #999999;
            }
            img{
                width: .48rem;
                margin-right: .14rem;
            }
        }
      }

      div:nth-of-type(2){
          margin-top: .32rem;
          h3{
              font-size: .29rem;
              color: #333333;
          }
          p{
              width: 6.7rem;
          }
      }
  }
}
</style>
