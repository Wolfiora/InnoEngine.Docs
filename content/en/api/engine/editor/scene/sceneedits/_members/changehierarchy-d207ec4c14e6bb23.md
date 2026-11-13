---
uid: api.d207ec4c14e6bb2372d46a58506213468060cdf6c6369c53b8b96e110c4e25b3
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeHierarchy(Inno.Scene.GameObject,System.Action{Inno.Editor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{Inno.Scene.GameObject})"
source: xml
reviewed: b11dcc8d4b297de27deba67af4b67a26a463e850354541080d982ab0bf547bc4
title: "ChangeHierarchy"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Applies a hierarchy mutation and records only the affected parent and sibling-index tuples.

**Parameter `gameObject`:** The primary GameObject being moved.

**Parameter `mutation`:** The hierarchy mutation to execute through the world-owned operation context.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `relatedObjects`:** Additional objects whose placements the mutation may change, such as promoted children.

**Returns:** `true` when at least one placement changed.
