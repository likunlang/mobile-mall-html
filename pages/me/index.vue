<template>
<div class="MyPage">
    <div class="myHead">
        <img class="myHead_Act" src="/imgs/defualt_act.png" />
        <div class="myHead_info">
            <div class="myHead_info_name">用户名</div>
            <div class="myHead_info_email">gsydu89@163.com</div>
            <nuxt-link to="/" class="myHead_info_arrow">
                <img class="my_arrow_icon" src="/imgs/icon_arrow.png" />
            </nuxt-link>
        </div>
    </div>
    
    <div class="myInfoList">
        <van-grid :border="false" :column-num="3">
            <van-grid-item to="/" info="99+">
                <div class="myInfoList_nums right_line">12</div>
                <div class="myInfoList_txt">待收货</div>
            </van-grid-item>
            <van-grid-item to="/" info="99+">
                <div class="myInfoList_nums right_line">12</div>
                <div class="myInfoList_txt">待评价</div>
            </van-grid-item>
            <van-grid-item to="/" info="99+">
                <div class="myInfoList_nums">1109</div>
                <div class="myInfoList_txt">喜欢</div>
            </van-grid-item>
        </van-grid>
    </div>
  
    <div class="myCell">
        <nuxt-link to="/" class="myCell_item">
            <img class="myCell_item_icon_L" src="/imgs/me_order.png" alt="">
            <div class="myCell_itemname">我的喜欢</div>
            <img class="myCell_item_icon_R" src="/imgs/icon_next.png" alt="">
        </nuxt-link>
        <nuxt-link to="/" class="myCell_item">
            <img class="myCell_item_icon_L" src="/imgs/payment.png" alt="">
            <div class="myCell_itemname">收货地址</div>
            <img class="myCell_item_icon_R" src="/imgs/icon_next.png" alt="">
        </nuxt-link>
        <nuxt-link to="/" class="myCell_item">
            <img class="myCell_item_icon_L" src="/imgs/me_service.png" alt="">
            <div class="myCell_itemname">客服</div>
            <img class="myCell_item_icon_R" src="/imgs/icon_next.png" alt="">
        </nuxt-link>
        <nuxt-link to="/" class="myCell_item">
            <img class="myCell_item_icon_L" src="/imgs/icon_sign_out.png" alt="">
            <div class="myCell_itemname">退出登录</div>
            <img class="myCell_item_icon_R" src="/imgs/icon_next.png" alt="">
        </nuxt-link>
    </div>
  
  

    <Tabbars></Tabbars>



</div>
</template>
<script>

export default {
    name: 'MyPage',
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
        // const { data } = await getArticle(params.slug)
        // const { article } = data
        // const md = new MarkdownIt()
        // article.body = md.render(article.body)
        // return {
        //   article
        // }
    },
    created:function(){
    
        //数据提交给vuex
        // this.$store.commit('getIndex',this.index)
    }
}
</script>

<style scoped>
    .MyPage {
        min-height: 100vh;
        padding-bottom: 0.54rem;
        background: #F7F8FC;
    }
    .myHead{
        width: 100%;
        height: 0.92rem;
        overflow: hidden;
        background-color: #fff;
        padding: 0.15rem 0.1rem;
    }
    .myHead_Act{
        width: 0.77rem;
        height: 0.62rem;
        border-radius: 50%;
        text-align: center;
        float: left;
        padding-right: 0.15rem;
    }
    .myHead_info{
        float: left;
        width: calc(100% - 0.77rem);
        height: 0.62rem;
        overflow: hidden;
        position: relative;
    }
    .myHead_info_name{
        width: 100%;
        height: 0.32rem;
        line-height: 0.32rem;
        collapse: #333333;
        font-size: 0.18rem;
    }
    .myHead_info_email{
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        collapse: #666666;
        font-size: 0.14rem;
    }
    .myHead_info_arrow{
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        padding: 0.1rem;
    }
    .my_arrow_icon{
        width: 100%;
        height: 100%;
    }
    .myInfoList{
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        padding: 0.15rem;
        margin-bottom: 0.1rem;
    }
    .myInfoList_nums{
        font-size: 0.18rem;
        font-weight: 600;
        line-height: 0.3rem;
        color: #333333;
    }
    .right_line:before{
        content: '';
        width: 1px;
        height: 0.24rem;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background-color: #DDDDDD;
    }
    .myInfoList_txt{
        font-size: 0.12rem;
        color: #777777;
        line-height: 0.2rem;
    }
    .myCell{
        width: 100%;
        background-color: #fff;
        padding: 0 0.1rem;
    }
    .myCell_item{
        display: block;
        width: 100%;
        height: 0.56rem;
        padding: 0.13rem 0;
        overflow: hidden;
    }
    .myCell_item_icon_L{
        width: 0.3rem;
        height: 0.3rem;
        float: left;
    }
    .myCell_itemname{
        line-height: 0.3rem;
        font-size: 0.16rem;
        color: #333333;
        float: left;
        padding-left: 0.05rem;
    }
    .myCell_item_icon_R{
        float: right;
        width: 0.3rem;
        height: 0.3rem;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


</style>
