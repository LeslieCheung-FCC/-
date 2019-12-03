<template>
<!-- 列表组件根组件 -->
    <div class="list">
<Head></Head>

<list_a>
   <ul slot="b" style="border-top:1px #ccc solid">
      <li >
        <div class="left">
          <img src="../../../static/images/meet/list/pic-01@2x.png" alt />
        </div>
        <div class="right">
          <p>
            <span></span>Anny
          </p>
          <p>明天去哪?</p>
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
</list_a>

<list_a>
   <ul slot="b">
      <li>
        <div class="left">
          <img src="../../../static/images/meet/list/pic-02@2x.png" alt />
        </div>
        <div class="right">
          <p>
            <span></span>小明
          </p>
          <p>吃饭了吗?</p>
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
</list_a>

<list_a>
   <ul slot="b">
      <li>
        <div class="left">
          <img src="../../../static/images/meet/list/pic-03@2x.png" alt />
        </div>
        <div class="right">
          <p>
            <span></span>小芳
          </p>
          <p>明天什么地方,你把时间地址发给我把</p>
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
</list_a>

<list_a>
   <ul slot="b">
      <li>
        <div class="left">
          <img src="../../../static/images/meet/list/pic-04@2x.png" alt />
        </div>
        <div class="right" style="border:none">
          <p>
            <span></span>lalalala
          </p>
          <p>[分享】史上最强资源，会让你感兴趣的旅游胜地</p>
          <p>2019-05-08</p>
        </div>
      </li>
    </ul>
</list_a>

<div class="arr"></div>

    </div>
</template>

<script>
import Head from './head'
import List_a from './chat_list/list_a'
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
        Head,
        List_a
    },
};
</script>

<style scoped lang="less">
.list{

    .arr{
        background: #f1f1f1;
        width: 100%;
        height: 8rem;
    }
}

</style>
