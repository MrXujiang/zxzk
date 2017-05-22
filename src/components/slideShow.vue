<template>
    <div class="slide" @mouseover="clearPlay" @mouseout="autoPlay">
        <div :class="imgBoxH">
            <a :href="slides[nowIndex].href">
                <transition name="slide-move">
                    <img v-if="isShow" :src="slides[nowIndex].src" alt="最新成果" />
                </transition>
                <transition name="slide-move-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src" alt="最新成果" />
                </transition>
            </a>
            <ul class="slide-page" :class="dotPos">
              <li v-for="(item,index) in slides"
              :class="{ slide_current: index === nowIndex }"
              @mouseover="go(index)"></li>
           </ul>
           <div v-if="hasArrow" class="slide-arrow">
              <span class="prev" @click="go(prevIndex)"> &lt; </span>
              <span class="next" @click="go(nextIndex)"> &gt; </span>
           </div>
        </div>
        <div v-if="hasTit" class="slide-tit" :class="slideTitPos">
            <a href="">
                 <h3>{{ slideTxt[nowIndex].introTit }}</h3>
            </a>
            <p>{{ slideTxt[nowIndex].introTxt }}</p>
        </div>
        <div v-if="hasSource" class="source">
            <img class="source-img img-circle" :src="slides[nowIndex].srcSource" alt="">
            <span class="source-theme">{{ slideTxt[nowIndex].sourceTheme }}</span>
            <span class="source-time">{{ slideTxt[nowIndex].sourceTime }}</span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    hasTit: {
      type: Boolean,
      default: false
    },
    hasSource: {
      type: Boolean,
      default: false
    },
    hasArrow: {
      type: Boolean,
      default: true
    },
    invTime: {
      type: Number,
      default: 1000
    },
    /* slide-tit数据 */
    slideTxt: {
      type: Array,
      default: function () {
        return [
          {'id': 1,
            'introTit': '',
            'introTxt': '',
            'url': '',
            'sourceTheme': '',
            'sourceTime': ''
          }
        ]
      }
    },
    /* 返回默认值为数组或对象类型时，应该用工厂方法返回默认值 */
    imgBoxH: {
      type: Object,
      default: function () {
        return {
          'slide-img': true
        }
      }
    },
    slideTitPos: {
      type: Object,
      default: function () {
        return {
          'text-center': true
        }
      }
    },
    dotPos: {
      type: Object,
      default: function () {
        return {
          'text-center': true
        }
      }
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === (this.slides.length - 1)) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    go (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    autoPlay () {
      this.invId = setInterval(() => {
        this.go(this.nextIndex)
      }, this.invTime)
    },
    clearPlay () {
      clearInterval(this.invId)
    }
  },
//   组件加载完成后自动执行的脚本
  mounted () {
    this.autoPlay()
  }
}
</script>

<style scoped>
  .slide-move-enter-active {
      transition: transform .6s;
  }
  .slide-move-enter {
      transform: translateX(100%);
  }
  .slide-move-old-leave-active {
      transition: transform .6s;
      transform: translateX(-100%);
  }
  /*.slide {
      position: relative;
  }*/
  .slide-img,
  .slide-img-small {
    position: relative;
  }
  .slide-img,
  .slide-img-small,
  .slide-img img,
  .slide-img-small img {
    width: 100%;
  }
  .slide-img img,
  .slide-img-small img {
    position: absolute;
    top: 0;
  }
  .slide-img,
  .slide-img img {
    /* 此处height由于图片大小不统一而设计的hack,后期会删除 */
    height: 420px;
 }
 .slide-img-small,
 .slide-img-small img {
    height: 220px;
 }
  .slide-page {
    position: absolute;
    bottom: 0;
    margin-bottom: 14px;
    width: 100%;
}
.slide-page > li {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    width: 24px;
    height: 5px;
    background-color: #cecece;
    cursor: pointer;
}
.slide-page > .slide_current {
    background-color: #535353;
}
.slide-arrow {
    position: absolute;
    top: 50%;
    margin-top: -40px;
    width: 100%;
    color: #fff;
    visibility: hidden;
}
.slide:hover .slide-arrow {
  visibility: visible;
}
.prev,
.next {
    display: inline-block;
    width: 40px;
    height: 80px;
    line-height: 80px;
    font-size: 3em;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    cursor: pointer;
}
.prev:hover,
.next:hover {
    color: #ffa100;
}
.prev {
    margin-left: 1em;
}
.next {
    float: right;
    margin-right: 1em;
}
.slide-tit {
  margin-top: 10px;
  padding-left: 16px;
  border-bottom: 1px solid #bbb;
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
</style>
