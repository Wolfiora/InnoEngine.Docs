---
uid: api.977335a569a8e4a6baa4ef880afe48676e0b47283a74974b2c1fa4fd40842783
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetBuildProcessor\u00601.BuildAsync(Inno.Assets.Pipeline.AssetBuildContext{\u00600},Inno.Assets.Pipeline.AssetArtifactWriter,System.Threading.CancellationToken)"
source: xml
reviewed: ba8dda7478f2920567013ce8f66c489233f5c439321067360673cac270134b7a
title: "BuildAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Builds immutable outputs from a consistent asset snapshot.

**Parameter `context`:** The build context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the build.

**Returns:** An operation that completes when all outputs are staged.
