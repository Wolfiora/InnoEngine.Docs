---
uid: api.a200cd211974d2ae814a326176da4c26e71675b72c98b22fefa9192a9870b936
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String)"
source: xml
reviewed: a8a0c36e8552f8a3506c8a04db9f4085d60c170716d1397ef75701cda8b01d85
title: "HaveSamePropertyValues"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Compares common serialized property values using the complete owner serialization context.

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

**Returns:** True when every encoded value matches, including an empty selection.

**Exception `T:System.InvalidOperationException`:** A selected object does not expose the requested property.
