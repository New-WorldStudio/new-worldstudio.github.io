<!-- 主页界面 -->
<template>
  <div class="main-container" style="position: relative; overflow: hidden;">
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>
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
          <span ref="typewriter" class="typewriter-text"></span>
        </p>
        <div class="hero-actions">

        </div>
      </div>
    </section>

    <!-- 特征特长展示区域 -->
    <section class="features-section">
      <div class="features-section-title">
        <span>我们的优势</span>
      </div>
      <div class="features-list">
        <div
          class="feature-card"
          v-for="(item, idx) in features"
          :key="idx"
          :style="{ animationDelay: (idx * 0.1) + 's' }"
        >
          <div class="feature-icon" v-html="item.icon"></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

    </section>

    <!-- TODO:案例 -->
    <section class="cases-section">
      <div class="cases-section-title">
        <span>案例</span>
      </div>
    </section>

    <!-- TODO:合作伙伴 -->
    <section class="partners-section">
      <div class="partners-section-title">
        <span>合作伙伴</span>
      </div>
    </section>

    <!-- TODO: 联系方式 -->
    <section class="contacts-section">
      <div class="contacts-section-title">
        <span>联系我们</span>
      </div>
    </section>

    <!-- TODO: 加入我们 -->
    <section class="recruit-section">
      <div class="recruit-section-title">
        <span>加入我们</span>
      </div>
    </section>

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
  data() {
    return {
      typewriterTexts: [
          "驱动科技革命，开创数字未来，让每个创意都成为现实",
          "专注于高品质网站、小程序、APP定制开发，让数字世界更美好",
          "致力于为客户提供一站式数字化解决方案",

      ],
      typewriterIndex: 0,
      features: [
        {
          icon: '💡', // 也可以用 SVG
          title: '专业团队',
          desc: '多年开发经验，技术全面，响应迅速'
        },
        {
          icon: '🛠️',
          title: '定制开发',
          desc: '根据客户需求量身打造专属解决方案'
        },
        {
          icon: '🔗',
          title: '全流程服务',
          desc: '从需求分析到上线运维，全程无忧'
        },

      ]
    }
  },
  mounted() {
    // 开启打字效果
    this.startTypewriter();
    // 初始化粒子效果
    this.initParticles();
    window.addEventListener("resize", this.resizeCanvas);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeCanvas);
    cancelAnimationFrame(this.animationId);
  },
  methods: {
    // 开启打字特效
    startTypewriter() {
      const el = this.$refs.typewriter;
      const texts = this.typewriterTexts;
      let idx = 0;
      let isDeleting = false;
      let txt = "";
      let loopNum = 0;
      const type = () => {
        const fullTxt = texts[idx];
        if (isDeleting) {
          txt = fullTxt.substring(0, txt.length - 1);
        } else {
          txt = fullTxt.substring(0, txt.length + 1);
        }
        el.innerHTML = txt;

        let delta = isDeleting ? 40 : 80;
        if (!isDeleting && txt === fullTxt) {
          delta = 1200; // 停留时间
          isDeleting = true;
        } else if (isDeleting && txt === "") {
          isDeleting = false;
          idx = (idx + 1) % texts.length;
          delta = 500;
        }
        setTimeout(type, delta);
      };
      type();
    },
    resizeCanvas() {
      const canvas = this.$refs.bgCanvas;
      const container = this.$el; // main-container
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    },
    initParticles() {
      this.resizeCanvas();
      // 小球数量
      const particleCount = 100;
      const colors = [
        "#ff4d4f", "#40a9ff", "#36cfc9", "#f7b500",
        "#9254de", "#ff85c0", "#00c3ff", "#00e09e"
      ];
      const particles = [];
      const canvas = this.$refs.bgCanvas;
      const ctx = canvas.getContext("2d");
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 1.5 + Math.random() * 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
      this.particles = particles;
      // 动画
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          // 边界反弹
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          // 轻微扰动
          p.vx += (Math.random() - 0.5) * 0.01;
          p.vy += (Math.random() - 0.5) * 0.01;
          // 限制最大速度
          p.vx = Math.max(Math.min(p.vx, 0.7), -0.7);
          p.vy = Math.max(Math.min(p.vy, 0.7), -0.7);
          // 绘制
          ctx.save();
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.7;
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.restore();
        }
        this.animationId = requestAnimationFrame(animate);
      };
      animate();
    }
  }
}
</script>


