<template>
    <ul class="recommend_box">
        <li class="m" v-for="(val,ind) in mee" :key="ind" v-show="ind<num">
            <router-link :to='"/Details/"+val.cid'>
                <img :src="val.cimg" alt="">
                <div>
                    <img :src="val.tp" alt="" v-if="val.zhoubian">
                    <span>{{val.zhoubian}}</span>
                    <p>{{val.ctitle}}</p>
                    <div>
                        <span><span style="color:rgb(235, 101, 25);">{{val.cprice}}</span >起/人</span>
                        <span>{{val.num}}+人想去</span>
                    </div>
                </div>
            </router-link>                
        </li>
    </ul>
    
</template>

<script>
export default {
    props: {
        mess:{
            default:'/api/findCity',
            type:String
        }
    },
    data() {
        return {
            count:0,
            messs:[],
            data:6
        };
    },
    methods: {
        get_msg(){
            this.axios.get(this.mess).then((data)=>{
                console.log(data);
                this.messs=data.data;
            })
        }
    },
    components: {

    },
    created(){
        
        this.get_msg();
        
    },
    mounted(){
        
        setTimeout(()=>{
            for(let i=0 ;i<document.getElementsByClassName('m').length;i++){
            if(i%2!=0){
                document.getElementsByClassName('m')[i].style.marginTop = -1.5*this.count+"rem";
                this.count++;
            }
        }
        },500)
    },
    computed:{
        mee(){
            console.log(this.$store.state.place_list.length);
            if(this.$store.state.place_list.length!=0){
                console.log(111);
                return this.$store.state.place_list;
            }else{
                console.log(222);
                return this.messs;
            }
        },
        num(){
            if(this.$store.state.home_more==6){
                return this.data;
            }else{
                return this.$store.state.home_more
            }
        }
    }
};
</script>

<style scoped lang="less">
.recommend_box{
    margin:.26rem .30rem 0 .32rem;
    display: flex;
    flex-wrap: wrap;
    li{
        // float: left;
        box-sizing: border-box;
        border: 1px solid #eee;
        width: 3.30rem;
        margin-bottom: .24rem;
        border-radius: .12rem;
        overflow: hidden;
        height: 5.718rem;
        a{
            display: block;
            font-size:.26rem;
            color: #333333;
            div{
                margin-left:0.08rem;
                p{
                    font-weight:600;
                    margin-bottom: .26rem;
                }
                div{
                    display: flex;
                    justify-content: space-between;
                    font-size: .20rem;
                    span{
                        margin: 0;
                        color: #999999;
                    }
                    span:nth-of-type(2){
                        margin-right:.11rem;
                    }
                    margin-bottom: .31rem;
                    margin-left: .08rem;
                }
            }
        }
    }

    li:nth-of-type(even){
        height: 4.18rem;
        // position: relative;
        // margin-top: -1.5rem;
        &>a>img{
            width:100%;
            height: 2.4rem;
            margin-bottom: .14rem;
        }

    }
    li:nth-of-type(odd){
        // height: 4.74rem;
        margin-right: .26rem;
        &>a>img{
            width:100%;
            height: 2.76rem;
        }
        a{
            div{
                img{
                    width: .48rem;
                    height: .48rem;
                    margin:.12rem 0.02 .09rem ;
                }
                &>span{
                    display: inline-block;
                    margin:.18rem 0 .15rem 0;
                    height:.48rem;
                    line-height: .52rem;
                    color:rgb(235, 101, 25);
                    font-size: .20rem;
                }
                p{
                    font-weight: 600;
                    font-size:.26rem;
                    color:#333333;
                    margin-left: 0.08rem;
                    margin-bottom: .26rem;
                }
                
            }
        }
    }
}
</style>
