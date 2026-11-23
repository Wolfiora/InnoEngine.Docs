---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5dcbfe8f79d1348b4a6cf7195c803e818822b0b85d260772dac9df1ae0c7d73c
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportWriter`1.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},InnoEditor.Assets.AssetDeploymentScope,System.Threading.CancellationToken)
title: AssetImportWriter<TAsset>.WriteArtifactAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: 604b2d2e74452702b7f3ad2b1df449c96e1a2be961df5fef053ff7f00a64c542
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Parameter `cancellationToken`:** Cancellation for the write operation.

## Returns

A completed operation after the output has been staged.
