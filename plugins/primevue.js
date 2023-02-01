import { defineNuxtPlugin } from '#app';
import { primeVueSetup } from '../setup/primevue';

export default defineNuxtPlugin(nuxtApp => {
  primeVueSetup(nuxtApp.vueApp);
});
