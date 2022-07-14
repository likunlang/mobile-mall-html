<template>
<div class="MyDataPage">
    <div class="myCell">
            <van-cell title="头像">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <template #right-icon>
                    <img class="MyDataPage_icon_R" src="/imgs/defualt_act.png" alt="">
                </template>
            </van-cell>
            <van-field
                v-model="username"
                label="用户名"
                placeholder="请输入用户名"
                input-align="right"
            ></van-field>
            <van-field
                v-model="name"
                label="姓名"
                placeholder="请输入姓名"
                input-align="right"
            ></van-field>
            <van-field
                v-model="email"
                label="邮箱"
                placeholder="请输入邮箱"
                input-align="right"
            ></van-field>
            <van-field
                v-model="sex"
                is-link
                readonly
                label="性别"
                placeholder="选择性别"
                @click="showSex = true"
                input-align="right"
            />
            <van-field
                v-model="birthday"
                is-link
                readonly
                :value="birthday"
                label="出生日期"
                placeholder="选择出生日期"
                @click="showBirthday = true"
                input-align="right"
            />


    </div>
    
    <van-popup v-model:show="showSex" round position="bottom" >
        <van-picker
            :columns="sex_columns"
            @cancel="showPicker = false"
            @confirm="ConfirmSex"
            title="选择性别"
            :show-toolbar="showToolbar"
        />
    </van-popup>
    
    <!--<van-calendar v-model:show="showBirthday" @confirm="ConfirmBirthday" :min-date="minDate" :max-date="maxDate"/>-->
    
    <van-popup v-model:show="showBirthday" round position="bottom" >
        <van-datetime-picker
            v-model="birthday"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="ConfirmBirthday"
            @cancel="showBirthday = false"
        />

    </van-popup>

</div>
</template>
<script>

export default {
    name: 'MyData',
    components: {},
    data() {
        return {
            showToolbar:true,
            showSex: false,
            showBirthday: false,
            sex_columns:['男性', '女性'],
            minDate: new Date(1980, 0, 1),
            maxDate: new Date(),
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

        
        return {
            username: '',
            name: '',
            email:'269110624@qq.com',
            sex:'',
            birthday:'',
        }
    },
    created: function () {
        //数据提交给vuex
        // this.$store.commit('getIndex',this.index)
    },
    mounted() {

    },
    methods: {
        ConfirmSex(value){
            console.log(value)
            this.sex = value
            this.showSex = false
        },
        ConfirmBirthday(value){
            console.log(value)
            this.birthday = this.formatDate(value)
            this.showBirthday = false
        },
        formatDate(date){
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        },
    }
}
</script>

<style scoped>
    .MyDataPage {
        min-height: 100vh;
        background: #F7F8FC;
    }
    .myCell{
        width: 100%;
        background-color: #fff;
        padding: 0 0.15rem;
    }
    .MyDataPage_icon_R{
        width: 0.3rem;
        height: 0.3rem;
    }
    .van-cell{
        padding: 0.1rem 0;
        border-bottom: 1px solid #F5F5F5;
    }
    .van-cell__title,.van-field__label{
        line-height: 0.3rem;
        color: #646566;
    }
    .van-cell__value{
        color: #646566;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


</style>
