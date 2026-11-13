---
uid: api.be6eb2eeffc11d6d0d5399bb06899b3888670cb052624a3a74923cc38e9e9a11
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SaveToDirectory(Inno.Scene.GameScene,System.String)"
source: xml
reviewed: 855b867d8c8681a9b7ec8065e76c77cbe7800bd5cb476dc28d0aeb6a2a4431bb
title: "SaveToDirectory"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Saves a scene into the requested asset directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
