# Vercel Git setup implementation checkpoint

Base: Docs draft `1791ea79ea0f72347b6631caf451b1bbe4db0e6e`. Engine tooling remains pinned to `cf1e7e133d8b471eb1926e51d616acf3d49afe31`; the captured API source and all registered API Markdown remain unchanged. The user approved direct Git import and requested a draft-to-main publication PR, not automatic merging.

## Functional evidence at the implementation checkpoint

- Node tool suite: 157 passed, zero failures/skips (`artifacts/vercel-git-node-03.log`). The final build/workflow boundary subset also passed all 16 cases (`artifacts/vercel-git-boundaries-final.log`).
- Independent managed bootstrap: seven actual managed projects restored/built, zero warnings/errors. API checking and canonical indexing completed; 18,502 pages were published, three parsed and 18,499 reused (`artifacts/vercel-git-prepare-05.log`). No Native preparation ran.
- Snapshot: `17e9fd9a9626dd5fd2791519ef78c7133467384d8fe681d155d87356ff2155bc`; content identity: `839c4f38ce2939cc61f3ab4020bc0128947b946bdfcbefebd4ee1f5698c38605`; 228 project entries.
- Astro check: zero errors, zero warnings, seven informational hints (`artifacts/vercel-git-astro-01.log`).
- Rule authority, original mapping, actual loading, routing, budgets and negative cases passed (`artifacts/vercel-git-rules-01.log`). Eight inherited units retain their original provenance, with a 14,890-byte selected instruction set.
- Production-mode local rendering and Pagefind completed for all 18,502 pages. Final projection/browser results and hosted CI are reported on the publication PR; rendering alone is not complete acceptance.
- Vercel configuration matched the downloaded official configuration schema's constraints. The installed validator does not include its draft-04 meta-schema; only meta-schema self-validation was disabled for this local check (`artifacts/vercel-git-schema-02.log`).

Local executable-example receipts from an earlier tooling identity were correctly rejected, not counted as current passes. GitHub retains the required authenticated receipt selection/compilation and complete example reconciliation. The new build checks rendered HTML once and consumes those exact receipts when invoked by CI.

## Failures preserved and corrected

The first two public-source fetches failed on this workstation's direct network path; the existing local proxy succeeded. The initial sparse source selection omitted transitive managed projects. The final selection makes the managed source roots available and treats MSB9008 as an error. An overlapping preparation attempt was rejected by the workspace lock. A catalog whose input pages changed during local authoring was rejected, leaving the earlier snapshot selected; the stable subsequent preparation passed. First logs remain under the task's artifact prefixes.

## Verified repository settings

Read on 2026-11-14: main requires current-base `Documentation validation`, discussion resolution and a PR. Active ruleset `27199657` has no bypass actors, permits merge commits only, prevents force-push/deletion, and requires zero reviewer approvals. No protection was weakened by this change.

## Removed mechanisms and preserved responsibilities

Removed: `.github/workflows/publish.yml`, `.github/deployment/package.json` and lockfile, `scripts/vercel-output.mjs`, the main-site selector in `scripts/publication-source.mjs`, the PowerShell-only catalog bootstrap, and tests solely for those retired transports.

Preserved: API synchronization, per-element manual ownership, shared canonical query/composition, source/license provenance, example compilation and trusted reuse, neutral editorial reporting, browser verification, checked-site evidence archives and manual main merge. The remaining trusted-example selector has its own name and cannot select site artifacts. No engine runtime/API or other session files were modified.

The [approved deployment decision](../decisions/VERCEL_GIT_DEPLOYMENT.md) supersedes exact-site-artifact upload. Vercel builds accepted main separately; the site must not claim to be the identical GitHub build artifact.

## External completion boundary

Vercel authorization/import, the human main merge and actual production deployment remain external actions. This checkpoint does not claim a live Vercel site or certified account quotas. Follow the [web-only setup guide](../../../content/en/contributing/publish-documentation.md). No performance/stress matrix, Native acceptance or engine product build was requested or performed. Task tests clean their temporary fixtures; stable current tooling/index output and first-failure evidence remain owned under artifacts. C: retained approximately 56 GiB free during acceptance.
