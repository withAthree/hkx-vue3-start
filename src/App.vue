<script setup lang="ts">
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </n-config-provider>
</template>

<style scoped>

</style>
