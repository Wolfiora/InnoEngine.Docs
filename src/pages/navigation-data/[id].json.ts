import type { APIRoute } from 'astro';
import { navigation } from '../../../scripts/site-navigation.mjs';
export const prerender = true;
export function getStaticPaths() {
  return [...navigation.chunks].map(([id, body]) => ({ params: { id }, props: { body } }));
}
export const GET: APIRoute = ({ props }) => new Response(props.body, {
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=31536000, immutable' },
});
