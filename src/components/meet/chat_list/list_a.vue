<template>
  <div class="wode">
    

<slot name="b">
    <ul>
      <li>
        <div class="left">
          <img src="../../../../static/images/meet/mine/pic-01@3x.png" alt />
        </div>
        <div class="right">
          <p>
            <span>小笨蛋</span>在评论中提到你
          </p>
          <p>11天前</p>
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
    </slot>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    
  }
};
</script>

<style scoped lang="less">
.wode {
  ul {
    padding: 0 0 0 0.3rem;
    li {
      height: 1.28rem;
      box-sizing: border-box;
      display: flex;
      
      position: relative;
      align-items: center;
      .left {
        img {
          width: 0.8rem;
        }
      }
      .right {
        flex: 1;
        margin-left: 0.21rem;
        height: 100%;
        border-bottom: 1px #ccc solid;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p:nth-child(1) {
          font-size: 0.28rem;
          color: #333;
        
          span {
            color: #fd6519;
          }
        }
        p:nth-child(2) {
          font-size: 0.22rem;
          color: #999;
          margin-top: .1rem;
        }
        p:nth-child(3) {
          font-size: 0.18rem;
          color: #999;
          position: absolute;
          right: 0;
          top: 0.1rem;
        }
      }
    }
  }
}
</style>
