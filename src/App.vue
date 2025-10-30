<script setup lang="ts">
import { useConfigStore } from '@/stores/configStore';

const configStore = useConfigStore();
</script>

<template>
  <n-config-provider :theme="configStore.getTheme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
