<template>
  <div class="main-wrapper">
    <div class="title-wrapper">
      <h2 class="nav-title">{{pageTitle}}</h2>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/about' }">{{pageTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <section><h3>和风科技</h3></section>
      <section><span>地址：</span><span>广东省深圳市龙岗区横岗街道安良社区福坑二路46号4楼</span></section>
      <section><span>电话：</span><span> 15919747583</span></section>
      <section><span>QQ：</span><span> 526093052</span></section>
      <section><span>微信：</span><span> zou930823</span></section>
      <section>
        加我微信请扫描二维码:</br></br>
        <img src="/static/img/scancode.677b8fb.jpg" alt="和风科技-微信">
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      pageTitle: '联系我们'
    }
  },
  created () {
  },
  methods: {},
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  .main-wrapper {
    position: relative;
  }
  .title-wrapper {
    position: relative;
    height: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
    .nav-title {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      margin-left: 60px;
      font-size: 18px;
      color: #555;
      font-weight: normal;
    }
    .breadcrumb {
      float: right;
      vertical-align: bottom;
      margin: 0 50px 0 0;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      color: #555;
    }
    .menu-toggle {
      display: none;
    }
  }
  .main-content {
    padding: 30px 40px;
    
    section {
      margin: 5px 0;
      &>img {
        width: 300px;
      }
    }
  }
  @media (max-width: 767px) {
    .title-wrapper {
      position: sticky;
      display: none;
      top: 69px;
      z-index: 5;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      .breadcrumb {
        display: none;
      }
      .menu-toggle {
        position: absolute;
        display: inline-block;
        right: 20px;
        i {
          padding: 7px;
          background-color: #eee;
          border-radius: 50%;
          // font-size: 18px;
          font-weight: 800;
          color: #666;
        }
      }
    }
    .main-content {

    }
  }
</style>


