<template>
  <div class="air_ticket">
    <router-link to="/Home" class="back">
      <img src="../../../static/images/home/air_ticket/icon-03@2x.png" alt />
    </router-link>
    <div class="air_table">
      <div class="air_type">
        <p class="active">国内机票</p>
        <p class="train">
          火车票
          <img src="../../../static/images/home/air_ticket/HOT@2x.png" alt />
        </p>
        <p>汽车票</p>
      </div>
      <div class="air_address">
        <p>郑州</p>
        <img src="../../../static/images/home/air_ticket/icon-01@2x.png" alt />
        <p>云南</p>
      </div>
      <div class="date">12月2日</div>
      <router-link to="/Air_details" class="search">搜索</router-link>
      <p>如实出票·出行保障·标准退改·先行赔付</p>
    </div>
    <div class="gray"></div>
    <div class="air_tik_list">
      <div class="font">超值低价</div>
      <div>
        更多
        <img src="../../../static/images/home/air_ticket/icon-05@2x.png" alt />
      </div>
    </div>
    <ul class="list_tickets">
        <li>
            <p>国内</p>
            <ul class="tickets">
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <p>国外</p>
            <ul class="tickets">
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
                <li>
                    <p class="left"></p>
                    <p class="right"></p>
                    <div>郑州-哈尔滨</div>
                    <div>
                        <span>特价</span>
                        <span><span class="money">￥599</span>起</span>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
    <hr>
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
.air_ticket {
  background: url("../../../static/images/home/air_ticket/banner-@2x.png")
    no-repeat;
  background-size: 7.5rem 4.5rem;
  width: 100%;
  overflow: hidden;
  .back {
    display: block;
    margin: 0.71rem 0 1.31rem 0.32rem;
    width: 0.48rem;
    img {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
  .air_table {
    width: 6.86rem;
    margin: 0 auto 0.16rem;
    border-radius: 0.14rem;
    background-color: #fff;
    overflow: hidden;
    .air_type {
      display: flex;

      height: 0.82rem;
      align-items: center;
      p {
        flex: 1;
        text-align: center;
        font-size: 0.28rem;
        background-color: #fafafa;
        height: 100%;
        line-height: 0.82rem;
        color: #333333;
      }
      .active {
        background-color: #fff;
      }
      .train {
        position: relative;
        img {
          width: 0.58rem;
          height: 0.58rem;
          position: absolute;
          right: 0.2rem;
          top: -0.05rem;
        }
      }
    }
    .air_address {
      height: 1.06rem;
      padding: 0 0.24rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      color: #333333;
      font-size: 0.32rem;
    }
    .date {
      width: 100%;
      color: #333333;
      font-size: 0.32rem;
      text-align: center;
      margin-bottom: 0.58rem;
    }
    .search {
      display: block;
      width: 3.6rem;
      height: 0.7rem;
      margin: 0 auto;
      background-color: #fe3d74;
      color: white;
      font-size: 0.28rem;
      text-align: center;
      line-height: 0.7rem;
      border-radius: 0.7rem;
    }
    > p {
      font-family: PingFang-SC-Medium;
      font-size: .22rem;
      color: #999999;
      margin: 0 auto;
      text-align: center;
      margin-top: 0.16rem;
    }
  }
  .gray {
    height: 0.22rem;
    width: 100%;
    background-color: #fafafa;
  }
  .air_tik_list {
    padding: 0.36rem 0.34rem 0.24rem;
    display: flex;
    justify-content: space-between;
    color: #999999;
    font-size: 0.24rem;
    align-items: center;
    .font{
      color: #333333;
      font-size: 0.32rem;
    }
  }
  .list_tickets{
      padding: 0 .34rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: .27rem;
      >li{
          width: 3.3rem;
          background-color: #fafafa;
          padding-left:.17rem; 
          p{
              font-size: .28rem;
              color: #333333;
              
          }
          .tickets{
              li{
                  background-color: #fff;
                  margin-right: .25rem;
                  margin-bottom: .17rem;
                  
                  position: relative;
                  overflow: hidden;
                  div:nth-of-type(1){
                      font-size: .24rem;
                      color: #333333;
                      margin-top:.08rem;
                      margin-bottom: .15rem;
                      margin-left: .36rem;
                  }
                  div:nth-of-type(2){
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: .06rem;
                      margin-left: .17rem;
                      >span:nth-of-type(1){
                          background-color: #fb874c;
                          padding: .04rem .17rem 0 .17rem;
                          font-size: .18rem;
                          color: white;
                      }
                      span:nth-of-type(2){
                          font-size: .22rem;
                          color: #999999;
                          margin-right: .16rem;
                          .money{
                              font-size: .28rem;
                              color: #fb874c;
                          }
                      }
                  }
                  .left{
                      position: absolute;
                      transform: translateY(-50%) translateX(-50%);
                      top:50%;
                      background-color: #fafafa;
                      border-radius: 50%;
                      width: .24rem;
                      height: .24rem;
                      left: 0;
                  }
                  .right{
                      position: absolute;
                      transform: translateY(-50%) translateX(50%);
                      top:50%;
                      background-color: #fafafa;
                      border-radius: 50%;
                      width: .24rem;
                      height: .24rem;
                      right: 0;
                  }
              }
          }
      }
  }
  hr{
      background-color: #e8e8e8; 
      margin-bottom: .99rem;
  }
}
</style>
