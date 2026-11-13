---
uid: api.3f236c6afbccbf31a28c4cd90efb82f7e056a97658707a5a0213da3052bada12
symbol: "scripting:Inno.Editor.Panel.Inspector:M:InnoEditor.Inspection.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{InnoEngine.Scene.EngineObject})"
source: xml
reviewed: 345a977b1850115cf8f0ba53455679aea233475a7dfd19f9d4b92e7fcb155150
title: "Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: editor-script
apiScope: Editor
---

Creates a drop target that validates and assigns an engine object to a serialized property.

**Parameter `expectedType`:** The engine object type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted object to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
