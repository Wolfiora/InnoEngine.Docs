---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f43900209ef68ecbcb552aebe1e299f130ea44faaec0d19359f953dd59077cf9
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetCreationTemplate.Encode(Inno.Editor.Assets.AssetCreationContext,Inno.Assets.AssetObject)
title: AssetCreationTemplate.Encode
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 654bed0d111c63e7d2b4ae82d785704c20c980ddf4edac49e1062115ed2d9051
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Creation services scoped to the current Asset source pipeline.

**Parameter `asset`:** The exact value returned by `M:Inno.Editor.Assets.AssetCreationTemplate.Create`.

## Returns

Complete source bytes ready for an atomic File Browser create operation.

## Remarks

The default implementation uses native structured Asset serialization. Templates paired with a textual or custom binary importer can override this method without changing the File Browser or registering a second creation protocol.