<style scoped>
.main-container {
  width: 100vw;
  min-height: 100vh;
  background: var(--bg-color);
}

/* 背景画板 */
.bg-canvas {
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.main-container > *:not(.bg-canvas) {
  position: relative;
  z-index: 1;
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

/* 主要标题发光 */
.main-title-glow:hover {
  text-shadow:
      0 0 10px #888,
      0 0 20px #aaa,
      0 0 30px #bbb;
}

/* 副标题 */
.subtitle {
  margin-top: 1.2rem;
  color: var(--text-color);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
}

/* 文字打字效果 */
.typewriter-text {
  border-right: 2px solid #439fd0;
  animation: blink-cursor 1s steps(1) infinite;
  display: inline-block;
  max-width: 90vw;
  min-width: 10ch;
  white-space: normal;
  word-break: break-all;
  overflow-wrap: break-word;
  vertical-align: bottom;
}

/* 光标指针 */
@keyframes blink-cursor {
  0%, 100% { border-color: #439fd0; }
  50% { border-color: transparent; }
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
  margin: 64px 0 120px 0;
  text-align: center;
}

/* 板块部分标题样式 */
.features-section-title,
.cases-section-title,
.partners-section,
.contacts-section-title,
.recruit-section-title{
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 板块标题 */
.features-section-title span,
.cases-section-title span,
.partners-section span,
.contacts-section-title span,
.recruit-section-title span{
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  background: linear-gradient(90deg, #439fd0 30%, #7ed6df 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: 32px;
  letter-spacing: 2px;
}

/* 展示部分列表容器 */
.features-list {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}

/* 展示部分列表容器物品样式 */
.feature-card {
  background: var(--card-bg);
  color: var(--card-text);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(67,159,208,0.2);
  padding: 36px 28px 28px 28px;
  width: 300px;
  min-width: 220px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.25s, box-shadow 0.25s;
  animation: fadeUpStrong 0.9s cubic-bezier(.22,1.12,.36,1) both;
}

.feature-card:hover {
  transform: translateY(-28px) scale(1.12) rotate(-2deg);
  box-shadow:
    0 16px 48px 0 rgba(67,159,208,0.32),
    0 0 0 4px rgba(67,159,208,0.10),
    0 0 24px 4px #7ed6df55;
  outline: 2px solid #7ed6df55;
  transition:
    transform 0.22s cubic-bezier(.22,1.12,.36,1),
    box-shadow 0.22s,
    outline 0.22s;
}

.feature-icon {
  font-size: 2.6rem;
  margin-bottom: 18px;
  filter: drop-shadow(0 2px 8px #7ed6df55);
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--card-title-color);
}

.feature-card p {
  font-size: 1rem;
  color: var(--card-content-text-color);
  margin: 0;
}

/* TODO: 案例板块部分样式 */
.cases-section {
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

/* TODO: 合作伙伴 */
.partners-section {
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

/* TODO: 联系我们 */
.contacts-section{
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

/* TODO: 加入我们 */
.recruit-section{
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

@media (max-width: 900px) {
  .features-list {
    gap: 18px;
  }
  .feature-card {
    width: 90vw;
    min-width: unset;
    padding: 28px 10px;
  }
}

@media (max-width: 600px) {
  .features-list {
    flex-direction: column;
    align-items: center;
  }
  .feature-card {
    width: 98vw;
    padding: 22px 4vw;
  }
}

@keyframes fadeUpStrong {
  0% {
    opacity: 0.2;
    transform: translateY(60px) scale(0.92);
    filter: blur(2px);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-8px) scale(1.04);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
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


@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>