---
uid: api.0ec5bc9d81c249a539dbdc946f6ce501003365207b0564831e7924f77bfc7f73
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.Encode\u0060\u00601(\u0060\u00600,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: cbc2d0e6bed65ffbb3d68effd2e95b60f9f48695a3ac69188cd410f7fb52ff7e
title: "Encode"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Encodes a node or document value through the common native serialization channel.

**Type parameter `T`:** Native serializable value type.

**Parameter `value`:** Detached authoring value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** Neutral bytes suitable for graph persistence and history.
