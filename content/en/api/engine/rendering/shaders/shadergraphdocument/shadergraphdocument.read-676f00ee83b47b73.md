---
uid: api.676f00ee83b47b739c12ccf60aa22c26aaea5cc87a0106c0acdce97e5ca59aeb
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.Read\u0060\u00601(Inno.Core.Graphs.GraphNodeRecord,System.String,\u0060\u00600,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 943ea8f9f3af4b893f7d9cd59c6fa06534b55df72e452ad23c76674d4e3cd8c7
title: "ShaderGraphDocument.Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Reads a named node value; absent values use the declared default, corrupt values never do.

**Type parameter `T`:** Expected native serializable type.

**Parameter `node`:** Neutral node record.

**Parameter `key`:** Stable property key.

**Parameter `defaultValue`:** Value used only when the property is absent.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** The decoded value or explicit absent-property default.
