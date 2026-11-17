---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f1a07936de483e4b2d87e801a8a96550ae8acdda5995c6dfcdfa1445f2bf4188
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SavePrefab(InnoEngine.Scene.GameObject,System.String)
title: IEditorSceneWorkspace.SavePrefab
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 0daf38dbed4bf0b6e18fd29796475498195584a039da80b45659e568f9172d12
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.
