<script setup lang="ts">
import { useConfigStore } from '@/stores/configStore';

const configStore = useConfigStore();

function toggleTheme() {
  configStore.setTheme(configStore.theme === 'light' ? 'dark' : 'light');
}
</script>

<template>
  <div>
    <n-button type="primary" @click="toggleTheme">Home</n-button>
  </div>
</template>

<style scoped></style>
