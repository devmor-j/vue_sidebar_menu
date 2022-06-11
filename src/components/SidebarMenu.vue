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

      <span :transparent="!isSidebarOpen">Menu</span>

      <ul>
        <li>
          <IconHome />
          <Transition name="fade">
            <a href="/" v-show="isSidebarOpen">Home</a>
          </Transition>
        </li>
        <li>
          <IconExclamation />
          <Transition name="fade">
            <a href="/about" v-show="isSidebarOpen">About</a>
          </Transition>
        </li>
        <li>
          <IconEmployeeGroup />
          <Transition name="fade">
            <a href="/team" v-show="isSidebarOpen">Team</a>
          </Transition>
        </li>
        <li>
          <IconEmail />
          <Transition name="fade">
            <a href="/contact" v-show="isSidebarOpen">Contact</a>
          </Transition>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/colors' as clr;

$sidebar-width: 4rem;
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
  width: 3 * $sidebar-width;
}

ul > li {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  padding-block-end: 1rem;
}

img {
  object-fit: contain;
}

li {
  min-width: fit-content;
}

.sidebar-head {
  position: relative;
  // padding-block-end: 4rem;
}

span {
  padding-block-end: 1rem;
  user-select: none;
  pointer-events: none;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.125ch;
  transition: opacity $toggle-duration;
}

span[transparent=true] {
  opacity: 0;
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

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity, transform;
  transition-duration: $toggle-duration;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
