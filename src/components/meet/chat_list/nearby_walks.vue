<template>
  <!-- 附近同游内容组件 -->
  <div class="walks">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="a">
          <div class="name"></div>
          

          <div class="b">
            <p>{{item.theme}}</p>
            <p>{{item.site}}</p>
            <p>{{item.object}}</p>
            
          </div>

          <div class="c">
              <p>{{item.cost}}</p>
            <p>{{item.explain}}</p>
            
          </div>
          <div class="d">
            <p>时间:{{item.time | timer}}</p>
          </div>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Heads from "./heads";
export default {
  props: {},
  data() {
    return {
      list: []
    };
  },
  methods: {
    // findTour
    fc() {
      this.axios.get("/api/findTour",{
       params:{
         uid:this.$store.state.userId
       }
      }).then(response => {
        console.log(response.data);
        this.list = response.data;
      });
    }
  },
  components: {
    Heads
  },
  mounted() {
    this.fc();
  },
  filters: {
    timer(ind) {
      let date = new Date(ind);
    //   console.log(date);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D = date.getDate();
      return Y + M + D;
    }
  }
};
</script>

<style scoped lang="less">
.walks {
  // height: 3rem;

  ul {
    background: #ececec;
    overflow: hidden;
    li:nth-child(1){
      margin-top: .1rem;
    }
    li {
      background: white;
      padding: .1rem;
      .a {
        font-size: 0.3rem;
        // height: 3rem;
        margin-bottom: .1rem;

      

        .b{
            display: flex;
            p{
              border:1px solid rgb(79, 178, 255);
              border-radius: .1rem;
              margin-left: .3rem;
              color: rgb(79, 178, 255);
            }

        }

        .c{
          // background: #ccc;
          display: flex;
          border-radius: .4rem;
        }

        .d{
          // color: #f1f1f1;
        }
      }
    }
  }
}
</style>
