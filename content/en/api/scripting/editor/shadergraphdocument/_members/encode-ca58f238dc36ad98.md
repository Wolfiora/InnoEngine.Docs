---
uid: api.ca58f238dc36ad98d598fe6a5b92cd64d52b2778d67c020404964a687bbef549
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Encode\u0060\u00601(\u0060\u00600,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 247b7918dc6dbf5430b40b05a7c1328c164b10fa703475ddd342ecf59ef50b39
title: "Encode"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Encodes a node or document value through the common native serialization channel.

**Type parameter `T`:** Native serializable value type.

**Parameter `value`:** Detached authoring value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** Neutral bytes suitable for graph persistence and history.
