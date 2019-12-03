<template>
  <div>
    <Box_top :text="text" :address="address" class="top" :up="up"></Box_top>
    <ul class="de_data">
      <li :class="{active:arr[0]}" @click="change(0)">
        <div>周日</div>
        <p>1</p>
      </li>
      <li :class="{active:arr[1]}" @click="change(1)">
        <div>周一</div>
        <p>2</p>
      </li>
      <li :class="{active:arr[2]}" @click="change(2)">
        <div>周二</div>
        <p>3</p>
      </li>
      <li :class="{active:arr[3]}" @click="change(3)">
        <div>周三</div>
        <p>4</p>
      </li>
      <li :class="{active:arr[4]}" @click="change(4)">
        <div>周四</div>
        <p>5</p>
      </li>
      <li :class="{active:arr[5]}" @click="change(5)">
        <div>周五</div>
        <p>6</p>
      </li>
      <li :class="{active:arr[6]}" @click="change(6)">
        <div>周六</div>
        <p>7</p>
      </li>
      <li>
        <div>
          <img src="../../../static/images/home/air_ticket/icon-04@2x.png" alt />
        </div>
        <p>日历</p>
      </li>
    </ul>
    <ul class="air_detail">
      <li>
        <router-link to="/Air_buy">
          <div class="air_total">
            <p>2小时50分钟</p>
            <div>
              <p>
                07:25
                <br />郑州T1
              </p>
              <img src="../../../static/images/home/air_ticket/Icon-08.png" alt />
              <p>
                09:25
                <br />红塔T2
              </p>
            </div>
            <p>祥鹏航空8L9502 波音737-600 (中)</p>
          </div>
          <div class="air_ticket">
            <div>￥679</div>
            <div>惠选经济舱3折</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/Air_buy">
          <div class="air_total">
            <p>2小时50分钟</p>
            <div>
              <p>
                07:25
                <br />郑州T1
              </p>
              <img src="../../../static/images/home/air_ticket/Icon-08.png" alt />
              <p>
                09:25
                <br />红塔T2
              </p>
            </div>
            <p>祥鹏航空8L9502 波音737-600 (中)</p>
          </div>
          <div class="air_ticket">
            <div>￥679</div>
            <div>惠选经济舱3折</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/Air_buy">
          <div class="air_total">
            <p>2小时50分钟</p>
            <div>
              <p>
                07:25
                <br />郑州T1
              </p>
              <img src="../../../static/images/home/air_ticket/Icon-08.png" alt />
              <p>
                09:25
                <br />红塔T2
              </p>
            </div>
            <p>祥鹏航空8L9502 波音737-600 (中)</p>
          </div>
          <div class="air_ticket">
            <div>￥679</div>
            <div>惠选经济舱3折</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Box_top from "./box_top";
export default {
  props: {},
  data() {
    return {
      text: "郑州 云南",
      address: "",
      up:'/Air_ticket',
      arr:[false,true,false,false,false,false,false]
    };
  },
  methods: {
    change(index){
      let arrlist=[false,false,false,false,false,false,false];
      arrlist[index]=true;
      this.arr=arrlist;
    }
  },
  components: {
    Box_top
  }
};
</script>

<style scoped lang="less">
.de_data {
  display: flex;
  padding: 0 0.66rem 0.46rem;
  li {
    flex: 1;
    height: 1.01rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;
      color: #999999;
      font-size: 0.24rem;
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
    }
    p {
      font-size: 0.28rem;
      color: #333333;
    }
  }
  li:nth-of-type(2) {
    background-color: #fff;
  }
  .active {
    background-color: #fd6519 !important;
    color: #ffffff;
    border-radius: 0.14rem;
  }
}
.air_detail {
  background-color: #fafafa;
  overflow: hidden;
  li {
    a {
      margin: 0.19rem 0.32rem 0.16rem 0.33rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0.16rem;
      .air_total {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #b6b6b6;
        font-size: 0.18rem;
        div {
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          color: #333333;
          img {
            width: 1.06rem;
            height: 0.52rem;
            margin: 0 0.32rem 0 0.38rem;
          }
        }
        > p:nth-of-type(2) {
          align-self: flex-start;
        }
      }
    }
    .air_ticket {
      margin-top: 0.12rem;
      color: #999999;
      font-size: 0.22rem;
      div:nth-of-type(1) {
        color: #fd6519;
        font-size: 0.28rem;
      }
    }
  }
}
</style>
