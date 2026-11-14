---
uid: api.5b9d96bac3f36a7aab9f0cf9cf14aa074dbd68716ea0d0ea6d52cdb3cc250d35
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifactsAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: a4491ad269b59b1597d7a445a8e8e527b7f6f6d9444828438af220013136c6c6
title: "AssetPipeline.ExportRuntimeArtifactsAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Exports a runtime-only artifact snapshot on a worker without loading artifact files into memory.

## Remarks

Keeps generation admission and serialization pinned until the worker completes, fails or cancels. A pending or faulted generation cannot start a new export.

**Parameter `destinationContentRoot`:** The empty destination that receives the runtime asset database.

**Parameter `cancellationToken`:** The token checked while individual artifact files are copied.

**Returns:** A task that completes with counts and source identities for the captured runtime snapshot.

**Exception `T:System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, transitive authoring inputs have failed or become stale, or the asset service is not available.

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before export completes.
