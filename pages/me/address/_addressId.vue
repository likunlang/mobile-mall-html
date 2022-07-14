<template>
<div class="AddressEditPage">
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="username"
                name="手机号"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="姓"
                label="姓"
                placeholder="姓"
                :rules="[{ required: true, message: '请填写姓' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="名"
                label="名"
                placeholder="名"
                :rules="[{ required: true, message: '请填写名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="国家"
                label="国家"
                placeholder="国家"
                :rules="[{ required: true, message: '请填写国家' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="地区"
                label="地区"
                placeholder="地区"
                :rules="[{ required: true, message: '请填写地区' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="详细地址"
                label="详细地址"
                placeholder="详细地址"
                :rules="[{ required: true, message: '请填写详细地址' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="邮箱"
                label="邮箱"
                placeholder="邮箱"
                :rules="[{ required: true, message: '请填写邮箱' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="电话"
                label="电话"
                placeholder="电话"
                :rules="[{ required: true, message: '请填写电话' }]"
            />
            <div class="agreednums" @click="agreednumsFn">
                <span v-show="isagreednums" class="iconfont color_red">&#xe631;</span>
                <span v-show="!isagreednums" class="iconfont color_grad">&#xe671;</span>
                <div class="agreednums_txt">通过电子邮件向我发送新闻和优惠</div>
            </div>
        </van-cell-group>
        <div style="margin: 70px 15px;">
            <div class="agreedaddressBox" @click="agreedaddressFn">
                <span v-show="isagreedaddress" class="iconfont color_red">&#xe631;</span>
                <span v-show="!isagreedaddress" class="iconfont color_grad">&#xe671;</span>
                <div class="agreedaddress_txt">保存信息以备下次使用</div>
            </div>
            <button class="addressEdit_Btn">提交</button>
        </div>
    </van-form>

    

</div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'AddressEdit',
    components: {},
    data() {
        return {
            isagreedaddress:false,
            isagreednums:false,
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
        const username = ref('');
        const password = ref('');
        const onSubmit = (values) => {
            console.log('submit', values);
        };

        return {
            username,
            password,
            onSubmit,
        };
    },
    created: function () {
        
        //数据提交给vuex
        // this.$store.commit('getIndex',this.index)
    },
    mounted() {

    },
    methods: {
        agreedaddressFn(){
            this.isagreedaddress = !this.isagreedaddress
        },
        agreednumsFn(){
            this.isagreednums = !this.isagreednums
        },
    }
}
</script>

<style scoped>
    .AddressEditPage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .van-cell{
        border-bottom: 1px solid #eeeeee;
    }
    .addressEdit_Btn{
        width: 100%;
        height: 0.36rem;
        background-color: #D42D03;
        color: #ffffff;
        font-size: 0.14rem;
        margin-top: 0.15rem;
        margin-bottom: 0.5rem;
        border-radius: 0.4rem;
    }
    .agreednums{
        padding-top: 0.1rem;
        width: 100%;
        overflow: hidden;
    }
    .agreedaddressBox{
        width: 100%;
        line-height: 0.3rem;
        text-align: center;
    }
    .agreedaddress_txt,.agreednums_txt{
        display: inline-block;
        color: #666666;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
    .color_red{
        font-size: 0.16rem;
        color: #D42D03;
        line-height: 0.3rem;
    }
    .color_grad{
        font-size: 0.18rem;
        color: #999999;
        line-height: 0.3rem;
    }
    
    
    
    
    
    
    


</style>
