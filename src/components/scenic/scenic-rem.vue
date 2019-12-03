<template>
  <!-- 景点推荐 -->
  <!-- 景点推蝝 -->
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <div v-for="(item,index) in list" :key="index" @click="push(index)">
        <!-- <router-link to="/IndexOne"> -->
          <swiper-slide class="slide">
            <div
              class="renm_list"
              :style="{background: 'url(' + item.imgurl + ') no-repeat', backgroundSize:'contain'}"
            >
              <div class="des">
                <div class="des_title">
                  <img src="../../../static/images/home/Icon- (26).png" alt />
                  <h1>{{item.title1}}</h1>
                </div>
                <h1 class="item_title2">{{item.title2}}</h1>
              </div>
            </div>
          </swiper-slide>
        <!-- </router-link> -->
      </div>
    </swiper>
    <div class="grey"></div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      list: [],
      swiperOption: {
       
        //  observer: true,
        //  observerParents: true ,
        //  initialSlide :0,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.axios.get("../../../static/mock/scenic-remommend.json").then(res => {
      //console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  methods: {
    push(val) {
      if(val == 0) {
        this.$router.push("IndexOne");
      console.log(val);
      }else if(val == 2){
        this.$router.push("IndexTwo");
      }else{
        this.$router.push("Water")
      }
     
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.swiper-container {
  .slide {
    //  width:2.26rem;
    margin-left: 0.24rem;
    height: 2.73rem;

    .renm_list {
      border-radius: 0.2rem;
      height: 2.73rem;
      width: 2.26rem;
      position: relative;
      //padding-bottom: .34rem;
      // width: 100%;
      .des {
        width: 100%;
        height: 100%;
        color: rgb(255, 255, 255);
        position: absolute;
        h1 {
          font-size: 0.24rem;
          display: inline-block;
        }
        .des_title {
          margin-top: 1.84rem;
          margin-left: 0.12rem;
          img {
            display: inline-block;
            width: 0.48rem;
            height: 0.48rem;
          }
        }
        .item_title2 {
          position: absolute;
          margin-left: 0.22rem;
          bottom:0;
         
        }
      }
    }
  }
  .grey {
    height: 0.16rem;
    width: 100%;
    background-color: #f1f1f1;
    margin-top: 0.34rem;
  }
}
</style>
