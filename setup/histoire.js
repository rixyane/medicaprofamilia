import '../assets/styles/tailwind.css';
import '../assets/styles/main.css';
import { createPinia } from 'pinia';
import { defineSetupVue3 } from '@histoire/plugin-vue';
import { primeVueSetup } from './primevue';

export const setupVue3 = defineSetupVue3(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  primeVueSetup(app);
});
