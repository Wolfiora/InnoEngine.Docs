---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f02b32172b74b32b37d07c8e69349908daac928b7a5a9b075b441cdab69e049
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: dc90bf2c4fae87891bd3789bef1729c98fb2d60865c152e4053ce4860215d06b
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

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

## Returns

A completed operation after the output has been staged.
