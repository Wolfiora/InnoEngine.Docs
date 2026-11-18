---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.15f3c4717b8160b24202da9470e0ff1654964513b3de7ae3ab0e4f1ba8653f16
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.GameScene.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.Transform)
title: GameScene.InstantiatePrefab
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: 8a5bfc3c2e75c27ce03fac631d437e83d267a5ecaaa79317265143a8719baeb4
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

## Returns

The newly instantiated prefab root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The prefab is null.

**Exception `T:System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.
