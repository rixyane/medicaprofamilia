<template>
  <header>
    <CommonMainNavigation />
  </header>
  <slot />
  <footer></footer>
</template>

<script setup lang="ts">
const route: string = useRoute().fullPath;
console.log(route);
</script>
