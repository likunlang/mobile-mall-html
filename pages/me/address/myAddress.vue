<template>
<div class="myAddressPage">
    <div class="myAddress_item">
        <div class="myAddress_item_list">
            <div class="myAddress_item_list_name">收件人 吴情情</div>
            <div class="myAddress_item_list_grad">｜18682149497@163.com</div>
        </div>
        <div class="myAddress_item_list">广东省 深圳市 宝安区 岔河村9号</div>
        <div class="myAddress_item_Btnlist">
            <button class="myAddress_item_Btn02">删除</button>
            <nuxt-link to="/" class="myAddress_item_Btn01">编辑</nuxt-link>
        </div>
    </div>
    
    <div class="myAddress_item">
        <div class="myAddress_item_list">
            <div class="myAddress_item_list_name">收件人 吴情情</div>
            <div class="myAddress_item_list_grad">｜18682149497@163.com</div>
        </div>
        <div class="myAddress_item_list">广东省 深圳市 宝安区 岔河村9号</div>
        <div class="myAddress_item_Btnlist">
            <button class="myAddress_item_Btn02">删除</button>
            <nuxt-link to="/" class="myAddress_item_Btn01">编辑</nuxt-link>
        </div>
    </div>
    

</div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'myAddress',
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
    .myAddressPage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .myAddress_item{
        width: 100%;
        background-color: #fff;
        border-bottom: 0.1rem solid #eeeeee;
        padding: 0.1rem 0.15rem;
    }
    .myAddress_item:last-of-type{
        border-bottom: none;
    }
    .myAddress_item_list{
        width: 100%;
        line-height: 0.32rem;
        overflow: hidden;
        color: #333333;
        font-size: 0.14rem;
    }
    .myAddress_item_list_name{
        color: #333333;
        font-size: 0.14rem;
        float: left;
    }
    .myAddress_item_list_grad{
        color: #999999;
        font-size: 0.14rem;
        float: left;
    }
    .myAddress_item_Btnlist{
        border-top: 1px solid #eeeeee;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
    }
    .myAddress_item_Btn01{
        float: right;
        color: #D42D03;
        height: 0.26rem;
        line-height: 0.24rem;
        font-size: 0.14rem;
        border: 1px solid #D42D03;
        border-radius: 0.04rem;
        padding: 0 0.1rem;
        margin: 0.1rem 0 0.1rem 0.1rem;
    }
    .myAddress_item_Btn02{
        float: right;
        color: #666666;
        height: 0.26rem;
        line-height: 0.24rem;
        font-size: 0.14rem;
        border: 1px solid #E5E5E5;
        border-radius: 0.04rem;
        margin: 0.1rem 0 0.1rem 0.1rem;
        padding: 0 0.1rem;
    }
    
    
    
    
    


</style>
