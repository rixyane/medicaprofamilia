interface ContentResponse {
  data: any;
  meta: Object;
  error?: Object;
}

export default defineEventHandler(async event => {
  const { pick } = getQuery(event);
  const { apiUrl, apiToken } = useRuntimeConfig();

  const { data } = await $fetch<ContentResponse>(`${apiUrl}${pick}`, {
    headers: [['authorization', `Bearer ${apiToken}`]],
  });

  return data;
});
