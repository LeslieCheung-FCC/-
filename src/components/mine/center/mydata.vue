<template>
  <div class="data">
    <van-nav-bar
      title="个人资料"
      right-text="提交"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="head">
      <div class="img">
        <img :src="headportrait" alt />
      </div>
      <div class="btn">
       
        <van-uploader :after-read="afterRead" >
          <!-- <van-button icon="photo" type="primary">上传头像</van-button> -->
          <van-button round type="primary">上传头像</van-button>
        </van-uploader>
      </div>
    </div>
    <div class="mymsg">
   <p class="nichen"><i>修改昵称:</i> <input type="text"  v-model="nichen"></p>
   <p class="ph"><i>修改手机号:</i> <input type="text" v-model="ph" ></p>
    <p class="pass"><i>修密码:</i> <input type="password" v-model="pass"></p>
    <p class="btn"><button @click="submit">提交资料</button></p>
    <!-- <p>{{nichen}}</p> -->
    </div>

  </div>
</template>

<script>
import qs from 'qs'
export default {
  props: {},
  data() {
    return {
       nichen:'',
       ph:null,
       pass:null,
        headportrait:'',
        jieshao:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("提交了");
    },
    submit(){
    console.log('提交')
    // this.arr.push(this.nichen)
    // this.arr.push(this.ph)
    // this.arr.push(this.pass)
    // console.log(this.arr)
    // const instance = this.axios.create({
    //   withCredentials:true
    // })
    console.log(this.headportrait);
    this.$store.state.pic=this.headportrait;
    // let img=encodeURIComponent(this.headportrait);
    // console.log(img);
    this.$axios.post("/api/updUser",qs.stringify({
         nickname:this.nichen,
         headportrait:this.headportrait,
         upwd:this.pass, 
         phone:this.ph,
         jieshao:'asdffg',
         uid:1
     })).then(res => {
      console.log(res.config.data)
     })
      this.$router.go(-1);
    },

    afterRead(file) {
      // 此时可以自行将文件上传至服务器   
      // console.log(file);
      this.headportrait = file.content;
      console.log( this.headportrait);
    //   this.axios.get("http://192.168.1.107:8080/updUser",{
    //    params:{
    //      headportrait:this.imgurl
    //    }
    //  })
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.data {
  .van-icon {
    color: #666666;
  }
  .van-nav-bar__text {
    color: #fd6519;
  }
  .head {
    width: 100%;
    // height: 3.34rem;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    padding: .38rem 2.45rem;
   
   .img{
       width: 2.58rem;
   }
    img {
      width: 2.58rem;
      height: 2.58rem;
      border-radius: 50%;
    }
    .btn{
       width: 2.49rem; 
       margin-left: .4rem;
       margin-top: .15rem;
    }
    .van-uploader__input{
        height: .44rem;
    }
    
  }
}
.mymsg{
  margin: .6rem .6rem;
  p{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .4rem;
  }
  i{
    display:inline-block;
    width: 1.6rem;
    
    display: flex;
    justify-content: space-between;
  }
  input{
    border: .01rem black solid;
    border-radius: .14rem;
    text-indent: .2rem;
  }
  .btn{
    text-align: center;
    margin-top: .2rem;
    button{
      background-color: #ececec;
      border: none;
      border-radius: .14rem;
      width: 1.8rem;
      height: .8rem;
      color: #333333;
    }
    
  }
}
</style>
