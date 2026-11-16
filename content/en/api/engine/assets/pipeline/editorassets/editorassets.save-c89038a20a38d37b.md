---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c89038a20a38d37bf2a489409b7bb964bef88404a49306f469f2588379cdf247
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject)
title: EditorAssets.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: a7dc4a0d3010d2bbf84ef605ce4d84020f1f174f7cf3ac450946d9947da3ff64
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

## Returns

`true` when the source was committed and imported successfully.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.
