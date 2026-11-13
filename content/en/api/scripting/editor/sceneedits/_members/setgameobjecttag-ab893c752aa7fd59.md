---
uid: api.ab893c752aa7fd59b953c221baa27b099a2f6c25f8ca9b7160b94a060c6bf66c
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectTag(InnoEngine.Scene.GameObject,System.String,System.String)"
source: xml
reviewed: 203b30970ae3bbd87127f4d57a4df598680c526a75c7db2a07ea54278eca9798
title: "SetGameObjectTag"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Changes the tag of a live GameObject and records the two ordinal tag strings.

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.
