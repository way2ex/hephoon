<template>
<div class="main-wrapper">
 <div class="title-wrapper">
    <h2 class="nav-title">{{pageTitle}}</h2>
    <router-view></router-view>
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/uv' }">{{pageTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
    <span class="menu-toggle" @click.stop="menuShow = !menuShow"  ontouchstart="event.stopPropagation();"><i class="icon-reorder"></i> 切换类目</span>
  </div>
  <el-col :span="24" class="main-content">
    <el-col :span="4" :offset="1" class="menu-wrapper">
      <el-menu default-active="0" class="class-menu" theme="light" 
        @select="changeMenu" :class="{closed: !menuShow}" ontouchstart="event.stopPropagation();">
        <el-menu-item index="0" class="menu-item">产品分类</el-menu-item>
        <el-menu-item index="1" class="menu-item">亚克力UV打印</el-menu-item>
        <el-menu-item index="2" class="menu-item">PS板UV打印</el-menu-item>
        <el-menu-item index="3" class="menu-item">雪弗板UV打印</el-menu-item>
        <el-menu-item index="4" class="menu-item">玻璃UV打印</el-menu-item>
        <el-menu-item index="5" class="menu-item">石材UV打印</el-menu-item>
        <el-menu-item index="6" class="menu-item">金属UV喷画</el-menu-item>
        <el-menu-item index="7" class="menu-item">皮革UV打印</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18" class="main-wrapper">
      <el-row class="wrapper">
        <el-card class="figure-wrapper" v-for="(img, index) in currentImgGroup" :key="index">
          <img :src="baseUrl + img.url" :alt="img.name" @click="goToDetail($event)">
          <figcaption>{{img.name}}</figcaption>
        </el-card>
      </el-row>
      <div class="block">
        <el-pagination
          layout="prev, pager, next, jumper"
          :total="totalPages" :page-size="6" @current-change="changePage">
        </el-pagination>
      </div>
    </el-col>
  </el-col>
</div>
</template>

<script>
import $ from 'jquery'
import config from '@/config'

export default {
  name: 'UV',
  data () {
    return {
      pageTitle: 'UV打印产品',
      menuShow: false,
      // 配置请求的json路径
      config: {
        baseUrl: config.baseUrl + '/static/data/',
        urls: [
          'UVPrint/all.json',
          'UVPrint/yakeli.json',
          'UVPrint/ps.json',
          'UVPrint/xuefu.json',
          'UVPrint/boli.json',
          'UVPrint/shicai.json',
          'UVPrint/jinshu.json',
          'UVPrint/pige.json'
        ]
      },
      baseUrl: config.baseUrl,
      imgs: [],
      currentImgGroup: [],
      classIndex: 0
      // 分页信息
    }
  },
  created () {
    var _this = this
    document.body.addEventListener('touchstart', function (event) {
      _this.menuShow = false
    })
    this.getPics(this.config.baseUrl + this.config.urls[0])
  },
  computed: {
    totalPages: function () {
      return this.imgs.length * 6
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(`to: ${to} ++ from: ${from}`)
    }
  },
  methods: {
    getPics (url) {
      const _this = this
      $.ajax({
        url: url,
        data: null,
        type: 'get',
        dataType: 'json',
        success: function (data) {
          _this.imgs = _this.splitImgsToArray(data.data)
          _this.currentImgGroup = _this.imgs[0]
        }
      })
    },
    changePage (currentPage) {
      this.currentImgGroup = this.imgs[currentPage - 1]
    },
    changeMenu (index, indexPath) {
      this.classIndex = index
      this.getPics(this.config.baseUrl + this.config.urls[index])
      this.menuShow = !this.menuShow
    },
    // 跳转到图片详情
    goToDetail (event) {
      var url = encodeURIComponent(event.target.getAttribute('src'))
      // this.$router.push({path: 'uv-detail', params: {classtype: 0, url: url}})
      this.$router.push({path: '/uv-detail/' + this.classIndex + '/' + url})
    },
    /**
      * 将数组分割为每6个一组
      * @param {any} array
      */
    splitImgsToArray (array) {
      var newArray = []
      while (array.length > 0) {
        newArray.push(array.splice(0, 6))
      }
      return newArray
    }
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
  .class-menu {
    margin-bottom: 20px;
    border-radius: 5px;
    margin-top: 30px;
    .menu-item {
      border-radius: 5px;
      
      &:first-child {
        border-bottom: 1px solid #fff;
      }
    }
  }

  .figure-wrapper {
    margin-top: 30px;
    margin-left: 3%;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .block {
    text-align: center;
    margin: 20px auto;
  }
  @media (max-width: 767px) {
    .title-wrapper {
      position: sticky;
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
    .class-menu {
      position: fixed;
      z-index: 3;
      left: 0;
      width: 50%;
      border-radius: 0px;
      transition: left 0.3s linear;
      margin-top: 0px;
    }
    .closed {
      left: -50%;
    }
    .main-wrapper {
      margin: auto;
      float: none;
      
      .figure-wrapper {
        float: none;
      }
    }
  }
</style>


