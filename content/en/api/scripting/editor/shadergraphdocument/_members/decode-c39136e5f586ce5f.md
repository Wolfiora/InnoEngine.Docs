---
uid: api.c39136e5f586ce5f09c212513f0acc7434a4319d441139d15dc5063679bcb738
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Decode\u0060\u00601(InnoEngine.Graphs.GraphSerializedValue,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 941ef00906a67fde7f33bb8d0a436876df7c9fe6359a85b741d9ddb59abbe4cd
title: "Decode"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Decodes a graph value against the current owner generation.

**Type parameter `T`:** Expected native serializable type.

**Parameter `value`:** Neutral graph value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached current-generation value.
