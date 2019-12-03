<template>
  <div class="out">
    <div class="head">
      <img @click="fn" alt />
      <span>发起游记</span>
      <span></span>
    </div>
    <div class="add">
      <!-- <span>添加封面</span> -->
      <img :src="imgs" style="z-index:3;width:100%;height:100%"  alt />
      <van-uploader :after-read="afterRead">
        <van-button type="primary">添加封面</van-button>
      </van-uploader>
    </div>

    <van-uploader :after-read="afterRead" v-if="show">
      <van-button type="primary">修改</van-button>
    </van-uploader>

    <div class="pls">
      <input type="text" placeholder="请输入标题游记">
    </div>
    <div class="pls1">
      <img src="../../../static/images/mine/pushtravel/icon-01@2x.png" alt />
      <img src="../../../static/images/mine/pushtravel/icon-02@2x.png" alt />
      <img src="../../../static/images/mine/pushtravel/icon-03@2x.png" alt />
      <input type="text" class="inp"/>
      <img src="../../../static/images/mine/pushtravel/icon-04@2x.png" alt />
      <span>发表</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      imgs: null,
      show:false

    };
  },
  methods: {
    fn() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgs = file.content;
      this.show = true
      document.getElementsByClassName('van-uploader')[0].style='z-index:-1'
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.out {
  
  .head {
    position: relative;
    display: flex;
    justify-content: space-between;
    img {
      // margin: 0 0 0 .32rem;
      margin-top: 0.72rem;
      margin-left: 0.32rem;
      width: 0.16rem;
      height: 0.27rem;
    }
    span:nth-of-type(1) {
      margin-top: 0.57rem;
      font-size: 0.34rem;
      margin-left: -0.48rem;
    }
  }
  .add {
    position: relative;
    width: 100%;
    text-align: center;
    line-height: 2.1rem;
    margin-top: 0.32rem;
    height: 2.6rem;
    background-color: #f1f1f1;
    span {
      font-size: 0.34rem;
      color: #a1a1a1;
    }
    .van-uploader {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      button {
        background: #f1f1f1;
        border: none;
        outline: 0;
        width: 7.5rem;
        margin: 0;
        
      }
    }
  }

   .van-uploader {
      // width: 100%;
      position: absolute;
        right: 0.2rem;
        top: 0.5rem;
      button {
        background: rgb(38, 201, 223);
        border: none;
        outline: 0;
        width: 2rem;
        height: .6rem;
        line-height: .6rem;
        margin: 0;
        border-radius: .3rem;
        font-size: .16rem;
        
        

        
      }
    }
  .pls {
    height: 1.02rem;
    border-bottom: 0.01rem solid #e8e8e8; 
    // padding: .3rem;
    line-height: 1rem;
    
   
   input{
     width: 100%;
     height: .5rem;
      border:none;
      font-size: .35rem;
      
   }

  }
  .pls1 {
    //   font-size: 0;
    width: 100%;
    height: 0.96rem;
    border-top: 0.01rem solid #e8e8e8;
    position: fixed;
    bottom: 0;
    height: 1.02rem;
    img:nth-of-type(1) {
      margin: 0.3rem 0 0.3rem 0.36rem;
      width: 0.36rem;
      height: 0.36rem;
    }
    img:nth-of-type(2) {
      margin: 0.3rem 0 0.3rem 0.32rem;
      width: 0.31rem;
      height: 0.31rem;
    }
    img:nth-of-type(3) {
      margin: 0.3rem 0 0.3rem 0.32rem;
      width: 0.3rem;
      height: 0.28rem;
    }
    img:nth-of-type(4) {
      margin: 0.3rem 0 0.3rem 0.6rem;
      width: 0.35rem;
      height: 0.23rem;
    }
    .inp {
      width: 3rem;
      font-size: 0.23rem;
      border: none;
      // margin: 0.3rem 0 0.3rem 0.5rem;
    }
    span {
      margin: 0.3rem 0 0.3rem 0.08rem;
      font-size: 0.23rem;
      //   float: right;
      color: #fd6e29;
    }
  }
}
</style>
