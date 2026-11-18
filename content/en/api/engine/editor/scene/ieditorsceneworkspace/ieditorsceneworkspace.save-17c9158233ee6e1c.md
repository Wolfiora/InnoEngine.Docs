---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.17c9158233ee6e1cfd18a8a639558c80e9ee2f6fb0c39fb4aaadf09ea047a034
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.Save(Inno.Scene.GameScene,System.String)
title: IEditorSceneWorkspace.Save
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 23e3e63a23de8227bd811b493a28b27a4eabab0006f846c6509eddc887f14906
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The fallback asset directory for an unsaved scene.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
