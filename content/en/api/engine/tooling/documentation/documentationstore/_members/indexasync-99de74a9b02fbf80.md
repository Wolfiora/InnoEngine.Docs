---
uid: api.99de74a9b02fbf808cf018f9d0a5c1b09a7c4552b893c5d60db2ad8d293c51e0
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationStore.IndexAsync(System.String,System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 514acb713816e972a8cada3e29fb38a161fe3a00c74a00640bae4cc554b4fb62
title: "IndexAsync"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Explicitly scans a Docs checkout and publishes a consistent generation using reusable parsed pages.

**Parameter `workspaceRoot`:** Absolute workspace owning the cache registration; may be the engine or Docs checkout.

**Parameter `documentationRoot`:** Explicit Docs checkout containing content/en and reference/engine.lock.json. No sibling path is inferred.

**Parameter `cacheRoot`:** Exclusive documentation cache boundary beneath workspaceRoot, outside the authored content tree.

**Parameter `cancellationToken`:** Cancels scanning, waiting and preparation before atomic selection. The previous generation remains readable.

**Returns:** The published snapshot identity and the number of parsed and reused pages; source API remains unverified. Query-only changes rebuild the index while reusing pages whose parser, source and payload identities match.

## Remarks

Independent page preparation uses at most four workers and retains each page's exclusive lease. Catalog validation and generation publication occur only after all workers finish. Worker parsing and registration timing totals can overlap; PagePreparation reports their enclosing wall time.

**Exception `T:System.IO.IOException`:** Inputs change during preparation, paths escape ownership, or a reference, contract or inclusion is invalid.

**Exception `T:System.IO.InvalidDataException`:** Reference hashes, contexts, project ownership or required catalog relationships are inconsistent.

**Exception `T:System.OperationCanceledException`:** Preparation is canceled. Completed immutable payloads remain registered for safe maintenance.
