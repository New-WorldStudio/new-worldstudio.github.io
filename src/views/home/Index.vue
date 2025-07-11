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
          <button class="primary-btn" @click="goCustom">开始定制</button>
          <button class="secondary-btn" @click="goContact">联系我们</button>
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

    <!-- 项目作品 -->
    <section class="projects-section">
      <div class="project-section-title">
        <span>项目作品</span>
      </div>
      <div class="projects-slider-wrapper">
        <button 
          class="page-button prev" 
          :disabled="currentPage === 1"
          @click="changePage('prev')"
        >←</button>
        <div class="projects-slider">
          <div
            class="projects-track"
            :style="{
              width: totalPages * 100 + '%',
              transform: `translateX(-${(currentPage-1) * (100 / totalPages)}%)`
            }"
          >
            <div
              v-for="(page, pageIdx) in pagedProjects"
              :key="pageIdx"
              class="projects-page"
              :style="{ width: 100 / totalPages + '%' }"
            >
              <div
                v-for="project in page"
                :key="project.id"
                class="project-card"
              >
                <div class="project-image-wrapper">
                  <img class="project-image" :src="project.image" alt="" />
                  <div class="project-overlay">
                    <div class="project-category">{{ project.category }}</div>
                    <div class="project-tags">
                      <span v-for="tag in project.tech" :key="tag" class="project-tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>
                <div class="project-info">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <button class="view-project">查看详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button 
          class="page-button next" 
          :disabled="currentPage === totalPages"
          @click="changePage('next')"
        >→</button>
      </div>
      <div class="pagination-indicator">
        {{ currentPage }} / {{ totalPages }}
      </div>
    </section>

<!--    <section class="partners-section">-->
<!--      <div class="partners-section-title">-->
<!--        <span>合作伙伴</span>-->
<!--      </div>-->
<!--    </section>-->

<!--    &lt;!&ndash; TODO: 来自客户的声音 &ndash;&gt;-->
<!--    <section class="testimonials-section">-->
<!--      <div class="testimonials-section-title">-->
<!--        <span>来自客户的声音</span>-->
<!--      </div>-->
<!--    </section>-->

    <section class="recruit-section">
      <div class="recruit-section-title">
        <span>加入我们</span>
      </div>
      <div class="recruit-content">
        <div class="recruit-intro">
          <h3>和优秀的人一起做有趣的事</h3>
          <p>NewWorld Studio 致力于打造开放、创新、温暖的团队氛围。我们欢迎热爱技术、追求卓越的你加入，一起创造更美好的数字世界！</p>
        </div>
        <div class="recruit-cards">
          <div class="recruit-card" v-for="item in recruitList" :key="item.title">
            <div class="recruit-icon" v-html="item.icon"></div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <div v-if="item.tags" class="recruit-tags">
              <span v-for="tag in item.tags" :key="tag" class="recruit-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="recruit-action">
          <button class="recruit-btn" @click="goContact">投递简历 / 合作咨询</button>
        </div>
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

      ],
      projects: [
        {
          id: 1,
          image: '/image/projects/project1.png',
          category: '小程序',
          tech: ['Vue','SpringBoot','uni-app','RuoYi'],
          title: '点餐小程序',
          description: '饮食餐饮门店点餐小程序'
        },
        {
          id: 2,
          image: '/image/projects/project2.png',
          category: '众包平台',
          tech: ['Vue', 'SpringBoot','uni-app','RuoYi'],
          title: '校小帮',
          description: '专为大学生提供全套优质服务的平台'
        },
        {
          id: 3,
          image: 'https://raw.githubusercontent.com/EatFans/FanTp/refs/heads/main/doc/39B4B1507DE52EA1AE7DCE1EF14EB46C.png',
          category: '游戏插件',
          tech: ['Minecraft', 'Paper','Spigot'],
          title: 'FanTp传送创建',
          description: '轻量化简易的GUI传送插件'
        },
        {
          id: 4,
          image: '/image/projects/project1.png',
          category: '企业官网',
          tech: ['Vue3', 'Node.js'],
          title: '企业官网',
          description: '为该企业打造的高端响应式官网'
        },


      ],
      currentPage: 1,
      recruitList: [
        {
          icon: '💻',
          title: '前端开发',
          desc: 'Vue/React/小程序等现代前端开发，追求极致体验',
          tags: ['远程','线下', '实习','全职']
        },
        {
          icon: '🧑‍💻',
          title: '后端开发',
          desc: 'Java/SpringBoot/Spring，参与高质量后端系统设计',
          tags: ['远程','线下','实习','全职']
        },
        {
          icon: '🎨',
          title: 'UI/UX设计',
          desc: '参与高端网站/APP设计，追求美学与体验的统一',
          tags: ['远程','线下','审美', '创新']
        },
        {
          icon: '🤝',
          title: '商务合作',
          desc: '欢迎各类项目合作、渠道拓展、资源互换',
          tags: ['合作','开放', '共赢']
        }
      ]
    }
  },
  computed: {
    pageSize() {
      return window.innerWidth <= 700 ? 1 : 3;
    },
    totalPages() {
      return Math.ceil(this.projects.length / this.pageSize);
    },
    pagedProjects() {
      const arr = [];
      for (let i = 0; i < this.projects.length; i += this.pageSize) {
        arr.push(this.projects.slice(i, i + this.pageSize));
      }
      return arr;
    }
  },
  mounted() {
    // 开启打字效果
    this.startTypewriter();
    // 初始化粒子效果
    this.initParticles();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
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
    // 调整画板大小
    resizeCanvas() {
      const canvas = this.$refs.bgCanvas;
      const container = this.$el; // main-container
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    },
    // 初始化粒子效果
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
    },
    // 更改页码
    changePage(dir) {
      if (dir === 'prev' && this.currentPage > 1) this.currentPage--;
      if (dir === 'next' && this.currentPage < this.totalPages) this.currentPage++;
    },
    handleResize() {
      // 页码越界时自动回到最后一页
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    },
    goCustom() {
      this.$router.push('/contact'); // 或 '/custom'，根据你的路由实际情况
    },
    goContact() {
      this.$router.push('/contact');
    }
  }
}
</script>


