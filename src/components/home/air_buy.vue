<template>
  <div class="air_box">
    <div class="top">
      <router-link to="/Air_details">
        <img src="../../../static/images/home/air_ticket/icon-03@2x.png" alt />
      </router-link>
      <p>航班信息详情</p>
      <img src="../../../static/images/home/air_ticket/icon-06@2x.png" alt />
    </div>
    <div class="air_details">
      <div class="aird_top">
        <div>直飞</div>
        <p>郑州-红塔</p>
        <span class="font">11月22日</span>
        <div class="font">周五</div>
        <p class="font">2小时50分钟</p>
      </div>
      <div class="aird_bot">
        <div class="air_left">
          <div>
            <p>07:00</p>
            <p>09:50</p>
          </div>
          <img src="../../../static/images/home/air_ticket/icon-07@3x.png" alt />
          <div>
            <p>郑州T1</p>
            <p class="time">飞行2小时50分钟</p>
            <p>红塔机场</p>
          </div>
        </div>
        <div class="air_right">祥鹏航空8L9502机型739 (M)</div>
      </div>
    </div>
    <div class="air_list">机票选定</div>
    <ul class="air_quan">
      <li>
        <div class="quan_left">
          <div>
            <p>￥679</p>
            <p>+ ￥50</p>
            <p>超值礼包</p>
          </div>
          <div>
            <p>经济舱4.5折</p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>直营</span>
            </p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>退改￥244元起</span>
            </p>
          </div>
        </div>
        <div class="quan_right">
          <p>预定</p>
          <div>剩7张</div>
        </div>
      </li>
      <li>
        <div class="quan_left">
          <div>
            <p>￥679</p>
            <p>+ ￥50</p>
            <p>超值礼包</p>
          </div>
          <div>
            <p>经济舱4.5折</p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>直营</span>
            </p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>退改￥244元起</span>
            </p>
          </div>
        </div>
        <div class="quan_right">
          <p>预定</p>
          <div>剩7张</div>
        </div>
      </li>
      <li>
        <div class="quan_left">
          <div>
            <p>￥679</p>
            <p>+ ￥50</p>
            <p>超值礼包</p>
          </div>
          <div>
            <p>经济舱4.5折</p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>直营</span>
            </p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>退改￥244元起</span>
            </p>
          </div>
        </div>
        <div class="quan_right">
          <p>预定</p>
          <div>剩7张</div>
        </div>
      </li>
      <li>
        <div class="quan_left">
          <div>
            <p>￥679</p>
            <p>+ ￥50</p>
            <p>超值礼包</p>
          </div>
          <div>
            <p>经济舱4.5折</p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>直营</span>
            </p>
            <p>
              <img src="../../../static/images/home/air_ticket/Icon-09.png" alt />
              <span>退改￥244元起</span>
            </p>
          </div>
        </div>
        <div class="quan_right">
          <p>预定</p>
          <div>剩7张</div>
        </div>
      </li>
    </ul>
    <div class="details_bottom">
      <div class="bot_left">
        <p>经济舱4.5折</p>
        <div>￥990</div>
      </div>
      <button class="bot_right">
          <p>立即预订</p>
          <p>已选购7折</p>
      </button>
    </div>
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
.top {
  background-color: #fb6519;
  height: 1.88rem;
  padding: 0rem 0.32rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 0.48rem;
    height: 0.48rem;
  }
  p {
    font-size: 0.35rem;
    color: #ffffff;
  }
}
.air_details {
  padding: 0.22rem 0.35rem 0 0.18rem;
  border-radius: 0.14rem;
  margin: -0.43rem 0.32rem 0;
  background-color: #fff;
  .aird_top {
    display: flex;
    align-items: center;
    div:nth-of-type(1) {
      width: 0.68rem;
      height: 0.32rem;
      background-color: #fd6510;
      border-radius: 0.32rem;
      color: white;
      font-size: 0.24rem;
      text-align: center;
      line-height: 0.32rem;
      margin-right: 0.08rem;
    }
    p:nth-of-type(1) {
      font-size: 0.26rem;
      color: #333333;
      margin-right: 0.17rem;
    }
    .font {
      color: #666666;
      font-size: 0.24rem;
    }
    span {
      margin-right: 0.2rem;
    }
    div:nth-of-type(2) {
      margin-right: 0.08rem;
    }
  }
  .aird_bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.14rem 0 0.59rem 0.35rem;
    .air_left {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.22rem;
        height: 1.08rem;
        color: #333333;
      }
      img {
        height: 1rem;
        width: 0.14rem;
        margin: 0 0.25rem 0 0.12rem;
      }
      .time {
        color: #666666;
        font-size: 0.22rem;
      }
    }
    .air_right {
      width: 1.8rem;
      font-size: 0.24rem;
      color: #666666;
    }
  }
}
.air_list {
  padding: 0.3rem 0 0.29rem 0.32rem;
  background-color: #fafafa;
  font-size: 0.32rem;
  color: #333333;
}
.air_quan {
    background-color: #fafafa;
    overflow: hidden;
    padding: 0 .32rem 0.8rem;
  li {
    background-color: #fff;
    margin-bottom: 0.16rem;
    padding: 0.17rem 0.25rem 0.3rem 0.21rem;
    display: flex;
    justify-content: space-between;
    border-radius: .14rem;
    .quan_left {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div:nth-of-type(1) {
        display: flex;
        align-items: center;
        color: #fb6519;
        p:nth-of-type(1) {
          font-size: 0.28rem;
        }
        p:nth-of-type(2) {
          font-size: 0.24rem;
          margin-left: 0.1rem;
        }
        p:nth-of-type(3) {
          color: #666666;
          font-size: 0.22rem;
        }
      }
      div:nth-of-type(2) {
        display: flex;
        font-size: 0.24rem;
        align-items: center;
        p {
            margin-right: .18rem;
          img {
            width: 0.1rem;
            height: 0.25rem;
          }
        }
      }
    }
    .quan_right {
        width: .82rem;
        height: .8rem;
        border-radius: .14rem;
        box-sizing: border-box;
        border: .01rem solid #fb6519;
        overflow: hidden;
        text-align: center;
        p{
            height: .5rem;
            background-color: #fb6519;
            color: #ffffff;
            font-size: .24rem;
            line-height: .54rem;
        }
        div{
            color: #fb6519;
            font-size: .22rem;
        }
    }
  }
}
.details_bottom{
display: flex;
justify-content: space-between;
width: 100%;
position: fixed;
bottom: 0;
padding: 0 .4rem;
height: 1rem;
align-items: center;
background-color: #fff;
border-top: 1px solid #e8e8e8;
  .bot_left{
    
    p{margin: .12rem 0 .16rem;font-size: .22rem;}
    div{
      color: #fb6519;
      font-size: .28rem;
    }
  }
  .bot_right{
    width: 2.59rem;
    // height: .83rem;
    background-color: #fb6519;
    color: white;
    border: none;
    border-radius: .14rem;
    overflow: hidden;
    p{
      color: #ffffff;
      font-size: .32rem;
    }
    p:nth-of-type(2){
      font-size: .22rem!important;
      margin-bottom: .11rem;
    }
  }
}
</style>
