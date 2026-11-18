---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f0f4f94cc9f906964a6cefdfa40674b5689cc1f840d13b978f88898f317d799
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject},Inno.Scene.GameScene,Inno.Scene.GameObject,System.Int32)
title: SceneEdits.MoveGameObjects
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 589e77c824f7eacdddea09fa92a8885f1a370b8c32fb52214bb8d667ec2a54ad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

## Exceptions

**Exception `T:System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Exception `T:System.ArgumentException`:** The parent belongs to a different scene.
