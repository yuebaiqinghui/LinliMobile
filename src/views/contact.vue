<template>
  <div>
    <Header />
    <div class="contact">
      <h2>联系我们</h2>
        <div class="information">
          <div class="info"><div class="info-tab">公司:</div><div class="info-content">广州佳邻网络科技有限公司</div></div>
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
        <div id="container"></div>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
#container {
  width:672px;
  height: 384px;
  margin-top: 70px;
  margin-bottom: 70px;
  /* margin-left: -40px; */
}
.contact{
  margin-left: 40px
}
.contact h2{
  font-size:40px;
  font-family:PingFang SC;
  font-weight:800;
  color:rgba(0,0,0,1);
  line-height:24px;
  border-left: 10px solid #F4523D;
  text-indent: 24px;
  margin-top: 69px
}
.contact p{
  font-size:26px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:24px;
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
  margin-top: 43px
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
  margin-left: -40px;
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
  /* margin-bottom: 71px; */
}
</style>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
import AMap from '@/utils/AMap'
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        mail: '',
        captcha: ''
      },
      map: null,
      // 宝箱位置
      lng: 113.261441,
      lat: 23.11656,

      // 新增
      resMap: null
    }
  },
  mounted () {
    this.initAMap()
  },
  methods: {
    async initAMap () {
      try {
        // 修改
        this.resMap = await AMap()
        this.map = new this.resMap.Map('container', {
          resizeEnable: true, // 是否监控地图容器尺寸变化
          zooms: [3, 19], // 设置地图级别范围
          zoom: 19, // 初始化地图层级
          zoomEnable: true, // 是否缩放
          scrollWheel: true, // 是否支持滚轮缩放
          dragEnable: true, // 是否支持鼠标拖拽平移
          jogEnable: true, // 是否支持缓动效果
          buildingAnimation: true, // 模块消失是否有动画效果
          center: [this.lng, this.lat] // 初始化地图中心点
        })
        this.addMarker()
      } catch (err) {
        console.error(err)
      }
    },
    addMarker () {
      this.marker = new this.resMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [this.lng, this.lat],
        title: '邻里共享e社区',
        offset: new this.resMap.Pixel(-13, -30)
      })
      this.map.add(this.marker)
      this.map.setFitView()
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
