<template>
  <div>
    <img src="../assets/logo2@2x.png" class="logo" alt="">
    <img src="../assets/more@2x.png" class="nav" alt="" @touchend.prevent="click()">
    <div class="navbar" v-if="navVisible">
      <router-link to="/"><p :class="path === '/'?'nav-active':''">首页</p></router-link>
      <div class="line"></div>
      <router-link to="/us"><p :class="path === '/us'?'nav-active':''">关于我们</p></router-link>
      <div class="line"></div>
      <router-link to="/product"><p :class="path === '/product'?'nav-active':''">产品中心</p></router-link>
      <div class="line"></div>
      <router-link to="/contact"><p :class="path === '/contact'?'nav-active':''">联系我们</p></router-link>
    </div>

    <div class="nut" >
      <img src="../assets/bj@2x.png" alt="">
    </div>
  </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
}
.nav-active{
  color: #F4523D !important
}
</style>
<style scoped>
.nut img{
  width: 750px;
  height: 280px;
}
.navbar .line{
  width:175px;
  height:2px;
  background:rgba(229,229,229,1);
  margin-left: 12px;
}
.nav{
  width: 34px;
  height: 32px;
  position: absolute;
  right: 40px;
  top: 30px;
  z-index: 9999;
}
.navbar{
  width:200px;
  height:280px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 19px 1px rgba(80,80,80,0.3);
  border-radius:5px;
  position: absolute;
  right: 20px;
  top: 74px;
  z-index: 9999;
}
.navbar p{
  font-size:24px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:48px;
  margin: 10px 0 9px 24px
}
.logo{
  width: 245px;
  height: 45px;
  position: absolute;
  left: 40px;
  top: 28px;
  z-index: 9999;
}
.nut-swiper-slide{
  position: relative;
}
</style>
<script>
export default {
  data () {
    return {
      path: '',
      navVisible: false
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
  components: {
  },
  mounted () {
    this.route()
  }
}
</script>
