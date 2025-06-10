<script setup lang="ts">
</script>

<template>
  <n-config-provider>
    <router-view v-slot="{ Component, route }">
      <transition>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </n-config-provider>
</template>

<style scoped>
</style>
