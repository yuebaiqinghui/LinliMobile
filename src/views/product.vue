<template>
  <div style="position: relative">
    <Header />
    <div class="product">
      <h2>产品中心</h2>
      <p class="art">邻里共享APP是以“互联网+社区”为理念，智能门禁 + 监控系统 + 物业服务 + 互动共享 + APP社区平台；通过信息化技术整合社会力量、组织公共资源，为广大社区居⺠提供在线开门、社区物业、居家购物、社区聊天等便⺠的社区生活服务平台，致力于打造高效、舒适、安全的社区生活体验。</p>
      <div class="show">
        <div>
          <img src="../assets/menjin@2x.png" alt="">
          <p>智能门禁</p>
        </div>
        <div>
          <img src="../assets/jiankong@2x.png" alt="">
          <p>监控系统</p>
        </div>
        <div>
          <img src="../assets/wuye@2x.png" alt="">
          <p>物业服务</p>
        </div>
      </div>
      <div class="show">
        <div>
          <img src="../assets/appshequ@2x.png" alt="">
          <p>APP社区平台</p>
        </div>
        <div>
          <img src="../assets/shopping@2x.png" alt="">
          <p>手机购物</p>
        </div>
        <div>
          <img src="../assets/shequliaotian@2x.png" alt="">
          <p>社区聊天</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.product{
  margin-left: 40px
}
.product h2{
  font-size:40px;
  font-family:PingFang SC;
  font-weight:800;
  color:rgba(0,0,0,1);
  line-height:24px;
  border-left: 10px solid #F4523D;
  text-indent: 24px;
  margin-top: 69px
}
.product .show{
  display: flex;
  justify-content: center;
  margin-left: -40px;
  /* margin-bottom: 100px */
}
.product .art{
  width:670px;
  /* height:411px; */
  font-size:28px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:48px;
  margin-top: 43px;
  margin-bottom: 69px
}
.product p{
  font-size:26px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:24px;
}
.product img{
  width: 305px;
  height: 10px;
  margin-bottom: 44px
}
.product .show div{
    text-align: center;
    margin-right: 34px;
}
.product .show div:nth-child(3){
    margin-right: 0
}
.product .show div img{
  width: 201px;
  height: 200px;
  margin-bottom: 21px;
}
.product .show div p{
  margin: 0 0 44px 0
}
footer{
  margin-top: 166px
}
/* footer{
  position: relative;
  left: 0; */
  /* bottom: -80px
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
