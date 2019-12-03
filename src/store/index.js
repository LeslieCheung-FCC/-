import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        storeList:[],
        chooseList:[],
        herList:{},
        zanList:[],
        replyList:[],
        mineList:[],
        place_list:[],
        home_more:6,
        userId:'',
        pic:''
    }
});

export default store;
