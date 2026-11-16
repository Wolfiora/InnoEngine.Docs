---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f3badda2763a423abda80ade6eb417dbfe58e7cd19734f77da93b88f6289d605
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject})
title: SceneEdits.DeleteGameObjects
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 359c180f7613a0a4e00ec91f5c1596dffaf8c1c9edb66173d76380fefdf0f1e5
apiScope: Editor
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
