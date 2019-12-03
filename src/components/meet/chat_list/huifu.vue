<template>
  <div class="huifu">
    <Heads style="background:#fff;">
      <p slot="a">回复我的</p>
    </Heads>
    <ul>
      <li v-for="(item,index) in list" :key="index">
          <div class="top">
              <img :src="item.user.headportrait" alt="">
            <span>
                <p> {{item.user.nickname}} </p>
                <p>{{item.time}}</p>
            </span>
          </div>
          <div class="bottom">
              <h3>{{ item.content}}</h3>
              <div class="arr">
                  <p> {{item.text2}} </p>
              </div>

              <div class="imgs"> 
                  <!-- 待定后端明天给，框不要，点回复出现框 -->
                  <img :src="item.xinxi" alt="">
                  <span> {{item.huifu}} </span>
              </div>
          </div>
      </li>
    </ul>
    <div style="height:2rem"></div>
  </div>
</template>

<script>
import Heads from "./heads";
export default {
  props: {},
  data() {
    return {
      lis: [
        {
          img: "../../../../static/images/meet/reply_my/pic-01@2x.png",
          text: "雾之森",
          text1: "1天前",
          text2: "今天去方特",
          text3:"一起吗我有门票",
          xinxi: "../../../../static/images/meet/zan/pic-03@2x.png",
          huifu: "回复"
        },
         {
          img: "../../../../static/images/meet/reply_my/pic-02@2x.png",
          text: "大笨蛋",
          text1: "22天前",
          text2: "旅游日常",
          text3:"这里风景超级好",
          xinxi: "../../../../static/images/meet/zan/pic-03@2x.png",
          huifu: "回复"
        }
      ]
    };
  },
  methods: {},
  components: {
    Heads
  },
   computed:{
      list(){
        return this.$store.state.replyList 
      }
    },
};
</script>

<style scoped lang="less">
.huifu{
    background: #f1f1f1;

    ul{

        li{
            background: white;
            padding: .32rem 0 0 .32rem;
            margin-top: .16rem;
           

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
                        color: #333;
                    }

                     p:nth-child(2){
                        font-size: .24rem;
                        color: #999;
                    }
                }
            }
            .bottom{
                padding: .25rem 0 .7rem 0;
                 position: relative;

                .arr{
                    width: 6.86rem;
	                height: .66rem;
                    background-color: #f1f1f1;
                    
                    p{
                        font-size: .24rem;
                        color: #999;
                        line-height: .66rem;
                        text-indent: .24rem;
                    }
                }

                h3{
                    font-size: .28rem;
                    color: #333;
                    margin: 0 0 .17rem 0;
                }
                .imgs{
                    position: absolute;
                    right: .3rem;
                    bottom: .2rem;
                    
                    img{
                        width: .24rem;
                    }

                    span{
                        font-size: .18rem;
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>
