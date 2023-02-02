<template>
  <nav
    class="flex items-center justify-between max-w-[1440px] mx-auto px-5 lg:px-16 py-6"
  >
    <ul class="flex -ml-8">
      <li v-for="(item, idx) in navi.navigationMenu" :key="idx">
        <a v-if="item.isExternalLink" :href="item.link" target="_blank">
          <VRuntimeTemplate :template="getMenuItemTmpl(item.label)" />
        </a>
        <NuxtLink v-else :to="item.link" active-class="text-secondary">
          <VRuntimeTemplate :template="getMenuItemTmpl(item.label)" />
        </NuxtLink>
      </li>
    </ul>

    <UniversalAccess />
  </nav>
</template>

<script setup lang="ts">
import VRuntimeTemplate from 'vue3-runtime-template';
import { useNavigation } from '~~/stores/navigation';

const navi = useNavigation();
navi.get();

const getMenuItemTmpl = (label: String) =>
  `<div class="px-8 py-3 uppercase font-bold">${label}</div>`;
</script>
