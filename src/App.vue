<template>
  <div class="main" :class="{ 'dark': isDark}" >
    <header-bar @toggleTheme="handlerToggleTheme"></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar/HeaderBar.vue";
export default {
  name: 'App',
  components: {
    HeaderBar
  },
  data(){
    return {
      isDark: false
    }
  },

  mounted() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.isDark = theme === 'dark';
    }
  },

  methods: {
    // 监听主题切换
    handlerToggleTheme(data) {
      this.isDark = data;
      localStorage.setItem('theme', data ? 'dark' : 'light');
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* 主要的页面容器，控制整个背景主题颜色 */
.main {
  background: var(--bg-color);
}


</style>