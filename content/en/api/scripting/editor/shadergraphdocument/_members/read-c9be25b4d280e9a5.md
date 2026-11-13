---
uid: api.c9be25b4d280e9a56ef6884119c08eb2b87dc0536632791098c7da768d41cc8d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Read\u0060\u00601(InnoEngine.Graphs.GraphNodeRecord,System.String,\u0060\u00600,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 9adc7e469444d986407da705bd4a8aa55c10808515ec8ddd19d0a13e123cc6d3
title: "Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads a named node value; absent values use the declared default, corrupt values never do.

**Type parameter `T`:** Expected native serializable type.

**Parameter `node`:** Neutral node record.

**Parameter `key`:** Stable property key.

**Parameter `defaultValue`:** Value used only when the property is absent.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** The decoded value or explicit absent-property default.
