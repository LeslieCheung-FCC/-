<template>
  <!-- 附近的人内容组件 -->
  <div class="nearby_list">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <div class="left">
          <img :src="item.imgs" alt="">
        </div>
        <div class="right">
          <p class="text"> {{ item.name }} </p>
          <div class="right_a">
            <img :src="item.nv" alt="">
            <div class="bachelordom" v-for="(item,index) in item.tag" :key="index">
              <p :style="{ borderColor:item.color,color:item.color}"> {{item.tg_name}} </p>
            </div>
            
          </div>
          <p class="text1">{{ item.text}}</p>
        </div>
      </li>
    </ul>
    <div style="height:2rem"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        lists:[],
                
    };
  },
  methods: {},
  components: {},
  beforeCreate() {
    this.axios.get('../../../../static/mock/nearby_list.json').then(data => {
    
      this.lists=data.data.list
      console.log(this.lists);
    });
  }
};
</script>

<style scoped lang="less">
.nearby_list{
    padding: .24rem 0 0 .32rem;
    
    ul{

        li{
            display: flex;
            margin-bottom: .34rem;
            align-items: center;

            .left{
                margin-right: .32rem;
                img{
                    width: 1.2rem;
                }

                
            }

            .right{

                .right_a{
                  height: .3rem;
                  display: flex;

                    img{
                        width: .3rem;
                        margin-right: .18rem;
                    }
                    .bachelordom{
                      
                      margin-right: .08rem;
                    }
                    .bachelordom>p{
                      border:1px solid;
                      font-size: .17rem;
                      padding: .02rem 0.1rem;
                      border-radius: .25rem;
                    }
                }

                .text{
                    font-size:.25rem;
                    color: #333333;
                }
            }

            .text1{
                    font-size: .22rem;
                    color: #666666;
                }
        }
    }
}
</style>
