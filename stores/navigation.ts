import { defineStore, acceptHMRUpdate } from 'pinia';

export interface NavigationState {
  items: Array<{
    id: number;
    attributes: {
      label: string;
      isExternalLink: boolean;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      link: string;
    };
  }> | null;
}

export const useNavigation = defineStore('navigation', {
  state: (): NavigationState => ({
    items: null,
  }),

  getters: {
    navigationMenu: ({ items }) =>
      items?.map(({ attributes }) => ({
        label: attributes.label,
        link: attributes.link,
        isExternalLink: attributes.isExternalLink,
      })),
  },

  actions: {
    get() {
      if (!this.items) {
        useFetch<NavigationState['items']>('/api/content', {
          query: { pick: 'navigation-items' },
        }).then(({ data }) => {
          this.items = data.value;
        });
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigation, import.meta.hot));
}
