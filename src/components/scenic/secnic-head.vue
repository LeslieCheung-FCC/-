<template>
  <div>
    <header>
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value1" :options="option1" @change="seachead" />
        <van-dropdown-item v-model="value2" :options="option2" @change="nearBy" />
        <van-dropdown-item v-model="value3" :options="option3" @change="type" />
      </van-dropdown-menu>
    </header>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      flag: false,
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "综合排序", value: 0 },
        { text: "点评最多", value: 1 },
        { text: "距离最近", value: 2 }
      ],
      option2: [
        { text: "附近", value: "a" },
        { text: "500米", value: "b" },
        { text: "1000米", value: "c" },
        { text: "2000米", value: "d" }
      ],
      option3: [
        { text: "类型(全部)", value: "A" },
        { text: "自然景点", value: "B" },
        { text: "人文景点", value: "C" },
        { text: "娱乐场所", value: "D" }
      ]
    };
  },
  methods: {
    onConfirm() {
      //this.$refs.item.toggle();
      console.log("0");
    },
    //综合排序
    seachead(value) {
      //综合排序刷选
      if (value == 0) {
        console.log(`综合排序${value}`);
        this.$axios.get("api/scenic/zhRank").then(res => {
          console.log(res.data);
          this.list = res.data;
          this.$store.state.storeList = this.list;
        });
      } else if (value == 1) {
        //点评最多
        console.log(`点评最多${value}`);
        this.$axios
          .get("api/scenic/findByspot")
          .then(res => {
            console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
            console.log(this.$store.state.storeList);
          });
      } else {
        //距离最近
        console.log(`距离最近${value}`);
        this.$axios
          .get("api/scenic/findByDis")
          .then(res => {
            console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }
    },
    nearBy(value2) {
      //附近刷选
      console.log(value2)
      if (value2 == "b") {
        this.$axios
          .get("api/scenic/findByAround", {
            params: {
              distance: "500"
            }
          })
          .then(res => {
              this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      } else if (value2 == "c") {
        this.$axios
          .get("api/scenic/findByAround", {
            params: {
              distance: "1000"
            }
          })
          .then(res => {
          this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      } else if (value2 == "d") {
        this.$axios
          .get("api/scenic/findByAround", {
            params: {
              distance: "2000"
            }
          })
          .then(res => {
          this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }else {
        this.$axios
          .get("api/scenic/findByAround")
          .then(res => {
            console.log(`仓库2000${this.$store.state.storeList}`);
             this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }
    },
    type(value3) {
      console.log(value3);
      if (value3 == "A") {
        console.log(`景点类型${value3}`);
        this.$axios
          .get("api/scenic/findByType")
          .then(res => {
            console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }else if(value3 == "B") {
         this.$axios
          .get("api/scenic/findByType",{
            params:{
              type:"自然景点"
            }
          })
          .then(res => {
             console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }else if(value3 == "C") {
         this.$axios
          .get("api/scenic/findByType",{
            params:{  
              type:"人文景点"
            }
          })
          .then(res => {
             console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }else{
         this.$axios
          .get("api/scenic/findByType",{
            params:{  
              type:"娱乐场所"
            }
          })
          .then(res => {
             console.log(res.data);
            this.list = res.data;
            this.$store.state.storeList = this.list;
          });
      }
    }
  },
  // seach() {
  //   this.axios.get("http://192.168.137.59:8080/scenic/zhRank").then(res => {
  //     console.log(res.data);
  //     this.list = res.data;
  //   });
  // },

  mounted() {
    this.$axios.get("api/scenic/zhRank").then(res => {
      console.log(`生命周期${res.data}`);
      this.list = res.data;
      this.list = this.$store.state.storeList;
    });
    //  this.axios.get('http://192.168.137.206:8080/scenic/findByName',{
    //    params:{
    //      name:"haha"
    //    }
    //  })
  }
};
</script>

<style scoped lang="less">
header {
  font-size: 0.16rem;
}
</style>
