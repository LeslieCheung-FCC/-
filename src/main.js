// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {obj} from '../static/js/utils'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import reactCss from './../static/css/css.css'
Vue.use(reactCss)
//vuex
import Vuex from 'vuex'
//axios
import axios from 'axios'
Vue.prototype.$axios = axios
import VueAxios from 'vue-axios'
import './common/font.less'
import '../static/css/reset.css'

// 分享插件
import Share from 'vue-social-share'
Vue.use(Share)
import 'vue-social-share/dist/client.css';

// vant
import 'vant/lib/index.css';
import { Rate } from 'vant';
import { Tab, Tabs } from 'vant';
import { Field } from 'vant';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
Vue.use(Rate);
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(Tab).use(Tabs);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Picker)

//下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
import { TreeSelect } from 'vant';
Vue.use(TreeSelect)
//下拉刷新
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
//按钮
import { Button } from 'vant';
Vue.use(Button)
//图片
import { Image } from 'vant';

Vue.use(Image);
//输入框
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
//search
import { Search } from 'vant';
Vue.use(Search);
//导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);
//图标
import { Icon } from 'vant';
Vue.use(Icon);

Vue.config.productionTip = false

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  mounted(){
    obj.setRem();
    window.onresize=obj.setRem;
  },
  beforeCreate(){
    // this.$router.push('/Start');
  }
  
})
