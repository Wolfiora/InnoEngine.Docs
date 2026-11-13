---
uid: api.6dd973245d95d7038f73fcd177967279090daf52c91665cf8cf746040f946696
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationCommand.ExecuteAsync(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 8ca5d34cc64e702506aa343878c76af5d3a44879d182f8c04541aceedd015e00
title: "ExecuteAsync"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Explicitly indexes a selected checkout or queries an already prepared immutable snapshot.

**Parameter `arguments`:** index, search, read, symbol, resource, status or catalog followed by engine-root, cache-root, docs-root, snapshot, source-tree, query, page, project, surface, scope, section, id, offset, limit and format as applicable. Index requires docs-root. Read-only commands reject docs-root rather than implicitly refreshing mutable content. Reads optionally accept evidence-file and evidence-sha256 selected by an authenticated preparation boundary. api-plan, api-check and api-sync accept only docs-root; they validate captured facts and plan, audit or synchronize registered API prose. Manual prose is preserved, while XML-managed fragments follow the captured XML documentation. api-package and api-import accept docs-root and package, explicitly transferring complete hashed API facts. Import runs only in a publisher-owned checkout; remote origin, branch ancestry and atomic Git publication are the protected workflow's responsibility. Ordinary queries never import or synchronize content.

**Parameter `cancellationToken`:** Cancels preparation or reading while preserving the previous complete generation.

**Returns:** Zero for valid results including empty searches; two for missing, ambiguous or mismatched targets. Partial results have explicit continuations and do not assert contract completeness.

**Exception `T:System.ArgumentException`:** Options are absent, duplicated or invalid for the operation.

**Exception `T:System.IO.IOException`:** The selected source or snapshot cannot be safely read or published.

**Exception `T:System.OperationCanceledException`:** The caller cancels the operation.
