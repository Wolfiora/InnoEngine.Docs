# Vercel Git deployment

Date: 2026-11-14. Approved by the user after comparing artifact upload with direct Git import.

## Decision and reason

Use Vercel Git integration for main builds and hosting. Keep GitHub Actions as the required PR acceptance gate. The user wants web-only setup without deployment tokens, team/project IDs, CLI linking or placeholder uploads. The persistent draft branch and human merge decision remain unchanged.

This supersedes the exact-artifact-upload requirement for the documentation website only. Engine releases still use their original verified-product policy. Vercel rebuilds the accepted source using the same pinned documentation model and renderer; its files must not be described as the identical retained GitHub artifact. Vercel does not wait for post-merge Actions. Current-base required checks on main provide the gate.

## Implementation boundaries

- One Node build entry prepares a missing/stale canonical catalog, renders Astro/Starlight and validates the output. CI supplies selected compiler receipts to that same post-build validation instead of rescanning every HTML page a second time.
- The explicit preparation command calls the existing managed documentation library through a small C# adapter. SDK selection is exact, downloaded archives are SHA-512 checked, real managed project dependencies are present, and missing references are errors. Native submodules/products are not prepared.
- GitHub keeps example compilation/reuse, browser journeys, neutral editorial reporting and protected required aggregation. A Linux catalog preparation check exercises the hosting prerequisite without another full website build.
- Vercel Git configuration allows main only, with a second main/production guard in the build. The host supplies its production origin. Existing base-path links remain valid; output is moved into the base directory without copying the complete site.
- Source API facts, Markdown element ownership, script scopes and engine behavior are unchanged.

## Removed responsibilities

The retired publish workflow, Vercel CLI deployment dependency package, prebuilt-upload adapter, main-site artifact selector and PowerShell catalog bootstrap are deleted. Authenticated example receipt selection remains under its own name; checked GitHub site archives remain evidence. Historical records are preserved.

## External boundary

The user must authorize Vercel access to the Docs repository and merge the publication PR. The fixed deployment domain and provider account quotas are external inputs. A 10 GB storage allowance does not itself certify a particular deployment's size. Do not claim actual deployment until Vercel reports success and the public site is inspected. The old Pages site is not automatically deleted during migration.
