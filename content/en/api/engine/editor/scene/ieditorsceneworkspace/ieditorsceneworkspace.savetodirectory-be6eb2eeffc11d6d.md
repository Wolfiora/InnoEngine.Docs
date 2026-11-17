---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.be6eb2eeffc11d6d0d5399bb06899b3888670cb052624a3a74923cc38e9e9a11
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SaveToDirectory(Inno.Scene.GameScene,System.String)
title: IEditorSceneWorkspace.SaveToDirectory
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: db9fe1bcdf420cf0d17130a925519fbf3f30d0c41bc0cf0a649190ae6ab65315
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
