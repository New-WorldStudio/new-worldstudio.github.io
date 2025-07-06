<template>
  <router-view></router-view>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  name: 'App',
  components: {
    HeaderBar
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>