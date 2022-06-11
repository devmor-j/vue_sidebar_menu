<script setup lang="ts">
import { shallowRef } from 'vue';
import IconAngle from './icons/IconAngle.vue';
import IconEmail from './icons/IconEmail.vue';
import IconEmployeeGroup from './icons/IconEmployeeGroup.vue';
import IconExclamation from './icons/IconExclamation.vue';
import IconHome from './icons/IconHome.vue';

const isSidebarOpen = shallowRef<Boolean>(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<template>
  <div class="wrapper">
    <aside :vue:is-open="isSidebarOpen">
      <ul class="sidebar-head">
        <li>
          <img src="@/assets/logo.png" alt="logo" width="32" height="32">
        </li>
        <li>
          <button class="sidebar-toggle" :class="isSidebarOpen ? 'toggle-button' : ''">
            <IconAngle @click="toggleSidebar" />
          </button>
        </li>
      </ul>

      <ul>
        <li>
          <IconHome />
          <a href="/">Home</a>
        </li>
        <li>
          <IconExclamation />
          <a href="/about">About</a>
        </li>
        <li>
          <IconEmployeeGroup />
          <a href="/team">Team</a>
        </li>
        <li>
          <IconEmail />
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/colors' as clr;

$sidebar-width: 10rem;
$toggle-duration: 300ms;

aside {
  color: clr.$primary;
  background: clr.$bg-dark;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
  transition: all $toggle-duration;
  width: $sidebar-width;
}

aside[vue\:is-open=true] {
  width: 2 * $sidebar-width;
}

ul > li {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
}

img {
  object-fit: contain;
}

.sidebar-head {
  position: relative;
  padding-block-end: 4rem;
}

button {
  cursor: pointer;
  position: absolute;
  transition-duration: $toggle-duration;
  transition-property: transform, left, top;
  left: 0;
  top: 1rem;
  transform: translateX(0%) translateY(2rem) rotateZ(0deg);

  &.toggle-button {
    color: red;
    left: 100%;
    top: 0;
    transform: translateX(-100%) translateY(0rem) rotateZ(180deg);
  }
}
</style>
