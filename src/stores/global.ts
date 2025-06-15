import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const theme = ref<'light' | 'dark'>('light');

  return { theme };
}, {
  persist: true,
});
