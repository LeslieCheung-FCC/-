<template>
    <div class="list">
 
      <van-uploader v-model="fileList" multiple class="userphoto"  />
      <div class="user">
      <span class="name">{{user[0].name}}</span>
      <span class="time">{{user[0].time}}</span>
      </div>
     
</div>  
     
</template>

<script>

export default {
    props: {

    },
    data() {
        return {
 user: [
      
        
         
      
         { name: "海边卡夫卡", time: "6天前" }
      ],
      fileList: [
        { url: "../../../../static/images/mine/myphoto/pic-9@2x.png"},
      
   
      ]
        };      
    },
    
    methods: {

    },
    components: {

    },
};
</script>
     
<style scoped lang="less">
.userphoto{
    height: 2.34rem;
     background-color: #ffffff;
       width: 100%;
        margin-top: .1rem;
        padding-left: .64rem;
        padding-top: .32rem;
   }
   .list{
       width: 100%;
          color: #999999;
       .van-image__img{
           margin-right: .24rem;
       }
       
       .user{
           background-color: #ffffff;
           padding-left: .65rem;
           padding-bottom: .23rem;
           .name{
               font-size: .28rem; 
           }
           .time{
               font-size: .24rem;
               
           }
       }
   }
</style>
