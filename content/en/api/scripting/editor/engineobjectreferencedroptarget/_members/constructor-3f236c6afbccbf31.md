---
uid: api.3f236c6afbccbf31a28c4cd90efb82f7e056a97658707a5a0213da3052bada12
symbol: "scripting:Inno.Editor.Panel.Inspector:M:InnoEditor.Inspection.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{InnoEngine.Scene.EngineObject})"
source: xml
reviewed: 14bcd0f2dbd364bdfc84f0640665b18df5b8d18fd778f557a5e66c0e028e7d4e
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
