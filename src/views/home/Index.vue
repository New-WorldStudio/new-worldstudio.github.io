<!-- 主页界面 -->
<template>
  <div class="main-container">
    <!--  -->
    <section class="hero-section">
      <div class="hero-content">
        <img class="studio-logo" src="" alt="" />
        <h1>
          <span class="main-title">
            <span class="gradient-text">NewWorld</span><br><span class="main-title-glow">新世界开发工作室</span>
          </span>
        </h1>
        <p class="subtitle">
          专注于高品质网站、小程序、APP定制开发<br>
          让数字世界更美好
        </p>
        <div class="hero-actions">

        </div>
      </div>
    </section>

    <!-- TODO: 特征特长展示区域 -->
    <section class="features-section">
      <div class="features-section-title">
        <span>我们的优势</span>
      </div>

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

    <!-- 底部栏 -->
    <div class="footer">
      <p>Copyright © 2025-present NewWorld新世界</p>
    </div>
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

/* 渐变字体 */
.gradient-text {
  background: linear-gradient(90deg, #42d392 0%, #439fd0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* 兼容部分浏览器 */
  color: transparent;
  font-size: clamp(2.5rem, 8vw, 5rem);
}

/* 主要大标题 */
.main-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--text-color);

}

.main-title-glow:hover {
  text-shadow:
      0 0 10px #888,
      0 0 20px #aaa,
      0 0 30px #bbb;
}

/* 副标题 */
.subtitle {
  margin-top: 1.2rem;
  /* font-size: 1.2rem; */
  color: var(--text-color);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
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
  border-radius: 15px;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}

.primary-btn {
  background: black;
  border: white solid 1px;
  color: var(--primary-btn-text-color);

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

/* 展示部分样式 */
.features-section {
  //background: #fff;
  padding: 3rem 0 2rem 0;
  min-height: 100vh;
}

.features-section-title {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.features-section-title span {
  background: linear-gradient(135deg, #525050 0%, #ccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* 兼容部分浏览器 */
  color: transparent;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: clamp(0.6rem, 6vw, 2.2rem);
}

.features-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  max-width: 900px;
  margin: 20px auto;
}

.feature-item {
  background: #abaeb0;
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

/* 底部栏样式 */
.footer {
  height: 100px;
  border-top: #d1d3d5 solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
}

@media (max-width: 830px) {
  .hero-section {

  }
}
</style>