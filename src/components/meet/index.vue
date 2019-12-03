<template>
<!-- 搭讪模块根组件 -->
    <div>

    
 <transition>
    <router-view/>
  </transition>

<Foot></Foot>
    </div>
</template>

<script>

import Foot from '../public/foot'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

        Foot
    },
};
</script>

<style scoped lang="less">

</style>
