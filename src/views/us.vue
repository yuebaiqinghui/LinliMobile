<template>
  <div style="position: relative">
    <Header />
    <div class="about-content">
      <h2>关于我们</h2>
      <p>广州佳邻网络科技有限公司成立于2017年12月，围绕科技引领新生活的理念，以邻里共享APP为核心产品，以线上+线下的社区模式为依托，整合社会力量、组织公共资源，为广大居民提供一个集“智能门禁、社区物业、居家购物、社区聊天“等于一体的便民的社区生活服务平台，努力为居民提供一个安全、舒适、便利的现代化、智慧化生活环境，构建共建共治共享的社区治理格局，创建文明广州。</p>
      <div class="imgshow">
        <img src="../assets/picture_1@2x.png" alt="">
        <img src="../assets/picture_2@2x.png" alt="">
      </div>
      <div class="imgshow1">
        <img src="../assets/picture_3@2x.png" alt="">
        <img src="../assets/picture_4@2x.png" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scope>
.about-content{
  margin-left: 40px
}
.about-content h2{
  font-size:40px;
  font-family:PingFang SC;
  font-weight:800;
  color:rgba(0,0,0,1);
  line-height:24px;
  border-left: 10px solid #F4523D;
  text-indent: 24px;
  margin-top: 69px
}
.about-content p{
  width:670px;
  /* height:411px; */
  font-size:28px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:48px;
  margin-top: 43px
}
.imgshow{
  margin-top: 98px;
}
.imgshow1{
  margin-top: 18px;
  margin-bottom: 240px;
}
.imgshow img,.imgshow1 img{
  width: 326px;
  height: 176px;
}
.imgshow img:nth-child(1),
.imgshow1 img:nth-child(1){
  margin-right: 18px
}
/* footer{
  position: fixed;
  left: 0;
  bottom: 0
} */
</style>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
