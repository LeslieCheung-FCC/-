<template>
  <div class="out">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in data" :key="index">
             <router-link to="/Datum"><img :src="item.imgUrl" alt /></router-link>
            <p>{{ item.name }}</p>
            <p>{{ item.introduce }}</p>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide><ul>
          <li v-for="(item,index) in data" :key="index">
             <router-link to="/Datum"><img :src="item.imgUrl" alt /></router-link>
            <p>{{ item.name }}</p>
            <p>{{ item.introduce }}</p>
          </li>
        </ul></swiper-slide>
      <swiper-slide><ul>
          <li v-for="(item,index) in data" :key="index">
             <router-link to="/Datum"><img :src="item.imgUrl" alt /></router-link>
            <p>{{ item.name }}</p>
            <p>{{ item.introduce }}</p>
          </li>
        </ul></swiper-slide>
      <swiper-slide><ul>
          <li v-for="(item,index) in data" :key="index">
             <router-link to="/Datum"><img :src="item.imgUrl" alt /></router-link>
            <p>{{ item.name }}</p>
            <p>{{ item.introduce }}</p>
          </li>
        </ul></swiper-slide>
    </swiper>
  </div>
  
</template>

<script>
export default {
  name: "carrousel",
  props: {},
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      },
      data: ""
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // console.log(1);
    this.axios.get("/static/mock/guide_msg.json").then(res => {
      console.log(res.data.msg);
      this.data = res.data.msg;
    });
  },
  methods: {},
  components: {}
};
</script>

<style  lang="less" scoped>

.swiper-container{
 height: 4rem;
}
.swiper-scrollbar-drag {
  left: 4%;
  background: #fd6519 !important;
}
ul {
    margin-top: .32rem;
  width: 100%;
  padding: 0 0.32rem;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;

  li {
      width: 100%;
      height: 2rem;
    img {
      width: 1.54rem;
      height: 2rem;
    }
    P:nth-of-type(1){
      font-size: .26rem;
      margin-top: .16rem;
      text-align: left;
     color:rgb(51,51,51);
    }
    P:nth-of-type(2){
      // line-height:.12rem;
       font-size: .24rem;
      width: 1.5rem;
      margin-top: .1rem;
      text-align: left;
     color:rgb(51,51,51);
    }
  }
}
.swiper-container-horizontal > .swiper-scrollbar {
  width: 1.26rem;
  top: 0;
  position: absolute;
  // left: 4.5%;
  // z-index: 50;
  height: .02rem;
  width: 100%;
  z-index: 999;
  height: .02rem;
  width: 100%;
  left: 0;
}
</style>
