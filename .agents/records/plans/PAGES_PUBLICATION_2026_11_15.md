# GitHub Pages publication

The user approved GitHub Pages as the sole documentation host on 2026-11-15, replacing the prior hosting decision. This record supersedes the hosting portions of the shared-navigation implementation and earlier publication plans. Historical evidence remains historical.

## Publication model

The Documentation workflow validates draft and PR candidates without deployment. A main push or explicit manual run on main deploys only after Documentation validation succeeds. The protected github-pages environment is main-only. The job uses the repository token and job-scoped OIDC identity to submit the existing immutable Pages artifact ID through the documented GitHub Pages REST API. It supports the exact retained artifact selected by trusted same-tree reuse without a second upload, unpacking, or rebuild. API synchronization remains independent.

GitHub Pages controls cache headers. Content-addressed navigation resources retain their identity across pages and are fetched on expansion. The user-facing navigation and complete API coverage are unchanged.

## Removal inventory

- Removed provider configuration: vercel.json and its ignore entry.
- Removed provider output nesting, staging/rename helper, domain-variable fallbacks, and provider-specific build admission logic.
- Replaced provider-only tests with Pages branch, artifact, size and stale-input checks.
- Rewrote root instructions, contribution guidance, publication tutorial and active delivery rules around a single publisher.
- Removed the configurable hosting origin and its workflow variable input; the canonical origin is https://wolfiora.github.io.
- Replaced the plain site ZIP upload with one pinned upload-pages-artifact action. The resulting archive is the preview and delivery artifact; it is retained for 90 days. Diagnostics retain 30 days.
- Historical decisions and reports are preserved, not treated as executable compatibility layers or current instructions.

## Verified configuration

Read-only authenticated GitHub checks confirmed Pages build_type=workflow, source main, and canonical URL https://wolfiora.github.io/InnoEngine.Docs/. The github-pages environment has a single main branch deployment policy. No DOCS_SITE_URL variable was found. No new hosting token is needed.

## External cutover

Disconnect the previous provider's Git repository integration before publishing the configuration removal. Existing Git credentials can read Pages settings but cannot manage GitHub App installations. The browser is currently in active use; it was not taken over. The user was asked to disconnect the Docs project under Settings > Git > Disconnect. No external project or deployment was deleted, and no production PR was automatically merged.

## Execution boundary

No local build, test suite or performance benchmark is requested. The final PR CI is the functional check. A passing PR cannot certify an actual Pages deployment; live publication follows the human main merge. Cross-run deployment of a reused artifact must likewise be reported from its actual execution rather than inferred from local code.
