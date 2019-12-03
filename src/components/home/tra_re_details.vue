<template>
  <div class="re_details">
    <div class="re_detop">
      <img :src="list.head" alt />
      <h3>{{list.yid}}</h3>
      <span v-if="list.state">{{list.state}}</span>
    </div>
    <div class="re_text">
      <p>{{list.ycontent}}</p>
      <span>查看全部</span>
      <img :src="list.ypicture" alt />
    </div>
    <div class="re_bott">
      <div @click="changeImg('a')" :class="[ 'act_img ', {colorw:!isshow}]">
        <img v-if="isshow" src="../../../static/images/home/travel/icon-04@2x.png" />
        <img v-else class="act_img" src="../../../static/images/home/travel/iconc-04@2x.png" />
        送花
      </div>

      <div @click="changeImg('b')" :class="[ 'act_img ', {colorw:!nor1}]">
        <img v-if="nor1" src="../../../static/images/home/travel/icon-05@2x.png" alt />
        <img v-else class="act_img" src="../../../static/images/home/travel/iconc-05@2x.png" alt />
        互撩
      </div>

      <div @click="changeImg('c')" :class="[ 'act_img ', {colorw:!act}]">
        <img v-if="act" src="../../../static/images/home/travel/icon-06@2x.png" alt />
        <img v-else src="../../../static/images/home/travel/iconc-06@2x.png" />
        分享
      </div>
    </div>
    <Fengxiang v-if="show"></Fengxiang>
  </div>
</template>

<script>
import Fengxiang from '../scenic/part/fenxiangs'
export default {
  props: {
    list: {
      required: true
    }
  },
  data() {
    return {
      isshow: true,
      act: true,
      nor1: true,
      show:false
    };
  },
  methods: {
    changeImg(ind) {
      console.log(ind);
      if (ind === "a") {
        this.isshow = false;
      } else if (ind === "b") {
        console.log(ind);
        this.nor1 = false;
      } else {
        console.log(ind);
        this.act = ! this.act;
        this.show = ! this.show
      }
    }
  },
  components: {
    Fengxiang
  }
};
</script>

<style scoped lang="less">
.re_details {
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.5rem 0.74rem 0.45rem;
  .re_detop {
    display: flex;
    align-items: center;
    margin-bottom: 0.16rem;
    justify-content: flex-end;
    img {
      margin-right: 0.21rem;
      width: 1.2rem;
      height: 1.2rem;
    }
    h3 {
      font-size: 0.3rem;
      flex: 1;
    }
    span {
      display: block;
      width: 0.48rem;
      height: 0.26rem;
      background-color: #fb874c;
      line-height: 0.26rem;
      text-align: center;
      font-size: 0.18rem;
    }
  }
  .re_text {
    img {
      margin-bottom: 0.28rem;
      width: 100%;
      height: 100%;
    }
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin-bottom: 0.16rem;
      font-size: .28rem;
    }
    span {
      color: #4fb2ff;
      font-size: .28rem;
    }
  }
  .re_bott {
    display: flex;
    justify-content: flex-end;
    div {
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
    }

    .act_img {
      width: 0.8rem;
      height: 0.24rem;
      display: flex;
      font-size: .24rem;
      color: #333333;
      white-space: nowrap;
      margin-right:.38rem;
      align-items: center;
      img {
        width: 0.26rem;
        height: 0.24rem;
        margin-right: 0.16rem;
      }
    }
  }
  .colorw {
    color: #fb874c !important;
  }
}
</style>
