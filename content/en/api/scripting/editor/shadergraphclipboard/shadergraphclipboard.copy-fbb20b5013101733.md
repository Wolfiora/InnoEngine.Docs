---
uid: api.fbb20b5013101733cc1073d319abf3edc0bff70f2375f28e403ab8b264416b57
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Copy(InnoEngine.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: a238dd2581fe4ae5d093217642e0090ee2e6d11fe34132a11682bfcb905a9a2d
title: "ShaderGraphClipboard.Copy"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Captures selected nodes and the owned contents of selected stage outputs.

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** Detached fragment retaining source declarations for a later paste.
