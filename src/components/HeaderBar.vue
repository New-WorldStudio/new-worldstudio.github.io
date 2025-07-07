<template>
  <div class="header-bar">
    <div class="header-bar-container">
      <div class="header-bar-content">
        <div class="logo">
          <p>新世界 NewWorld工作室</p>
        </div>

        <div class="content">
          <div
            class="nav-link"
            v-for="(item, index) in navMenu"
            :key="index"
            :class="{'has-dropdown': hasChildrenMenu(item)}"
          >
            <span class="nav-label">
              {{ item.text }}
              <i v-if="hasChildrenMenu(item)" class="bx bxs-chevron-down"></i>
            </span>
            <div class="dropdown-menu" v-if="hasChildrenMenu(item)">
              <div
                class="dropdown-item"
                v-for="(child, cidx) in item.children"
                :key="cidx"
                @click="onMenuClick(child)"
              >
                <router-link :to="child.link">
                  {{ child.text }}
                  <span v-if="child.link" class="arrow">↗</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="vertical-dividing-line"></div>

          <!-- 主题切换按钮 -->
          <div class="theme-toggle-button" @click="toggleTheme">
            <div class="toggle-slider" :class="{ dark: isDark }">
              <span class="toggle-icon">
                <svg v-if="!isDark" width="16" height="16" viewBox="0 0 24 24"><!-- sun --><circle cx="12" cy="12" r="5" fill="#f7c948"/><g stroke="#f7c948" stroke-width="2"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24"><!-- moon --><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#888"/></svg>
              </span>
            </div>
          </div>

          <div class="vertical-dividing-line"></div>

          <!-- 社交媒体快捷链接 -->
          <div class="social-links">
            <a id="gitee" href="https://gitee.com/New-WorldStudio" target="_blank" class="social-link" aria-label="Gitee">
              <img src="/image/gitee.png" alt="">
            </a>
            <a id="github" href="https://github.com/New-WorldStudio" target="_blank" class="social-link" aria-label="GitHub">
              <img src="/image/github.png" alt="">
            </a>
          </div>
        </div>
        <!-- 菜单按钮，仅移动端显示 -->
        <div class="menu-btn" @click="sidebarOpen = true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 侧边栏和遮罩 -->
    <div v-if="sidebarOpen" class="sidebar-mask" @click="sidebarOpen = false"></div>
    <div class="sidebar" :class="{ open: sidebarOpen }">
      <div class="sidebar-header">
        <span>导航</span>
        <button class="close-btn" @click="sidebarOpen = false">×</button>
      </div>
      <div class="sidebar-links">
        <div class="nav-link" @click="sidebarOpen = false">关于我们</div>
        <div class="nav-link" @click="sidebarOpen = false">在线演示</div>
        <div class="nav-link" @click="sidebarOpen = false">技术支持</div>
        <div class="nav-link" @click="sidebarOpen = false">定制服务</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data(){
    return {
      sidebarOpen: false,
      isDark: false,

      navMenu: [
        {
          text: '关于我们',
          link: '#',
          children: []
        },
        {
          text: '在线演示',
          link: '#',
          children: [
            {
              text: 'Web网站',
              link: '#',
            },
            {
              text: '小程序',
              link: '#'
            },
            {
              text: '移动端app',
              link: '#'
            }
          ]
        },
        {
          text: '技术支持',
          link: '#',
          children: []
        },
        {
          text: '定制服务',
          link: '#',
          children: [
            {
              text: 'Web网站',
              link: '#'
            },
            {
              text: '小程序',
              link: '#'
            },
            {
              text: '移动端app',
              link: '#',
            }
          ]
        },
        {
          text: '友情链接',
          link: '#',
          children: [
            {
              text: 'EatFan的个人博客',
              link: 'https://blog.eatfan.top'
            },
            {
              text: '交换友情链接？',
              link: '#'
            }
          ]
        },
        {
          text: '联系我们',
          link: '#',
          children: []
        }
      ]
    }
  },
  methods: {
    // 判断是否有子菜单
    hasChildrenMenu(item) {
      return item.children.length > 0 && Array.isArray(item.children);
    },
    onMenuClick(child) {
      if (child.link) {
        window.open(child.link, '_blank');
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      // this.applyTheme();
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    }
  }
}
</script>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  /*box-shadow: 0 1px 4px rgba(0,0,0,0.1);*/
}

