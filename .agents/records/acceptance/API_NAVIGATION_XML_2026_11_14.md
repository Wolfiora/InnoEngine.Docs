# Linked API navigation and source XML layout

## Behavior

- All sidebar disclosures start closed, including the active path. Only explicit reader choices restore open state across navigation.
- Canonical category labels navigate to their own page; the arrow independently toggles children. Registered home entries are consumed by the group label, not repeated below it.
- Engine categories and Scripting Scopes include alphabetically sorted types, selected by exact type symbols in the canonical catalog. Nested type names retain their declaring chain. Member links remain in the type's table.
- XML summaries appear below the title. Project/API/Scope metadata appears immediately above inheritance. Source links remain above the footer editing link.
- XML tags produce actual Markdown sections. Canonical composition preserves their heading levels, and independent symbol queries include the complete explanation or an explicit continuation.

## Input and ownership

The source API captures remain pinned to `6eca1055adf859efd335bccb7761552ec5de9fd6`. The tooling binding advances to `9ef445a6b918e2f20e942b5b72852819b29eb7e1`.

Synchronization covers 17,971 symbols and changes 6,728 XML-managed fragments. All six manual fragments were hashed before and after synchronization and remain byte-identical. No API identities, source declarations, source captures or public engine behavior were changed.

The first local synchronization rejected a tooling-binding change during its preparation, before any mutation. It is retained in the engine's `api-layout-sync.log`. After the binding was fixed, `api-layout-sync-02.log` records the successful transaction. This was an input correction, not a retry of an unchanged failure.

## Verification

Engine documentation tooling: 132 tests passed. The first regression exposed an incomplete symbol read after moving the summary; the final implementation and exact failure are recorded in the engine acceptance record.

Website tooling: 158 Node tests passed. Final Astro diagnostics reported no errors or warnings (seven existing hints). Astro generated all 18,502 pages and the complete Pagefind search index. The final rendered-projection report is retained in `artifacts/site-build.json` and reported on the pull request; generation alone is not a passed integrity sweep or deployment evidence.

All 117 unique browser cases passed across desktop, tablet and mobile: 15 cases in `api-layout-focus-01.json`, 101 in `api-layout-remaining-01.json`, and the corrected mobile no-script case in `api-layout-noscript-final.json`. Initial no-script tests incorrectly clicked the category link to expand it, then assumed Starlight's JavaScript-controlled mobile menu was available without JavaScript. The tests now exercise the native desktop arrow and the mobile category-table fallback. Their original failures and traces remain retained; unchanged successful cases were not rerun. Visual review covered the actual summary/metadata placement, linked category rows, member tables and mobile wrapping.

Local logs and screenshots use `artifacts/api-layout-*` and `artifacts/browser/api-layout-*`. No Native product, full engine matrix, stress or performance acceptance is part of this presentation change. Draft validation does not publish production; a human draft-to-main merge remains required for Vercel publication.
