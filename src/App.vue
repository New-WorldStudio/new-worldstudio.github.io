<template>
  <div class="main" :class="{ 'dark': isDark}" >
    <header-bar @toggleTheme="handlerToggleTheme"></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
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
  methods: {
    // 监听主题切换
    handlerToggleTheme(data) {
      this.isDark = data;
      console.log(this.isDark);
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.main {
  background: white;
}


.main.is-Dark {
  background: black;
}
</style>