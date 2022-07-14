<template>
  <van-tabbar v-model="active" active-color="#D42D03" inactive-color="#444444">
    <van-tabbar-item icon="home-o">
      <nuxt-link to="/">首页</nuxt-link>
      <template #icon="props">
        <img :src="props.active ? imageLists[0].srcy : imageLists[0].srcn" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <nuxt-link to="/">购物车</nuxt-link>
      <template #icon="props">
        <img :src="props.active ? imageLists[1].srcy : imageLists[1].srcn" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o">
      <nuxt-link to="/">订单</nuxt-link>
      <template #icon="props">
        <img :src="props.active ? imageLists[2].srcy : imageLists[2].srcn" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <nuxt-link to="/">我的</nuxt-link>
      <template #icon="props">
        <img :src="props.active ? imageLists[3].srcy : imageLists[3].srcn" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>


<script>
  import { ref } from 'vue';
  export default {
    data(){
      return{
        active:0,
        tds:0,
      }
    },
    setup() {
      const active = ref(0);
      const imageLists = [
        {
          srcy:'/imgs/homeY.png',
          srcn:'/imgs/homeN.png'
        },
        {
          srcy:'/imgs/cartY.png',
          srcn:'/imgs/cartN.png'
        },
        {
          srcy:'/imgs/classificationY.png',
          srcn:'/imgs/classificationN.png'
        },
        {
          srcy:'/imgs/meY.png',
          srcn:'/imgs/meN.png'
        },
      ];
      return {
        imageLists,
        active,
      };
    },
    mounted(){
      // 解决刷新后，tabbar高亮按钮始终显示在第一个上
      // window.location.pathname获取地址栏中的路径
      switch( window.location.pathname){
        case '/' :  this.active = 0;break;
        case '/cart' :  this.active = 1;break;
        case '/order' :  this.active = 2;break;
        case '/me' :  this.active = 3;break;
        default : this.active = 0;
      }
    }
  }

</script>

<style>

</style>
