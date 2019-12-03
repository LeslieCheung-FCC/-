<template>
<!-- 景区详情根组件 -->
    <div>  
        <Introd :id="$route.params.id"></Introd>
    <JingDian></JingDian>
  
    </div>
</template>

<script>
import JingDian from './jingdian'
import Introd from './introduction'
export default {
    props: {

    },
    data() {
        return {
            // index:null
        };
    },
    methods: {
       

    },
    components: {
        JingDian,
        Introd
    }
};
</script>

<style scoped lang="less">

</style>
