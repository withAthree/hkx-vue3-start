import { type GlobalTheme, darkTheme, lightTheme } from 'naive-ui';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useConfigStore = defineStore('config', () => {
  type Theme = 'dark' | 'light';

  const theme = ref<Theme>('light');

  const ThemeEnum:Record<Theme, GlobalTheme> = {
    dark: darkTheme,
    light: lightTheme,
  };

  const getTheme = computed(() => ThemeEnum[theme.value]);

  function setTheme(type: Theme) {
    theme.value = type;
  }

  return {
    theme,
    getTheme,
    setTheme,
  };
});
