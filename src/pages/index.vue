<template>
    <div>
        <!-- 轮播图 -->
        <div class="banner">
            <!-- 必须将slides属性绑定才可以使用slides属性的数据 -->
            <slide-show :slides="slides" :invTime="invTime"></slide-show>
        </div>
        <!-- 内容模块 -->
        <div class="container">
            <!-- 众学之约 -->
            <div class="model">
                <div class="model-tit">
                    <a href="">
                        <h2>众学之约</h2>
                        <p>在草长莺飞的季节里来一场有智慧的交流</p>
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">走，去看看</span>
                                <hr class="model-subLine">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <ul>
                                <div class="col-md-4 col-sm-4 col-xs-4" v-for="(item, index) in chatList">
                                    <li class="model-item chatAnimate">
                                        <a class="img-box" :href="chatImg[index].introHref">
                                            <img :src="chatImg[index].introSrc" alt="">
                                        </a>
                                        <div class="intro-txt">
                                            <a :href="item.url">
                                                <h3>{{ item.introTit }}</h3>
                                            </a>
                                            <p>{{ item.introTxt }}</p>
                                        </div>
                                        <div class="source">
                                            <img class="source-img img-circle" :src="chatImg[index].sourceSrc" alt="">
                                            <span class="source-theme">{{ item.sourceTheme }}</span>
                                            <span class="source-time">{{ item.sourceTime }}</span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 项目中心 -->
            <div class="model">
                <div class="model-tit">
                    <a href="">
                        <h2>项目中心</h2>
                        <p>每一个小小的项目都是学习和实战的结合，为成长带来微小而美好的改变</p>
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                         <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">高校科研</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <slide-show :slides="slidesA"
                                :slideTxt= "projectList.student" 
                                :invTime="invTime"
                                :hasTit="hasTitA"
                                :imgBoxH="imgBoxH"
                                :slideTitPos="slideTitLeft" 
                                :hasSource="hasSourceA"
                                :hasArrow="hasArrowA"
                                :dotPos="dotRight">
                                </slide-show>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">学生项目</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <slide-show :slides="slidesA"
                                :slideTxt= "projectList.enterPrise" 
                                :invTime="invTime"
                                :hasTit="hasTitA"
                                :imgBoxH="imgBoxH"
                                :slideTitPos="slideTitLeft" 
                                :hasSource="hasSourceA"
                                :hasArrow="hasArrowA"
                                :dotPos="dotRight">
                                </slide-show>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                         <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">企业项目</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <slide-show :slides="slidesA"
                                :slideTxt= "projectList.teacher" 
                                :invTime="invTime"
                                :hasTit="hasTitA"
                                :imgBoxH="imgBoxH"
                                :slideTitPos="slideTitLeft" 
                                :hasSource="hasSourceA"
                                :hasArrow="hasArrowA"
                                :dotPos="dotRight">
                                </slide-show>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 成长之路 -->
            <div class="model">
                <div class="model-tit">
                    <a href="">
                        <h2>成长之路</h2>
                        <p>愿你在这里可以在前辈的经历中找到自己的方向，我们不在迷茫</p>
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">走，去看看</span>
                                <hr class="model-subLine">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <ul>
                                <div class="col-md-4 col-sm-4 col-xs-4" v-for="(item, index) in growList">
                                    <li class="model-item">
                                        <a class="img-box">
                                            <img :src="growImg[index].introSrc" alt="" class="imgdark">
                                        </a>
                                        <div class="intro-txt">
                                            <a href="">
                                                <h3>{{ item.tit }}</h3>
                                            </a>
                                            <p>
                                                <span class="visit">{{ item.visit }}</span>
                                                <span class="view">{{ item.view }}</span>
                                                <span class="flavor">{{ item.flavor }}</span>
                                            </p>
                                        </div>
                                        <div class="source">
                                           <img class="source-img img-circle" :src="growImg[index].sourceSrc" alt="">
                                            <span class="source-theme">{{ item.author }}</span>
                                            <span class="source-time">{{ item.pubTime }}</span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
             <!-- 众学生活 -->
            <div class="model">
                <div class="model-tit">
                    <a href="">
                        <h2>众学生活</h2>
                        <p>大学可以这样过，发现生活之美</p>
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">众学活动</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <a href="">
                                    <img src="../assets/index/life_1.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">众学生活</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <a href="">
                                    <img src="../assets/index/life_1.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">众学旅行</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <a href="">
                                    <img src="../assets/index/life_1.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 space-t8 col-sm-6 col-xs-6">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">简众 众学客</span>
                                <hr class="model-subLine-md">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                            <div class="model-item">
                                <slide-show :slides="slidesA" 
                                :invTime="invTime"
                                :imgBoxH="imgBoxH"
                                :hasArrow="hasArrowA"
                                :dotPos="dotRight">
                                </slide-show>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 space-t8 col-sm-6 col-xs-6">
                        <div class="model-content">
                            <div class="model-content-header">
                                <span class="model-subtit">众学吃喝玩</span>
                                <hr class="model-subLine-sm">
                                <a href="" class="model-more">Read More ></a>
                            </div>
                           <div class="model-item">
                                <slide-show :slides="slidesA" 
                                :invTime="invTime"
                                :imgBoxH="imgBoxH"
                                :hasArrow="hasArrowA"
                                :dotPos="dotRight">
                                </slide-show>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
             <!-- 合作企业 -->
            <div class="model partner">
                <div class="model-tit">
                    <a href="">
                        <h2>合作高校 | 企业 | 天使投资</h2>
                    </a>
                </div>
                <div class="partner-img">
                    <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-6">
                             <img src="../assets/index/cor_1.jpg" alt="">
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                             <img src="../assets/index/cor_2.jpg" alt="">
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                             <img src="../assets/index/cor_3.jpg" alt="">
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                             <img src="../assets/index/cor_4.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created: function () {
    // 使用虚拟服务器后的地址
    this.$http.get('api/getPageDb').then((res) => {
      this.chatList = res.data.chatList
      this.growList = res.data.growList
      this.projectList = res.data.projectList
    }, (errTip) => {
      alert('找不到资源路径')
    })
  },
  data () {
    return {
      // banner数据
      // 字符串必须用单引号
      slides: [
        {
          src: require('../assets/banner.jpg'),
          href: 'detail/analysis'
        },
        {
          src: require('../assets/banner_1.jpg'),
          href: 'detail/analysis'
        },
        {
          src: require('../assets/banner_2.jpg'),
          href: 'detail/analysis'
        },
        {
          src: require('../assets/banner_3.jpg'),
          href: 'detail/analysis'
        }
      ],
      invTime: 3000,
      // 项目数据
      projectList: [],
      slidesA: [
        {
          src: require('../assets/banner_1.jpg'),
          srcSource: require('../assets/index/source_1.jpg'),
          href: 'detail/analysis'
        },
        {
          src: require('../assets/banner.jpg'),
          srcSource: require('../assets/index/source_1.jpg'),
          href: 'detail/analysis'
        }
      ],
      hasTitA: true,
      hasArrowA: false,
      hasSourceA: true,
      imgBoxH: {
        'slide-img-small': true
      },
      slideTitLeft: {
        'text-left': true
      },
      dotRight: {
        'text-right': true
      },
      /* 访谈数据 */
      chatList: [],
      chatImg: [
        {
          introSrc: require('../assets/index/yue_1.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        },
        {
          introSrc: require('../assets/index/yue_2.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        },
        {
          introSrc: require('../assets/index/yue_3.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        }
      ],
      /* 成长之路数据 */
      growList: [],
      growImg: [
        {
          introSrc: require('../assets/index/grow_1.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        },
        {
          introSrc: require('../assets/index/grow_2.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        },
        {
          introSrc: require('../assets/index/grow_3.jpg'),
          sourceSrc: require('../assets/index/source_1.jpg'),
          introHref: '#'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* banner */
.banner {
    width: 100%;
    margin-bottom: 42px;
    overflow: hidden;
}
/* 模块部分 */
.model {
    padding-bottom: 42px;
}
.model-tit {
    padding-bottom: 46px;
    text-align: center;
}
.model-tit h2 {
    font-size: 30px;
}
.model-tit p {
    font-size: 16px;
}
.model-tit  a {
    color: #242424;
}
.model-content-header {
    height: 32px;
    width: 100%;
}
.model-subtit,
.model-subLine,
.model-subLine-sm,
.model-subLine-md {
    float: left;
}
.model-subtit,
.model-more {
     width: 90px;
     text-align: center;
}
.model-subtit {
    border-left: 6px solid #fea200;
}
.model-more {
    float: right;
    color: #242424; 
}
.model-subLine {
    width: 84%;   
}
.model-subLine-sm {
    width: 48%;   
}
.model-subLine-md {
    width: 74%;
}
/* 众学之约 */
.model-item {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 1px 2px #ccc;
    background: #fff;
}
.img-box {
    display: inline-block;
    margin-bottom: 16px;
    height: 230px;
    overflow: hidden;
    background-color: #000;
}
@media (min-width: 992px) and (max-width: 1199px) {
  .img-box {
    height: 180px;
  }
}
.intro-txt {
    padding-left: 16px;
    border-bottom: 1px solid #bbb;
}
.intro-txt  h3 {
    font-size: 18px; 
}
.source {
    padding: 8px 16px;
}
.source-img {
    /* margin-right: 16px; */
    width: 36px;
    height: 32px;
}
.source-time {
    float: right;
    /* display: inline-block; */
    margin-top: 3px;
}
.chatAnimate > .img-box > img {
    width: 100%;
    -ms-transition: width .6s;
    -webkit-transition: width .6s;
    transition: width .6s;
}
.chatAnimate > .img-box > img:hover {
    width: 120%;
}
/* 项目中心 */
.model-item > li {
    display: inline;
}
/* 成长之路 */
.imgdark {
    transition: opacity .6s;
}
.imgdark:hover {
    opacity: .6;
}
/* 合作企业 */
.partner-img {
    padding-top: 28px;
    padding-bottom: 28px;
}
.partner-img img {
    width: 286px;
    height: 102px;
}
</style>
