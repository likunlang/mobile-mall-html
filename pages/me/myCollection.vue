<template>
<div class="MyCollectionPage">
    <van-swipe-cell>
        <van-card
            num="2.3k人喜欢"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>
    <van-swipe-cell>
        <van-card
            num="2.3k人喜欢"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>
    <van-swipe-cell>
        <van-card
            num="2.3k人喜欢"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>
    
</div>
</template>
<script>

export default {
    name: 'MyCollection',
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
        
        return {
        
        }
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
    .MyCollectionPage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .delete-button{
        height: 100%;
    }
    .van-card{
        padding: 0.16rem 0.15rem;
        border-bottom: 1px solid #EEEEEE;
    }
    .van-card__price{
        color: #D42D03;
        font-size: 0.18rem;
        font-weight: 600;
    }
    .van-card__title{
        font-size: 0.14rem;
        color: #333333;
    }
    .van-card__num{
        font-size: 0.12rem;
        color: #A8A8A8;
    }
   
    
    
    
    
    
    
    
    
    
    
    


</style>
