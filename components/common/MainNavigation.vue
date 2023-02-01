<template>
  <div class="flex items-center justify-between max-w-[1440px] mx-auto px-16 py-6">
    <div>
      {{ navi.navigationMenu }}
    </div>

    <UniversalAccess />
  </div>
  
</template>

<script setup lang="ts">
import { useNavigation } from '~~/stores/navigation';

const navi = useNavigation();
navi.get();
</script>
