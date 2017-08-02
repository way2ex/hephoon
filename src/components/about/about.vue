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
      <p class="introduction-text">
        和风科技公司是一家主要以平面设计、写真喷绘、展示器材、广告制作为主要业务的大型的户内外广告写真喷绘公司和广告制作公司，自主拥 有31台写真喷绘雕刻设备：户外高精度喷绘机 3 台；户外进口写真机 5 台；户内进口写真机 8 台,雕刻机15。工厂占地面积2000平方米，24小时轮班生产制作，其中喷绘制作量 1500 平方米/天；写真制作量1200平方米/天；可以批量制作写真喷绘产品：包括户外写真、pop海报喷绘、各种规格的展板喷绘制作、高光相纸写真喷绘、背喷 灯片写真喷绘、户外灯片写真喷绘、油画布写真喷绘、背胶写真喷绘、旗帜布写真喷绘（写真布）、无纺布写真喷绘、丝光绢布写真喷绘（银雕布写真）、背胶全透 片写真喷绘、可移性背胶写真喷绘及地板贴喷绘等。为广大客户提供优质的服务和产品。
      </p>
      <strong>日本进口武藤户内外写真机：</strong>
      <img src="/static/img/about/xiezhen.jpg" alt="日本大型写真机">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      pageTitle: '关于我们'
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
    padding: 0 10px;
    strong {
      display: block;
      margin: 0 30px;
      color: #ff6c60;
    }
    img {
      margin: 0 30px;
    }
  }
  .introduction-text {
    margin: 20px 30px;
    text-indent: 34px;
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
      padding: 0 10px;
      text-align: center;
      strong {
        display: block;
        margin: 0 30px;
        color: #ff6c60;
        text-align: left;
      }
      img {
        margin: 0 auto;
        width: calc(90%);
      }
    }
  }
</style>


