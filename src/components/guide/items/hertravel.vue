<template>
  <div class="herhome">
    <van-nav-bar title="ta的主页" left-arrow @click-left="onClickLeft" />
    <div class="bgk"></div>
    <div class="her">
      <div class="title">
        <img :src="list.headportrait" alt />
        <h1 class="name">
          {{list.nickname}}
          <br />
          <span>{{list.occupation}}</span>
        </h1>
      </div>
      <div class="atten">
        <div class="atten1">
          <span>{{list.fs_num}}</span>
          <p>粉丝</p>
        </div>
        <div class="atten2">
          <span>{{list.gz_num}}</span>
          <p>关注</p>
        </div>
        <div class="atten3">
          <span>{{list.fk_num}}</span>
          <p>访客</p>
        </div>
        <div class="btn">
          <button @click="add" v-bind:class="{active:isbgk}">{{atten}}</button>
        </div>
      </div>
    </div>

    <ul>
      <li class="spot">
        <h1>他的游记</h1>
        <p>超级实用的攻略手册，皇家加勒比海盗这么完才够味</p>
        <div class="img">
          <img src="../../../../static/images/guide/guidebanner/herdatail/1.@2x.png" alt />
          <img
            class="img1"
            src="../../../../static/images/guide/guidebanner/herdatail/2.@2x.png"
            alt
          />
          <img
            class="img2"
            src="../../../../static/images/guide/guidebanner/herdatail/3,。@2x.png"
            alt
          />
        </div>
      </li>
      <li class="foot">
        <i>2019/07/30</i>
        <div class="ico">
          <div class="bj" @click="zan">
            <img src="../../../../static/images/guide/guidebanner/herdatail/icon-02@2x.png" alt />
            <span>1</span>
          </div>
          <div class="dj" @click="fa">
            <img src="../../../../static/images/guide/guidebanner/herdatail/pic-03@2x.png" alt />
            <span>回复</span>
          </div>
        </div>
      </li>
      <p v-if="isshow" class="comm">小张:{{comment}}</p>
      <transition name="bounce">
        
        <div class="reply" v-if="show">
          <input type="text" v-model="comment"/>
          
          <button @click="send">发送</button>
        </div>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      num: 0,
      atten: "+关注",
      isbgk: false,
      show: false,
      lis: {},
     comment:'',
     isshow:false,
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    send(){
       this.isshow = true;
       this.show = ! this.show
       console.log('回复')
       this.$axios.get("/api/addComment",{
         params:{
           uid:1 ,  //登录注册用户的Id,还有评论内容
           content:this.comment
         }
       }).then((data)=>{
         console.log(11);
       })
    },
    add() {
      if (this.num < 1) {
        this.num = this.num + 1;
      }
      this.$axios.get("/api/updGz", {
        params: {
          uid:this.lis.uid
        }
      }).then(res=>{  //传给后台id
        console.log(res.data)
      })
      console.log(this.lis.uid)
      this.atten = "已关注";
      this.isbgk = !this.isbgk;
      return;
    },
    fa() {
      this.show = !this.show;
    },
    focus() {
      console.log("关注");
    },
     zan(){   //点赞传Id
     this.$axios.get("/api/updDz",{
       params:{
         id:1
       }
     }).then(res=>{
       console.log(res)
     })
     console.log('sss')
     }
  },
  computed: {
    list() {
      this.lis = this.$store.state.herList;  
      return this.$store.state.herList;
    }
  },
  mounted() {
    //json数据
    // this.axios.get("/static/mock/guide_msg.json").then(res => {
    //   console.log("her");
    //   console.log(res.data.msg);
    //   this.data = res.data.msg;
    // }); "/api/updUser"
    //  this.list = this.$store.state.herList
    //  console.log('her')
    //  console.log(this.list)
  },
  components: {}
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #fd6519;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  color: white;
  border: none;
}
.van-icon {
  color: white;
}


.bgk {
  border: none;
  width: 100%;
  height: 1.47rem;
  background-color: #fd6519;
}
.her {
  display: flex;
  flex-wrap: wrap;
  width: 6.85rem;
  padding: 0.36rem;
  background: #ffffff;
  margin-left: 0.32rem;
  margin-top: -0.96rem;
  .title {
    display: flex;
    img {
      width: 1.63rem;
      height: 1.63rem;
      border-radius: 50%;
    }
  }
  .atten {
    display: flex;
    margin-top: 0.37rem;
    div {
      text-align: center;
      font-size: 0.28rem;
    }
    .btn {
      margin-top: 0.1rem;
      button {
        width: 1.5rem;
        height: 0.56rem;
        border-radius: 0.2rem;
        border: none;
        color: rgb(255, 255, 255);
        background-color: #fe3d74;
        margin-left: 2.11rem;
      }
    }
    .atten2 {
      margin-left: 0.4rem;
    }
    .atten3 {
      margin-left: 0.4rem;
    }
  }
  .name {
    margin-left: 0.2rem;
    h1 {
      font-size: 0.32rem;
      color: rgb(51, 51, 51);
    }
    span {
      font-size: 0.28rem;
      color: rgb(102, 102, 102);
    }
  }
}
.herhome {
  background: #f1f1f1;
  height: 15rem;
}
.active {
  background-color: gray;
}
ul {
  .spot {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.32rem;

    .img {
      display: block;
      margin-top: 0.26rem;
      display: flex;
      width: 2.16rem;
      .img1,
      .img2 {
        margin-left: 0.16rem;
      }
    }
    h1 {
      font-size: 0.32rem;
      color: rgb(51, 51, 51);
    }
  }
  .foot {
    margin-left: 0.3rem;
    display: flex;
    color: rgb(153, 153, 153);
    i {
      height: 0.48rem;
      font-size: 0.22rem;
      margin-top: 0.28rem;
    }
    .ico {
      display: flex;
      margin-top: 0.15rem;
      align-items: center;
      margin-left: 0.3rem;

      .bj {
        display: flex;
        align-items: center;

        span {
          margin-bottom: 0.05rem;
        }
      }
      .dj {
        img {
          margin-top: 0.1rem;
        }
      }
    }
    img {
      width: 0.48rem;
    }

    img:nth-child(1) {
      margin-bottom: 0.1rem;
    }
  }

  .reply {
    margin-top: 0.1rem;
    display: flex;
    justify-content: center;
    input {
      width: 5.7rem;
      height: 0.8rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.3rem;
      padding-left: 0.2rem;
    }
    button {
      border: none;
      width: 1.2rem;
      height: 0.8rem;
      border-radius: 0.4rem;
      margin-left: 0.1rem;
      font-size: 0.3rem;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.comm{
  font-size: .32rem;
  font-weight: 500;
  padding: .2rem;
}
</style>
