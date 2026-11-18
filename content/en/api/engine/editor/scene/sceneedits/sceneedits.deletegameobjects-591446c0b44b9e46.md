---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.591446c0b44b9e4689eefb45b81cad4e5d99801158b8577ccfa8e90d08466f39
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject})
title: SceneEdits.DeleteGameObjects
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: f52c77ef88cc101994edbdd8a7b807251e2274c3a065a4f92fdaf9679e0ca0da
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Live objects to delete; every owner is validated before the first mutation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.
