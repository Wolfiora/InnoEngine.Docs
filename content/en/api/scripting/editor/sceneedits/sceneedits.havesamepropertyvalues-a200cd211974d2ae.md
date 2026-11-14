---
uid: api.a200cd211974d2ae814a326176da4c26e71675b72c98b22fefa9192a9870b936
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String)"
source: xml
reviewed: 7672d14ca469b914dcd1d939eb96a931b3c57b3cea32a34213e2d94c56900673
title: "SceneEdits.HaveSamePropertyValues"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Compares common serialized property values using the complete owner serialization context.

## Parameters

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

## Returns

True when every encoded value matches, including an empty selection.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A selected object does not expose the requested property.
