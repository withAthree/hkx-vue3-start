<script setup lang="ts">
import { useGlobalStore } from '@/stores';

const globalStore = useGlobalStore();

const changeTheme = () => {
  globalStore.theme = globalStore.theme === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <n-layout>
    <!-- Header -->
    <n-layout-header bordered style="height: 60px;padding: 0 10px;">
      <div class="h-full flex justify-between items-center">
        header
        <n-button @click="changeTheme">
          切换主题
        </n-button>
      </div>
    </n-layout-header>

    <n-layout has-sider content-style="height: calc(100vh - 60px);">
      <!-- Sider -->
      <n-layout-sider content-style="padding: 10px;" bordered collapse-mode="width" :collapsed-width="0" :width="240" show-trigger="arrow-circle" :native-scrollbar="false">
        sider
      </n-layout-sider>
      <!-- Main -->
      <n-layout-content content-style="padding: 10px;" embedded>
        <n-card style="height:100%;overflow:hidden;" :bordered="false" content-class="p-10">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
