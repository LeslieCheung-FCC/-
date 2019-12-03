<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/Home">
          <img src="../../../static/images/home/Icon- (32).png" alt class="act" />
          <img src="../../../static/images/home/icon-23.png" alt class="nor" />
          <div>首页</div>
        </router-link>
      </li>
      <li>
        <router-link to="/Scenic">
          <img src="../../../static/images/home/scenic(2).png" alt class="act" />
          <img src="../../../static/images/home/Icon- (35).png" alt class="nor" />
          <div>景点</div>
        </router-link>
      </li>
      <li class="meet">
        <router-link to="/Meet">
          <img src="../../../static/images/home/Icon- (29).png" alt />
        </router-link>
      </li>
      <li>
        <router-link to="/Guide">
          <img src="../../../static/images/home/guide(2).png" alt class="act" />
          <img src="../../../static/images/home/Icon- (38).png" alt class="nor" />
          <div>向导</div>
        </router-link>
      </li>
      <li>
        <router-link to="/Mine">
          <img src="../../../static/images/home/mine(2).png" alt class="act" />
          <img src="../../../static/images/home/Icon- (41).png" alt class="nor" />
          <div>个人中心</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    };
  },
  methods: {
    
  },
  components: {},
  mounted() {
  }
};
</script>

<style scoped lang="less">
.footer {
  width: 100%;
  // height: 100rem;
  box-sizing: border-box;
 
  
  ul {
     z-index: 10;
    width: 100%;
    background-color: #fff;
    display: flex;
    border-top: 1px solid #e8e8e8;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    li {
      margin-top: 0.18rem;
      margin-bottom: 0.16rem;
      flex: 1;
      text-align: center;
      a {
        display: block;
        width: 100%;
        color: rgb(155, 155, 155);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          height: 100%;
          width: .48rem;
          height: .48rem;
        }
        
        div {
          font-size: 0.22rem;
        }
        .act {
          display: none;
        }
        .nor {
          display: block;
        }
      }
      .router-link-active {
        color: rgb(253, 101, 25);
        .act {
          display: block;
        }
        .nor {
          display: none;
        }
      }
    }
    li:nth-of-type(2) {
      margin-right: 0.89rem;
    }
    .meet {
      position: absolute;
      top: -0.37rem;
      margin: 0;
      a{
        img{
          width:1rem;
          height:1rem;
        }
      }
    }
  }
}
</style>
