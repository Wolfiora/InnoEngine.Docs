---
uid: api.ca58f238dc36ad98d598fe6a5b92cd64d52b2778d67c020404964a687bbef549
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Encode\u0060\u00601(\u0060\u00600,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 21ebdb76ee682a24858adf4bb0777d6298f9bfc7d52a4c436b8d0c3e21302780
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
