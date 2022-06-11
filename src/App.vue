<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue';

</script>

<template>
  <div id="root">
    <SidebarMenu />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
</style>
