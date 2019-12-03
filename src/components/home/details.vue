<template>
  <div class="details_box">
    <Box_top :text="a+'-'+mes.cname" :address="position"></Box_top>
    <img src="../../../static/images/home/recommond/banner-@2x.png" alt />
    <div class="tag">
      <div>
        <img src="../../../static/images/home/recommond/icon-04@2x.png" />
        {{mes.tag}}
      </div>
      <div>{{a+'-'+mes.cname}}</div>
      <div>{{a+'-'+mes.cname}}</div>
    </div>
    <p class="text">{{mes.title}}</p>
    <div class="comment">
      <p class="contt">{{text}}</p>
      <div>
        <input type="text"  placeholder="说点什么吧" v-model="cont" @keydown.enter="show"/>
        <div class="re_bott">
          <div @click="changeImg('a')" :class="[ 'act_img ', {colorw:!isshow}]">
            <img v-if="isshow" src="../../../static/images/home/travel/icon-04@2x.png" />
            <img v-else class="act_img" src="../../../static/images/home/travel/iconc-04@2x.png" />
            送花
          </div>

          <div @click="changeImg('b')" :class="[ 'act_img ', {colorw:!nor1}]">
            <img v-if="nor1" src="../../../static/images/home/travel/icon-05@2x.png" alt />
            <img
              v-else
              class="act_img"
              src="../../../static/images/home/travel/iconc-05@2x.png"
              alt
            />
            互撩
          </div>

          <div @click="changeImg('c')" :class="[ 'act_img ', {colorw:!act}]">
            <img v-if="act" src="../../../static/images/home/travel/icon-06@2x.png" alt />
            <img v-else src="../../../static/images/home/travel/iconc-06@2x.png" />
            分享
          </div>
        </div>
      </div>
    </div>
    <div class="gray"></div>
    <h2>相关推荐</h2>
    <ul class="banner_list">
         <li>
            <img src="../../../static/images/home/recommond/timg(1)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(2)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(3)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(5)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(6)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(7)@2x.png" alt="">
        </li>
       <li>
            <img src="../../../static/images/home/recommond/timg(8)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg(1)@2x.png" alt="">
        </li>
        <li>
            <img src="../../../static/images/home/recommond/timg@2x.png" alt="">
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
      mes: {},
      text: "",
      isshow: true,
      act: true,
      nor1: true,
      cont:'',
      a:''
    };
  },
  methods: {
    get_mes() {
      this.axios.get("/api/findCity").then(data => {
        let ind=this.$route.params.id-1;
        this.mes = data.data[ind];
        this.a=data.data[ind].provinces.pname;
        console.log(data.data[ind].provinces);
      });
    },
    changeImg(ind) {
      if (ind === "a") {
        this.isshow = false;
      } else if (ind === "b") {
        this.nor1 = false;
      } else {
        this.act = false;
      }
    },
    show(){
        this.text=this.cont;
    }
  },
  components: {
    Box_top
  },
  computed: {
    position() {
      return this.mes.cname;
    }
  },
  mounted() {
    this.get_mes();
  }
};
</script>

<style scoped lang="less">
.details_box {
  &img {
    width: 100%;
    height: 5.74;
  }
  .tag {
    display: flex;
    align-items: center;
    margin: 0.32rem 0 0.31rem 0.52rem;

    div {
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      border: 0.01rem solid #fb6519;
      color: #fb6519;
      font-size: 0.24rem;

      height: 0.48rem;
      line-height: 0.48rem;
      border-radius: 0.05rem;
      padding: 0 0.16rem;
      margin-right: 0.22rem;
    }
    div:nth-of-type(1) {
      display: flex;
      align-items: center;
      padding-right: 0.07rem;
    }
  }
  .text {
    width: 100%;
    padding: 0 0.32rem 0.38rem;
    color: #333333;
    font-size: 0.32rem;
  }
  .comment{
      display: flex;
      flex-direction: column;
      div{
          display: flex;
          justify-content: space-between;
          align-items: center;
        input{
            margin-left: .62rem;
            width: 2.74rem;
            height: .56rem;
            text-indent: .2rem;
            border-radius: .56rem;
            background-color: #eeeeee;
            font-size: .24rem;
            outline: none;
            border: none;
        }
        input::placeholder{
            font-size: .24rem;
            color: #999999;

        }
      }
  }
  .contt{
      font-size: .24rem;
      color: #999999;
      margin:0 0 .16rem .8rem;
  }
  .re_bott {
    display: flex;
    justify-content: flex-end;
    div {
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
    }
    .act_img {
      width: 0.8rem;
      height: 0.24rem;
      display: flex;
      font-size: .24rem;
      color: #333333;
      white-space: nowrap;
      margin-right:.38rem;
      align-items: center;
      img {
        width: 0.26rem;
        height: 0.24rem;
        margin-right: 0.16rem;
      }
    }
  }
  .gray{
      background-color: #eeeeee;
      height: .16rem;
      width: 100%;
      margin:.24rem 0 .22rem;
  }
  h2{
      margin-left: .38rem;
      color: #333333;
      font-size: .43rem;
      margin-bottom: .2rem;
  }
  .banner_list{
      display: flex;
      justify-content: space-between;
      padding:0 .29rem;
      flex-wrap: wrap;
      li{
          width: 33%;
          padding-right: .2rem;
          margin-bottom: .18rem;
          img{
              display: block;
              width: 2.15rem;
              height: 2.13rem;
              border-radius: .2rem;
          }
      }
      li:nth-of-type{
          padding: 0;
      }
  }
}
</style>
