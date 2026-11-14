/** Production origin comes from Vercel itself; local/CI previews need no hosting credentials. */
export function siteOrigin(env = process.env) {
  const configured = env.DOCS_SITE_URL || (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
  if (env.VERCEL === '1' && !configured) throw new Error('Vercel system environment variables must expose the production domain.');
  const url = new URL(configured || 'https://wolfiora.github.io');
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('Documentation site URL must be an HTTPS origin without credentials or a path.');
  }
  return url.origin;
}

export function assertPublicationBranch(env = process.env) {
  if (env.VERCEL === '1' && (env.VERCEL_GIT_COMMIT_REF !== 'main' || env.VERCEL_ENV !== 'production')) {
    throw new Error('Vercel publication requires the main production branch. Draft and feature branches are CI previews only.');
  }
}
