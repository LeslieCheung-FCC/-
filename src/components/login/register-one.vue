<template>
  <div>
    <div class="out">
      <div class="top">
        <img
          @click="$router.push('/Register')"
          src="../../../static/images/login/icon-06@2x.png"
          alt
        />
        <h1>注册</h1>
        <span></span>
      </div>
      <ul>
        <li>
          <span>昵称</span>
          <input v-model="user" type="text" @click-right-icon="$toast()"/>
        </li>
        <li>
          <span>手机号</span>
          <input v-model="phone" type="text" @click-right-icon="$toast()"/>
        </li>
        <li>
          <span class="yanzheng1">验证码</span>
          <input class="ipone" type="text" v-model="yanzheng" @click-right-icon="$toast()"/>
          <span class="yanzheng" v-show="show" @click.stop="getCode">获取验证码</span>

          <span v-show="!show" class="count">{{count}} s</span>
        </li>
        <li>
          <span>密码</span>
          <input v-model="pwd" type="password" @click-right-icon="$toast()"/>
        </li>
        <li>
          <span class="fade">再次输入密码</span>
          <input v-model="pwd1" class="pwd" type="password" @click-right-icon="$toast()"/>
        </li>
        <li>
          <button @click="btn">立即注册</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //验证码60s
      show: true,
      count: "",
      timer: null,

      user: "",
      phone: "",
      pwd: "",
      pwd1: "",
      yanzheng: "",
      phoneyanzheng: "",
      data1: ""
    };
  },
  mounted() {
    
  },
  methods: {
    getCode() {
      //从后台拿到验证码
      if (/^1[3-9][0-9]{9}$/.test(this.phone)) {
        this.axios
          .get("/api/getVcode", {
            params: {
              phone: this.phone
            }
          })
          .then(res => {
            console.log(res);
            this.phoneyanzheng = res.data;
          });
      }
      //验证码60S
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    btn() {
      /* console.log(
        this.phoneyanzheng,
        this.yanzheng,
        this.pwd.length,
        this.pwd.length < 6
      ); */
      if (!Boolean(this.user)) {
        // alert("请输入用户名");
        this.$toast("请输入用户名");
        // Notify('注册成功');
      } else if (!/^1[3-9][0-9]{9}$/.test(this.phone)) {
        // alert("请输入手机号码");
        this.$toast("手机号码不能为空或输入错误");
      } else if (this.yanzheng == "" || this.phoneyanzheng != this.yanzheng) {
        // alert("验证码不能为空或输入错误");
        this.$toast("验证码不能为空或输入错误");
      } else if (!/\w/g.test(this.pwd) || this.pwd.length < 6) {
        // alert("输入密码或密码长度小于六位");
        this.$toast("输入密码或密码长度小于六位");
      } else if (this.pwd != this.pwd1) {
        // alert("请再次输入密码");
        this.$toast("请再次输入密码");
      } else {
        this.axios
          .get("/api/addfind", {
            params: {
              nickname: this.user,
              upwd: this.pwd,
              phone: this.phone
            }
          })
          .then(res => {
            
            this.$store.state.userId=res.data;
            console.log(this.$store.state.userId);
          });
        // alert("注册成功");
        //  Notify('注册成功');
        // this.$notify('注册成功');
        this.$toast("注册成功");
        this.$router.push("/register");
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.count {
  margin-left: 1rem;
  color: red;
}
.out {
  width: 100%;
  height: 13.34rem;

  > .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.33rem;
    > h1 {
      text-align: center;
      font-size: 0.56rem;
      color: #666666;
    }
  }
  ul {
    margin: 0.9rem 1.05rem;
    > li {
      padding: 0.34rem 0 0.12rem;
      color: #cccccc;
      // line-height: .68rem;
      border-bottom: 0.01rem solid #cccccc;
      display: flex;
      align-items: center;
      padding-right: 0.1rem;
      > button {
        color: #ffffff;
        font-size: 0.36rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #fe3d74;
        margin-top: 0.34rem;
        width: 5.4rem;
        height: 0.66rem;
      }
      > span {
        font-size: 0.28rem;
        padding: 0.24rem 0.16rem;
        display: block;
        width: 2.4rem;
      }
      > .ipone {
        width: 1rem;
      }
      > .yanzheng {
        font-size: 0.24rem;
        color: #fd6519;
        padding: 0;
        width: auto;
        // width: 2rem;
      }
      > .yanzheng1 {
        flex-shrink: 0;
      }
      > input {
        width: 2.8rem;
        font-size: 0.28rem;
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
    > li:nth-of-type(3) {
      justify-content: center;
    }
    > li:last-of-type {
      font-size: 0.22rem;
      //  margin-top: .22rem;
      justify-content: flex-end;
    }
    > li:last-of-type {
      padding-right: 0;
      // border: none;
    }
    > li:last-of-type,
    > li:nth-of-type(6) {
      padding-right: 0;
      border: none;
    }
  }
}
</style>
