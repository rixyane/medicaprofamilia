import UniversalAccess from './UniversalAccess.vue';
export default {
  title: 'UniversalAccess',
  component: { UniversalAccess },
  argTypes: {},
};

const Template = () => ({
  components: { UniversalAccess },
  setup() {
    return {};
  },
  template: '<UniversalAccess />',
});

export const Normal = Template.bind({});
