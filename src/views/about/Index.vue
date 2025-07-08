<!-- 关于我们 -->
<template>
  <div class="about-bg-blur">
    <div class="blur-spot spot1"></div>
    <div class="blur-spot spot2"></div>
    <div class="blur-spot spot3"></div>
    <div class="blur-spot spot4"></div>
    <!-- 可继续添加更多 -->
  </div>
  <div class="about-container">
    <!-- 品牌介绍 -->
    <section class="about-hero">
      <h1>关于NewWorld新世界开发工作室</h1>
      <p class="about-slogan">让每个创意都成为现实，驱动数字世界的无限可能</p>
      <p class="about-intro">
        新世界开发工作室专注于高品质网站、小程序、APP定制开发，致力于为客户提供一站式数字化解决方案。
        <br>
        我们仰望同一片天空，却看着不同的地方。
      </p>
    </section>

    <!-- 发展历程 -->
    <section class="about-timeline">
      <h2>发展历程</h2>
      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, idx) in timeline"
          :key="item.year"
          :style="{ animationDelay: (0.15 * idx) + 's' }"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-title">{{ item.title }}</div>
            <div class="timeline-desc">{{ item.desc }}</div>
            <div v-if="item.images && item.images.length" class="timeline-images">
              <img v-for="(img, idx) in item.images" :key="idx" :src="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队与价值观 -->
    <section class="about-team">
      <h2>我们的团队与价值观</h2>
      <ul class="values-list">
        <li>专业 · 创新 · 诚信 · 共赢</li>
        <li>多元背景，凝聚一心</li>
        <li>持续学习，追求卓越</li>
      </ul>
    </section>

    <!-- 未来机会 -->
    <section class="about-future">
      <h2>我们的机会</h2>
      <p>
        我们期待与更多志同道合的伙伴携手共进，无论你是客户、合作方还是有梦想的开发者，欢迎加入新世界，一起创造更美好的数字未来！
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      timeline: [
        { 
          year: "2022.9",
          title: "工作室成立",
          desc: "NewWorld新世界工作室正式成立了！",
          images: ['/image/test.png','/image/test2.png','/image/test.png',]
        },
        {
          year: "2022.10",
          title: "第一个客户",
          desc: "成功交付工作室第一个游戏服务器插件定做项目。",
          images:['/image/test.png']
        },
        {
          year: "2023.1",
          title: "团队扩展",
          desc: "吸纳多名优秀开发者，服务能力进一步提升。",
          images: []
        },
        {
          year: "2023",
          title: "创新突破",
          desc: "探索AI、云原生等新技术，持续为客户创造价值。",
          images: ['/image/test.png','/image/test.png','/image/test.png','/image/test.png','/image/test.png','/image/test.png']
        },
        {
          year: "2024",
          title: "迈向未来",
          desc: "与更多客户、伙伴共创数字新世界。",
          images: ['/image/test.png']
        },
        {
          year: "2025",
          title: "未知",
          desc: "等待与您一同发掘。",
          images: []
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-container {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 16px 32px 16px;
  color: var(--text-color);
}
.about-container::before {
  content: "";
  position: absolute;
  left: 10%; top: 0;
  width: 300px; height: 300px;
  background: radial-gradient(circle, #42d39244 0%, transparent 80%);
  filter: blur(40px);
  z-index: 0;
  pointer-events: none;
}

.about-hero {
  text-align: center;
  margin-bottom: 48px;
}
.about-hero h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #42d392, #439fd0, #42d392);
  background-size: 200% 100%;
  animation: gradientMove 3s linear infinite alternate;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.about-slogan {
  font-size: 1.3rem;
  color: #439fd0;
  margin-bottom: 1.2rem;
  font-weight: 600;
}
.about-intro {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.about-timeline {
  margin-bottom: 48px;
}
.about-timeline h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
.timeline {
  border-left: 3px solid #439fd0;
  margin-left: 20px;
  padding-left: 30px;
}
.timeline-item {
  position: relative;
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.timeline-dot {
  position: absolute;
  left: -38px;
  top: 8px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #42d392 0%, #439fd0 100%);
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow:
    0 0 12px #42d39288,
    0 0 24px #439fd088;
  transition: box-shadow 0.3s;
  animation: dotGlow 2s infinite;
}
.timeline-item:hover .timeline-dot {
  box-shadow:
    0 0 24px #42d392cc,
    0 0 48px #439fd0cc;
}
.timeline-content {
  padding-left: 8px;
}
.timeline-year {
  font-weight: bold;
  color: #439fd0;
  font-size: 1.1rem;
}
.timeline-title {
  font-size: 1.1rem;
  margin: 2px 0 4px 0;
}
.timeline-desc {
  color: #666;
  font-size: 1rem;
}

.about-team, .about-future {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(67,159,208,0.08);
  padding: 2.5rem 1.5rem;
  margin-bottom: 32px;
  transition: box-shadow 0.3s, transform 0.3s;
}
.about-team:hover, .about-future:hover {
  box-shadow: 0 8px 32px rgba(67,159,208,0.16);
  transform: translateY(-8px) scale(1.03);
}

.about-team {
  text-align: center;
}
.about-team h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #439fd0;
  font-size: 1.1rem;
  font-weight: 500;
}
.values-list li {
  margin-bottom: 0.5rem;
}

.about-future {
  text-align: center;
}
.about-future h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.about-future p {
  color: #222;
  font-size: 1.1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@keyframes dotGlow {
  0%, 100% { box-shadow: 0 0 12px #42d39288, 0 0 24px #439fd088; }
  50% { box-shadow: 0 0 24px #42d392cc, 0 0 48px #439fd0cc; }
}

.section-fadein {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s;
}
.section-fadein.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-bg-blur {
  position: fixed; /* 或 absolute，如果只想在容器内 */
  left: 0; top: 0; width: 100vw; height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.blur-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
  /* 动画可选 */
  transition: opacity 0.5s;
}

/* 你可以自定义每个 spot 的位置、大小、颜色 */
.spot1 {
  width: 320px; height: 320px;
  left: 10vw; top: 8vh;
  background: radial-gradient(circle, #42d392 0%, transparent 80%);
  animation: moveBlur1 12s ease-in-out infinite;
}
.spot2 {
  width: 260px; height: 260px;
  right: 12vw; top: 18vh;
  background: radial-gradient(circle, #439fd0 0%, transparent 80%);
}
.spot3 {
  width: 200px; height: 200px;
  left: 20vw; bottom: 10vh;
  background: radial-gradient(circle, #f7b500 0%, transparent 80%);
}
.spot4 {
  width: 180px; height: 180px;
  right: 18vw; bottom: 8vh;
  background: radial-gradient(circle, #ff4d4f 0%, transparent 80%);
}

@keyframes moveBlur1 {
  0% { left: 10vw; top: 8vh; }
  50% { left: 13vw; top: 12vh; }
  100% { left: 10vw; top: 8vh; }
}

.timeline-images {
  display: flex;
  gap: 18px;
  margin-top: 16px;
  flex-wrap: wrap;
}
.timeline-images img {
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(67,159,208,0.12);
  transition: transform 0.2s, box-shadow 0.2s;
  background: #f6f6f6;
  margin-bottom: 6px;
}
.timeline-images img:hover {
  transform: scale(1.06) rotate(-2deg);
  box-shadow: 0 8px 32px rgba(67,159,208,0.18);
}
@media (max-width: 900px) {
  .timeline-images img {
    width: 120px;
    height: 80px;
  }
}
@media (max-width: 600px) {
  .timeline-images img {
    width: 90px;
    height: 60px;
  }
}
</style>