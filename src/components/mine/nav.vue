<template>
  <div class="my">
      <div class="header">
          <img src="../../../static/images/mine/icon-10 (2).png" alt="" class="imga">
          <div class="her">
              <div class="imgs"> 
                <!-- <img v-if="ii" src="../../../static/images/mine/icon-35.png" alt=""> -->
                <img :src="picc" alt="">
              </div>
              <div class="tittle"> Anny</div>
              <div class="text"> <p>
                  一个真正的旅行家必是一个流浪者,  &nbsp;&nbsp;经历着流浪者的快乐, &nbsp;诱惑和<br>探险意志。
                  </p></div>
                  <router-link to="/Announce">
              <div class="text1"><p>发表游记&nbsp;&nbsp;</p></div></router-link>
          </div>
      </div>
    <ul>
      
        <li>
          <router-link to="/Mydata">
            <img src="../../../static/images/mine/icon-02.png" alt />
          
          <span>
            修改资料
            
          </span>
          <p>></p>
          </router-link>
        </li>
      
      
        <li>
          <router-link to="/Footline">
            <img src="../../../static/images/mine/icon-11.png" alt />
          
          <span>
            我的足迹
            
          </span>
          <p>></p>
          </router-link>
        </li>
      
      
        <li>
          <router-link to="/Home">
            <img src="../../../static/images/mine/icon-14.png" alt />
          
          <span>
            我的活动
            
          </span>
          <p>></p>
          </router-link>
        </li>
      
      
        <li>
          <router-link to="/Myphoto">
            <img src="../../../static/images/mine/icon-08.png" alt />
          
          <span>
            我的相册
            
          </span>
          <p>></p>
          </router-link>
        </li>
      
      
        <!-- <li>
          <router-link to="/stting">
            <img src="../../../static/images/mine/icon-05.png" alt />
          
          <span>
            设置中心
            
          </span>
          <p>></p>
          </router-link>
        </li> -->
      
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {

  },
  components: {},
  computed:{
    picc(){
      console.log(this.$store.state.pic);
      if(this.$store.state.pic.length==0){
        return this.$store.state.pic;
      }else{
         return '../../../static/images/mine/icon-35.png';
      }
    }
  },
  mounted(){

  }
};
</script>

<style scoped lang="less" >
.my{
  width: 100%;
  overflow: hidden;
font-size: 0;
   li{
   margin-bottom: .6rem;
       a{
           display: block;
           display: flex;
           align-items: center;
           position: relative;

           p{
               position: absolute;
               right: .32rem;
               font-size: .26rem;
               color: #c7c7cc;
           }

           img{
               width: .50rem;
           }

           span{
               font-size: .29rem;
               color: #000;
               margin-left: .26rem;
           }
       }
   }
   .header{
       height: 3.8rem;
       margin-bottom: .33rem;
       position: relative;

       .imga{
           width: 100%;
           height: 100%;
       }

       .her{
           width: 7.5rem;
           position: absolute;
           top: 0;
           display: flex;
           padding: .75rem 0 0 .32rem;
        //    position: relative;


           .text{
               width: 3.6rem;
               font-size: .2rem;
               color: #333333;
               padding: .3rem .3rem;
           }

           .text1{
               width: 2rem;
               height: .56rem;
               font-size: .22rem;
               color: white;
               text-align: center;
               line-height: .56rem;
               background: #fd6519;
               border-radius: .28rem;
               position: absolute;
               top: 1.17rem;
               right: -0.3rem;
             
           }

           .imgs{

               img{

                   width: 1.58rem;
               }
           }
           .tittle{
             font-size: 0.26rem;
             color: #000;
             position: absolute;
             left: 0.8rem;
             top:2.4rem;
             
           }
       }
   }  
}

</style>
