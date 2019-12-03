<template>
    <div>
        <Tra_re_details v-for="(val,ind) in message" :key="ind" :list='val'></Tra_re_details>
    </div>
</template>

<script>
import Tra_re_details from './tra_re_details';
export default {
    
    props: {

    },
    data() {
        return {
            message:[]
        };
    },
    methods: {
        get_msg(){
            this.axios.get('/api/findAll').then((data)=>{
                this.message=data.data;
                console.log(this.message)
            })
        }
    },
    components: {
        Tra_re_details
    },
    mounted(){
        this.get_msg();
    }
};
</script>

<style scoped lang="less">

</style>
