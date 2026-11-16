---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fddafcb8b150bec23ff6e0f11c5763d8ab81c864862a069b59e78c1b93f9ff2a
symbol: engine:Inno.Scene:M:Inno.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: SceneAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: b0fce1202ee86dc9444da28614c3f5cc41b1ee1e6f45a48171c3e46797476bde
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
