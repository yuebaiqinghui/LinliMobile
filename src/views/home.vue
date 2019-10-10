<template>
  <div class="layout">
    <!-- 轮播图 -->
    <nut-swiper
    direction="horizontal"
    ref="demo3"
    :loop="true"
  >
      <div class="nut-swiper-slide gray" >
        <img src="../assets/picture_01@2x.png" alt="">
      </div>
      <div class="nut-swiper-slide gray" >
        <img src="../assets/picture_02@2x.png" alt="">
      </div>
  </nut-swiper>
    <!-- 功能标签 -->

    <!-- 关于我们 -->

    <!-- 产品中心 -->

    <!-- 联系我们 -->

    <!-- 底部 -->
  </div>
</template>
<style>
.nut-swiper{
  height: 750px;
}
.nut-swiper img{
  width: 750px;
  height: 465px;
}
</style>
<script>
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        mail: '',
        captcha: ''
      }
    }
  },
  components: {
  }
}
</script>
