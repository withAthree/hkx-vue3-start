<script setup lang="ts">
import Main from './Main.vue';
</script>

<template>
  <div class="layout">
    <div class="header">header</div>
    <div class="left-panel">left panel</div>
    <div class="right-panel">right panel</div>
    <div class="main">
      <Main />
    </div>
  </div>
</template>

<style scoped>
@define-mixin border $color {
  border: 1px solid $color;
}

.layout {
  display: grid;
  grid-template-columns: [c1] 200px [c2] auto [c3] 200px [c4];
  grid-template-rows: [r1] 60px [r2] auto [r3] auto [r4];
  row-gap: 20px;
  column-gap: 20px;

  width: 100vw;
  height: 100vh;

  .header {
    grid-column: c1 / c4;
    grid-row: r1 / r2;
    @mixin border black;
  }

  .left-panel {
    grid-column: c1 / c2;
    grid-row: r2 / r4;
    @mixin border black;
  }

  .right-panel {
    grid-column: c3 / c4;
    grid-row: r2 / r4;
    @mixin border black;
  }

  .main {
    grid-column: c2 / c3;
    grid-row: r2 / r4;
    @mixin border black;
  }
}
</style>
