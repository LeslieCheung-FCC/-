<template>
  <div class="font" v-if="show">
    <share :config="config"></share>
    <div class="arr" @click="fa">
      <p>取消</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        show:true,
      config: {
        sites: ["qzone", "qq", "weibo", "wechat", "douban"],
        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>把好玩的分享给朋友把</p>"
      }
    };
  },
  methods: {
    fa(){
      this.show=false;
      document.body.style.overflow="visible";
    }
     
  },
  components: {}
};
</script>

<style scoped lang="less">
.font {
  width: 100%;
  position: absolute;
  bottom: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-share,
  .share-component {
    width: 6.9rem;
    background: rgb(250, 250, 250);
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 0.3rem;
    border-radius: 0.2rem;
  }

  .arr {
    width: 6.9rem;
    height: 1rem;
    background: rgb(250, 250, 250);
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
    border-radius: 0.2rem;
  }
}
</style>
