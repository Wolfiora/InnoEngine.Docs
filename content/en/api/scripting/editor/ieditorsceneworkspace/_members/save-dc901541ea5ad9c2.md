---
uid: api.dc901541ea5ad9c279c84ed458d867dbf48288937b62928f6c806a70f31d0cf3
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Save(InnoEngine.Scene.GameScene,System.String)"
source: xml
reviewed: 447cdd700a8b6b8f6686bf857a94da22ea5673a2b1817b7e7837a45fd22b59c3
title: "Save"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Saves a scene to its existing path or into a fallback directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The fallback asset directory for an unsaved scene.

**Returns:** The saved source-relative path.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
