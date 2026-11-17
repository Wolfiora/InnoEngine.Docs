---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.591446c0b44b9e4689eefb45b81cad4e5d99801158b8577ccfa8e90d08466f39
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject})
title: SceneEdits.DeleteGameObjects
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 90d37a683c657fd66418612b3970dfc10e1c728c9b9bc9af36c0a669ea86e930
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
