<template>
  <!-- 回复我的根组件 -->
  <div class="reply">
    <div class="reply_list">
      <ul>
        <li @click="reply">
          <!-- 每个后面映射一个组件，还没创建 -->
          <router-link to="/huifu">
            <img src="../../../../static/images/meet/Icon- (11).png" alt />
            <p>回复我的</p>
          </router-link>
        </li>
        <li @click="mine">
          <router-link to="/wode">
            <img src="../../../../static/images/meet/Icon- (14).png" alt />
            <p>@我的</p>
          </router-link>
        </li>
        <li @click="zan">
          <router-link to="/zan" >
            <img src="../../../../static/images/meet/Icon- (17).png" alt />
            <p>赞</p>
          </router-link>
        </li>
        <li>
          <router-link to="/tongzhi">
            <img src="../../../../static/images/meet/Icon- (20).png" alt />
            <p>系统通知</p>
          </router-link>
        </li>
      </ul>
       
    </div>
    <router-link to="/xiangqing">
   <div class="replay_logo">
     <img src="../../../../static/images/luck/1.gif" alt="">
   </div>
   </router-link>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    zan(){   //赞获取数据
    this.$axios.get("/api/getListZan")
    .then(res=>{
      console.log(res.data)
      this.$store.state.zanList = res.data
    })
    console.log('zan')
    },
    reply(){  //回复我的
      this.$axios.get("/api/getListComment")
         .then(res=>{
           console.log(res.data)
           this.$store.state.replyList = res.data
         })
    },
    mine(){    //@我
      this.$axios.get("/api/getListCommentA")
      .then(res=>{
        console.log(res.data)
       this.$store.state.mineList = res.data

      })
     console.log('@wo')
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.reply {
    background: #f1f1f1;
    padding: 0rem 0 .16rem 0;
  .reply_list {
    display: flex;
    justify-content: center;
    background: #f1f1f1;
    padding: 0.14rem 0 0.16rem 0;

    ul {
      width: 6.86rem;
      height: 2.1rem;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 0.2rem;
      li {
        // flex: 1;

        a {
          display: block;
          font-size: 0.26rem;
          color: #333333;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 0.76rem;
          }
          p {
            margin-top: 0.36rem;
          }
        }
      }
    }
   
  }
   .replay_logo{
        
        // height: 2rem;
        img{
          width: 100%;
        }
       
    }
}
</style>
