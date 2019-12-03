<template>
  <div>
    <van-nav-bar title="迪拜度假之旅" left-arrow @click-left="onClickLeft" />
    <div class="banner">
      <!-- 需要找图片 -->
      <img src="../../../../static/images/guide/guidebanner/banner/banner-@2x.png" alt="">
    </div>
    <ul>
      <li class="title">
        <h1>迪拜度假村之游</h1>
        <p>
          <van-rate v-model="value" color="#fd6519"  readonly clearable=true />
          <span>4.6分</span>
        </p>
      </li>
      <li class="describe">
        <p>迷你迪拜风土之情</p>
        <span>4773条评论</span>
      </li>
      <li class="position">
        <p class="icn">
          <van-icon name="location-o" size="25" />
          <span>河南郑州新郑市度假村</span>
        </p>
        <div class="price">
          <span>￥</span>
          <span class="num">599</span>
          <i>/周</i>
        </div>
      </li> 
      <li class="intro">
        迪拜旅游度假村 游迪拜拜相框，高质量的导游带你了解迪拜的文化，防迪拜购物中心，
        导游温柔讲解。犹如身在迪拜。
      </li>
      <li class="play">
        <div class="go">
          <img src="../../../../static/images/guide/guidebanner/banner/icon-03@2x.png" alt="">
          <p>
            2019.05.29
            <br />出发日期
          </p>
        </div>
        <div class="day">
         <img src="../../../../static/images/guide/guidebanner/banner/icon-04@2x.png" alt="">
          <p>
            34天
            <br />出发天数
          </p>
        </div>
        <div class="boat">
          <img src="../../../../static/images/guide/guidebanner/banner/icon-05@2x.png" alt="">
          <p>
            游轮
            <br />玩法
          </p>
        </div>
      </li>
      <li class="comment">
        <div class="main">
          <h1>评论</h1>  
          <div class="user"><img src="../../../../static/images/guide/guidebanner/banner/pic-1@2x.png" alt="">
          <span class="name">Anny</span>
          <p>地方简洁大方，空气清新适合带小宝宝去，很有迪拜的味道，五百块钱像出国了一样。棒极了！</p>
          </div>
          <div class="mood">
            <img src="../../../../static/images/guide/guidebanner/banner/pic-02@2x.png" alt="">
            <img src="../../../../static/images/guide/guidebanner/banner/pic-03@2x.png" alt="">
            <img src="../../../../static/images/guide/guidebanner/banner/pic-04@2x.png" alt="">
          </div>
        </div>
      </li>
      <li class="load">
        <h1 class="time">2019-10-23</h1>
        <!-- <van-icon name="arrow-up" /> -->

        <div class="replay" >
          <div><span>Mary</span>:楼下公园有没有坐的地方</div>
          <div><span>Mary</span>回复<i>Anny</i>:不好意思刚刚看到，有的有的</div>
          <div><span>Anny</span>回复<i>Mary</i>:没关系，谢谢</div>
        </div>
      </li>
    </ul>

   <!-- <hello></hello> -->

   
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: 5,
     
       isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
  ,
  components: {}
};
</script>

<style scoped lang="less">
.van-icon {
  color: black;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  color: rgb(51, 51, 51);
  font-weight: 600;
}
.banner {
  width: 100%;
  background-color: #F1F1F1;
  padding-bottom: 0.16rem;
  img{
    width: 100%;
  }
  
}
ul {
  width: 100%;
  padding: 0.33rem;
  li {
    display: flex;
  }
  .title {
    h1 {
      font-size: 0.32rem;
      color: rgb(51, 51, 51);
    }
    p {
      margin-left: 0.2rem;
      span {
        font-size: 0.37rem;
        margin-left: 0.16rem;
        margin-bottom: 0.2rem;
        display: inline-block;
      }
      .van-rate {
        margin-top: 0.13rem;
      }
    }
  }
  .describe {
    justify-content: space-between;
    p {
      font-size: 0.24rem;
      color: rgb(102, 102, 102);
    }
    span {
      font-size: 0.18rem;
      color: rgb(153, 153, 153);
    }
  }
  .position {
    margin-top: 0.32rem;
    justify-content: space-between;
    .icn {
      span {
        margin-top: 0.05rem;
        margin-left: 0.05rem;
        font-size: 0.24rem;
        color: rgb(153, 153, 153);
        display: inline-block;
        height: 0.38rem;
      }
    }
    .price {
      font-size: 0.24rem;
      color: rgb(253, 101, 25);
      .num {
        font-size: 0.48rem;
      }
      i {
        color: rgb(153, 153, 153);
      }
    }
  }
  .intro {
    font-size: 0.24rem;
    color: rgb(102, 102, 102);
  }
  .play {
    font-size: 0.26rem;
    color: rgb(51, 51, 51);
    justify-content: space-around;
    text-align: center;
    margin-top: 0.42rem;
    font-weight: 500;
    span {
      display: inline-block;
      width: 0.88rem;
      height: 0.88rem;
      background-color: pink;
    }
  }
  .boat{
    margin-top:.03rem;
  }
}
.comment{
    .main{
      h1{
        font-size: .32rem;
        color: rgb(51, 51, 51);
      }
      .user{
        margin-top: .37rem;
        p{
          font-size: .28rem;
          color: rgb(51, 51, 51);
          margin-top: .15rem;
        }
      }
      .name{
        margin-left: .12rem;
        color: #333333;
        font-weight: 600;
      }
    }
    .mood{
      margin-top: .16rem;
      display: flex;
      img{
        width:2.16rem;
        margin-left: .16rem;
      }
    }
}
.replay{
  width: 6.81rem;
  background: #F1F1F1;

 padding-bottom: .26rem;
  font-size: .24rem;
  div{
    font-weight: 600;
    text-indent: .2rem;
    margin-top: .3rem;
    span ,i{
     color: rgb(253, 101, 25);
    }
  }
}
.load{
  flex-wrap:wrap;
}
.van-icon-arrow-up{
  background: #F1F1F1;
}


/* .van-uploader{
  background: pink;
  border-radius: .1rem;
  font-size: .2rem;

} */
</style>
