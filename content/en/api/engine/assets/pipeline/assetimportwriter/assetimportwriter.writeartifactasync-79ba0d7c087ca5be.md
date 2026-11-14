---
uid: api.79ba0d7c087ca5befad29c59bdf82f4fb692cd8187a8e0b292db9cc7c324f240
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportWriter\u00601.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)"
source: xml
reviewed: d127ea9c5ecbecb98e5bd81705cb9c20d158eb19b401288f8058e1239ad51cb1
title: "AssetImportWriter\u003CTAsset\u003E.WriteArtifactAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Writes one immutable named artifact output.

## Parameters

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

## Returns

A completed operation after the output has been staged.
