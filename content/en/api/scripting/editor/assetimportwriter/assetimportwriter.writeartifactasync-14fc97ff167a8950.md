---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14fc97ff167a8950409478b3ca546493321049638fb60532a4619079bc18e944
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportWriter`1.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)
title: AssetImportWriter<TAsset>.WriteArtifactAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: 8002372369eb22f14819c45b9fa0b29fb6e70f4f0ce16a557b9985d57b6e71e4
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

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

## Returns

A completed operation after the output has been staged.
