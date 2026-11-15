# Sidebar and API editorial presentation

Implemented against Docs draft 23a5489aa51a3b122c21dc7c805aa5b7cf147316. Canonical tooling: 374776f4d7d55dcc3bda58a27dbf5b93fabc3656. API source facts and identities remain unchanged.

## Delivered behavior

- Shared lazy navigation uses detached subtree restoration, reversible grid animations, full-row highlights and centered controls. Top-level groups are chevron disclosures. Desktop width fits visible labels with an animated half-viewport cap; mobile retains its full-width menu.
- Canonical queries and the website share Synced, Outdated and Verified editorial states. API metadata uses one compact paragraph. The old generic API Tip renderer and styles are removed.
- All 17971 registered elements have generated and authoring frontmatter groups: 17965 XML-owned and 6 manual. All 6 manual bodies retain their pre-migration SHA-256 exactly. 6 existing manual fragments require review; none were falsely acknowledged.
- The explicit review operation preserves prose, updates the generated reviewed fingerprint and clears outdated after an author has reviewed the current contract. Invalid ownership, removed APIs and unchanged XML defaults are rejected.

## Evidence

- Engine documentation tooling: 136 passed, 0 failed, 0 skipped (bounded managed suite; no Native, product or performance matrix).
- Markdown presentation: 6 passed, including real renderer output for all three statuses.
- First sidebar CI run 43700576106: site build passed; 120 browser checks passed. Three viewport cases failed because the test used an ambiguous Engine label after expansion. The test now identifies exact category paths and retains all geometry, animation and overflow assertions.
- Final website/browser acceptance is recorded by the latest PR #12 CI run; this record does not promote the earlier failed run to success. Publication requires human merges into draft and then main.
