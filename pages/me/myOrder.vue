<template>
<div class="MyOrderPage">
    <van-tabs v-model:active="activeName" animated sticky>
        <van-tab title="全部" name="all">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model:loading="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <div class="MyO_Item"  v-for="item in list" :key="item">
                        <div class="MyO_List">
                            <div class="MyO_List_L">56782193679280</div>
                            <div class="MyO_List_R">待收货</div>
                        </div>
                        <van-card
                            num="2"
                            price="2.00"
                            desc="规格"
                            title="商品名称商品名称商品名称商品名称商…"
                            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                        >
                        </van-card>
                        <van-card
                            num="2"
                            price="2.00"
                            desc="规格"
                            title="商品名称商品名称商品名称商品名称商…"
                            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                        >
                        </van-card>
                        <div class="MyO_List">
                            <button class="MyO_List_Btn02">确认收货</button>
                            <button class="MyO_List_Btn01">联系买家</button>
                        </div>
                    </div>
                </van-list>
            </van-pull-refresh>
        </van-tab>
        <van-tab title="待付款" name="waitpay">
        
        
        </van-tab>
        <van-tab title="待收货" name="waitget">
        
        
        </van-tab>
        <van-tab title="已完成" name="finished">
    
    
        </van-tab>
        <van-tab title="待评价2" name="appraise">
    
    
        </van-tab>
    </van-tabs>
    

    

</div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'MyOrder',
    components: {},
    data() {
        return {
        
        };
    },
    fetch() {
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
    async asyncData({params}) {
        // const { data } = await getArticle(params.slug)
        // const { article } = data
        // const md = new MarkdownIt()
        // article.body = md.render(article.body)

        const activeName = ref('all');

        const list = ref([]);
        const loading = ref(false);
        const finished = ref(false);
        const refreshing = ref(false);

        const onLoad = () => {
            setTimeout(() => {
                if (refreshing.value) {
                    list.value = [];
                    refreshing.value = false;
                }

                for (let i = 0; i < 10; i++) {
                    list.value.push(list.value.length + 1);
                }
                loading.value = false;

                if (list.value.length >= 40) {
                    finished.value = true;
                }
            }, 1000);
        };

        const onRefresh = () => {
            // 清空列表数据
            finished.value = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            loading.value = true;
            onLoad();
        };



        return {
            activeName,
            list,
            onLoad,
            loading,
            finished,
            onRefresh,
            refreshing,
        };
    },
    created: function () {
        
        //数据提交给vuex
        // this.$store.commit('getIndex',this.index)
    },
    mounted() {

    },
    methods: {
    
    
    }
}
</script>

<style scoped>
    .MyOrderPage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .MyO_Item{
        width: 100%;
        background-color: #fff;
        padding: 0 0.1rem;
        border-bottom: 0.1rem solid #eeeeee;
    }
    .MyO_Item:last-of-type{
        border-bottom: none;
    }
    .MyO_List{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #fff;
        overflow: hidden;
    }
    .MyO_List_L{
        color: #333333;
        font-size: 0.14rem;
        float: left;
    }
    .MyO_List_R{
        color: #D42D03;
        font-size: 0.14rem;
        float: right;
    }
    .van-card{
        width: 100%;
        padding: 0.15rem 0;
    }
    .MyO_List_Btn01{
        margin: 0.05rem;
        height: 0.3rem;
        color: #333333;
        font-size: 0.12rem;
        border: 1px solid #E5E5E5;
        border-radius: 0.15rem;
        float: right;
        line-height: 0.28rem;
        padding: 0 0.1rem;
    }
    .MyO_List_Btn02{
        margin: 0.05rem;
        height: 0.3rem;
        line-height: 0.28rem;
        color: #ffffff;
        font-size: 0.12rem;
        border: 1px solid #D42D03;
        border-radius: 0.15rem;
        float: right;
        padding: 0 0.1rem;
        background-color: #D42D03;
    }
    .van-card__price{
        font-size: 0.14rem;
        color: #D42D03;
        font-weight: 600;
    }
    
    
    
    
    
    
    
    
    


</style>
