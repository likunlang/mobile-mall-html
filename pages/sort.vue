<template>
    <div class="sortPage">
        <van-sticky :offset-top="0">
            <div class="ListBox">
                <div class="ListBox_tip">一级类目/搜索词</div>
                <nuxt-link to="/" class="ListBox_R">
                    <img class="ListBox_R_icon02" src="/imgs/cart.png" alt="">
                    <div class="cartNums">9</div>
                </nuxt-link>
            </div>
        </van-sticky>

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
    
    
        <div class="sort_List">
            <van-dropdown-menu active-color="#D42D03">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
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
                    <div class="JRTJ_Item_Bottom">
                        <img class="JRTJ_Item_like" src="/imgs/likeY.png" alt="">
                        <div class="JRTJ_Item_like_txt">999人喜欢</div>
                        <div class="JRTJ_Item_rate">
                            <van-rate
                                v-model="rate"
                                :size="14"
                                color="#ffd21e"
                                void-icon="star"
                                void-color="#eee"
                                count="5"
                                readonly
                                allow-half
                            />
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    
    
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'sortPage',
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
      // tab事件==========
      const value1 = ref(0);
      const value2 = ref('a');
      const option1 = [
          { text: '热门', value: 0 },
          { text: '最新', value: 1 },
      ];
      const option2 = [
          { text: '价格', value: 'a' },
          { text: '好评', value: 'b' },
          { text: '销量', value: 'c' },
      ];

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
      
      // 评分
      const rate = 4.1
      
      return {
          value1,
          value2,
          option1,
          option2,
          list,
          onLoad,
          loading,
          finished,
          rate,
      };
  }
}
</script>

<style scoped>
    .sortPage {
        margin: 0 auto;
        min-height: 100vh;
        background-color: #F7F8FC;
        /*padding-top:0.54rem;*/
    }
    .ListBox{
        background-color: #fff;
        height: 0.36rem;
        line-height: 0.36rem;
        width: 100%;
        overflow: hidden;
    }
    .ListBox_tip{
        float: left;
        color: #666666;
        font-size: 0.14rem;
        padding-left: 0.1rem;
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
        position: relative;
    }
    .ListBox_R_icon02{
        width: 0.36rem;
        height: 0.36rem;
        padding: 0.02rem;
        margin-right: 0.1rem;
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
    .cartNums{
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.16rem;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        font-size:10px;
        background-color: #D42D03;
        position: absolute;
        top: 0;
        right: 0.06rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .sort_List{
        width: 100%;
        border-top: 0.1rem solid #eeeeee;
        overflow: hidden;
        background-color: #fff;
    }
    .van-cell{
        width: 50%;
        float: left;
        padding: 0.08rem 0.1rem;
    }
    .JRTJ_Item_Bottom{
        width: 100%;
        overflow: hidden;
    }
    .JRTJ_Item_like{
        width: 0.22rem;
        height: 0.26rem;
        float: left;
    }
    .JRTJ_Item_like_txt{
        height: 0.22rem;
        line-height: 0.22rem;
        float: left;
        font-size: 0.1rem;
        color: #A8A8A8;
    }
    .JRTJ_Item_rate{
        float: right;
    }
    .van-rate__item:not(:last-child),.van-rate__item{
        padding-right: 0!important;
    }
    .nuxt-link-active{
        display: block;
    }

    
    
    
</style>
