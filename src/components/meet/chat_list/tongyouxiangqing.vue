<template>
  <div style="background:#f1f1f1">
    <Box :text="text" style="background:#fff"></Box>

    <van-tabs v-model="active" swipeable>
      <van-tab title="看日出" disabled>1</van-tab>
      <van-tab title="逛夜市" disabled>2</van-tab>
      <van-tab title="泡泡吧" disabled>3</van-tab>
      <van-tab title="走景点" name="a">
        <div class="one">
          <van-field
            v-model="message"
            rows="1"
            autosize
            label="主题"
            type="textarea"
            placeholder="快给活动起个名字吧"
            right-icon="arrow"
            input-align="right"
          />

          <!-- 弹出层 时间-->
          <van-field
            v-model="time"
            rows="1"
            autosize
            label="时间"
            type="textarea"
            placeholder="请选择时间"
            right-icon="arrow"
            input-align="right"
            @click="showPopup"
          />
          <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
              @confirm="confirm"
            />
          </van-popup>

          <!-- 地点 -->

          <van-field
            readonly
            clickable
            label="地点"
            :value="value"
            right-icon="arrow"
            input-align="right"
            placeholder="你附近有三个热门景点哦"
            @click="showPicker = true"
          />

          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>

        <div class="two">
          <!-- 对象 -->
          <van-field
            readonly
            clickable
            label="对象"
            :value="younger"
            right-icon="arrow"
            input-align="right"
            placeholder="限妹子"
            @click="showPicke = true"
          />

          <van-popup v-model="showPicke" position="bottom">
            <van-picker show-toolbar :columns="figure" @cancel="showPicke = false" @confirm="fa" />
          </van-popup>

          <!-- 费用 -->
          <van-field
            readonly
            clickable
            label="费用"
            :value="costs"
            right-icon="arrow"
            input-align="right"
            placeholder="你买单"
            @click="showPick = true"
          />

          <van-popup v-model="showPick" position="bottom">
            <van-picker show-toolbar :columns="cost" @cancel="showPick = false" @confirm="fb" />
          </van-popup>

          <!-- 说明 -->
          <van-field
            v-model="explain"
            rows="1"
            autosize
            label="说明"
            type="textarea"
            placeholder="请填写"
            right-icon="arrow"
            input-align="right"
          />
          <button @click="fc">发起</button>
        </div>
      </van-tab>
      <van-tab title="看电影" disabled>5</van-tab>
    </van-tabs>
    <div style="height:8rem"></div>
  </div>
</template>

<script>
import Box from "../../home/box_top";
export default {
  props: [],
  data() {
    return {
      text: "发起同游",
      show: false,
      active: "a",
      message: "",
      // 时间
      time: "",
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      currentDate: new Date(),
      // 地点
      value: "",
      showPicker: false,
      columns: ["少林寺", "界梯田", "二七塔", "电影小镇", "方特"],

      // 对象
      younger: "",
      showPicke: false,
      figure: ["妹子", "帅哥"],
      // 费用
      costs: "",
      showPick: false,
      cost: ["你买单", "我买单"],
      // 说明
      explain: ""
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },

    confirm(value) {
      this.show = false;
      var date = value;
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + seperator1;
      var strDate = date.getDate() - 1;
      var year = date.getFullYear() - 1;
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.currentdate = year + seperator1 + month + strDate;
      this.time = this.currentdate;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    // 对象
    fa(value) {
      this.younger = value;
      this.showPicke = false;
    },
    // 费用
    fb(value) {
      this.costs = value;
      this.showPick = false;
    },

    fc() {
      console.log(this.$store.state.userId);
      this.axios.get('/api/addTour',{
        params:{
          theme:this.message,
           time:this.time,
          site:this.value,
          object:this.younger,
          cost:this.costs,
          explain:this.explain,
          uid:this.$store.state.userId
        
      }}).then(response => {
        
      });
      console.log(111);

      this.$router.push('/Meet/chat/nearby');
      // console.log(this.younger);
    }

  },
  components: {
    Box
  }
};
</script>

<style scoped lang="less">
.van-tabs__content {
  position: relative;
}
.van-tab__pane {
  border-bottom: 1px #e8e8e8 solid;
}
.van-icon {
  z-index: 1;
  position: absolute;
  right: 1rem;
  bottom: 0.3rem;
}

button {
  width: 4rem;
  height: 0.8rem;
  border: none;
  background: #fd6519;
  color: white;
  border-radius: 0.4rem;
  font-size: 0.35rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2.5rem;
}
</style>
