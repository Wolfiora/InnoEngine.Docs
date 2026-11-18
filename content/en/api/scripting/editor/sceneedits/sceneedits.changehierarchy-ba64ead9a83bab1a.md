---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ba64ead9a83bab1a9afe3ffc9b33f0e7254476d54082848f6673090a4c40b055
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeHierarchy(InnoEngine.Scene.GameObject,System.Action{InnoEditor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Scene.GameObject})
title: SceneEdits.ChangeHierarchy
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: db8a35e2959e0c6632d422d2549bdf488f98eeec408821be2d4f6b65d8044b46
apiScope: Editor
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
