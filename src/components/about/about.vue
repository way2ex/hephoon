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
        &nbsp;远华盛科技有限公司，是一家专业从事喷绘打印、和激光镭雕加工行业，公司为了生产出高品质的产品，能达到中高端客户产品出口的要求，配置了最新最先进的设备进行加工。 
      </p>
      <h3 class="introduction-text">UV打印介绍</h3>
      <p class="introduction-text">
      采用进口环保U上墨水，配置了进口UV平板喷绘机进行加工生产，环保墨水更是达到了欧美的耐晒等级，我司可对压克力板、塑胶板、铝板、陶瓷板、发泡板、玻璃、瓷砖、木板等多种材料进行喷绘加工，所喷产品即喷即干，有高硬度、附着力强、光泽好、色彩鲜艳、耐水、耐溶剂、耐擦洗等特点，解𥇦度更是达到了1440dpi,保证了影像的高画质要求，户外耐晒最低也可达到三年之久，我司可对客户产品进行个性化的喷绘加工，喷绘速度快，可取代了传统的丝网印刷工艺，避免了传统丝印重复套印，色彩加工复杂，画面效果单调等众多问题，现我司加工服务行业有：手机壳、移动电源、工艺品、文具、水晶、油画、金属板、铝扣板、K丅板、家具行业、家电行业、玻璃行业、室内装饰行业、广告行业、影楼、瓷砖行业、亚克力行业等任意软硬平板材料的彩印喷印加工，我司可喷印的材料厚度最高可达到100mm，并可利用我司的技术对喷印材质进行立体喷印加工，便喷印的效果更加生动。公司本着求真务实的工作态度，希望能给客户制造出更完美的产品，使客户的产品立于行业领先水平，也希望能得到客户的支持，和客户共同成长，共同走向更美好的明天！
      </p>
      <h3 class="introduction-text"> 激光镭雕</h3>
      <p class="introduction-text">
      专业从事五金塑胶表面激光打标，多年的加工经验，拥有几台先进设备加工！加工范围：金属壳，手机壳，铝壳、铝合金，五金配件、刀具厨具、眼镜钟表、计算机键盘鼠标、包装瓶罐、工艺礼品、PVC管、适配器、移动电源、电子元件、塑胶按扭、汽车自行车配件、首饰饰品等等！出货快、质量好、价格低，免费打样！客户对我的满意，就是我的成功！
      </p>
    </div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'about',
  data () {
    return {
      pageTitle: '关于我们',
      baseUrl: config.baseUrl
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
  h3.introduction-text {
    margin: 20px 30px 0px 30px;
  }
  .introduction-text {
    margin: 10px 30px 20px 30px;
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


