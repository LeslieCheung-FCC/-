<template>
  <!-- 搜索页面内容 -->
  <div>
    <!-- 搜索框 -->
    <div class="search_top">
      <router-link to="/Home">
        <img src="../../../static/images/home/search/icon-03@2x.png" alt />
      </router-link>
      <div class="sea_box" :style="{background:color}">
        <img src="../../../static/images/home/Icon- (11).png" alt />
          <input type="text" placeholder="热搜省会" @keydown.13="message" v-model="content" />
      </div>
      <button @click="message">搜索</button>
    </div>
    <!-- 列表头 -->
    <div class="list_title">
      <p>热门搜索</p>
      <img src="../../../static/images/home/search/icon-01@2x.png" alt />
    </div>
    <ul class="list_tag">
      <li v-for="(val,ind) in list" :key="ind">
        <div>{{val}}</div>
      </li>
    </ul>
    <div class="list_title">
      <p>搜索历史</p>
    </div>
    <ul class="list_tag">
      <li>
        <div>三亚</div>
      </li>
      <li>
        <div>三亚</div>
      </li>
      <li>
        <div>三亚</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Store from '../../store/index'
export default {
  
  props: {},
  data() {
    return {
      color: "#f5f5f5",
      list: [],
      content: "",
      arr:[]
    };
  },
  methods: {
    get_mes() {
      this.axios.get("../../../static/mock/home_ho_search.json").then(data => {
        this.list = data.data.arr;
      });
    },
    message(){

      this.axios.get('/api/findCityByName',{
        params:{
          pname:this.content
        }
      }).then((data)=>{
        console.log(33333);
        this.arr=data.data;
        this.$store.state.place_list = this.arr;
      })
      this.$router.push('/Home');
    }
  },
  components: {
  },
  mounted() {
    this.get_mes();
  }
};
</script>

<style scoped lang="less">
.sea_box {
  box-sizing: border-box;
  display: flex;
  height: 0.72rem;
  border-radius: 0.72rem;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  img {
    margin: 0 0.09rem 0 0.21rem;
    width: 0.48rem;
    height: 0.48rem;
  }
  input {
    height: 0.72rem;
    outline: none;
    border: none;
    font-size: 0.23rem;
    background: transparent;
  }
  input::placeholder {
    font-size: 0.23rem;
  }
}
.search_top {
  display: flex;
  align-items: center;
  margin: 0.52rem 0 0.64rem;
  img {
    width: 0.58rem;
    height: 0.58rem;
    margin-right: 0.8rem;
  }
  button {
    background: none;
    border: none;
    margin-left: 0.3rem;
    font-size: 0.27rem;
    color: #333333;
  }
}
.list_title {
  display: flex;
  padding: 0 0.12rem 0.18rem;
  align-items: center;
  justify-content: space-between;
  color: #333333;
  font-size: 0.32rem;
  margin-bottom: 0.075rem;
}
.list_tag {
  display: flex;
  // justify-content: space-between;
  margin-left: 0.34rem;
  flex-wrap: wrap;
  li {
    width: 20%;
    height: 0.52rem;
    div {
      text-align: center;
      height: 0.52rem;
      width: 0.96rem;
      background-color: #f8f9fb;
      color: #666666;
      font-size: 0.24rem;
      border-radius: 0.52rem;
      line-height: 0.52rem;
    }
    margin-bottom: 0.2rem;
  }
}
</style>
