---
uid: api.8525b37d5873097350cde73db7c7cd4171c02c6530679818631ddac02f7deb55
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.AddComponent(InnoEngine.Scene.GameObject,System.Type,System.String)"
source: xml
reviewed: b00edc884fdae9fea374e8ab3d6075e54816d58427fe7dadab03bb5079a6a140
title: "SceneEdits.AddComponent"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Adds one component and records its identity, stable type, index, and persistent properties.

**Parameter `owner`:** The live GameObject receiving the component.

**Parameter `componentType`:** The concrete component type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly attached component.
