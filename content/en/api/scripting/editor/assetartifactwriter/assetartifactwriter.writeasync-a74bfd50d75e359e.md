---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a74bfd50d75e359e619399b1104193a701f464a9895a9560a8274935bba343b8
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},InnoEditor.Assets.AssetDeploymentScope,System.Threading.CancellationToken)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: fb01bc96eef97c96b962b5044c8a984032b50113ce52cfde98fa1dc08397ace9
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

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Parameter `cancellationToken`:** Cancellation for the write operation.

## Returns

A completed operation after the output has been staged.
