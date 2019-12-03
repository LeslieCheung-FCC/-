<template>
  <div class="out">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <swiper-slide>
        <ul class="ul_two">
          <li class="li_two" v-for="(item,index) in data" :key="index">
            <router-link to="/Datum">
              <img class="img_two" :src="item.imgUrl" alt />
            </router-link>

            <span class="p_one">{{ item.name }}</span>
            <span class="p_two" id="p_two_one">{{ item.title }}</span>
            <span class="p_three">{{ item.title1 }}</span>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="ul_two">
          <li class="li_two" v-for="(item,index) in data" :key="index">
            <router-link to="/Datum">
              <img class="img_two" :src="item.imgUrl" alt />
            </router-link>

            <span class="p_one">{{ item.name }}</span>
            <span class="p_two">{{ item.title }}</span>
            <span class="p_three">{{ item.title1 }}</span>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="ul_two">
          <li class="li_two" v-for="(item,index) in data" :key="index">
            <router-link to="/Datum">
              <img class="img_two" :src="item.imgUrl" alt />
            </router-link>

            <span class="p_one">{{ item.name }}</span>
            <span class="p_two">{{ item.title }}</span>
            <span class="p_three">{{ item.title1 }}</span>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="ul_two">
          <li class="li_two" v-for="(item,index) in data" :key="index">
            <router-link to="/Datum">
              <img class="img_two" :src="item.imgUrl" alt />
            </router-link>

            <span class="p_one">{{ item.name }}</span>
            <span class="p_two">{{ item.title }}</span>
            <span class="p_three">{{ item.title1 }}</span>
          </li>
        </ul>
      </swiper-slide>
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
    this.axios.get("/static/mock/guide_msg1.json").then(res => {
      // console.log(res.data.msg1);
      this.data = res.data.msg1;
    });   
  },
  methods: {},
  components: {}
};
</script>

<style  lang="less" scoped>
.out {
  margin-bottom: 1.32rem;
  .out {
    margin-bottom: 1.32rem;
    // width: 5rem;
    // height: 5rem;
  }
  // #p_two_one{
  //   background-color: red;
  // }
  .ul_two {
    // margin-top: .1rem;
    position: relative;
    line-height: 0.1rem;
    width: 100%;
    display: block;
    .li_two {
      color: #ffffff;
      .img_two {
        margin-top: 0.2rem;
        width: 1.28rem;
        height: 1.28rem;
      }
      .p_one {
        margin-top: 0.35rem;
        position: absolute;
        margin-left: 0.24rem;
        font-size: 0.24rem;
        color: #515151;
      }
      .p_two {
        // width: 1.8rem;
        border-radius: 0.02rem;
        height: 0.24rem;
        position: absolute;
        margin-left: 0.24rem;
        font-size: 0.16rem;
        background-color: #4fb2ff;
        line-height: 0.22rem;
        margin-top: 0.65rem;
      }
      .p_three {
        position: absolute;
        font-size: 0.18rem;
        color: rgb(153, 153, 153);
        margin-left: 0.24rem;
        margin-top: 1.1rem;
      }
    }
  }
  .swiper-scrollbar-drag {
    left: 4%;
    background: #fd6519 !important;
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    width: 1.26rem;
    top: 0;
    position: absolute;
    // left: 4.5%;
    // z-index: 50;
    height: 0.02rem;
    width: 100%;
    z-index: 999;
    left: 0;
  }
  .ul_two {
    // margin-top: .1rem;
    position: relative;
    line-height: 0.1rem;
    width: 100%;
    display: block;
    margin-left: 0.3rem;
    .li_two {
      color: #ffffff;
      margin-top: 0.2rem;
      .img_two {
        width: 1.28rem;
        height: 1.28rem;
      }
      .p_one {
        margin-top: 0.35rem;
        position: absolute;
        margin-left: 0.24rem;
        font-size: 0.24rem;
        color: #515151;
      }
      .p_two {
        // width: 1.8rem;
        border-radius: 0.02rem;
        height: 0.24rem;
        position: absolute;
        margin-left: 0.24rem;
        font-size: 0.16rem;
        background-color: #4fb2ff;
        line-height: 0.22rem;
        margin-top: 0.65rem;
      }
      .p_three {
        position: absolute;
        font-size: 0.18rem;
        color: rgb(153, 153, 153);
        margin-left: 0.24rem;
        margin-top: 1.1rem;
      }
    }
  }
}
</style>
