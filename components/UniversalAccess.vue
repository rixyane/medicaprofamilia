<template>
  <Button
    type="button"
    icon="fa-solid fa-universal-access"
    aria-controls="overlay_panel"
    aria-haspopup="true"
    @click="toggle"
  />

  <OverlayPanel
    id="overlay_panel"
    ref="universalAccessPanel"
    append-to="body"
    :show-close-icon="true"
    style="width: 450px"
    :breakpoints="{ '960px': '75vw' }"
  ></OverlayPanel>
</template>

<script setup lang="ts">
import OverlayPanel from 'primevue/overlaypanel';

const universalAccessPanel = ref<OverlayPanel | null>(null);
const toggle = (event: Event) => {
  universalAccessPanel.value.toggle(event);
};
</script>

<style scoped>
.p-button {
  @apply bg-light;
}
</style>
