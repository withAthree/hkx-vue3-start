<script setup lang="ts">
import { darkTheme, dateZhCN, lightTheme, zhCN } from 'naive-ui';
import { useGlobalStore } from '@/stores';

const globalStore = useGlobalStore();
const theme = computed(() => {
  return globalStore.theme === 'light' ? lightTheme : darkTheme;
});
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style>
</style>
