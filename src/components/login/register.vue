<template>
  <div class="out">
    <h1>登录</h1>
    <ul>
      <li>
        <span>手机号</span>
        <input v-model="phone" class="ipone" type="text" />
      </li>
      <li>
        <span>密码</span>
        <input v-model="pwd" class="pwd" type="password" />
      </li>
      <li>
        <button @click="btn1">立即登录</button>
      </li>
      <li @click="$router.push('/Register1')">没有账号？立即注册</li>
    </ul>
  </div>
</template>

<script>
FileReader;
export default {
  props: {},
 
  data() {
    return {
    
      phone: "",
      pwd: ""
    };
  },
  methods: {
    btn1() {
      // console.log(1,this.pwd,this.phone)
      if (!/^1[3-9][0-9]{9}$/.test(this.phone)) {
        alert("请输入手机号码");
      } else if (!/\w/g.test(this.pwd)) {
        alert("输入密码");
      } else {
          // this.$router.push("/Home");
        this.axios
          .get("/api/addUserId", {
            params: {
              upwd: this.pwd,
              phone: this.phone
            }
          })
          .then(res=> {
            console.log(res.data);
            if(res.data){
              
            this.$router.push("/Home");
            }else{
              alert('密码错误');
            }
          }).catch(err=>{console.log(err)});
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.out {
  color: #ffffff;
  width: 100%;
  height: 13.34rem;
  background: url("../../../static/images/login/pic-@2x.png") no-repeat;
  padding-top: 2.19rem;
  h1 {
    //   margin-top: 2.19rem;
    //   margin: 2.19rem;
    text-align: center;
    font-size: 0.56rem;
    color: #ffffff;
  }
  ul {
    margin: 0.9rem 1.05rem;
    > li {
      // line-height: .68rem;
      border-bottom: 0.01rem solid #fff;
      display: flex;
      align-items: center;
      padding-right: 0.1rem;
      > button {
        font-size: 0.36rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #fe3d74;
        margin-top: 0.72rem;
        width: 5.4rem;
        height: 0.66rem;
      }
      > span {
        font-size: 0.28rem;
        padding: 0.24rem 0.16rem;
        display: block;
        width: 1.2rem;
      }
      > input {
        font-size: 0.28rem;
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
    > li:nth-of-type(2) {
      margin-top: 0.34rem;
    }
    > li:nth-of-type(3) {
      justify-content: center;
    }
    > li:last-of-type {
      font-size: 0.22rem;
      margin-top: 0.56rem;
      justify-content: flex-end;
    }
    > li:last-of-type,
    > li:nth-of-type(3) {
      padding-right: 0;
      border: none;
    }
  }
}
</style>
