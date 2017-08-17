<template>
  <div class="hello">
    <main class="main-content">
      <div>
        <h2 class="header-2">远华盛科技有限公司</h2>
        <p class="text">
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;远华盛科技有限公司，是一家专业从事喷绘打印、和激光镭雕加工行业，公司为了生产出高品质的产品，能达到中高端客户产品出口的要求，配置了最新最先进的设备进行加工。 
        </p>
      </div>
      <div>
        <h3>产品展示</h3>
        <div class="img-showcase">
          <figure>
            <img src="/static/img/uv/psban/ps_1.jpg" alt="">
            <figcaption>
              PS板打印
            </figcaption>
          </figure>
          <figure>
            <img src="/static/img/uv/boli/boli_2.jpg" alt="">
            <figcaption>
              玻璃打印
            </figcaption>
          </figure>
          <figure>
            <img src="/static/img/uv/shicai/shicai_6.jpg" alt="">
            <figcaption>
              石材打印
            </figcaption>
          </figure>
          <figure>
            <img src="/static/img/uv/yakeli/yakeli_5.jpg" alt="">
            <figcaption>
              亚克力打印
            </figcaption>
          </figure>
          <figure>
            <img src="/static/img/uv/psban/ps_4.jpg" alt="">
            <figcaption>
              PS板打印
            </figcaption>
          </figure>
          <figure>
            <img src="/static/img/uv/boli/boli_4.jpg" alt="">
            <figcaption>
              玻璃打印
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-2 {
    margin: 20px 10px 10px 10px;
  }
  p.text {
    margin: 0 10px 10px 10px;
  }
  .img-showcase {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    figure {
      text-align: center;
      flex: 1 0 213px;
      margin: 20px 30px 0 30px;
    }
  }
</style>
