<template>
  <div class="main-wrapper">
    <div class="title-wrapper">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/uv' }">UV打印产品</el-breadcrumb-item>
        <el-breadcrumb-item >{{className}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <div class="figure-wrap">
        <figure>
          <img :src="imgUrl" alt="className">
        </figure>
      </div>
      <div class="desc-wrap">
        <h3>{{className}}</h3>
        <div class="desc-detail">
          <p>{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'uv-detail',
  data () {
    return {
      classMap: ['亚克力UV打印', 'PS板UV打印', '雪弗板UV打印', '玻璃UV打印', '石材UV打印', '金属UV打印', '皮革UV打印'],
      className: '',
      imgUrl: '',
      description: ''
    }
  },
  created () {
    var _this = this
    this.className = this.classMap[this.$route.params.classtype]
    this.imgUrl = decodeURIComponent(this.$route.params.url)
    $.ajax({
      url: '/static/data/UVDetail/description.json',
      type: 'get',
      dataType: 'json',
      success: function (data) {
        _this.description = data.data[_this.$route.params.classtype].description
      }
    })
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
  .figure-wrap {
    float: left;
    max-width: 500px;
    width: 30%;
    padding: 40px 0;
    margin-right: 50px;
    text-align: center;
    img {
      // margin: 
    }
  }
  .desc-wrap {
    float: left;
    width: 50%;
    padding: 20px 20px;
    margin: 20px 20px;
    border-left: 1px solid #ddd;
    h3 {
      margin: 10px 0;
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
    .figure-wrap {
      float: none;
      width: 80%;
      margin: 20px auto 0 auto;
      padding: 0;
    }
    .desc-wrap {
      float: none;
      width: 90%;
      margin: 0px auto;
      padding: 10px auto;
    }
  }
</style>


