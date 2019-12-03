<template>
  <div id="zan">
    <Heads style="background:#fff">
      <p slot="a">赞</p>
    </Heads>

    <ul>
        <li v-for="(item,index) in lis" :key="index">
            <div class="top">
                <img :src="item.head" alt="">
                <span>
                    <p> {{item.name}} </p>
                    <p> {{item.time}} </p>
                </span>
            </div>
            <div class="button">
                <h3> {{item.zcontent}} </h3>
               <div class="imgs">
                <img :src="item.zpicture" alt="">
                <!-- <img :src="item.img3" alt="">
                <img :src="item.img4" alt=""> -->
               </div>

                <div class="zan">
                   <span>
                       <img :src="item.zan" alt="">
                       <p> {{item.shuliang}} </p>
                   </span>
                    <span>
                       <img :src="item.xinxi" alt="">
                       <p>{{item.huifu}} </p>
                   </span>
                </div>
            </div>
        </li>
    </ul>
    <div style="height:2rem"></div>
  </div>
</template>

<script>
import Heads from './heads'
export default {
  props: {},
  data() {
    return {
        list:[
            {
                img1:"../../../../static/images/meet/zan/pic-01@2x.png",
                img2:"../../../../static/images/meet/zan/pic-09@2x.png",
                img3:"../../../../static/images/meet/zan/pic-10@2x.png",
                name:"物之森",
                text:"一天前",
                text1:"这是我去方特拍的照片。超好看。",
                zan:"../../../../static/images/meet/zan/icon-02@2x.png",
                shuliang:"1",
                xinxi:"../../../../static/images/meet/zan/pic-03@2x.png",
                huifu:"回复"
            },
             {
                img1:"../../../../static/images/meet/zan/pic-02@2x.png",
                img2:"../../../../static/images/meet/zan/pic-04@2x.png",
                img3:"../../../../static/images/meet/zan/pic-05@2x.png",
                name:"大笨蛋",
                text:"22天前",
                text1:"旅游日常",
                zan:"../../../../static/images/meet/zan/icon-02@2x.png",
                shuliang:"22",
                xinxi:"../../../../static/images/meet/zan/pic-03@2x.png",
                huifu:"回复"
            },
             {
                img1:"../../../../static/images/meet/zan/1.png",
                img2:"../../../../static/images/meet/zan/pic-06@2x.png",
                img3:"../../../../static/images/meet/zan/pic-07@2x.png",
                img4:"../../../../static/images/meet/zan/pic-08@2x.png",
                name:"小明",
                text:"22天前",
                text1:"日常打卡少林寺",
                zan:"../../../../static/images/meet/zan/icon-02@2x.png",
                shuliang:"22",
                xinxi:"../../../../static/images/meet/zan/pic-03@2x.png",
                huifu:"回复"
            }

        ]
    };
  },
  methods: {},
  components: {
      Heads
  },
  computed:{
      lis(){
         this.list = this.$store.state.zanList
         return this.$store.state.zanList
         console.log(this.list)
      }
     
  }
};
</script>

<style scoped lang="less">
#zan{
    background: #f1f1f1;

    ul{

        li:last-child{

            .button{

                .zan{
                    bottom: .15rem;
                }
            }
        }
       

        li{
             background: white;
             margin-bottom: .16rem;
             padding: .32rem 0 0 .32rem;

            .top{
                display: flex;
                align-items: center;

                img{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                }
                span{
                    margin-left: .24rem;

                    p:nth-child(1){
                        font-size: .32rem;
                        color:#333;
                    }
                    p:nth-child(2){
                        font-size: .24rem;
                        color: #999;
                    }
                }
            }

            .button{
                padding: .24rem 0 .66rem 0;
                position: relative;

                .imgs{
                    

                    img{

                        width:1.97rem;
                        height: 1.97rem;
                        border-radius: .2rem;
                    }
                    img:nth-child(2){
                        margin: 0 .16rem 0 .16rem;
                    }
                }
                .zan{
                    display: flex;
                    position: absolute;
                    right: .32rem;
                    bottom: .26rem;
                    align-items: center;

                    span:nth-child(1){

                        p{
                            margin-right: .18rem;
                            margin-bottom: .04rem;
                        }
                        img{
                            margin-bottom: .04rem;
                        }
                    }

                     span:nth-child(2){

                        p{
                            margin-bottom: .04rem;
                        }
                    }

                   
                    span{
                        display: flex;
                        align-items: center;
                        

                         img{
                        width: .23rem;
                        margin-right: .15rem;
                            }
                            p{
                                display: inline-block;
                                font-size: .22rem;
                                color: #999;
                                
                            }
                            
                    }
                }

                h3{
                    font-size: .28rem;
                    color: #333;
                    margin-bottom: .15rem;
                }
            }
        }
    }
}
</style>
