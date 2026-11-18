---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c89038a20a38d37bf2a489409b7bb964bef88404a49306f469f2588379cdf247
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject)
title: EditorAssets.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: e841045b28c9b5222b5a9c3008b28be1189749680bf564aa1c83ce9521842a1f
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
