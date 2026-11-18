---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fddafcb8b150bec23ff6e0f11c5763d8ab81c864862a069b59e78c1b93f9ff2a
symbol: engine:Inno.Scene:M:Inno.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: SceneAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: ff84b2dc039f3b15ea6c3a9042296f13e51d0daf13b62b5888418739879a497b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

## Returns

A scene asset ready for an asset import writer to commit.
