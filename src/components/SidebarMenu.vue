<script setup lang="ts">
import IconAngle from './icons/IconAngle.vue';
import IconEmail from './icons/IconEmail.vue';
import IconEmployeeGroup from './icons/IconEmployeeGroup.vue';
import IconExclamation from './icons/IconExclamation.vue';
import IconHome from './icons/IconHome.vue';

</script>

<template>
  <div class="wrapper">
    <aside>
      <ul>
        <li>
          <img src="@/assets/logo.png" alt="logo" width="32" height="32">
        </li>
        <li>
          <button class="sidebar-toggle">
            <IconAngle />
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

aside {
  color: clr.$primary;
  background: clr.$bg-dark;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
}

ul > li {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
}

button {
  cursor: pointer;
}
</style>
