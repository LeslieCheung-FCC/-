<template>


  <div class="myphoto">
    

     <van-nav-bar
  title="我的相册"
 
  right-text="确认"
  left-arrow
 @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<Photo1 class="list"></Photo1>
<Photo2></Photo2>
<Photo3></Photo3>
<Photo4></Photo4>
  <Photo5></Photo5>

</div>
</template>

<script>
import Photo1 from './photo1'
import Photo2 from './photo2'
import Photo3 from './photo3'
import Photo4 from './photo4'
import Photo5 from './photo5'
export default {
  props: {},
  data() {
    return { 

    }

  },
  methods: {
    onClickLeft() {
      this.$router.go(-2);
    },
   onClickRight() {
      this.$router.go(-1);
    }
  },
  components: {
      Photo1,
      Photo2,
      Photo3,
       Photo4,
       Photo5
  }
};
</script>

<style scoped lang="less">
.myphoto {
  background: #f1f1f1;
  height: 10rem;
// .list{
//     height: 2.34rem;
//     width: 100%;
// }
}

.van-nav-bar__title {
  font-size: 0.36rem;
  color: rgb(51, 51, 51);
}
.van-icon,.van-nav-bar__text{
  color: black;
}
</style>
