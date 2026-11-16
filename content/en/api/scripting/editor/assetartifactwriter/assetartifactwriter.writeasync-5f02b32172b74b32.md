---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5f02b32172b74b32b37d07c8e69349908daac928b7a5a9b075b441cdab69e049
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: ac7f81d1b48699377f9059f6e8c720d74b49dfd4a760a3ccba518e9a2872738d
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
