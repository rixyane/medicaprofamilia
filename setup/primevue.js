import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

export const primeVueSetup = app => {
  app.use(PrimeVue, { ripple: true });
  // eslint-disable-next-line vue/no-reserved-component-names
  app.component('Button', Button);
  app.component('OverlayPanel', OverlayPanel);
};
