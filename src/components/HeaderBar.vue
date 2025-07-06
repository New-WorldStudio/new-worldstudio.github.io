<template>
  <div class="header-bar">
    <div class="header-bar-container">
      <div class="header-bar-content">

        <div class="logo">
          <p>新世界 NewWorld工作室</p>
        </div>

        <div class="content">


        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
}

.header-bar-container {
  width: 100vw;
  height: 64px;
  border: red solid 1px;
  display: flex;
  justify-content: center;
}

.header-bar-content {
  width: 70vw;
  height: 100%;
  border: blue solid 1px;
  display: flex;
}

.logo {
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: greenyellow solid 1px;
}

.logo p {
  font-size: 17px;
  font-weight: bold;
}

.content {
  width: calc(100% - 200px);
  height: 100%;
  background: pink;
}
</style>
