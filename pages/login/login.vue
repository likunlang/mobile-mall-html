<template>
  <div class="container">
    <div>
      <NuxtLogo />
    </div>
  </div>
</template>

<script>
export default {
  layout:'BaseLayout',
  name: 'IndexPage',
  data() {
    return {
      title: this.$route.params.title || '',
    };
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
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    Quicksand,
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
