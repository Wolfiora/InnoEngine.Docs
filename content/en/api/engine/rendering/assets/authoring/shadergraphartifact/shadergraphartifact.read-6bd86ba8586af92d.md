---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6bd86ba8586af92d7cff6208509581de57befb51f118735ba6cfdd261ee04109
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Read(Inno.Rendering.Assets.ShaderAsset,Inno.Assets.IAssetArtifactLookup)
title: ShaderGraphArtifact.Read
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: 43be4e21a2c1183780644745046cce7ff78e6e8478b4e802c7a886ecaaa51e58
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shader`:** Stable Shader asset identity.

**Parameter `artifacts`:** Current authoring artifact lookup.

## Returns

Detached graph bytes; absent authoring data is an error, never a runtime fallback.
