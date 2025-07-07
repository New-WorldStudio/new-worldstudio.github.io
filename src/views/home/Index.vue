<!-- 主页界面 -->
<template>
  <div class="main-container">

    <!--  -->
    <section class="hero-section">
      <div class="hero-content">
        <img class="studio-logo" src="" alt="" />
        <h1>
          <span class="main-title">
            <span class="gradient-text">NewWorld</span><br>新世界开发工作室
          </span>
        </h1>
        <p class="subtitle">
          专注于高品质网站、小程序、APP定制开发<br>
          让数字世界更美好
        </p>
        <div class="hero-actions">
          <button class="primary-btn">联系我们</button>
          <button class="secondary-btn">查看案例</button>
        </div>
      </div>
    </section>

    <!-- TODO: 特征特长展示区域 -->
    <section class="features-section">
      <div class="features-list">
        <div class="feature-item">
          <h3>专业团队</h3>
          <p>多年开发经验，技术全面，响应迅速</p>
        </div>
        <div class="feature-item">
          <h3>定制开发</h3>
          <p>根据客户需求量身打造专属解决方案</p>
        </div>
        <div class="feature-item">
          <h3>全流程服务</h3>
          <p>从需求分析到上线运维，全程无忧</p>
        </div>
      </div>
    </section>
    <!-- 可继续添加案例、合作伙伴、联系方式等分区 -->
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar/HeaderBar.vue";
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
.main-container {
  width: 100vw;
  min-height: 100vh;
  background: var(--bg-color);
}

/* 介绍栏 */
.hero-section {
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: red solid 1px;
}

/* 介绍栏主要内容 */
.hero-content {
  text-align: center;
  max-width: 700px;
  color: #fff;
}

/* 工作室主要logo */
.studio-logo {
  width: 80px;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #42d392 0%, #439fd0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* 兼容部分浏览器 */
  color: transparent;
  font-size: 5rem;
}

/* 主要大标题 */
.main-title {
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--text-color);
}

/* 副标题 */
.subtitle {
  margin-top: 1.2rem;
  font-size: 1.3rem;
  color: var(--text-color);
}

/* 介绍内容的活动主要区域 */
.hero-actions {
  margin-top: 2.2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

}

.primary-btn, .secondary-btn {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border-radius: 999px;
  //border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
  border: red solid 1px;
}

.primary-btn {
  background: red;
  color: var(--text-color);
}

.primary-btn:hover {
  background: #e0f7fa;
}

.secondary-btn {
  background: transparent;
  color: var(--text-color);
  border: 1.5px solid #fff;
}

.secondary-btn:hover {
  background: #fff;
  color: #439fd0;
}

.features-section {
  background: #fff;
  padding: 3rem 0 2rem 0;
}

.features-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature-item {
  background: #24292c;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(67,159,208,0.06);
  text-align: center;
  width: 220px;
}

.feature-item h3 {
  color: var(--text-color);
  margin-bottom: 0.7rem;
}

.feature-item p {
  color: var(--text-color);
  font-size: 1rem;
}
</style>