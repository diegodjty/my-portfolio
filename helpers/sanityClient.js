import { createClient } from 'next-sanity';
const client = createClient({
  projectId: '81mtsuyo',
  dataset: 'production',
  apiVersion: '2023-02-01',
  useCdn: false,
});

export default client;
