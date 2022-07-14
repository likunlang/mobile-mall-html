<template>
    <div class="homePage">
        <div class="home_search">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="my-swipe-imgs" src="/imgs/banner1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="my-swipe-imgs" src="/imgs/banner1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="my-swipe-imgs" src="/imgs/banner1.png" alt="">
            </van-swipe-item>
        </van-swipe>
        
        <div class="ListBox">
            <div class="ListBox_L">今日推荐</div>
            <img class="ListBox_R_icon" src="/imgs/icon_next02.png" alt="">
            <nuxt-link to="/" class="ListBox_R">查看更多</nuxt-link>
        </div>
        <van-grid :border="false" :column-num="5">
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
            <van-grid-item>
                <nuxt-link to="/">
                    <van-image
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    />
                    <div class="pro_name">女装服饰</div>
                </nuxt-link>
            </van-grid-item>
        </van-grid>
    
    
        <div class="ListBox">
            <div class="ListBox_L">今日推荐</div>
            <img class="ListBox_R_icon" src="/imgs/icon_next02.png" alt="">
            <nuxt-link to="/" class="ListBox_R">查看更多</nuxt-link>
        </div>
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item">
                <div class="JRTJ_Item">
                    <nuxt-link to="/">
                        <img class="JRTJ_Item_Img" src="/imgs/banner1.png" alt="">
                        <div class="recom_item_tip">
                            <img src="/imgs/jiaobiao.png" class="recom_item_tip_bg"/>
                            <div class="recom_item_tip_txt">
                                40% <br>
                                OFF
                            </div>
                        </div>
                        <div class="recom_item_name">商品名称商品名称商品名称商品名称商品商品名称商品商品</div>
                        <div class="recom_item_priceBox">
                            <div class="fl color-red fs-12">¥</div>
                            <div class="fl color-red fs-16 fw-600">26</div>
                            <div class="fl color-999 fs-12">&nbsp;  ¥39</div>
                            <div class="fr color-999 fs-12">已售 9999 件</div>
                        </div>
                    </nuxt-link>
                </div>
            </van-cell>
        </van-list>
        
    
    
    
        <Tabbars></Tabbars>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      title: this.$route.params.title || '',
    };
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head() {
    // 优化seo：动态设置title，keywords 和 description
    return {
      title: '动态设置title',
      meta: [
        {
          hid: 'keywords',
          name: "keywords",
          content:
              "淘宝，西瓜视频，抖音，今日头条，懂球帝，微信，微博",
        },
        // hid是一个唯一标识
        {
          hid: 'description', name: 'names', content: '应用大全'
        },
      ],
    };
  },
  async asyncData ({ params }) {
      // 搜索事件==========
      const value = ref('');
      const onSearch = (val) => {
          console.log(val)
      };
      const onCancel = () => {
          console.log('取消')
      };

      // 列表事件==========
      const list = ref([]);
      const loading = ref(false);
      const finished = ref(false);
      const onLoad = () => {
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
              for (let i = 0; i < 10; i++) {
                  list.value.push(list.value.length + 1);
              }

              // 加载状态结束
              loading.value = false;

              // 数据全部加载完成
              if (list.value.length >= 40) {
                  finished.value = true;
              }
          }, 1000);
      };
      
      
      return {
          value,
          onSearch,
          onCancel,
          list,
          onLoad,
          loading,
          finished,
      };
  }
}
</script>

<style scoped>
    .homePage {
        margin: 0 auto;
        min-height: 100vh;
        background-color: #F7F8FC;
        padding: 0.54rem 0 0.5rem 0;
    }
    .home_search{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #eeeeee;
    }
    .my-swipe .van-swipe-item {
        height: 1.5rem;
        text-align: center;
        background-color: #ffffff;
    }
    .my-swipe-imgs{
        width: 100%;
        height: 100%;
    }
    .ListBox{
        background-color: #fff;
        height: 0.36rem;
        line-height: 0.36rem;
        width: 100%;
        overflow: hidden;
    }
    .ListBox_L{
        float: left;
        color: #D42D03;
        font-size: 0.18rem;
        padding-left: 0.1rem;
    }
    .ListBox_R{
        float: right;
        color: #999999;
        font-size: 0.14rem;
    }
    .ListBox_R_icon{
        float: right;
        width: 0.22rem;
        height: 0.36rem;
        padding: 0.07rem 0;
    }
    .pro_name{
        width: 100%;
        color: #444444;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-top: 0.1rem;
    }
    .JRTJ_List{
        width: 100%;
        overflow: hidden;
        padding:0 0.05rem 0.1rem 0.05rem;
    }
    .JRTJ_Item{
        width: 100%;
        position: relative;
        padding: 0.05rem 0;
    }
    .JRTJ_Item_Img{
        width: 100%;
        height: 1.76rem;
    }
    .recom_item_tip{
        width: 32px;
        height: 36px;
        position: absolute;
        top: 0;
        right: 0.03rem;
    }
    .recom_item_tip_bg{
        width: 100%;
        height: 100%;
    }
    .recom_item_tip_txt{
        width: 100%;
        color: #ffffff;
        font-size: 10px;
        font-family: Arial-BoldMT, Arial;
        font-weight: normal;
        line-height: 12px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    .recom_item_name{
        width: 100%;
        height: 44px;
        display:-webkit-box;
        overflow: hidden; /*超出隐藏*/
        text-overflow: ellipsis;/*隐藏后添加省略号*/
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        font-size: 14px;
        color: #333333;
        line-height: 22px;
        margin: 5px 0;
        padding: 0 5px;
    }
    .recom_item_priceBox{
        width: 100%;
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
    }
    .van-cell{
        width: 50%;
        float: left;
        padding: 0.08rem 0.1rem;
    }
    
    
    
</style>
