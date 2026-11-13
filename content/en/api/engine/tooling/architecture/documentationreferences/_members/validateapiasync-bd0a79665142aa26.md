---
uid: api.bd0a79665142aa26041a9b19adb10c72f8bae5ab63e9d481a3f4fdeff15876cb
symbol: "engine:Inno.Tooling.Architecture:M:Inno.Tooling.Architecture.DocumentationReferences.ValidateApiAsync(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: fd3be6fbef389218f6d9b85a7eaf1df8c461499c6db2dd311a92abc974f62cfe
title: "ValidateApiAsync"
kind: api
owners: [Inno.Tooling.Architecture]
apiSurface: source-clr
---

Compares explicitly selected reference manifests with one freshly evaluated source compilation batch. Declaration, XML, constant and inheritance changes are checked without building products or parsing Markdown.

**Parameter `arguments`:** Required engine-root, dotnet, output and repeated reference options. All references must select the same source-clr configuration and target; their actual projects determine the batch, including empty public surfaces. An explicit cache-root and snapshot pair reads logical reference paths from that protected generation. Otherwise reference paths select local files. An optional artifacts-path selects the prepared compile output owner. An optional sdk-snapshot supplies one previously resolved SDK graph with matching properties and selected owners. The caller owns its stable execution boundary and closing input checks; a supplied graph is not independent freshness evidence. Repeated project options restrict comparison to declared owners; an absent owner is an error. Snapshot provenance is reported separately from source compatibility.

**Parameter `cancellationToken`:** Cancels capture or comparison before replacing the report.

**Returns:** Zero when the selected reference facts match, or one with explicit differences. This bounded result does not certify authored prose, script projections, examples, other targets or publication provenance.

**Exception `T:System.ArgumentException`:** Options, reference selection or evaluated context are missing, duplicated or unsupported.

**Exception `T:System.IO.InvalidDataException`:** Required discovery is empty, identities repeat, reference inputs change, or source compilation is unavailable.

**Exception `T:System.IO.IOException`:** A selected input is absent, escapes its declared source owner, or report publication fails.

**Exception `T:System.OperationCanceledException`:** The caller cancels before a complete comparison report is published.
