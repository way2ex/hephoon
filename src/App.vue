<template>
  <div id="app">
    <div class="header-wrapper">
      <header class="top-header">
      <h1 class="header-logo">
        <img src="./assets/header-logo.jpg" alt="和风科技">
        <i class="icon-reorder" @click="isNavShow = !isNavShow"></i>
      </h1>
      <el-menu :default-active="activeIndex" class="top-nav" :class="{hidden: !isNavShow}" @select="handleSelect">
        <el-menu-item index="1" class="top-nav-item">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-menu-item class="top-nav-item" index="2">
          <router-link to="/uv">UV打印产品</router-link>
        </el-menu-item>
        <el-menu-item class="top-nav-item" index="3">
          <router-link to="/jiguang">激光镭雕</router-link>
        </el-menu-item>
        <el-menu-item class="top-nav-item" index="4">
          <router-link to="/about">关于我们</router-link>    
        </el-menu-item>
        <el-menu-item class="top-nav-item" index="5">
          <router-link to="/contact">联系我们</router-link>    
        </el-menu-item>
      </el-menu>
    </header>
    </div>
    <div class="carousel">
      <el-carousel class="carousel-wrapper">
        <el-carousel-item class="carousel-wrapper">
          <img src="./assets/slide1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item class="carousel-wrapper">
          <img src="./assets/slide2.jpg" alt="" class="img2">
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <div class="text-center">
        <ul class="footer-nav list-unstyled">
          <li><router-link to="/">网站首页</router-link></li>&nbsp;|
          <li><router-link to="/uv">UV打印产品</router-link></li>&nbsp;|
          <li><router-link to="/jiguang">激光镭雕</router-link></li>&nbsp;|
          <li><router-link to="/about">关于我们</router-link></li>&nbsp;|
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </div>
      <div class="company-information text-center">
        <div class="base-information">
          <div class="company-name">
            <span>和风科技</span>
          </div>
      <div class="telephone-number">
            <span>手机:</span><span> 15919747583</span>
          </div>
      <div class="qq-number">
            <span>QQ:</span><span> 526093052</span>
          </div>
      <div class="weichat-number">
            <span>微信号:</span><span> zou930823</span>
      </div>
      </div>
      <div class="weichat-code">
          <span>扫描二维码关注我</span><br>
          <img src="./assets/scancode.jpg" alt="微信号">
        </div>
      <div class="address">
          <address>
            广东省深圳市龙岗区横岗街道安良社区福坑二路46号4楼；
          </address>
        </div>
      </div>

      <div class="cppyright text-center">
        <span>Copyright(C)www.hephoon.com All Rights Reserved</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '2',
      currentPageTitle: '首页',
      isNavShow: false
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scope>
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

$smLogoHeight: 70px;
$lgLogoHeight: 100px;
// base theme color
$themeColor: #ff6c60;
@media (max-width: 767px) {
  .header-wrapper {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: #fff;
  }
  .top-header {
    z-index: 2;
    h1 {
      position: relative;
      height: $smLogoHeight;
      text-align: center;
      background: #fff;

      img {
        display: inline-block;
        height: $smLogoHeight;
      }
      i.icon-reorder {
        position: absolute;
        top: 45%;
        right: 10%;
        font-size: 18px;
        font-weight: 800; 
        color: $themeColor;
        cursor: pointer;
      }
    }
    .top-nav {
      height: 280px;
      overflow: hidden;
      transition: height 0.3s linear;
      .top-nav-item {
        width: 100%;
        a {
          color: #555;
        }
      }
      .is-active {
        background-color: $themeColor;
      }
    }
    .hidden {
      height: 0;
    }
  }
  .carousel {
    display: none;
  }
  .footer {
    width: 100%;
    background: #161616;
    color: #bebebe !important;
    text-align: center;
    overflow: hidden;
    .company-information div {
      margin-bottom: 5px;
    }
    .footer-nav li {
      display: inline-block;
      padding: 10px 0;
      a {
        color: #bebebe !important; 
      }
    }
    .weichat-code img {
      width: 80%;
    }
    .address {
      width: 80%;
      display: inline-block;
    }
    .cppyright {
      margin-bottom: 20px;
    }
  }
}

@media (min-width: 768px) {
  .header-wrapper {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #fff;
  }
  .top-header {
    position: sticky;
    height: $lgLogoHeight;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    h1 {
      position: relative;
      display: inline-block;
      height: $lgLogoHeight;
      background: #fff;
      img {
        display: inline-block;
        height: $lgLogoHeight;
      }
      i.icon-reorder {
        display: none;
      }
    }
    .top-nav {
      width: auto;
      height: 50px;
      float: right;
      font-size: 0;
      margin-top: 45px;
      overflow: hidden;
      background: #fff;
      .top-nav-item {
        display: inline-block;
        line-height: 50px;
        height: 50px;
        font-size: 14px;
        padding: 0 10px;
        border-radius: 5px;
        a {
          color: #555;
        }
      }
      .is-active {
        background-color: $themeColor;
        a {

        }
      }
    }
  }
  .carousel {
    margin: 20px 0px;
    height: 350px;
    .carousel-wrapper {
      height: 350px;
    }
    img {
      margin: auto;
      height: 350px;
      width: 100%;
      background-size: 100% 50%;
    }
  }

  .footer {
  height: 250px;
  width: 100%;
  background: #161616;
  color: #bebebe !important;
  text-align: center;
  overflow: hidden; }
  .footer .footer-nav {
    margin: 10px 0 0px 0 !important; }
  .footer .footer-nav li {
    margin: 10px 0px; 
    display: inline-block;}
    .footer .footer-nav li a {
      color: #bebebe !important; }

  .company-information {
    font-size: 16px; }
    .company-information .base-information {
      display: inline-block;
      text-align: left;
      margin-right: 100px;
      margin-top: 20px;
      font-size: 18px; }
      .company-information .base-information .company-name {
        font-size: 22px;
        font-weight: 800;
        font-family: "\5B8B\4F53", "PingFang Regular", Helvetica; }
      .company-information .base-information .telephone-number span:first-child, .company-information .base-information .qq-number span:first-child, .company-information .base-information .weichat-number span:first-child {
        display: inline-block;
        width: 60px;
        text-align: left; }
    .company-information .weichat-code {
      display: inline-block;
      vertical-align: top; }
      .company-information .weichat-code img {
        height: 100px;
        width: 100px; }
    .company-information .address address {
      margin: 8px 0; }

}
</style>