.header-bar-container {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
}

.header-bar-content {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.logo {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo p {
  font-size: 17px;
  font-weight: bold;
  white-space: nowrap;
}

.content {
  flex-grow: 1;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
}

.nav-link {
  position: relative;
  font-size: 14px;
  cursor: pointer;
  padding: 6px 10px;
  transition: all 0.2s ease;
}

/* 菜单按钮 */
.menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  transition: background 0.2s;
  border: none;
  outline: none;
}
.menu-btn:hover {
  background: rgba(0,0,0,0.10);
}


.menu-btn span {
  display: block;
  height: 2.5px;
  width: 22px;
  background: #222;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  transition: all 0.2s;
}

/* 侧边栏遮罩层样式 */
.sidebar-mask {
  display: none;
}

/* 侧边栏样式 */
.sidebar {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0,0,0,0.08);
  z-index: 1001;
  transform: translateX(100%);
  transition: transform 0.2s;
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-weight: bold;
  font-size: 16px;
}
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
}
.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
}
.sidebar .nav-link {
  font-size: 16px;
  padding: 8px 0;
  border-radius: 4px;
  transition: background 0.2s;
}
.sidebar .nav-link:hover {
  background: #f5f5f5;
}


.has-dropdown:hover .dropdown-menu,
.has-dropdown:focus-within .dropdown-menu {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 160px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  border-radius: 12px;
  padding: 8px 0;
  margin-top: 0;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.18s;
}

.dropdown-item {
  padding: 5px 15px 5px 15px;
  font-size: 14px;
  color: #090909;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  transition: background 0.18s;
}

.dropdown-item a {
  text-decoration: none;
  color: #090909;
  padding: 6px;
  border-radius: 8px;
}

.dropdown-item a:hover {
  background: #f5f5f5;
  color: #439fd0;
}

.dropdown-divider {
  height: 1px;
  background: #eee;
  margin: 6px 0;
}

.arrow {
  margin-left: 6px;
  font-size: 13px;
  color: #888;
}

/* 让有下拉菜单的nav-link为flex列布局，保证下拉菜单紧贴主菜单 */
.nav-link.has-dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.nav-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
}

.nav-label:hover {
  color: #439fd0;
}

/* 垂直分割线 */
.vertical-dividing-line {
  width : 1px;
  height: 26px;
  background: #cecbcb;
}

/* 主题切换按钮 */
.theme-toggle-button {
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background: #ececec;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  box-sizing: border-box;
  position: relative;
  padding: 0 2px;
}
.theme-toggle-button:hover {
  background: #e0e0e0;
}
.toggle-slider {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  position: absolute;
  left: 2px;
  top: 1px;
  transition: left 0.2s, background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toggle-slider.dark {
  left: 20px;
  background: #222;
}
.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.social-links a {
  width: 20px;
  height: 20px;
}

#gitee {
  margin-right: 7px;
}

#github {
  margin-left: 7px;
}

.social-links a img {
  width: 100%;
  height: 100%;
}

/* 小屏设备适配 */
@media (max-width: 768px) {
  .header-bar-content {
    display: flex;
    flex-direction: row;
    height: 64px;
    padding: 12px 8px;
  }

  .logo {
    display: flex;
    width: auto;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 0;
  }
  .logo p {
    font-size: 17px;
    font-weight: bold;
    white-space: nowrap;
    margin: 0;
  }

  .content {
    display: none;
  }

  .menu-btn {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  .sidebar-mask {
    display: block;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.3);
    z-index: 1000;
  }
  .sidebar {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 220px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0,0,0,0.08);
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.2s;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    font-weight: bold;
    font-size: 16px;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    line-height: 1;
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 16px;
  }
  .sidebar .nav-link {
    font-size: 16px;
    padding: 8px 0;
    border-radius: 4px;
    transition: background 0.2s;
  }
  .sidebar .nav-link:hover {
    background: #f5f5f5;
  }

  .vertical-dividing-line {
    display: none;
  }
}

</style>