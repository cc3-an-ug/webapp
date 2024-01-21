const projectId = process.env.SANITY_PROJECT_ID || '';
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = process.env.SANITY_API_VERSION || '2023-05-03';

export const SanityConfig = {
  dataset,
  projectId,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
};
