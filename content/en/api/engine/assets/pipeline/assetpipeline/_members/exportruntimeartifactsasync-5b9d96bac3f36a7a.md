---
uid: api.5b9d96bac3f36a7aab9f0cf9cf14aa074dbd68716ea0d0ea6d52cdb3cc250d35
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifactsAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: d423438d919841ce19a86df5105dcaa8ede9be0639894761e6c7a7de9bfd4449
title: "ExportRuntimeArtifactsAsync"
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
