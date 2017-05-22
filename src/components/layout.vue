<template>
  <div>
    <div class="header">
        <div class="container">
            <div class="logo">
                <img src="" alt="">
            </div>
            <div class="location">
                <span>武汉科技大学</span>
            </div>
            <ul class="nav">
                <li class="nav-item"><router-link class="nav-item_active" :to="{ name: 'home' }">首页</router-link></li>
                <li class="nav-item"><router-link :to="{ name: 'projectCenter' }">项目中心</router-link></li>
                <li class="nav-item"><router-link :to="{ name: 'zonXueLife' }">众学生活</router-link></li>
                <li class="nav-item"><router-link :to="{ name: 'zonXueGood' }">众学优品</router-link></li>
                <li class="nav-item"><router-link :to="{ name: 'zonXueTank' }">众学智库</router-link></li>
            </ul>
            <div class="loginBar">
                <a href="">登录</a>
                <a href="">注册</a>
            </div>
            <div class="publishItem">
                <a href="">发布项目</a>
            </div>
            <div class="search">
                <a class="search-icon" href="#search_form">搜</a>
                <form action="" class="search-form" id="search_form">
                    <input type="submit" class="search-btn" value="搜索" />
                    <input type="text" class="search-text" placeholder="搜索内容" />
                </form>
            </div>
        </div>
    </div>
    <div class="main">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
        <div class="container">
            <dl class="footer-list">
                <dt>关于我们</dt>
                <dd><a href="">关于众学</a></dd>
                <dd><a href="">联系众学</a></dd>
                <dd><a href="">加入众学</a></dd>
            </dl>
             <dl class="footer-list">
                <dt>众学业务</dt>
                <dd><a href="">业务体系</a></dd>
                <dd><a href="">众学产品</a></dd>
                <dd><a href="">加入众学</a></dd>
            </dl>
             <dl class="footer-list">
                <dt>关注我们</dt>
                <dd><a href="">关于众学</a></dd>
                <dd><a href="">联系众学</a></dd>
                <dd><a href="">加入众学</a></dd>
            </dl>
            <div class="v-code">
                <img src="../assets/code.jpg" alt="">
                <span></span>
            </div>
            <hr/>
            <p class="copyright">网易公司版权所有©1997-2017杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</p>
            <p class="copyright">违法和不良信息举报电话：020-38178288-4093</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>
<style src="./layout.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
.header {
    height: 70px;
    line-height: 70px;
    margin-bottom: 9px;
    /* box-shadow: 0 1px 6px #A8A8A8; */
}
.logo,
.location,
.nav {
    float: left;
    margin-right: 20px;
}
.search,
.publishItem,
.loginBar {
    margin-left: 20px;
    float: right;
}
.logo {
    margin-top: 10px;
    width: 150px;
    height: 50px;
    overflow: hidden;
    background: #cae297;
}
.logo > .logo-img {
    display: inline-block;
    width: 100%;
}
/* 导航组件 */
.nav {
    margin: 0;
    padding-left: 0;
}
.nav-item {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
}
.nav-item_active {
    color: #fea200;
}
/* 搜索组件 */
.search {
    position: relative;
    z-index: 10;
    margin-top: 20px;
    line-height: 30px;
}
.search-icon,
.search-form {
    position: absolute;
    display: inline-block;
    line-height: inherit;
}
.search-icon {
    z-index: 12;
    right: 40px;
    cursor: pointer;
}
.search-form {
    z-index: 11;
    right: 0;
    height: 0;
    overflow: hidden;
    width: 400px;
    transition: transform 1s;
}
.search form:target {
    height: auto;
    transform: translateX(-300px);
}
.search-btn,
.search-text {
    float: left;
    border: none;
}
.search-btn {
    height: 34px;
    color: #fff;
    background: #06f;
}
.search-text {
    padding-left: 10px;
    border: 1px solid #fff;
    width: 320px;
}
.search-text:focus {
    border: 1px solid #06f;
}
.loginBar a,
.publishItem a {
    color: #242424;
}
/* footer */
.footer {
    padding-top: 24px;
    height: 224px;
    color: #797979;
    background: #343434;
}
.footer-list {
    display: inline-block;
    width: 150px;
}
.footer-list dt {
    padding-bottom: 10px;
    font-size: 18px;
}
.footer-list dd {
    margin-left: 0;
}
.footer-list a {
    color: inherit;
}
.v-code {
    float: right;
}
.copyright {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    text-align: center;
}
</style>
