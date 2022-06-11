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
          <button>
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
</style>
