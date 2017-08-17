<template>
  <div class="main-wrapper">
    <div class="title-wrapper">
      <h2 class="nav-title">{{pageTitle}}</h2>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/jiguang' }">{{pageTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
       <span class="menu-toggle" @click.stop="menuShow = !menuShow" ontouchstart="event.stopPropagation();"><i class="icon-reorder"></i>切换图片</span>
    </div>
    <el-col :span="24" class="main-content">
    <el-col :span="4" :offset="1" class="menu-wrapper">
      <el-menu default-active="0" class="class-menu" theme="light" 
        @select="changeMenu" :class="{closed: !menuShow}" ontouchstart="event.stopPropagation();">
        <el-menu-item index="nan" class="menu-item">激光镭雕</el-menu-item>
        <el-menu-item index="0" class="menu-item">激光镭雕应用</el-menu-item>
        <el-menu-item index="1" class="menu-item">样品展示</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18" class="main-wrapper">
      <div class="text-wrapper">
        <h3>什么是激光镭雕</h3>
        <p>随着光电子技术的飞速发展，激光镭雕加工技术应用范围越来越广泛，镭射加工,雕刻精度要求越来越高。影响激光切割,激光雕刻的4个最根本的要素是：雕刻速度、激光功率、雕刻精度、材料。 </p>
        <p>在特定材料上如要达到一定的雕刻效果，就要求吸收一定能量的激光，这一能量应看作是材料吸收的激光能量=激光功率/雕刻速度。简单地讲就是要提高材料吸收的激光能量，就应提高激光功率或是降低雕刻速度，至于说最后采用哪种方法就要看材料和最终的雕刻效果。 </p>
        <p>一般来讲用户都会避免高低速度，因为那会降低生产效率。其实影响雕刻效率的不仅是雕刻速度，雕刻精度也对其有非常大影响。 激光镭雕加工自动化程度高：加工对象放到位后，整个生产过程由计算机全程控制，自动化程度高，相比传统喷砂雕刻工艺，工人劳动强度大幅降低。也因此，激光内雕玻璃生产比较容易实现标准化、数字化、网络化生产，并且还可以实施远程监控和操作，综合成本低。！</p>
        <p>激光镭雕打标加工广泛应用于：电工电路、手机通讯、五金制品、刀具厨具、精密器械、眼镜钟表、计算机键盘鼠标、首饰饰品、汽车自行配件、塑胶按钮、卫生洁具、PVC管材、包装瓶罐、木头、工艺礼品、皮革纸张、玻璃等等！</p>
      </div>
      <el-row class="wrapper">
        <el-card class="figure-wrapper" v-for="(img, index) in currentImgGroup" :key="index">
          <img :src="baseUrl+img.url" :alt="img.name">
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
  name: 'jiguang',
  data () {
    return {
      pageTitle: '激光镭雕',
      menuShow: false,
      // 配置请求的json路径
      config: {
        baseUrl: config.baseUrl + '/static/data/',
        urls: [
          'jiguang/yingyong.json',
          'jiguang/yangpin.json'
        ]
      },
      baseUrl: config.baseUrl,
      imgs: [],
      currentImgGroup: []
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
      console.log(this.imgs.length)
      return this.imgs.length * 6
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
      if (typeof +index === 'number') {
        this.getPics(this.config.baseUrl + this.config.urls[index])
        this.menuShow = !this.menuShow
      }
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
  }
  .block {
    text-align: center;
    margin: 20px auto;
  }
  .text-wrapper {
    padding: 30px;
    p {
      margin: 10px 0;
      text-indent: 30px;
    }
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
    .text-wrapper {
    padding: 0px;
    margin: 20px auto auto auto;
    p {
      margin: 10px 0;
      text-indent: 30px;
    }
  }
  }
</style>


