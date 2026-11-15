# Source summaries and editable API bodies

The documentation tooling revision is `dada0e3e8709909c55ef6b4f37f101bb2cd005bb`. Captured API source revisions and manifests are unchanged. Source XML summaries are now generated introductions for both XML-managed and manual pages; only other XML sections enter editable Markdown. Member and category table descriptions also use source summaries. Manual section headings are no longer shifted below Declaration.

The [manual migration ledger](api-summary-migration.json) records the five reviewed legacy summary introductions removed and hashes of the retained body bytes. The independent constructor explanation has no XML summary and remains unchanged. No manual body is automatically stripped during future synchronization.

Sidebar rows use equal left tree-line and right scrollport clearance. Adaptive width accounts for the reserved scrollbar gutter. The existing browser journeys now check that clearance and source summaries on manual pages.

The bounded engine documentation suite passed all 137 tests, including manual-body preservation, updated source summaries, section levels, table descriptions, malformed XML and transactional synchronization. The first migration attempt correctly refused publication after its binding changed during preparation; it made no partial content update. The retry freezes the final binding before synchronization.

Website, Linux preparation and browser results belong to the resulting Docs PR workflow. No full engine, Native, performance or stress matrix was run for this change. Publication remains a human draft-to-main merge.
