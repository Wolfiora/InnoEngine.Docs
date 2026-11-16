---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d207ec4c14e6bb2372d46a58506213468060cdf6c6369c53b8b96e110c4e25b3
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeHierarchy(Inno.Scene.GameObject,System.Action{Inno.Editor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{Inno.Scene.GameObject})
title: SceneEdits.ChangeHierarchy
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 8a8a236db9dc6c721891737726a633d861dfeae1fb5275c8cd0a2a5816be23d1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The primary GameObject being moved.

**Parameter `mutation`:** The hierarchy mutation to execute through the world-owned operation context.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `relatedObjects`:** Additional objects whose placements the mutation may change, such as promoted children.

## Returns

`true` when at least one placement changed.
