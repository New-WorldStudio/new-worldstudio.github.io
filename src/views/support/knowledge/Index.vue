<!-- 共享知识库 -->
<template>
  <div class="knowledge-doc-layout">
    <!-- 左侧目录 -->
    <aside class="doc-sidebar">
      <div class="sidebar-title">知识目录</div>
      <ul class="sidebar-list">
        <li
          v-for="(item, idx) in sidebar"
          :key="idx"
          :class="{ active: idx === activeIndex }"
          @click="selectSection(idx)"
        >
          {{ item.title }}
        </li>
      </ul>
    </aside>

    <!-- 中间内容 -->
    <main class="doc-content">
      <h1>{{ currentSection.title }}</h1>
      <div v-html="currentSection.content"></div>
    </main>

    <!-- 右侧锚点/目录（可选） -->
    <nav class="doc-toc">
      <div class="toc-title">本页目录</div>
      <ul>
        <li v-for="(anchor, idx) in currentSection.anchors" :key="idx">
          <a :href="'#' + anchor.id">{{ anchor.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "KnowledgeDoc",
  data() {
    return {
      sidebar: [
        { title: "快速入门", content: "<h2 id='intro'>快速入门</h2><p>这里是快速入门内容...</p>", anchors: [{ id: "intro", text: "快速入门" }] },
        { title: "常见问题", content: "<h2 id='faq'>常见问题</h2><p>这里是FAQ内容...</p>", anchors: [{ id: "faq", text: "常见问题" }] },
        { title: "进阶技巧", content: "<h2 id='advanced'>进阶技巧</h2><p>这里是进阶内容...</p>", anchors: [{ id: "advanced", text: "进阶技巧" }] }
      ],
      activeIndex: 0
    }
  },
  computed: {
    currentSection() {
      return this.sidebar[this.activeIndex];
    }
  },
  methods: {
    selectSection(idx) {
      this.activeIndex = idx;
    }
  }
}
</script>

<style scoped>
.knowledge-doc-layout {
  display: flex;
  min-height: 80vh;
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;
  gap: 32px;
}
.doc-sidebar {
  width: 220px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 24px 0 24px 24px;
  box-shadow: 0 2px 12px rgba(67,159,208,0.04);
  font-size: 1rem;
  height: fit-content;
}
.sidebar-title {
  font-weight: bold;
  margin-bottom: 18px;
  color: #439fd0;
}
.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-list li {
  padding: 8px 0 8px 8px;
  cursor: pointer;
  border-radius: 6px 0 0 6px;
  color: #222;
  transition: background 0.2s, color 0.2s;
}
.sidebar-list li.active,
.sidebar-list li:hover {
  background: #e6f7ff;
  color: #439fd0;
}
.doc-content {
  flex: 1;
  min-width: 0;
  background: #fff;
  border-radius: 12px;
  padding: 32px 36px;
  box-shadow: 0 2px 12px rgba(67,159,208,0.04);
}
.doc-content h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #222;
}
.doc-content h2 {
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem 0;
  color: #439fd0;
}
.doc-toc {
  width: 180px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 24px 0 24px 18px;
  box-shadow: 0 2px 12px rgba(67,159,208,0.04);
  font-size: 0.98rem;
  height: fit-content;
  position: sticky;
  top: 32px;
}
.toc-title {
  font-weight: bold;
  margin-bottom: 12px;
  color: #439fd0;
}
.doc-toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.doc-toc li {
  margin-bottom: 8px;
}
.doc-toc a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
}
.doc-toc a:hover {
  color: #439fd0;
}
@media (max-width: 1000px) {
  .knowledge-doc-layout {
    gap: 12px;
  }
  .doc-sidebar, .doc-toc {
    display: none;
  }
  .doc-content {
    padding: 18px 6px;
  }
}
</style>