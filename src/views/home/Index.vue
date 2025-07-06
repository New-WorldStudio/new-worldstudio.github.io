<template>
  <div class="main">
    <header-bar></header-bar>
    <div class="container">

    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  name: "Home",
  components: {
    HeaderBar
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>


<style scoped>
.container {
  width: 100vw;
  height: 3000px;
}
</style>