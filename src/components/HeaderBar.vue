<template>
  <div class="header-bar">
    <div class="header-bar-container">
      <div class="header-bar-content">
        <div class="logo">
          <p>新世界 NewWorld工作室</p>
        </div>

        <div class="content">
          <div class="nav-link">关于我们</div>
          <div class="nav-link">在线演示</div>
          <div class="nav-link">技术支持</div>
          <div class="nav-link">定制服务</div>
        </div>
        <!-- 汉堡菜单按钮，仅移动端显示 -->
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
      sidebarOpen: false
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
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.header-bar-container {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
}

.header-bar-content {
  width: 100%;
  max-width: 1200px;
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
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
}

.nav-link {
  font-size: 14px;
  cursor: pointer;
  padding: 6px 10px;
  transition: all 0.2s ease;
}

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

.sidebar-mask {
  display: none;
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
}
</style>