<style scoped>
.main-container {
  width: 100%;
  min-height: 100vh;
  background: var(--bg-color);
  overflow-x: hidden;
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
  width: 100%;
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
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
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
  min-width: 10ch;
  max-width: 100%;
  width: auto;
  text-align: center;
  margin: 0 auto;
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
  flex-wrap: wrap;
}
.primary-btn {
  background: linear-gradient(90deg, #439fd0, #42d392);
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0.75rem 2.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  box-shadow: 0 2px 12px 0 rgba(67,159,208,0.10);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.primary-btn:hover {
  background: #222;
  color: #7ed6df;
  box-shadow: 0 4px 24px 0 rgba(67,159,208,0.18);
}
.secondary-btn {
  background: transparent;
  color: #439fd0;
  border: 2px solid #439fd0;
  border-radius: 18px;
  padding: 0.75rem 2.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.secondary-btn:hover {
  background: #439fd0;
  color: #fff;
  border-color: #42d392;
}
@media (max-width: 600px) {
  .hero-content {
    padding: 0 8vw;
    max-width: 100vw;
  }
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  .primary-btn, .secondary-btn {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
  .typewriter-text {
    max-width: 100vw;
    min-width: 0;
    width: 100%;
    text-align: center;
  }
}

/* 展示部分样式 */
.features-section {
  margin: 64px 0 120px 0;
  text-align: center;
}

/* 板块部分标题样式 */
.features-section-title,
.projects-section-title,
.partners-section,
.testimonials-section-title,
.recruit-section-title{
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 板块标题 */
.features-section-title span,
.project-section-title span,
.partners-section span,
.testimonials-section-title span,
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


/* 项目作品部分样式 */
.projects-section {
  margin: 80px 0 0 0;
  text-align: center;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #439fd0;
}
.title-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #439fd0, #7ed6df);
  margin: 12px auto 32px auto;
  border-radius: 2px;
}
.projects-slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

/* 页面切换button */
.page-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--project-page-button-color);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  margin-right: 10px;
  margin-left: 10px;
}

.page-button:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
.projects-slider {
  overflow: hidden;
  width: 1000px; /* 可自适应 */
  max-width: 90vw;
}
.projects-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(.22,1.12,.36,1);
}
.projects-page {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px; /* 增大间隔，比如32px或40px */
}

/* 项目卡片 */
.project-card {
  width: 320px;
  background: var(--project-card-bg-color);
  border-radius: 24px;
  box-shadow: 0 4px 24px 0 rgba(67,159,208,0.10);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.28s cubic-bezier(.22,1.12,.36,1), transform 0.28s cubic-bezier(.22,1.12,.36,1);
  margin: 0 auto;
  will-change: transform, box-shadow;
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #439fd0 0%, #42d392 100%);
  overflow: hidden;
}

/* 项目图片 */
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
  /* 不做blur，避免锯齿 */
}

.project-overlay {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(34, 40, 60, 0.60);
  color: #ffffff;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px 18px 18px 18px;
  transition: opacity 0.28s cubic-bezier(.22,1.12,.36,1);
  pointer-events: none;
}

/* 项目卡片被鼠标覆盖时候，显示项目卡片的遮罩层 */
.project-card:hover .project-overlay {
  opacity: 1;
  pointer-events: auto;
}

