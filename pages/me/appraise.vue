<template>
<div class="appraisePage">
    <van-card
        num="2"
        price="1.99"
        origin-price="1.55"
        desc="规格"
        title="商品名称商品名称商品名称商品名称商…"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
    </van-card>
    <div class="appraise_tip">描述相符</div>
    <div class="appraise_rateBox">
        <van-rate
            v-model="rate"
            :size="25"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            readonly
            allow-half
        />
    </div>
    <div class="appraise_areaBox">
        <textarea class="appraise_area" name="" id="" cols="30" rows="4"></textarea>
        <van-uploader
            v-model="fileList"
            multiple
            :max-count="6"
        />
    </div>
    
    <button class="submitBtn">发布</button>

    

</div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'appraise',
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
        const fileList = ref([
            { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
            // Uploader 根据文件后缀来判断是否为图片文件
            // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            { url: 'https://cloud-image', isImage: true },
        ]);

        const rate = 4.5
        
        return {
            fileList,
            rate,
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
    .appraisePage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .van-card{
        padding: 0.15rem;
    }
    .van-card__price{
        font-size: 0.14rem;
        color: #D42D03;
        font-weight: 600;
    }
    .appraise_tip{
        width: 100%;
        text-align: center;
        line-height: 0.32rem;
        color: #999999;
        font-size: 0.14rem;
        background-color: #fff;
    }
    .appraise_areaBox{
        width: 100%;
        padding: 0.15rem;
    }
    .appraise_area{
        width: calc(100% - 0.3rem);
        margin: 0.15rem 0;
        background-color: #F7F8FC;
        border-radius: 0.1rem;
        padding: 0.1rem;
        line-height: 0.22rem;
        font-size: 0.14rem;
        color: #333333;
        border: none;
        outline: none;
    }
    .submitBtn{
        width: 90%;
        margin: 0.3rem 5%;
        background-color: #D42D03;
        color: #ffffff;
        font-size: 0.14rem;
        height: 0.34rem;
        line-height: 0.34rem;
        border-radius: 0.4rem;
    }
    .appraise_rateBox{
        width: 100%;
        text-align: center;
        line-height: 0.32rem;
    }
    
    
    
    
    
    
    
    
    


</style>
