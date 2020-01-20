<template>
  <div class="layout">
    <!-- 轮播图 -->
    <img src="../assets/logo2@2x.png" class="logo" alt />
    <img src="../assets/more@2x.png" class="nav" alt @touchend.prevent="click()" />
    <div class="navbar" v-if="navVisible">
      <router-link to="/">
        <p :class="path === '/'?'nav-active':''">首页</p>
      </router-link>
      <div class="line"></div>
      <router-link to="/us">
        <p :class="path === '/us'?'nav-active':''">关于我们</p>
      </router-link>
      <div class="line"></div>
      <router-link to="/product">
        <p :class="path === '/product'?'nav-active':''">产品中心</p>
      </router-link>
      <div class="line"></div>
      <router-link to="/contact">
        <p :class="path === '/contact'?'nav-active':''">联系我们</p>
      </router-link>
    </div>
    <nut-swiper direction="horizontal" ref="demo3" :loop="true" :autoPlay="6000">
      <div class="nut-swiper-slide gray">
        <img src="../assets/picture_01@2x.png" alt />
        <div class="carousel-card">
          <p>专注于智慧社区建设</p>
          <p>INTELLIGENCE COMMUNITY</p>
        </div>
      </div>
      <div class="nut-swiper-slide gray">
        <img src="../assets/picture_02@2x.png" alt />
        <div class="carousel-card">
          <p>信息化科技为您服务</p>
          <p>INFORMATION TECHNOLOGY</p>
        </div>
      </div>
    </nut-swiper>
    <!-- 功能标签 -->
    <div class="tabs">
      <div class="tab">
        <img src="../assets/maintenance@2x.png" alt />
        <p class="tab-title">e维修</p>
      </div>
      <div class="tab">
        <img src="../assets/patrol@2x.png" alt />
        <p class="tab-title">e巡查</p>
      </div>
      <div class="tab">
        <img src="../assets/door@2x.png" alt />
        <p class="tab-title">手机开门</p>
      </div>
      <div class="tab">
        <img src="../assets/Unmanned@2x.png" alt />
        <p class="tab-title">无人机</p>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about-content">
      <h2>关于我们</h2>
      <p>“邻里共享e社区”是一种创新型的社会治理项目。它借助“互联网+物业”的模式，打造可持续的共建共治共享社会治理新格局。简单地说，就是政府、居民、企业、物管多方利用“邻里共享”这一平台，参与社区治理，共同促进社区和谐氛围的形成。</p>
      <p>人民街党工委书记李剑怆说，为解决人员密集、房屋老旧、治安形势严峻等难题，街道也曾经引入传统物管服务，但由于无法实现物管公司自身“造血”功能，效果不理想。</p>
      <p>为了破解濠畔小区治理难题，人民街党工委、办事处深入调查研究，多方探索，决定引入社会资源，建立“邻里共享e社区”。</p>
      <img src="../assets/photo@2x.png" alt="">
    </div>
    <!-- 产品中心 -->
    <div class="product">
      <h2>产品中心</h2>
      <p>为客户创造价值的过程中，不断提升企业自身的价值</p>
      <img src="../assets/separated@2x.png" alt="">
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
    <!-- 联系我们 -->
    <div class="contact">
      <h2>联系我们</h2>
      <p>定制新科技，创造新社区</p>
      <img src="../assets/separated@2x.png" alt="">
        <div class="information">
          <div class="info"><div class="info-tab">地址:</div><div class="info-content">广东省广州市越秀区人民街大新路102号</div></div>
          <div class="info"><div class="info-tab">电话:</div><div class="info-content">020-83568099</div></div>
          <div class="info"><div class="info-tab">邮箱:</div><div class="info-content">kit@jlkjllgx.com</div></div>
        </div>
        <div class="form">
          <input type="text" placeholder="标题">
          <textarea placeholder="内容"></textarea>
          <input type="email" placeholder="电子邮箱">
          <div class="capt">
            <input type="text" placeholder="验证码">
            <img src="../assets/GenerateLeavewordCaptcha.jpg" alt="" class="captcha">
          </div>
          <button class="submit">提交</button>
        </div>
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.nut-swiper {
  height: 465px;
}
.nut-swiper img {
  width: 750px;
  height: 465px;
}
.nav-active {
  color: #f4523d !important;
}
.nut-textinput input{
  width:670px;
  height:80px;
  border:2px solid rgba(229,229,229,1);
}
</style>
<style scoped>
.navbar .line {
  width: 175px;
  height: 2px;
  background: rgba(229, 229, 229, 1);
  margin-left: 12px;
}
.nav {
  width: 34px;
  height: 32px;
  position: absolute;
  right: 40px;
  top: 30px;
  z-index: 9999;
}
.navbar {
  width: 200px;
  height: 280px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 19px 1px rgba(80, 80, 80, 0.3);
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: 74px;
  z-index: 9999;
}
.navbar p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  line-height: 48px;
  margin: 10px 0 9px 24px;
}
.logo {
  width: 245px;
  height: 45px;
  position: absolute;
  left: 40px;
  top: 28px;
  z-index: 9999;
}
.nut-swiper-slide {
  position: relative;
}
.carousel-card {
  width: 500px;
  height: 156px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.carousel-card p:nth-child(1) {
  font-size: 42px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 30px;
}
.carousel-card p:nth-child(2) {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 69px;
  border-bottom: 1px solid #e5e5e5;
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 90px;
  /* padding-bottom: 66px */
}
.tab:nth-child(4) {
  margin-right: 0;
}
.tab img {
  width: 100px;
  height: 100px;
}
.tab .tab-title {
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  margin-top: 28px;
  margin-bottom: 70px;
}

.about-content{
  margin-left: 50px
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
  width:668px;
  /* height:557px; */
  font-size:28px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:48px;
}
.about-content p:nth-child(2){
  margin-top: 43px;
}
.about-content p:nth-child(4){
  margin-bottom: 43px
}
.about-content img{
  width: 670px;
  height: 444px;
}

.product,.contact{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 69px;
}
/* .contact{
    margin-top: 117px;
} */
.product h2,.contact h2{
  font-size:40px;
  font-family:PingFang SC;
  font-weight:800;
  color:rgba(0,0,0,1);
  line-height:24px;
}
.product .show{
  display: flex;
  justify-content: center;
}
.product p,.contact p{
  font-size:14px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:24px;
  margin: 24px 0
}
.product img,
.contact img{
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

.information{
  width: 670px;
  /* height: 422px; */
  /* margin-right: 9px */
}
.information .info{
  background: transparent;
  font-size:16px;
  font-family:PingFang SC;
  font-weight:bold;
  color:#020000;
  display: flex;
}
.information .info:nth-child(2){
  margin-top: 44px
}
.information .info:nth-child(3){
  margin-top: 42px
}
.information div{
    background: transparent;
}
.info-tab{
    color: #F4523D
}
.info-content{
    text-indent: 10px
}

.form{
  margin-top: 44px;
  position: relative;
}
.form input{
  width:670px;
  height:80px;
  border:2px solid rgba(229,229,229,1);
  text-indent: 22px;
  margin-left: 40px;
  margin-bottom: 24px;
}
.form textarea{
  width:670px;
  height:213px;
  border:2px solid rgba(229,229,229,1);
  text-indent: 22px;
  margin-left: 40px;
  margin-bottom: 24px;
  padding-top: 27px
}
.capt{
  display: flex;
  width:670px;
  height:80px;
  border:2px solid rgba(229,229,229,1);
  margin-left: 40px;
  margin-bottom: 24px;
}
.capt input{
  width:516px;
  border: none;
  margin: 0
}
.captcha{
  width: 154px !important;
  height: 66px !important;
  margin-top: 6px;
  margin-right: 6px
}
.submit{
  width:160px;
  height:70px;
  background:rgba(244,82,61,1);
  border-radius:2px;
  border: 0px;
  padding: 0;
  font-size:28px;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(255,255,255,1);
  margin-left: 550px;
  margin-bottom: 71px;
}
</style>
<script>
import Footer from '../components/footer'
export default {
  data () {
    return {
      path: '',
      navVisible: false,
      form: {
        title: '',
        content: '',
        mail: '',
        captcha: ''
      }
    }
  },
  methods: {
    click () {
      this.navVisible = !this.navVisible
    },
    route () {
      this.path = this.$route.path
      console.log(this.path)
    }
  },
  components: {Footer},
  mounted () {
    this.route()
  }
}
</script>
