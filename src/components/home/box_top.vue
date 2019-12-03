<template>
  <div>
    <div class="box_top">
      <router-link :to="up"><img src="./../../../static/images/home/daytour/icon-1@2x.png" alt /></router-link>
      <p>{{text}}</p>
      <select size="1" v-if="Array.isArray(address)">
        <option :value="address[0]">{{address[0]}}</option>
        <option :value="address[1]">{{address[1]}}</option>
        <option :value="address[2]">{{address[2]}}</option>
        <option :value="address[3]">{{address[3]}}</option>
      </select>
      <p  v-if="typeof(address) == 'string'">{{address}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: [String],
    address: {
        default:()=>{
            return ['郑州','开封','南京','上海'];
        },
        type:[Array,String]
    },
    up:{
      default:()=>{
        return '/Home';
      },
      type:[String]
    }
  },
  data() {
    return {
        
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.box_top {
    display: flex;
    justify-content: space-between;
    padding:.71rem .25rem .21rem 0;
    border-bottom: 1px solid #e8e8e8;
    img{
        width: .48rem;
        height: .48rem;
    }
    p{
        color: #333333;
        font-size: .33rem;
    }
  select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: .92rem;
    font-size: .26rem;
    color: #333333;
    background: url("../../../static/images/home/attebtion/icon-02@2x.png")
      no-repeat scroll right center transparent;
    background-size: 0.48rem 0.48rem;
  }
}
</style>
