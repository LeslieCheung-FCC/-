<template>
  <div class="around_box">
    <Box_top :text="text" :address="address"></Box_top>
    <div class="list_tag">
      <div class="title">
        <h2>周边热门</h2>
        <p>
          查看表单
          <img src="../../../static/images/home/around_tour/icon-04@2x.png" alt />
        </p>
      </div>
      <ul>
        <li>
          <img src="../../../static/images/home/around_tour/pic-01@2x.png" alt />
          <div>
            <p>郑州</p>
            <span>玩转当地</span>
          </div>
        </li>
        <li>
          <img src="../../../static/images/home/around_tour/pic-02@2x.png" alt />
          <div>
            <p>洛阳</p>
            <span>距离109km</span>
          </div>
        </li>
        <li>
          <img src="../../../static/images/home/around_tour/pic-03@2x.png" alt />
          <div>
            <p>少林寺</p>
            <span>距离69km</span>
          </div>
        </li>
        <li>
          <img src="../../../static/images/home/around_tour/pic-04@2x.png" alt />
          <div>
            <p>登封</p>
            <span>距离63km</span>
          </div>
        </li>
        <li>
          <img src="../../../static/images/home/around_tour/pic-05@2x.png" alt />
          <div>
            <p>开封</p>
            <span>距离68km</span>
          </div>
        </li>
        <li>
          <img src="../../../static/images/home/around_tour/pic-06@2x.png" alt />
          <div>
            <p>焦作</p>
            <span>距离85km</span>
          </div>
        </li>
      </ul>
      <div class="part">
        <p>云台山</p>
        <p>安阳</p>
        <p>新乡</p>
      </div>
    </div>
    <div class="gray"></div>
    <h2>周边推荐</h2>
    <Recomment></Recomment>
  </div>
</template>

<script>
import Box_top from "./box_top";
import Recomment from "./recommend"
export default {
  props: {},
  data() {
    return {
      text: "周边游",
      address: ["河南", "山西", "江西", "吉林"]
    };
  },
  methods: {},
  components: {
    Box_top,
    Recomment
  }
};
</script>

<style scoped lang="less">
.around_box {
  background: url("../../../static/images/home/around_tour/banner-@2x.png")
    no-repeat;
  background-size: 7.5rem 4rem;
}
.list_tag {
  padding: 0.32rem 0.08rem 0.3rem 0.05rem;
  background-color: #fff;
  width: 6.85rem;
  margin: 1.66rem auto 0;
  border-radius: 0.1rem;
  .title {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 0.31rem;
      margin-left: 0.13rem;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      position: relative;
      margin-bottom: 0.16rem;
      img {
        width: 2.12rem;
        height: 1.52rem;
      }
      div {
        position: absolute;
        bottom: 0.12rem;
        color: #fff;
        font-size: 0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        span {
          display: block;
        }
      }
    }
  }
  .part {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    p {
      width: 2.12rem;
      height: 0.73rem;
      text-align: center;
      line-height: 0.73rem;
      font-size: 0.26rem;
      color: #333333;
      background-color: #f4efef;
      border-radius: 0.16rem;
    }
  }
}
.gray {
  background-color: #f4efef;
  width: 7.5rem;
  height: 0.16rem;
  margin-bottom: 0.32rem;
}
h2{
    font-size: 0.31rem;
    margin-left: 0.48rem;
    margin-bottom: .36rem;
}
</style>
