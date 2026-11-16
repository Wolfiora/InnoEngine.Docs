---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.17c9158233ee6e1cfd18a8a639558c80e9ee2f6fb0c39fb4aaadf09ea047a034
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.Save(Inno.Scene.GameScene,System.String)
title: IEditorSceneWorkspace.Save
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 799a6320bae4ffbd4a01d2d30d88021080d4a720d1f378dc23bbe5dd59eda510
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
