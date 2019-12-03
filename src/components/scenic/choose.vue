<template>
  <div>
    <Navda class="nav"></Navda>

    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      height=600
      @click-nav="nav"
      @click-item="item"
    />
  </div>
</template>

<script>
import Navda from "@/components/public/navda";
export default {
  props: {},
  data() {
    return {
      items: [
        {
          text: "景点评级",
          children: [
            { text: "5A级景区", id: "5A" },
            { text: "4A级景区", id: "4A" },
            { text: "3A级景区", id: "3A" },
            { text: "2A级景区", id: "2A" },
            { text: "1A级景区", id: "1A" },
            { text: "不限", id: "不限" },
           
          ]
        },
        {
          text: "用户评价",
          children: [
            { text: "5星", id: 5 },

            { text: "4星", id: 4 },
            { text: "3星", id: 3 },
            { text: "2星", id: 2 },
            { text: "1星", id: 1 },
            { text: "不限", id: 0 },
            
          ]
        },
        {
          text: "景点地区",
          children: [
            { text: "华北", id: 5 },
            { text: "华东", id: 4 },
            { text: "华南", id: 3 },
            { text: "华中", id: 2 },
            { text: "西部", id: 1 },
            { text: "不限", id: 0 },
          
           
          ]
        },
        {
          text: "景点类型",
          children: [
            { text: "公园", id: 5 },

            { text: "名胜古迹", id: 4 },
            { text: "古建筑群", id: 3 },
            { text: "宗教寺庙", id: 2 },
            { text: "新高新区", id: 1 },
            { text: "主题公园", id: 0 },
            { text: "山岳", id: -1 },
            { text: "海岛摊屿", id: -2 },
         
            { text: "不限", id: -3 },
       
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0,
        className: 'my-class',
    };
  },
  methods: {
    nav(index){  //高级刷选景点
         console.log(index)
    },
    item(data){
      console.log(data.id)
    }
  },
  components: {
    Navda
  }
};
</script>

<style scoped lang="less">
.van-tree-select__nav {
  float: left;
  color: red;
}
.my-class{
font-size: .28rem;
color: rgb(51, 51, 51)
}
</style>