.project-category {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

/* 项目标签容器 */
.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* 项目标签样式 */
.project-tag {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border-radius: 16px;
  padding: 3px 14px;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255,255,255,0.25);
  box-shadow: 0 1px 4px 0 rgba(67,159,208,0.10);
}

/* 项目信息部分 */
.project-info {
  padding: 28px 22px 24px 22px;
  background: var(--project-card-bg-color);
  border-radius: 0 0 24px 24px;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--project-page-info-title-color);
}
.project-info p {
  font-size: 1rem;
  color: var(--project-page-info-text-color);
  margin-bottom: 18px;
}

/* 项目详细按钮 */
.view-project {
  background: var(--project-card-bg-color);
  color: var(--project-view-button-text-color);
  border: 1.5px solid var(--project-view-button-border-color);
  border-radius: 20px;
  padding: 6px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

/* 页面详细按钮被覆盖 */
.view-project:hover {
  background: var(--project-view-button-hover-bg-color);
  color: #fff;
}

/* 分页指示器 */
.pagination-indicator {
  margin-top: 18px;
  color: var(--project-pagination-indicator-color);
  font-size: 1.1rem;
}
@media (max-width: 1100px) {
  .projects-slider {
    width: 700px;
  }
  .project-card {
    width: 220px;
  }
}
@media (max-width: 900px) {
  .projects-slider {
    width: 98vw;
  }
  .project-card {
    width: 90vw;
    margin: 0 2vw;
  }
  .projects-slider-wrapper {
    gap: 6px;
  }
}
@media (max-width: 600px) {
  .project-card {
    width: 98vw;
    min-width: 0;
  }
  .project-info {
    padding: 18px 8vw 18px 8vw;
  }
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


/* TODO: 合作伙伴 */
.partners-section {
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

/* TODO: 来自客户的声音 */
.testimonials-section{
  margin: 64px 0 120px 0;
  text-align: center;
  border: red solid 1px;
}

/* 加入我们 */
.recruit-section{
  margin: 64px 0 120px 0;
  text-align: center;
  background: none;
  position: relative;
  z-index: 1;
}

/* 加入我们主体内容部分 */
.recruit-content {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--recruit-content-content-bg-color);
  //background: rgba(255,255,255,0.85);
  border-radius: 28px;
  box-shadow: 0 8px 48px 0 rgba(67,159,208,0.10);
  padding: 48px 32px 32px 32px;
  backdrop-filter: blur(12px) saturate(1.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recruit-intro h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--recruit-intro-title-color);
  letter-spacing: 1px;
}
.recruit-intro p {
  font-size: 1.1rem;
  color: var(--recruit-intro-text-color);
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.recruit-cards {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}

/* 加入我们卡片 */
.recruit-card {
  background: var(--recruit-card-bg-color);
  //background: rgba(255,255,255,0.92);
  border-radius: 18px;
  box-shadow: 0 2px 8px 0 rgba(67,159,208,0.06);
  padding: 28px 22px 22px 22px;
  min-width: 220px;
  max-width: 260px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.22s, box-shadow 0.22s;
  animation: fadeUpStrong 0.9s cubic-bezier(.22,1.12,.36,1) both;
}
.recruit-card:hover {
  transform: translateY(-16px) scale(1.06) rotate(-1deg);
  box-shadow: 0 8px 32px 0 rgba(67,159,208,0.18);
}
.recruit-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
  filter: drop-shadow(0 2px 8px #7ed6df55);
}
.recruit-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--recruit-card-title-color);
}
.recruit-card p {
  font-size: 1rem;
  color: var(--recruit-card-text-color);
  margin-bottom: 10px;
}
.recruit-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.recruit-tag {
  background: linear-gradient(90deg, #439fd0 30%, #7ed6df 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 4px 0 rgba(67,159,208,0.10);
}
.recruit-action {
  margin-top: 18px;
}
.recruit-btn {
  background: linear-gradient(90deg, #439fd0, #42d392);
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 12px 38px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(67,159,208,0.10);
  transition: background 0.2s, color 0.2s;
}
.recruit-btn:hover {
  background: #222;
  color: #7ed6df;
}
@media (max-width: 900px) {
  .recruit-content {
    padding: 24px 4vw 24px 4vw;
  }
  .recruit-cards {
    gap: 16px;
  }
  .recruit-card {
    min-width: 140px;
    max-width: 98vw;
    padding: 18px 8px;
  }
}
@media (max-width: 600px) {
  .recruit-cards {
    flex-direction: column;
    align-items: center;
  }
  .recruit-card {
    width: 98vw;
    min-width: 0;
    max-width: 98vw;
    padding: 16px 4vw;
  }
  .recruit-intro h3 {
    font-size: 1.1rem;
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