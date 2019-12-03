<template>
  <div class="tongzhi">
    <Heads>
      <p slot="a">系统通知</p>
    </Heads>

    <list_a>
      <ul slot="b">
        <li>
          <div class="left">
            <img src="../../../../static/images/meet/system/icon-01@2x.png" alt />
          </div>
          <div class="right">
            <p>
              <span></span>推送
            </p>
            <p>北京除了故宫，这里也值得一游</p>
            <p>2019-05-08</p>
          </div>
        </li>
      </ul>
    </list_a>

    <list_a>
      <ul slot="b">
        <li>
          <div class="left">
            <img src="../../../../static/images/meet/system/icon-02@2x.png" alt />
          </div>
          <div class="right">
            <p>
              <span></span>活动与邀约
            </p>
            <p>你有一本2020年的日历待领取</p>
            <p>2019-05-08</p>
          </div>
        </li>
      </ul>
    </list_a>

    <list_a>
      <ul slot="b">
        <li>
          <div class="left">
            <img src="../../../../static/images/meet/system/icon-03@2x.png" alt />
          </div>
          <div class="right" style="border:none">
            <p>
              <span></span>通知
            </p>
            <p>系统通知：亲爱的用户，恭喜你升到2级，这是你...</p>
            <p>2019-05-08</p>
          </div>
        </li>
      </ul>
    </list_a>
  </div>
</template>

<script>
import Heads from "./heads";
import List_a from "./list_a";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Heads,
    List_a
  }
};
</script>

<style scoped lang="less">
</style>
