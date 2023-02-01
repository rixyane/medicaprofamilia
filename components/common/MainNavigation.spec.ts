import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import MainNavigation from './MainNavigation.vue';

test('mount component', () => {
  expect(MainNavigation).toBeTruthy();

  const initialState = {
    navigation: {
      items: [
        {
          id: 1,
          attributes: {
            label: 'Foo',
            link: '/foo',
            isExternalLink: false,
          },
        },
      ],
    },
  };
  const wrapper = mount(MainNavigation, {
    global: {
      plugins: [
        createTestingPinia({
          initialState,
        }),
      ],
    },
  });

  expect(wrapper.text()).toContain('Foo');
});
