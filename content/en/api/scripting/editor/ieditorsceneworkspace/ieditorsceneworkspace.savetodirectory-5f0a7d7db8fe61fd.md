---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f0a7d7db8fe61fde50f9ad6075d87223d6a8b6256e755b2e1aa6ce4d11c8770
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SaveToDirectory(InnoEngine.Scene.GameScene,System.String)
title: IEditorSceneWorkspace.SaveToDirectory
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 070c175f167d12e83984d02253fa1346ca5f831a7d2523cec8383149a19f69d9
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The target asset directory.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
