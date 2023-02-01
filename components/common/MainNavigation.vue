<template>
  <div>
    {{ navi.navigationMenu }}
  </div>

  <UniversalAccess />
</template>

<script setup lang="ts">
import { useNavigation } from '~~/stores/navigation';

const navi = useNavigation();
navi.get();
</script>
